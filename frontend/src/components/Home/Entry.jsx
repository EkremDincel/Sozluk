import React from 'react';
import {
    Card,
} from 'react-bootstrap';

export default class Entry extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Card>
            <Card.Body>
              <Card.Text>{this.props.content}</Card.Text>
              <div className='entry-username'>{this.props.username}</div>
            </Card.Body>
  
            <Card.Footer>
              <small className='text-muted'>{this.props.date}</small>
            </Card.Footer>
          </Card>
        </React.Fragment>
      )
    }
  }