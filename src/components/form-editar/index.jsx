import React, { useEffect, useState } from 'react'
import ConvertBase64 from "../hooks/useBase64";
import Header from "../header/index"
import Swal from 'sweetalert2'
import './style.scss'

const FormCadastrar = () => {

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await ConvertBase64(file);
        setFormulario({ ...formulario, imagem: base64 })
    }


    const formDefault = {
        nome: '',
        preco: '',
        arquivo: '',
        categoria: '',
        descricao: '',
        tipo: ''
    }

    const [formulario, setFormulario] = useState(formDefault)

    const setDefaultValor = () => {
        if (formulario.preco.includes('NaN')) {
            alert(`formato inválido! tente apenas números e  ' . '  ao invés  de  ' , ' `)
            document.getElementById('valor').value = '';
            setFormulario({ ...formulario, preco: '' })
        } else {
            document.getElementById('valor').value = formulario.preco;
        }
    }

    const BRLConvert = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('itens'))
        setFormulario(
            {
                id: localData[0].id,
                nome: localData[0].nome,
                preco: localData[0].preco,
                categoria: localData[0].categoria,
                descricao: localData[0].descricao,
                tipo: localData[0].tipo,
                arquivo: localData[0].arquivo
            }
        )
    }, [])


    const OptionsRegister = {
        body: JSON.stringify(formulario),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const EnviarDados = async () => {

        if (
            formulario?.nome == '' ||
            formulario?.preco == '' ||
            formulario?.categoria == '' ||
            formulario?.descricao == '' ||
            formulario?.arquivo == '' ||
            formulario?.tipo == '') {
            return Swal.fire({
                icon: 'warning',
                title: "Campo não preenchido",
            })
        } else {

            await fetch('http://localhost:3003/update', OptionsRegister)
                .then(res => res.json())
                .then(data => {
                    if (data.status == 200) {
                        Swal.fire({
                            icon: 'success',
                            title: "Atualizado com sucesso",
                        })
                    } else {
                        Swal.fire({
                            icon: 'warning',
                            title: "Campo de não preenchido",
                        })
                    }
                })
        }

    }

    return (
        <>
            {console.log(formulario)}
            <Header pagina={"EDITAR PUBLICAÇÃO"} arrow={true} />
            <div className='form-container'>
                <div className='formulario'>
                    <div className='container-nome-preco'>
                        <div className='campo-input'>
                            <span>Nome</span>
                            <input type="text" value={formulario?.nome} onChange={(e) => setFormulario({ ...formulario, nome: e.target.value })} />
                        </div>
                        <div className='campo-input'>
                            <span>Preço</span>
                            <input id='valor' defaultValue={formulario?.preco} onBlur={() => setDefaultValor()} onFocus={() => document.getElementById('valor').value = ''} onChange={(e) => setFormulario({ ...formulario, preco: BRLConvert.format(e.target.value) })} />
                        </div>
                    </div>
                    <div className='campo-input'>
                        <span>Categoria</span>
                        <select value={formulario?.categoria} onChange={(e) => setFormulario({ ...formulario, categoria: e.target.value })}>
                            <option value="">selecione...</option>
                            <option value="HQ">HQ</option>
                            <option value="LIVRO">LIVRO</option>
                            <option value="MANGÁ">MANGÁ</option>
                        </select>
                    </div>
                    <div className='campo-input'>
                        <span>Tipo</span>
                        <select value={formulario?.tipo} onChange={(e) => setFormulario({ ...formulario, tipo: e.target.value })}>
                            <option value="">selecione...</option>
                            <option value="1">Novo</option>
                            <option value="2">Oferta</option>
                            <option value="3">Destaque do Mês</option>
                        </select>
                    </div>
                    <div className='campo-input'>
                        <span>Descrição</span>
                        <textarea value={formulario?.descricao} onChange={(e) => setFormulario({ ...formulario, descricao: e.target.value })}></textarea>
                    </div>
                    <div className='campo-input'>
                        <input type="file" className='file-input' onChange={(e) => { uploadImage(e) }} />
                        <div className='container-input-file' style={{ background: formulario.arquivo != '' ? '#161616' : false }}>
                            {
                                formulario.arquivo == ''
                                    ?
                                    <span class="material-symbols-outlined cloud-input-file" style={{ color: formulario.arquivo != '' ? '#fff' : false }}>
                                        backup
                                    </span>
                                    :
                                    <span class="material-symbols-outlined cloud-input-file" style={{ color: formulario.arquivo != '' ? '#fff' : false }}>
                                        cloud_done
                                    </span>
                            }
                            <div style={{ color: formulario.arquivo != '' ? '#fff' : '#161616' }}> {formulario.arquivo == '' ? <>Escolha um <strong>arquivo</strong></> : <>Arquivo Selecionado.</>} </div>
                        </div>
                    </div>
                    <div className='buttom' onClick={() => EnviarDados()}>Confirmar</div>
                </div>
            </div>
        </>
    )
}

export default FormCadastrar;