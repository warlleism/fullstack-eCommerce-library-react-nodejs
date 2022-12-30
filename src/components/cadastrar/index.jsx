import ConvertBase64 from "../hooks/useBase64";
import React, { useState } from 'react'
import Header from "../header/index"
import Swal from 'sweetalert2'
import './style.scss'

const Form = () => {

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await ConvertBase64(file);
        setFormulario({ ...formulario, imagem: base64 })
    }

    const formDefault = {
        nome: '',
        preco: '',
        imagem: '',
        categoria: '',
        descricao: '',
        tipo: '',
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
            <Header pagina={"NOVA PUBLICAÇÃO"} arrow={true} />
            <div className='form-container'>
                <div className='formulario'>
                    <div className='container-nome-preco'>
                        <div className='campo-input'>
                            <span>Nome</span>
                            <input type="text" onChange={(e) => setFormulario({ ...formulario, nome: e.target.value })} />
                        </div>
                        <div className='campo-input'>
                            <span>Preço</span>
                            <input id='valor' onBlur={() => setDefaultValor()} onChange={(e) => setFormulario({ ...formulario, preco: BRLConvert.format(e.target.value) })} />
                        </div>
                    </div>
                    <div className='campo-input'>
                        <span>Categoria</span>
                        <select name="" id="" onChange={(e) => setFormulario({ ...formulario, categoria: e.target.value })}>
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
                        <textarea onChange={(e) => setFormulario({ ...formulario, descricao: e.target.value })}></textarea>
                    </div>
                    <div className='campo-input'>
                        <input type="file" className='file-input' onChange={(e) => { uploadImage(e) }} />
                        <div className='container-input-file' style={{ background: formulario.imagem != '' ? '#161616' : false }}>
                            {
                                formulario.imagem == ''
                                    ?
                                    <span class="material-symbols-outlined cloud-input-file" style={{ color: formulario.imagem != '' ? '#fff' : false }}>
                                        backup
                                    </span>
                                    :
                                    <span class="material-symbols-outlined cloud-input-file" style={{ color: formulario.imagem != '' ? '#fff' : false }}>
                                        cloud_done
                                    </span>
                            }
                            <div style={{ color: formulario.imagem != '' ? '#fff' : '#161616' }}> {formulario.imagem == '' ? <>Escolha um <strong>imagem</strong></> : <>imagem Selecionado.</>} </div>
                        </div>
                    </div>
                    <div className='buttom' onClick={() => EnviarDados()}>Confirmar</div>
                </div>
            </div>
        </>
    )
}

export default Form;