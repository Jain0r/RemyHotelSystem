import { useEffect } from 'react';
import { useState } from 'react'
import { FetchAllHabisResponse } from './FetchAllHabisResponse';




export const FetchAllHabis = () => {
   
    const [isLoading, setIsLoading] = useState(true);
    const [habis, setHabis] = useState([])

    useEffect (() => {
        FetchAllHabisResponse()
         .then(habis => {
             setIsLoading(false)
             setHabis(habis)
         })
    },[])

    return {
        isLoading,
        habis
    }
}