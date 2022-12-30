import './style.scss'
import Header from '../header'
import Footer from '../footer'
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from 'react'
import useLocalStorage from './../hooks/useLocalStorage';
import useGetData from './../hooks/useGetData';
import { Link } from 'react-router-dom';

const Body = () => {

    const carrousel = useRef();
    const dados = [1, 2, 3, 4, 5, 6]
    const [width, setWidth] = useState(0)
    const [setValue] = useLocalStorage('itens', '')
    const [Novos] = useGetData(1)
    const [Ofertas] = useGetData(2)
    const [Destaques] = useGetData(3)

    useEffect(() => {
        setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
    }, [])

    return (
        <>
            <Header />
            <div className='body-container'>
                <img className='promo-top-1' src={require('../../image/promo3.png')} alt="" />
                <motion.div ref={carrousel} whileTap={{ cursor: "grabbing" }} className="container" >
                    <div className='titulo-body'>Novos</div>
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className='container-card'>
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
                    </motion.div>
                </motion.div>
                <div className='background-line'></div>
                <motion.div ref={carrousel} whileTap={{ cursor: "grabbing" }} className="container" >
                    <div className='titulo-body'>Ofertas</div>
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className='container-card'>
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
                    </motion.div>
                </motion.div>
                <div className='card-promo'>
                    <img src={require('../../image/promo1.png')} alt="" />
                    <img src={require('../../image/promo2.png')} alt="" />
                </div>
                <motion.div ref={carrousel} whileTap={{ cursor: "grabbing" }} className="container" >
                    <div className='titulo-body'>Destaques Do Mês</div>
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className='container-card'>
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
                    </motion.div>
                </motion.div>

            </div>
            <Footer />
        </>
    )
}

export default Body;