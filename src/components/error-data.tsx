import { AxiosError } from 'axios';
import React from 'react';
import styled from 'styled-components';

const ErrorDataElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    color: #fc7979;
    
    span {
        max-width: 100%;
        overflow: auto;
    }
`;

interface ErrorDataProps {
    error: AxiosError
}

const ErrorData = ({ error }: ErrorDataProps): JSX.Element => {
    if (error.response) {
        return (
            <ErrorDataElement>
                <h2>{error.response.status} - {error.response.statusText}</h2>
                <span>{JSON.stringify(error.response.data)}</span>
            </ErrorDataElement>
        )
    } else {
        return (
            <ErrorDataElement>
                <h2>{error.name}</h2>
                <span>{error.message}</span>
            </ErrorDataElement>
        );
    }
};

export default ErrorData;