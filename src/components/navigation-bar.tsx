import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { RouterPaths } from '../utils/constants';

const NavigationBarElement = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    
    a {
        padding: 10px;
    }
`;

const NavigationBar = (): JSX.Element => {
    return (
        <NavigationBarElement>
            {Object.values(RouterPaths).map(routerPath => <Link to={routerPath.path}>{routerPath.text}</Link>)}
        </NavigationBarElement>
    );
};

export default NavigationBar;