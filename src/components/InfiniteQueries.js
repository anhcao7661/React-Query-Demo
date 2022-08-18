import React, { Fragment } from 'react'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'


const fetchUsers = ({ pageParam }) => {
    return axios.get(`https://fakestoreapi.com/users?limit=2&_page=${pageParam}`)
}

export const InfiniteQueries = () => {

    const { isLoading, isError, error, data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(
        ['users'],
        fetchUsers,
        {
            getNextPageParam: (_lastPage, pages) => {
                if (pages.length < 5) {
                    return pages.length + 1
                } else {
                    return undefined
                }
            }
        }
    )

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <div>
                {data?.pages.map((group, i) => {
                    return (
                        <Fragment>
                            {group.data.map((user) => (
                                <h2 key={user.id}>
                                    {user.id} {user.username}
                                </h2>
                            ))}
                        </Fragment>
                    )
                })}
            </div>
            <div>
                <button disabled={!hasNextPage} onClick={fetchNextPage}>Load more</button>
            </div>
            <div>
                {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
            </div>

        </div>
    )
}
