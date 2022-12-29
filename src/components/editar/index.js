import React, { useState } from 'react'
import './style.scss'
import Header from "../header"
import { Link } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'

const Editar = () => {
    const dados = [1, 2, 3, 4, 5, 6, 7, 8]

    const [formulario, setFormulario] = useState([{
        nome: '',
        preco: '',
        arquivo: '',
        categoria: '',
        descricao: ''
    }])

    const [setValue] = useLocalStorage('itens', [{}])

    return (
        <>
            <Header pagina={"EDITAR"} arrow={true} />
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
                                        <Link to={'/formEditar'} className='editar-editar' onClick={() => {
                                            setValue([
                                                {
                                                    nome: 'as 6 lições',
                                                    preco: '32,90',
                                                    categoria: 'HQ',
                                                    descricao: 'texto de descricao',
                                                    arquivo: 'imagem.png',
                                                }
                                            ])
                                        }}>
                                            <span class="material-symbols-outlined">
                                                edit
                                            </span>
                                        </Link>
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