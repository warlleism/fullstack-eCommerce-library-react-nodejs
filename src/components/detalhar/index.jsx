import Header from '../header/index';
import React, { useState } from 'react'

import './style.scss'

const Detalhar = () => {

    const [count, setCont] = useState(0)

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
                        <img src={require('../../image/hq.png')} alt="" />
                    </div>

                    <div className='content-detalhar'>
                        <div className='titulo-detalhar'>Liga Da Justiça Renascimento</div>
                        <div className='categoria-detalhar'>Categoria: HQ's</div>
                        <div className='texto-detalhar' id='texto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
                        <div className='ler-mais' onClick={() => moreLine()}>{count != 0 ? "...menos" : "mais..."}</div>
                        <div className='button-detalhar'>Carrinho</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detalhar;