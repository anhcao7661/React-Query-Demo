import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductData } from '../hooks/useProductData'

export const RQProduct = () => {

    const { productId } = useParams()

    const { isLoading, data, isError, error } = useProductData(productId)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            {data?.data.category} - {data?.data.price}
        </div>
    )
}
