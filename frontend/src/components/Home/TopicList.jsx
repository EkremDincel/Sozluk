import React from 'react';
import {
    Navbar,
    Button,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Table,
    Container,
    Row,
    Col,
} from 'react-bootstrap';

var example_data = [
    {
      'id': 1,
      'title': 'türkçe-güzeldir Ramazan Emre',
      'date': '40.13.2021',
    },
    {
        'id': 2,
        'title': 'Kebap',
        'date': '34.13.2021',
    },
    {
        'id': 3,
        'title': 'PyGTK',
        'date': '33.13.2021',
    },
    {
        'id': 4,
        'title': 'Python',
        'date': '31.13.2021',
    },
    {
        'id': 5,
        'title': 'Java',
        'date': '31.13.2021',
    },
    {
        'id': 6,
        'title': 'C',
        'date': '31.13.2021',
    },
    {
        'id': 7,
        'title': 'Rust',
        'date': '31.13.2021',
    },
];

function generate_row(data, onC) {

    return (
        <tr onClick={() => onC(data.title)}>
            <td>{data.title}</td>
        </tr>
    )
}


export default class TopicList extends React.Component {
  render() {
    return (
      <Table striped bordered hover>
          <tbody>
              {example_data.map((data) => generate_row(data, this.props.onClick))}
          </tbody>
      </Table>
    )
  }
}
