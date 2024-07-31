import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { dataTypes } from './App';
import { actionsKind } from './App';
import { useGlobalReducerContext } from './App';

interface props {
    onClick: () => void,
    user: dataTypes
}

export default function UserCardContent({ onClick, user }: props) {

    const {dispatch} = useGlobalReducerContext()

    function handleClick() {
        dispatch({type: actionsKind.DELETE, payload: {id: user.id}})
    }

    return (
        <Card style={{ width: '18rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{user.name}<br/>{user.lastName}</Card.Title>
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
                            <td><p>{user.place}</p></td>
                            <td>{user.sex ? <p>М</p> : <p>Ж</p>}</td>
                            <td><p>{user.weight}</p></td>
                            <td><p>{user.height}</p></td>
                        </tr>
                    </tbody>
                </Table>
                <footer className='cardBottom'>
                        <h5>Возраст</h5>
                        <h5 className='userAge'>{user.age}</h5>
                </footer>   
                <button id='editButtonLeft' className="btn btn-danger" onClick={() => handleClick()}>Удалить</button>
                <button id='editButton' className="btn btn-primary" onClick={() => onClick()}>Изменить</button>
            </Card.Body>
        </Card>
    )
}