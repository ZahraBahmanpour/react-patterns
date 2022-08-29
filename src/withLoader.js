import { useState, useEffect } from "react";
import axios from './http';

const withLoader = (Element, url) => {
return (props) => {
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

if(isPending || !data) {
    return <div>Loading...</div>
}

if(error) {
    return <div>{error}</div>
}
return <Element data={data}/>
}
}

export default withLoader;