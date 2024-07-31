import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <Navbar style={{marginBottom: '2%'}} bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>PeopleDB</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Список</Nav.Link>
                    <Nav.Link href="/addUser">Добавить</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}