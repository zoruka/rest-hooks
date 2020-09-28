import axios, { AxiosError, AxiosResponse } from "axios";
import { useReducer } from "react";

type State = {
    loading: boolean;
    error?: AxiosError;
    response?: AxiosResponse;
};

enum ActionCode {
    Requesting,
    Success,
    Error
};

type Action = {
    code: ActionCode;
} & State;

type Reducer = (state: State, action: Action) => State;

type Get = (endpoint: string) => void;

type GetHook = [State, Get];

const reducer: Reducer = (state, action): State => {
    switch (action.code) {
        case ActionCode.Requesting:
            return { loading: true };
        case ActionCode.Success:
            return { loading: false, response: action.response };
        case ActionCode.Error:
            return { loading: false, error: action.error };
        default: 
            return state;
    }
}

const useGet = (baseUrl: string): GetHook => {
    const [state, dispatch] = useReducer(reducer, { loading: false });

    const get: Get = (endpoint) => {
        const url = `${baseUrl}/${endpoint}`;

        dispatch({ code: ActionCode.Requesting, loading: true });
        axios.get(url)
            .then((res: AxiosResponse) => dispatch({ code: ActionCode.Success, loading: false, response: res }))
            .catch((err: AxiosError) => dispatch({ code: ActionCode.Error, loading: false, error: err }));
    };

    return [state, get];
};

export default useGet;