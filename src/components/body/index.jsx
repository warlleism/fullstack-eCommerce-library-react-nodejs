import './style.scss'
import Header from '../header'
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from 'react'

const Body = () => {

    const carrousel = useRef();
    const dados = [1, 2, 3, 4, 5, 6]
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
    }, [])

    return (
        <>
            <Header pagina={"INÍCIO"} />
            <div className='body-container'>
                <img src={require('../../image/ame.webp')} className="img-promocional" alt="" />
                <motion.div ref={carrousel} whileTap={{ cursor: "grabbing" }} className="container" >
                    <div className='titulo-body'>NOVOS</div>
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
                <div className='background-line'></div>
                <motion.div ref={carrousel} whileTap={{ cursor: "grabbing" }} className="container" >
                    <div className='titulo-body'>OFERTAR</div>
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
                <div className='background-line'></div>

                <motion.div ref={carrousel} whileTap={{ cursor: "grabbing" }} className="container" >
                    <div className='titulo-body'>DESTAQUES DO MÊS</div>
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
        </>
    )
}

export default Body;