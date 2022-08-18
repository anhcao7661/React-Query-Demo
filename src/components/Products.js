import { useState, useEffect } from 'react'
import axios from 'axios'

export const Products = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('')


    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <h2>Products</h2>
            {data.map((product) => (
                <div key={product.id} className="card">
                    <div><img src={product.image} alt="#" /></div>
                    <div className="card-description">
                        <h6>{product.title}</h6>
                        <h6>{`Price: ${product.price}`}</h6>
                        <h6>{`Category: ${product.category}`}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
}