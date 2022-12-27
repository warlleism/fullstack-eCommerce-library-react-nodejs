import React from 'react'
import Header from "../header/index"
import './style.scss'

const Form = () => {
    return (
        <>
            <Header pagina={"NOVA PUBLICÃO"} arrow={true} />
            <div className='form-container'>
                <div className='titulo'>Criar publicação</div>

                <div className='formulario'>

                    <div className='container-nome-preco'>

                        <div className='campo-input'>
                            <span>Nome</span>
                            <input type="text" />
                        </div>
                        <div className='campo-input'>
                            <span>Preço</span>
                            <input type="text" />
                        </div>

                    </div>
                    <div className='campo-input'>
                        <span>Descrição</span>
                        <textarea></textarea>
                    </div>
                    <div className='campo-input'>
                        <input type="file" className='file-input' />
                        <div className='container-input-file'>
                            <span class="material-symbols-outlined cloud-input-file">
                                backup
                            </span>
                            <div style={{ color: "#FFA114" }}>Escolha um <strong>arquivo</strong></div>
                        </div>
                    </div>
                    <div className='buttom'>Publicar</div>
                </div>

            </div>
        </>
    )
}

export default Form;