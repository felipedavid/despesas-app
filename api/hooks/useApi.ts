import { useState } from "react";
import { APIStatus } from "../api";


function useApi(fn: Function, config = {}) {
    //const {initialData} = config;
    const [data, setData] = useState();
    const [error, setError] = useState<unknown>();
    const [status, setStatus] = useState(APIStatus.IDLE);

    const exec = async (...args: any[]) => {
        try {
            setStatus(APIStatus.PENDING)
            const {data: resData} = await fn(...args);
            setData(resData);
            setStatus(APIStatus.SUCCESS);
            return {
                data: resData,
                error: null,
            }
        } catch (error) {
            setError(error);
            setStatus(APIStatus.ERROR)
            return {
                data: null,
                error: error,
            }
        }
    }

    return {
        data,
        setData,
        status,
        setStatus,
        exec,
    }
}

export default useApi;