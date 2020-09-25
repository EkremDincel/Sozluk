import React from 'react';
import {
    Card,
    Row,
    Col,
} from 'react-bootstrap';
import './Home.css';

export default class Entry extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Card>
            <Card.Body>
              <Card.Text>{this.props.content}</Card.Text>
            </Card.Body>
  
            <Card.Footer>
              <Row>
                <Col>
                  <small className='text-muted'>{this.props.date}</small>
                </Col>

                <Col className='entry-username'>
                  <small className='text-muted entry-username'>{this.props.username}</small>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </React.Fragment>
      )
    }
  }