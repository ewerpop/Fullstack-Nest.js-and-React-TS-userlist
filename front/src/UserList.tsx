import UserCard from "./UserCard"
import { actionsKind, useGlobalReducerContext } from "./App";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import ReactPaginate from 'react-paginate';

export default function UserList() {
    const { state, dispatch } = useGlobalReducerContext()
    const [loading, setLoading] = useState<boolean>(true)
    const [count, setCount] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(0)

    const elementsOnPage = 3

    useEffect(() => {
        axios.post('http://127.0.0.1:3001/userGet', {
            currentPage: 0,
            elementsOnPage: elementsOnPage
        })
            .then((res) => res.data)
            .then((result) => dispatch({ type: actionsKind.LOAD, payload: { newState: result } }))
            .then(() => setLoading(false))
    }, [])

    useEffect(() => {
        console.log(currentPage)
        axios.get('http://127.0.0.1:3001/userCount')
            .then(res => res.data)
            .then(result => setCount(Math.ceil(result / elementsOnPage)))
    }, [state])


    function handlePageClick(e: any) {
        setCurrentPage(e.selected)
        axios.post('http://127.0.0.1:3001/userGet', {
            currentPage: Number(e.selected),
            elementsOnPage: elementsOnPage
        })
            .then(res => res.data)
            .then(result => dispatch({ type: actionsKind.LOAD, payload: { newState: result } }))
    }

    if (loading) {
        return (
            <main>
                <Spinner animation="border" />
            </main>
        )
    }
    return (
        <>
            <main className="main">
                <ul>
                    {state.map((e) => {
                        return (
                            <li key={e.id}>
                                <UserCard user={e} />
                            </li>
                        )
                    })
                    }
                </ul>
            </main>
            <footer className="main">
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={count}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </footer>
        </>


    )
}