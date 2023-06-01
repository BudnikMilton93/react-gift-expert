import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Un Hook no es mas que una funcion que regresa algo, en este caso un objeto con dos propertys
export const useFetchGifs = ( category ) => {

    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImagenes = async () => {
        const newImagenes = await getGifs(category);
        setImagenes(newImagenes);
        setIsLoading(false);
    }
    useEffect(() => {
        getImagenes();
    }, [])

    return {
        imagenes,
        isLoading
    }
}
