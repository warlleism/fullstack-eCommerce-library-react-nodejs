import React from 'react'
import './style.scss'

const Footer = () => {
    return (
        <div className='container-footer'>
            <div className='container-info-footer'>
                <h2>Contanto</h2>
                <div>Telefone</div>
                <div>Endereço</div>
                <div>Fale conosco</div>
                <div>trabalhe conosco</div>
            </div>
            <div className='container-info-footer'>
                <h2>Políticas</h2>
                <div>Trocas</div>
                <div>Privacidade</div>
                <div>Políticas de venda</div>
                <div>Termos e condiçoes de compra</div>
            </div>
            <div className='container-info-footer'>
                <h2>Formas de pagamento</h2>
                <div>Pix</div>
                <div>AME</div>
                <div>Boleto</div>
                <div>Crédito / Débito</div>
            </div>
        </div>
    )
}

export default Footer;