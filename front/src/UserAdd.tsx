import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { actionsKind, useGlobalReducerContext } from "./App";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export default function UserAdd() {
    const navigation = useNavigate()

    const [name, setName] = useState<string>('')
    const [sex, setSex] = useState<string>('true')
    const [lastName, setLastName] = useState<string>('')
    const [place, setPlace] = useState<string>('')
    const [weight, setWeight] = useState<number>(80)
    const [height, setHeight] = useState<number>(180)
    const [age, setAge] = useState<number>(30)

    const {dispatch} = useGlobalReducerContext()

    function onSubmit(e: any): void {
        e.preventDefault()
        if (sex === 'true') {
            axios.post('http://127.0.0.1:3001/userAdd', {
                name,
                lastName,
                age,
                height,
                place,
                weight,
                sex: true
            })
             .then((res) => dispatch({type: actionsKind.ADD, payload: {id: res.data, name, lastName, age, height, place, weight, sex: true}}))
        } else if (sex === 'false') {
            axios.post('http://127.0.0.1:3001/userAdd', {
                name,
                lastName,
                age,
                height,
                place,
                weight,
                sex: false
            })
            .then((res) => dispatch({type: actionsKind.ADD, payload: {id: res.data, name, lastName, age, height, place, weight, sex: false}}))
        } else {
            console.error('Undefined sex')
        }
        navigation('/')
    }

    return (
        <main className='main'>
        <Card style={{ width: '18rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <form onSubmit={onSubmit}>
                    <Card.Title><ul className='nameField'>
                        <li><input value={name} onChange={(e) => setName(e.target.value)} className='editUserName' /></li>
                        <li><input value={lastName} onChange={(e) => setLastName(e.target.value)} className='editUserName' /></li>
                    </ul></Card.Title>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Место <br /> жительства </th>
                                <th><p>Пол</p></th>
                                <th><p>Вес</p></th>
                                <th><p>Рост</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input className='editUser' placeholder='Казань' value={place} onChange={(e) => setPlace(e.target.value)}/></td>
                                <td><select className='editUser' onChange={(e) => setSex(e.target.value)}>
                                        <option value={'true'}>M</option>
                                        <option value={'false'}>Ж</option>
                                    </select></td>
                                <td><input className='editUser' type='number' min="1" max="300" placeholder='70' value={weight} onChange={(e) => setWeight(e.target.valueAsNumber)}/></td>
                                <td><input className='editUser' type='number' min="1" max="250" placeholder='190' value={height} onChange={(e) => setHeight(e.target.valueAsNumber)}/></td>
                            </tr>
                        </tbody>
                    </Table>
                    <footer className='cardBottom'>
                        <h5>Возраст</h5>
                        <input className='editUserBottom' type="number" min="1" max="120" placeholder='Введите возраст' value={age} onChange={(e) => setAge(e.target.valueAsNumber)}/>
                    </footer>
                    <button className="btn btn-primary">Создать</button>
                </form>
            </Card.Body>
        </Card>
        </main>
    )
}