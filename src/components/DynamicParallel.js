import React from 'react'
import { useQueries } from 'react-query'
import axios from 'axios'

const fetchProducts = (productId) => {
    return axios.get(`https://fakestoreapi.com/products/${productId}`)
}

export const DynamicParallel = ({ productIds }) => {

    const queryResult = useQueries(
        productIds.map((id) => {
            return {
                queryKey: ['product', id],
                queryFn: () => fetchProducts(id)
            }
        })
    )

    console.log({ queryResult })

    return (
        <div>DynamicParallel</div>
    )
}
