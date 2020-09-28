import React from 'react';
import { AxiosResponse } from "axios";
import styled from 'styled-components';

const ResponseDataElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    color:#79fc9c;
    max-width: 100%;
    
    span {
        max-width: 100%;
        overflow: auto;
    }
`;

interface ResponseDataProps {
    response: AxiosResponse;
}

const ResponseData = ({ response }: ResponseDataProps): JSX.Element => {
    return (
        <ResponseDataElement>
            <h2>{response.status} - {response.statusText}</h2>
            <span>{JSON.stringify(response.data)}</span>
        </ResponseDataElement>
    );
};

export default ResponseData;