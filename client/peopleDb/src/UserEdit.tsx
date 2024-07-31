import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import {useState} from 'react'
import { actionsKind } from './App';
import { useGlobalReducerContext } from './App';
import { dataTypes } from './App';

interface props {
    onClick: () => void,
    user: dataTypes
}

export default function UserEdit({ onClick, user }: props) {
    const [name, setName] = useState<string | undefined>(user.name)
    const [sex, setSex] = useState<string | undefined>(String(user.sex))
    const [lastName, setLastName] = useState<string | undefined>(user.lastName)
    const [place, setPlace] = useState<string | undefined>(user.place)
    const [weight, setWeight] = useState<number | undefined>(user.weight)
    const [height, setHeight] = useState<number | undefined>(user.height)
    const [age, setAge] = useState<number | undefined>(user.age)

    const {dispatch} = useGlobalReducerContext()

    function onSubmit(e: any): void {
        e.preventDefault()
        if (sex === 'true') {
            dispatch({type: actionsKind.EDIT, payload: {id: user.id, name, lastName, age, height, place, weight, sex: true}})
        } else if (sex === 'false') {
            dispatch({type: actionsKind.EDIT, payload: {id: user.id, name, lastName, age, height, place, weight, sex: false}})
        } else {
            console.error('Undefined sex')
        }
        onClick()
    }
    return (
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
                    <button className="btn btn-primary">Готово</button>
                </form>
            </Card.Body>
        </Card>
    )
}