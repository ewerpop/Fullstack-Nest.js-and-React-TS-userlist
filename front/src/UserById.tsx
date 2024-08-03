import { useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard"
import { useNavigate } from "react-router-dom";

export default function UserById() {
    const [id, setId] = useState<number>(1)
    const [state, setState] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }

    function onSubmit(e: any) {
        e.preventDefault()
        axios.post('http://127.0.0.1:3001/userById', {
            id
        })
            .then(res => {
                setLoading(true)
                return res.data
            })
            .then(result => setState(result))
            .then(() => setLoading(false))
    }

    if (loading) {
        return (
            <main className="main">
                <Spinner animation="border" />
            </main>
        )
    }
    if (state === '') {
        return (
            <main className="main">
                <div className="alert alert-danger" role="alert">
                    Пользователь с данным id не неайден в базе данных, перезагрузите страницу и попробуйте снова
                </div>
            </main>
        )
    }
    if (state) {
        return (
            <main className="main">
                <UserCard handleClick={handleClick} user={state} />
            </main>
        )
    }
    return (
        <main className="main">
            <form className="d-flex" role="search" onSubmit={onSubmit}>
                <input value={id} min={1} onChange={(e) => setId(e.target.valueAsNumber)} className="form-control me-2" type="number" placeholder="Поиск по id" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">Поиск</button>
            </form>
        </main>

    )
}