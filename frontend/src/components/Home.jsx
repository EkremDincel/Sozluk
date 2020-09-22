import {
    Navbar,
    Button,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Table,
    Container,
} from 'react-bootstrap';
import React from 'react';
import './Home.css';

var example_data = [
    {
      'id': 1,
      'title': 'Menemen',
      'date': '40.13.2021',
    },
    {
        'id': 2,
        'title': 'Kebap',
        'date': '34.13.2021',
    },
    {
        'id': 3,
        'title': 'Deneme',
        'date': '33.13.2021',
    },
    {
        'id': 4,
        'title': 'Python',
        'date': '31.13.2021',
    },
];

function generate_row(data) {
    return (
        <tr>
            <td>{data.title}</td>
            <td>{data.date}</td>
        </tr>
    )
}

export default function Home() {


    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Baslik</th>
                        <th>Tarih</th>
                    </tr>
                </thead>
                <tbody>
                    {example_data.map(generate_row)}
                </tbody>
            </Table>
        </Container>
    );
}
