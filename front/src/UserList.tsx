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

    const elementsOnPage = 6

    useEffect(() => {
        axios.post('/userGet', {
            currentPage: 0,
            elementsOnPage: elementsOnPage
        })
            .then((res) => res.data)
            .then((result) => dispatch({ type: actionsKind.LOAD, payload: { newState: result } }))
            .then(() => setLoading(false))
    }, [])

    useEffect(() => {
        axios.get('/userCount')
            .then(res => res.data)
            .then(result => setCount(Math.ceil(result / elementsOnPage)))
    }, [state])


    function handlePageClick(e: any) {
        axios.post('/userGet', {
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
                <div className="container">
                    <div className="row">
                        {state.map((e) => {
                            return (
                                <div key={e.id} id="listEl" className="col">
                                    <UserCard user={e} />
                                </div>
                            )
                        })
                        }
                    </div>

                </div>
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