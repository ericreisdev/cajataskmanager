import React from 'react';
import { Container, LogoContainer, LogoImage, Title } from './style';
import Logo from "../../assets/img/caja.png"

const Header = () => {
    return (
        <Container>
            <LogoContainer>
                <LogoImage src={Logo} alt="Logo" /> {/* Aqui você pode inserir o caminho da sua imagem. */}
                <Title>Gerenciador de Tarefas</Title>
            </LogoContainer>
            
        </Container>
    );
};

export default Header;
