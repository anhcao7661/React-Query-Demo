import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const fetchProducts = () => {
    return axios.get('https://fakestoreapi.com/products')
}

const fetchUsers = () => {
    return axios.get('https://fakestoreapi.com/users')
}

export const ParallelQueries = () => {

    useQuery('products', fetchProducts)
    useQuery('users', fetchUsers)

    return (
        <div>ParallelQueries</div>
    )
}
