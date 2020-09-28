import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ErrorData from '../components/error-data';
import PageElement from '../components/page-element';
import ResponseData from '../components/response-data';
import Spinner from '../components/spinner';
import useGet from '../hooks/use-get';

const ConfigContainerElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
    font-size: 2rem;

    input {
        width: 260px;
        flex: 1;
    }
`;

const GetPage = (): JSX.Element => {

    const [baseUrl, setBaseUrl] = useState<string>('');
    const [endpoint, setEndpoint] = useState<string>('');
    const [getState, get] = useGet(baseUrl);

    const getClickHandler = (): void => {
        get(endpoint);
    }

    const baseUrlChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setBaseUrl(event.currentTarget.value);
    }

    const endpointChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEndpoint(event.currentTarget.value);
    }

    useEffect(() => {
        console.log(getState);
    }, [getState]);

    return (
        <PageElement>
            <h1>Get Hook</h1>
            {!getState.loading &&
                <ConfigContainerElement>
                    <input value={baseUrl} onChange={baseUrlChangeHandler} placeholder="Base URL" />
                    /
                    <input value={endpoint} onChange={endpointChangeHandler} placeholder="Endpoint" />
                    <button onClick={getClickHandler}> Get </button>
                </ConfigContainerElement>
            }

            {getState.loading &&
                <Spinner />
            }

            {getState.response &&
                <ResponseData response={getState.response} />
            }

            {getState.error &&
                <ErrorData error={getState.error} />
            }
        </PageElement>
    );
};

export default GetPage;