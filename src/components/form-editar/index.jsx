import React, { useEffect, useState } from 'react'
import Header from "../header/index"
import Swal from 'sweetalert2'
import './style.scss'

const FormCadastrar = () => {

    const [confirmar, setConfirmar] = useState(true)

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
            alert('formato inválido! tente apenas números')
            document.getElementById('valor').value = '';
            setFormulario({ ...formulario, preco: '' })
        } else {
            document.getElementById('valor').value = formulario.preco;
        }
    }

    const BRLConvert = new Intl.NumberFormat('BRL', {
        style: 'currency',
        currency: 'BRL',
    });

    const filterArray = () => {
        if (
            formulario?.nome?.length == '' ||
            formulario?.preco?.length == '' ||
            formulario?.categoria?.length == '' ||
            formulario?.arquivo?.length == '') {
            return
        } else {
            setConfirmar(false)
        }
    }

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('itens'))
        setFormulario(
            {
                nome: localData[0].nome,
                preco: localData[0].preco,
                categoria: localData[0].categoria,
                descricao: localData[0].descricao,
                arquivo: localData[0].arquivo
            }
        )
    }, [])

    const OptionsRegister = {
        body: JSON.stringify(formulario),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const EnviarDados = async () => {

        await fetch('http://localhost:3003/register', OptionsRegister)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: "Campo de skill não preenchido",
                    })
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: "Campo de skill não preenchido",
                    })
                }
            })
    }


    return (
        <>
            <Header pagina={"EDITAR PUBLICAÇÃO"} arrow={true} />
            <div className='form-container'>
                {
                    confirmar
                        ?
                        <div className='formulario'>
                            <div className='container-nome-preco'>
                                <div className='campo-input'>
                                    <span>Nome</span>
                                    <input type="text" value={formulario?.nome} onChange={(e) => setFormulario({ ...formulario, nome: e.target.value })} />
                                </div>
                                <div className='campo-input'>
                                    <span>Preço</span>
                                    <input id='valor' value={formulario?.preco} onBlur={() => setDefaultValor()} onChange={(e) => setFormulario({ ...formulario, preco: BRLConvert.format(e.target.value) })} />
                                </div>
                            </div>
                            <div className='campo-input'>
                                <span>Categoria</span>
                                <select name="" id="" value={formulario?.categoria} onChange={(e) => setFormulario({ ...formulario, categoria: e.target.value })}>
                                    <option value="">selecione...</option>
                                    <option value="HQ">HQ</option>
                                    <option value="LIVRO">LIVRO</option>
                                    <option value="MANGÁ">MANGÁ</option>
                                </select>
                            </div>
                            <div className='campo-input'>
                                <span>Tipo</span>
                                <select name="" id="" onChange={(e) => setFormulario({ ...formulario, tipo: e.target.value })}>
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
                                <input type="file" className='file-input' onChange={(e) => setFormulario({ ...formulario, arquivo: e.target.value })} />
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
                            <div className='buttom' onClick={() => filterArray()}>Confirmar</div>
                        </div>
                        :
                        <div className='formulario confirmar-form'>
                            <div className='container-info-confirmar'>
                                <span>Livro</span>
                                <div>{formulario.nome}</div>
                            </div>
                            <div className='container-info-confirmar'>
                                <span>Preço</span>
                                <div>{formulario.preco}</div>
                            </div>
                            <div className='container-info-confirmar'>
                                <span>Categoria</span>
                                <div>{formulario.categoria}</div>
                            </div>
                            <div className='container-info-confirmar'>
                                <span>Descrição</span>
                                <div>{formulario.descricao}</div>
                            </div>
                            <div className='container-info-confirmar'>
                                <span>Arquivo</span>
                                <div>{formulario.arquivo}</div>
                            </div>
                            <div className='buttom' style={{ marginTop: 30 }} onClick={() => EnviarDados()}>Atualizar</div>
                        </div>
                }

            </div>
        </>
    )
}

export default FormCadastrar;