import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar style={{ marginBottom: '2%', width: '100%' }} bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>PeopleDB</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link style={{textDecoration: 'none'}} to={'/'}>Список</Link></Nav.Link>
                    <Nav.Link ><Link style={{textDecoration: 'none'}} to={'/userById'}>Выбрать</Link></Nav.Link>
                    <Nav.Link><Link style={{textDecoration: 'none'}} to={'/addUser'}>Добавить</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}