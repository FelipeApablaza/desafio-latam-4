import React from 'react'
import Title from '../Title/Title'
import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <header>
            <Logo/>
            <Title/>
            <Nav/>
        </header>
    )
}

export default Header