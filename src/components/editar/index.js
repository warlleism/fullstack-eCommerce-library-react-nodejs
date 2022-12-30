import React, { useEffect, useState } from 'react'
import './style.scss'
import Header from "../header"
import { Link } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'

const Editar = () => {

    const [data, setData] = useState([])

    const [setValue] = useLocalStorage('itens', [{}])

    const getAllData = () => {
        fetch('http://localhost:3003/readAll')
            .then((res) => res.json())
            .then((data) => setData(data))
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            {console.log(data)}
            <Header pagina={"EDITAR"} arrow={true} />
            <div className='container-editar'>
                <div className='container-card-editar'>
                    {
                        data?.map(e => {
                            return (
                                <>
                                    <div className='card-editar'>
                                        <img src={e?.imagem} alt="" />
                                        <div className='board-line-editar'>
                                            <div className='line-left line-name-editar'></div>
                                            <div className='nome-book-editar'>{e?.nome}</div>
                                            <div className='line-rigth line-name-editar'></div>
                                        </div>
                                        <div className='preco-editar'>{e?.preco}</div>
                                        <div className='botao-saiba-mais-editar'>Saiba mais</div>
                                        <Link to={'/formEditar'} className='editar-editar' onClick={() => {
                                            setValue([
                                                {
                                                    id: e?.id,
                                                    nome: e?.nome,
                                                    preco: e?.preco,
                                                    categoria: e?.categoria,
                                                    descricao: e?.descricao,
                                                    tipo: e?.tipo,
                                                    arquivo: e?.imagem,
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