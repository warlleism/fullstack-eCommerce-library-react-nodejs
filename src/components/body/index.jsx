import './style.scss'
import Header from '../header'
import Footer from '../footer'
import React from 'react'
import useLocalStorage from './../hooks/useLocalStorage';
import useGetData from './../hooks/useGetData';
import { Link } from 'react-router-dom';

const Body = () => {

    const [setValue] = useLocalStorage('itens', '')
    const [Novos] = useGetData(1)
    const [Ofertas] = useGetData(2)
    const [Destaques] = useGetData(3)

    return (
        <>
            <Header pagina={'Bem Vindo!'} />
            <div className='body-container'>
                <img className='promo-top-1' src={require('../../image/promo3.png')} alt="" />
                <div className="container" >
                    <div className='titulo-body'>Novos</div>
                    <div className='container-card'>
                        {
                            Novos?.map(e => {
                                return (
                                    <>
                                        <div className='card'>
                                            <img src={e?.imagem} alt="" />
                                            <div className='board-line'>
                                                <div className='line-left line-name'></div>
                                                <div className='nome-book'>{e?.nome}</div>
                                                <div className='line-rigth line-name'></div>
                                            </div>
                                            <div className='preco'>{e?.preco}</div>
                                            <Link to={'/detalhar'} className='botao-saiba-mais' onClick={() => { setValue(e) }}>Saiba mais</Link>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='background-line'></div>
                <div className="container" >
                    <div className='titulo-body'>Ofertas</div>
                    <div className='container-card'>
                        {
                            Ofertas?.map(e => {
                                return (
                                    <>
                                        <div className='card'>
                                            <img src={e?.imagem} alt="" />
                                            <div className='board-line'>
                                                <div className='line-left line-name'></div>
                                                <div className='nome-book'>{e?.nome}</div>
                                                <div className='line-rigth line-name'></div>
                                            </div>
                                            <div className='preco'>{e?.preco}</div>
                                            <Link to={'/detalhar'} className='botao-saiba-mais' onClick={() => { setValue(e) }}>Saiba mais</Link>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='card-promo'>
                    <img src={require('../../image/promo1.png')} alt="" />
                    <img src={require('../../image/promo2.png')} alt="" />
                </div>
                <div className="container" >
                    <div className='titulo-body'>Destaques Do Mês</div>
                    <div className='container-card'>
                        {
                            Destaques?.map(e => {
                                return (
                                    <>
                                        <div className='card'>
                                            <img src={e?.imagem} alt="" />
                                            <div className='board-line'>
                                                <div className='line-left line-name'></div>
                                                <div className='nome-book'>{e?.nome}</div>
                                                <div className='line-rigth line-name'></div>
                                            </div>
                                            <div className='preco'>{e?.preco}</div>
                                            <Link to={'/detalhar'} className='botao-saiba-mais' onClick={() => { setValue(e) }}>Saiba mais</Link>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Body;