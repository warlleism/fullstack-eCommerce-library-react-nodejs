import React from 'react'
import Header from '../header'
import './style.scss'

const Body = () => {

    const dados = [1, 2, 3]
    return (
        <>
            <Header pagina={"INÍCIO"} />
            <div className='body-container'>

                <div className='container-card'>
                    <div className='titulo-body'>NOVOS</div>
                    {
                        dados.map(_ => {
                            return (
                                <>
                                    <div className='card'>
                                        <img src={require('../../image/hq.png')} alt="" />
                                        <div className='board-line'>
                                            <div className='line-left line-name'></div>
                                            <div className='nome-book'>Liga da Justiça: renascimentodddddddddddddddddddddddddddddddddddddd</div>
                                            <div className='line-rigth line-name'></div>
                                        </div>
                                        <div className='preco'>R$ 49,50</div>
                                        <div className='botao-saiba-mais'>Saiba mais</div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='background-line'></div>
                <div className='container-card'>
                    <div className='titulo-body'>OFERTAS</div>
                    {
                        dados.map(_ => {
                            return (
                                <div className='card'>
                                    <img src={require('../../image/hq.png')} alt="" />
                                    <div className='board-line'>
                                        <div className='line-left line-name'></div>
                                        <div className='nome-book'>Liga da Justiça: renascimentodddddddddddddddddddddddddddddddddddddd</div>
                                        <div className='line-rigth line-name'></div>
                                    </div>
                                    <div className='preco'>R$ 49,50</div>
                                    <div className='botao-saiba-mais'>Saiba mais</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='background-line'></div>
                <div className='container-card'>
                    <div className='titulo-body'>DESTAQUES DO MÊS</div>
                    {
                        dados.map(_ => {
                            return (
                                <div className='card'>
                                    <img src={require('../../image/hq.png')} alt="" />
                                    <div className='board-line'>
                                        <div className='line-left line-name'></div>
                                        <div className='nome-book'>Liga da Justiça: renascimentodddddddddddddddddddddddddddddddddddddd</div>
                                        <div className='line-rigth line-name'></div>
                                    </div>
                                    <div className='preco'>R$ 49,50</div>
                                    <div className='botao-saiba-mais'>Saiba mais</div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Body;