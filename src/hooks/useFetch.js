import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, initialValue = null) => {
    const [data, setData] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                if (response.status === 200) {
                    setData(response.data);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(true);
                throw error;
            }
        };
        fetchData();
    }, [url]);
    return { loading, data };
};

export default useFetch;
