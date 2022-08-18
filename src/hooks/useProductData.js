import React from 'react'
import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'


const fetchProduct = ({ queryKey }) => {
    const productId = queryKey[1]
    return axios.get(`https://fakestoreapi.com/products/${productId}`)
}

export const useProductData = (productId) => {

    const queryClient = useQueryClient()

    return useQuery(['product', productId], fetchProduct, {
        initialData: () => {
            const product = queryClient
                .getQueryData('products')
                ?.data?.find((product) => product.id === parseInt(productId))

            if (product) {
                return { data: product }
            } else {
                return undefined
            }
        }
    })
}
