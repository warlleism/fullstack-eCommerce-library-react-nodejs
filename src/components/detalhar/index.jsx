import Header from '../header/index';
import React, { useEffect, useState } from 'react'
import './style.scss'

const Detalhar = () => {

    const [count, setCont] = useState(0)

    const [localData] = useState(JSON.parse(localStorage.getItem('itens')))

    const moreLine = () => {
        const texto = document.getElementById('texto')

        if (count == 0) {
            texto.style.WebkitLineClamp = "100"
            setCont(count + 1)

        } else {
            texto.style.WebkitLineClamp = "6"
            setCont(count - 1)
        }
    }

    return (
        <>
            <Header pagina={"VISUALIZAR"} arrow={true} />
            <div className='detalhar-container'>
                <div className='container-content'>
                    <div className='conteiner-imagem'>
                        <div className='line-detalhar line-1'></div>
                        <div className='line-detalhar line-2'></div>
                        <div className='line-detalhar line-3'></div>
                        <div className='line-detalhar line-4'></div>
                        <img src={localData?.imagem} alt="" />
                    </div>
                    <div className='content-detalhar'>
                        <div className='titulo-detalhar'>{localData?.nome}</div>
                        <div className='categoria-detalhar'>Categoria: {localData?.categoria}</div>
                        <div className='texto-detalhar' id='texto'>{localData?.descricao}</div>
                        <div className='ler-mais' onClick={() => moreLine()}>{count != 0 ? "...menos" : "mais..."}</div>
                        <div className='button-detalhar'>Carrinho</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detalhar;