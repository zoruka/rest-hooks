import styled from "styled-components";
import React from 'react';
import PageElement from "../components/page-element";

const MessageElement = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1;
`

const HomePage = (): JSX.Element => {
    return (
        <PageElement>
            <MessageElement>
                These pages are under construction.
            </MessageElement>
        </PageElement>
    )
};

export default HomePage;