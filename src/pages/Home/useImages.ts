import { useEffect, useState } from 'react';

import axios from 'axios';

interface IRequest {
    date: string;
    title: string;
    explanation: string;
    url: string;
}

export function useImages() {
    const [ imageData, setImageData ] = useState({} as IRequest);
    const [ isDataFetching, setIsDataFetching ] = useState(true)

    useEffect(() => {
        (async function onLoadingImage() {
            try {
                const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

                setImageData(response.data)
                setIsDataFetching(false);

                console.log(imageData)
            } catch(error) {
                console.log(error)
            }
        })()
    }, [])

    return {
        imageData,
        isDataFetching
    }
}