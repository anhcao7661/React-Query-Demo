import { useQuery } from "react-query"
import axios from "axios"
import { useAddProductData, useProductsData } from "../hooks/useProductsData"
import { Link } from "react-router-dom"
import { useState } from "react"


const fetchProducts = () => {
    return axios.get('https://fakestoreapi.com/products')
}

export const RQProducts = () => {

    // const [id, setId] = useState('')
    // const [title, setTitle] = useState('')

    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data)
    }

    const onError = (error) => {
        console.log('Perform side effect after encountering error', error)
    }

    const { isLoading, data, isError, error, isFetching, refetch } =

        // useProductsData(onSuccess, onError)

        useQuery(
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

                //-- Data Transformation
                // select: (data) => {
                //     const productTitle = data.data.map((product) => product.title)
                //     return productTitle
                // }
            }
        )

    // const { mutate: addProduct } = useAddProductData()

    // const handleAddProductClick = () => {
    //     console.log({ id, title })
    //     const product = { id, title }
    //     addProduct(product)
    // }

    console.log({ isLoading, isFetching })

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h2>RQ Products</h2>

            {/* <div>
                <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <button onClick={handleAddProductClick}>Add Product</button>
            </div> */}

            <button onClick={refetch}>Fetch Products</button>



            {data?.data.map((product) => {
                return (
                    <div key={product.id}>
                        <Link to={`/rq-products/${product.id}`}>{product.title}</Link>
                    </div>
                )
            })}




            {/* -- Data Transformation
            {data.map((productTitle) => {
                return (<div key={productTitle}>{productTitle}</div>)
            })} */}


        </div>
    )
}
