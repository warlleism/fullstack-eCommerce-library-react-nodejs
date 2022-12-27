import React from 'react'

import './style.scss'

const Header = (props) => {
    return (
        <div className='header-container'>

            <div className='logo-conteiner'>
                <div className='logo'>
                    <div className='line'></div>
                    <p style={{ marginBottom: -10 }}>Books <strong style={{ color: "#ffff00" }}>&</strong></p>
                    <p className='down-line'>Sales</p>
                    <div className='line down-line'></div>
                </div>
            </div>

            <div className='page-title'>
                {props.pagina}
            </div>

            <div className='container-icons'>
                <span class="material-symbols-outlined icon-header" style={{ fontSize: "2.6rem" }}>
                    notifications
                </span>
                <div className='glass'>
                    <span class="material-symbols-outlined icon-header">
                        search
                    </span>
                </div>
                <span class="material-symbols-outlined icon-header">
                    menu
                </span>
            </div>

            <div className='arrow-back'>
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </div>

        </div>
    )
}

export default Header;