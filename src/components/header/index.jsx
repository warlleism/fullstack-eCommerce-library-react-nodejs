import React from 'react'
import { Link } from "react-router-dom";
import './style.scss'

const Header = (props) => {

    const navBar = (value) => {
        const nav = document.getElementById('nav-bar')
        nav.style.right = `${value}px`
    }

    const movebeel = () => {
        const bell = document.getElementById('bell')
        setTimeout(() => {
            bell.style.transform = 'rotate(10deg)'
        }, 100)

        setTimeout(() => {
            bell.style.transform = 'rotate(-10deg)'
        }, 200)

        setTimeout(() => {
            bell.style.transform = 'rotate(0deg)'
        }, 300)
    }

    return (
        <div className='header-container'>

            <div className='logo-conteiner'>
                <div className='logo'>
                    <Link to={'/'}>
                        <div className='line'></div>
                        <p style={{ marginBottom: -10 }}>Books <strong style={{ color: "#ffff00" }}>&</strong></p>
                        <p className='down-line'>Sales</p>
                        <div className='line down-line'></div>
                    </Link>
                </div>
            </div>

            <div className='page-title'>
                {props.pagina}
            </div>

            <div className='container-icons'>
                <span class="material-symbols-outlined icon-header" id='bell'
                    onClick={() => movebeel()}
                    style={{ fontSize: "2.6rem", transition: ".1s" }}>
                    notifications
                </span>
                <div className='glass'>
                    <span class="material-symbols-outlined icon-header">
                        search
                    </span>
                </div>
                <span class="material-symbols-outlined icon-header" onClick={() => navBar(0)}>
                    menu
                </span>
            </div>

            {
                props.arrow
                    ?
                    <Link to={"/"} className='arrow-back' style={{ color: "black" }} >
                        <span class="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                    </Link>
                    :
                    false
            }


            <div className='menu-nav-bar' id='nav-bar'>
                <span class="material-symbols-outlined"
                    onClick={() => navBar(-1200)}
                    style={{
                        width: "98%",
                        marginTop: 20,
                        color: "black",
                        fontWeight: 900,
                        textAlign: "end",
                        cursor: 'pointer'
                    }}>
                    close
                </span>

                <div className='container-nav-bar-content'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/cadastrar'}>Criar publicação</Link>
                    <Link to={'/editar'}>Editar publicação</Link>
                </div>
            </div>

        </div>
    )
}

export default Header;