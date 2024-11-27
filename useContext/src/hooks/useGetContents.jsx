import React, { useState, useEffect, useContext } from 'react'
import ContentContext from '../contexts/ContentContext'
import { getAllContents } from '../services'

function useGetContents({ str }) {
    const { contents, setContents } = useContext(ContentContext)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchContents = async () => {
        try {
            let results = await getAllContents()
            setContents(results)

            if (contents.length > 0) {
                setLoading(false)
                console.log(loading)
            }

            console.log(loading)
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        // console.log(getAllContents);
        fetchContents()
        return () => {
            // console.log(loading)
        }
    }, []);

    return {
        loading, error
    }
}

export default useGetContents