import { useState, useEffect } from "react";
import MissingNo from "../images/MissingNo.png";

const useFetch = (url) => {
    const [dados, setDados] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        if (!url || url.toLowerCase().endsWith("missingno") || /\/0$/.test(url)) {
            setDados(null);
            setErro("Requisição inválida");
            setCarregando(false);
            return;
        }

        const fetchData = async () => {
            setCarregando(true);
            setErro(null);

            try {
                const response = await fetch(url);

                if (response.status === 200) {
                    const result = await response.json();
                    setDados(result);
                }
                else if (response.status === 404) {
                    setDados({
                        id: 0,
                        name: "MissingNo",
                        sprites: { front_default: MissingNo },
                    });
                    setErro(null);
                }
                else {
                    console.error(`Erro inesperado: ${response.status}`);
                    setDados(null);
                }
            }
            catch (err) {
                console.error(err);
                setErro(err.message);
                setDados(null);
            }
            finally {
                setCarregando(false);
            }
        };

        fetchData();
    }, [url]);

    return { dados, carregando, erro };
};

export default useFetch;
