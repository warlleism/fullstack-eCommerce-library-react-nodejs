import './style.scss'
import Header from '../header'
import Footer from '../footer'
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from 'react'
import useLocalStorage from './../hooks/useLocalStorage';

const Body = () => {

    const carrousel = useRef();
    const dados = [1, 2, 3, 4, 5, 6]
    const [width, setWidth] = useState(0)
    const [setValue] = useLocalStorage('itens', [{ nome: 'harry potter', preco: '60,90' }])
    

    useEffect(() => {
        setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
    }, [])

    return (
        <>
            <Header/>
            <div className='body-container'>
                <img className='promo-top-1' src={require('../../image/promo3.png')} alt="" />
                <motion.div ref={carrousel} whileTap={{ cursor: "grabbing" }} className="container" >
                    <div className='titulo-body'>Novos</div>
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className='container-card'>
                        {
                            dados.map(_ => {
                                return (
                                    <>
                                        <div className='card'>
                                            <img src={require('../../image/hq.png')} alt="" />
                                            <div className='board-line'>
                                                <div className='line-left line-name'></div>
                                                <div className='nome-book'>Liga da Justiça: renascimento</div>
                                                <div className='line-rigth line-name'></div>
                                            </div>
                                            <div className='preco'>R$ 49,50</div>
                                            <div className='botao-saiba-mais' onClick={() => { setValue([{ nome: 'La casa de papel', preco: '32,90' }]) }}>Saiba mais</div>
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
                            dados.map(_ => {
                                return (
                                    <>
                                        <div className='card'>
                                            <img src={require('../../image/hq.png')} alt="" />
                                            <div className='board-line'>
                                                <div className='line-left line-name'></div>
                                                <div className='nome-book'>Liga da Justiça: renascimento</div>
                                                <div className='line-rigth line-name'></div>
                                            </div>
                                            <div className='preco'>R$ 49,50</div>
                                            <div className='botao-saiba-mais'>Saiba mais</div>
                                            <div className='oferta'>50%</div>
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
                            dados.map(_ => {
                                return (
                                    <>
                                        <div className='card'>
                                            <img src={require('../../image/hq.png')} alt="" />
                                            <div className='board-line'>
                                                <div className='line-left line-name'></div>
                                                <div className='nome-book'>Liga da Justiça: renascimento</div>
                                                <div className='line-rigth line-name'></div>
                                            </div>
                                            <div className='preco'>R$ 49,50</div>
                                            <div className='botao-saiba-mais'>Saiba mais</div>
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