import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [dados, setDados] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        if (!url) return; 

        const fetchData = async () => {
            setCarregando(true);
            setErro(null);

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} ${response.statusText}`);
                }

                const result = await response.json();
                setDados(result);
            } catch (err) {
                setErro(err.message);
            } finally {
                setCarregando(false);
            }
        };

        fetchData();
    }, [url]);

    return { dados, carregando, erro };
};

export default useFetch;
