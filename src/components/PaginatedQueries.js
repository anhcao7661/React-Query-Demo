import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useState } from 'react'

const fetchUsers = (pageNumber) => {
    return axios.get(`https://fakestoreapi.com/users?limit=2&_page=${pageNumber}`)
}

export const PaginatedQueries = () => {

    const [pageNumber, setPageNumber] = useState(1)
    const { isLoading, isError, error, data, isFetching } = useQuery(
        ['users', pageNumber],
        () => fetchUsers(pageNumber),
        {
            keepPreviousData: true,
        })


    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }


    return (
        <div>
            <div>
                {data?.data.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2>{user.id}. {user.email}</h2>
                        </div>
                    )
                })}
            </div>
            <div>
                <button onClick={() => setPageNumber((page) => page - 1)} disabled={pageNumber === 1}>Prev page</button>
                <button onClick={() => setPageNumber((page) => page + 1)} disabled={pageNumber === 5}>Next page</button>
            </div>
            {isFetching && 'Loading'}
        </div>
    )
}
