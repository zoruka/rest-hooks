import React from 'react';
import styled from 'styled-components';

const FooterElement = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 60px;
    bottom: 0;

    background-color: #2c2c2c;
`;

const Footer = (): JSX.Element => {
    return (
        <FooterElement>
            <span>Created by <a href="https://github.com/zoruka" target="__blank">zoruka</a></span>
        </FooterElement>
    )
}

export default Footer;