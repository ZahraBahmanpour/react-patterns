import { useEffect, useState } from "react";
import axios from './http';

const Wrapper = ({render, url}) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState([]);
    const [error, setError] = useState([]);

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

    return render({data, isPending, error});
}

export default Wrapper;