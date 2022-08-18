//Custom Query Hook

import React from 'react'
import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from 'react-query'

import { request } from '../utils/axios-utils'

const fetchProducts = () => {
    return axios.get('https://fakestoreapi.com/products')
}

// const addProduct = (product) => {
//     return axios.post('https://fakestoreapi.com/products', product)
// }

// const fetchProducts = () => {
//     return request({ url: '/products' })
// }


export const useProductsData = (onSuccess, onError) => {
    return useQuery(
        'products',
        fetchProducts,
        {
            // cacheTime: 5000,
            // staleTime: 0,
            // refetchOnMount: true,
            // refetchOnWindowFocus: true,
            // refetchInterval: 2000,
            // refetchIntervalInBackground: true,
            // enabled: false,
            onSuccess,
            onError,
            // select: (data) => {
            //     const productName = data.data.map((product) => product.title)
            //     return productName
            // }
        }

    )
}

// export const useAddProductData = () => {
//     const queryClient = useQueryClient()
//     return useMutation(addProduct, {
//         onSuccess: (data) => {
//             queryClient.invalidateQueries('products')
//             queryClient.setQueryData('products', (oldQueryData) => {
//                 return {
//                     ...oldQueryData,
//                     data: [...oldQueryData.data, data.data],
//                 }
//             })
//         }
//     })
// }
