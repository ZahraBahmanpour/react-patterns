import axios from "./http";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setIsPending(false);
                setData(res.data);
                setError(null);
            } catch(e) {
                setIsPending(false);
                setError(e.message);
            }
        }
        fetchData();
    }, [url])

    return {data, isPending, error};
}

export default useFetch;