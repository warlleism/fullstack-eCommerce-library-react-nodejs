import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './style.scss'

const Header = (props) => {

    const [count, setCount] = useState(0)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [scrollDir, setScrollDir] = useState("scrolling down");

    //script para o cabeçalho subir e descer

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;
            setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        const onScroll = () => {
            window.requestAnimationFrame(updateScrollDir);
            const header = document.getElementById('header')
            if (scrollDir == 'scrolling up') {
                header.style.transform = "translateY(0px)"
            } else {
                header.style.transform = "translateY(-1000px)"
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    //script para menu animado

    const navBar = () => {
        const nav = document.getElementById('nav-bar')
        const icons = document.getElementById('icons-nav-bar')

        if (count == 0) {
            icons.style.opacity = 1
            nav.style.top = `0px`
            nav.style.right = `0px`
            nav.style.width = `400px`
            nav.style.height = `100vh`
            nav.style.borderRadius = `0px`
            setCount(count + 1)
        } else {
            icons.style.opacity = 0
            nav.style.top = `85px`
            nav.style.width = `43px`
            nav.style.right = `30px`
            nav.style.height = `43px`
            nav.style.borderRadius = `100px`
            setCount(count - 1)
        }
    }
    return (
        <div className='header-container' id='header'>
            <div className='header-top-desconto-info'>
                Produtos com até <strong>70%</strong> de desconto
            </div>
            <div className='logo-conteiner'>
                <div className='logo'>
                    <Link to={'/'}>
                        <div className='line'></div>
                        <p style={{ marginBottom: -10 }}>Books <strong>&</strong></p>
                        <p className='down-line' style={{ fontWeight: 300, color: "#242424" }}>Sales</p>
                        <div className='line'></div>
                    </Link>
                </div>
            </div>

            <div className='page-title'>
                {props.pagina}
            </div>

            <div className='menu-nav-bar' id='nav-bar' onClick={() => navBar()}>
                {
                    count != 1
                        ?
                        <span class="material-symbols-outlined icon-header menu">
                            menu
                        </span>
                        :
                        <span class="material-symbols-outlined icon-header menu close" id='menu' onClick={() => navBar()}>
                            close
                        </span>
                }
                <div className='container-nav-bar-content'>
                    <Link to={'/'}>Início</Link>
                    <Link to={'/cadastrar'}>Criar publicação</Link>
                    <Link to={'/editar'}>Editar publicação</Link>
                </div>

                <div className='container-nav-bar-content-icons' id='icons-nav-bar'>
                    <div>
                        <span class="material-symbols-outlined">
                            home
                        </span>
                        <div>Início</div>
                    </div>
                    <div>
                        <span class="material-symbols-outlined">
                            person
                        </span>
                        <div>Perfil</div>
                    </div>
                    <div>
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                        <div>Carrinho</div>
                    </div>
                </div>
            </div>

            {
                props.arrow
                    ?
                    <div className='arrow-back' style={{ color: "black" }} onClick={() => window.history.back()}>
                        <span class="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                    </div>
                    :
                    false
            }

            <div className='mobile-menu-container' onClick={() => setMobileMenu(!mobileMenu)}>
                <span class="material-symbols-outlined icon-header menu">
                    menu
                </span>
            </div>

            {
                mobileMenu
                    ?

                    <div className='mobile-nav-bar-container' id='mobile-menu' onClick={() => setMobileMenu(!mobileMenu)}>

                        <span class="material-symbols-outlined icon-close-menu">
                            close
                        </span>

                        <div className='container-nav-bar-content-mobile'>
                            <Link to={'/'}>Início</Link>
                            <Link to={'/cadastrar'}>Criar publicação</Link>
                            <Link to={'/editar'}>Editar publicação</Link>
                        </div>

                        <div className='container-nav-bar-content-icons-mobile' id='icons-nav-bar'>
                            <div className='container-icons-mobile'>
                                <span class="material-symbols-outlined">
                                    home
                                </span>
                                <div>Início</div>
                            </div>
                            <div className='container-icons-mobile'>
                                <span class="material-symbols-outlined">
                                    person
                                </span>
                                <div>Perfil</div>
                            </div>
                            <div className='container-icons-mobile'>
                                <span class="material-symbols-outlined">
                                    shopping_cart
                                </span>
                                <div>Carrinho</div>
                            </div>
                        </div>
                    </div>
                    :
                    false
            }
        </div >
    )
}

export default Header;