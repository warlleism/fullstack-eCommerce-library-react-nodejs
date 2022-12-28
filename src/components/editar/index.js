import React from 'react'
import './style.scss'
import Header from "../header"

const Editar = () => {
    const dados = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <Header pagina={"EDITAR"} />
            <div className='container-editar'>
                <div className='container-card-editar'>
                    {
                        dados.map(_ => {
                            return (
                                <>
                                    <div className='card-editar'>
                                        <img src={require('../../image/hq.png')} alt="" />
                                        <div className='board-line-editar'>
                                            <div className='line-left line-name-editar'></div>
                                            <div className='nome-book-editar'>Liga da Justiça: renascimento</div>
                                            <div className='line-rigth line-name-editar'></div>
                                        </div>
                                        <div className='preco-editar'>R$ 49,50</div>
                                        <div className='botao-saiba-mais-editar'>Saiba mais</div>
                                        <div className='editar-editar'>
                                            <span class="material-symbols-outlined">
                                                edit
                                            </span></div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Editar;