import React, { useState } from 'react'
import Header from "../header/index"
import './style.scss'

const Form = () => {

    const [confirmar, setConfirmar] = useState(true)

    const [formulario, setFormulario] = useState([{
        nome: '',
        preco: '',
        arquivo: '',
        categoria: '',
        descricao: ''
    }])

    const BRLConvert = new Intl.NumberFormat('BRL', {
        style: 'currency',
        currency: 'BRL',
    });

    const filterArray = () => {

        if (
            formulario?.nome?.length == undefined ||
            formulario?.preco?.length == undefined ||
            formulario?.categoria?.length == undefined ||
            formulario?.arquivo?.length == undefined) {
            return
        } else {
            setConfirmar(false)

        }

    }

    return (
        <>
            <Header pagina={"NOVA PUBLICAÇÃO"} arrow={true} />
            <div className='form-container'>
                {
                    confirmar

                        ?
                        <div className='formulario'>
                            <div className='container-nome-preco'>
                                <div className='campo-input'>
                                    <span>Nome</span>
                                    <input type="text" onChange={(e) => setFormulario({ nome: e.target.value })} />
                                </div>
                                <div className='campo-input'>
                                    <span>Preço</span>
                                    <input onChange={(e) => setFormulario({ ...formulario, preco: BRLConvert.format(e.target.value) })} />
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
                                <span>Descrição</span>
                                <textarea onChange={(e) => setFormulario({ ...formulario, descricao: e.target.value })}></textarea>
                            </div>
                            <div className='campo-input'>
                                <input type="file" className='file-input' onChange={(e) => setFormulario({ ...formulario, arquivo: e.target.value })} />
                                <div className='container-input-file'>
                                    <span class="material-symbols-outlined cloud-input-file">
                                        backup
                                    </span>
                                    <div style={{ color: "#FFA114" }}>Escolha um <strong>arquivo</strong></div>
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
                            <div className='buttom' style={{marginTop: 30}}>Publicar</div>
                        </div>
                }

            </div>
        </>
    )
}

export default Form;