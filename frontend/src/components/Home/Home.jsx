import {
    Row,
    Col,
} from 'react-bootstrap';
import React from 'react';
import './Home.css';
import TopicList from './TopicList.jsx';
import {
  withRouter,
  useLocation,
} from 'react-router-dom';
import Pagination from './Pagination.jsx';


class Home extends React.Component {
  render() {
    return (
      <div className='main'>
        <Row>
          <Col sm={2} className='border-1'>
            <TopicList onClick={this.clicked}/>
          </Col>

          <Col sm={6}>
            <Pagination/>
          </Col>
        </Row>
      </div>
    );
  }

  clicked(title) {
    var encoded = encodeURIComponent(title);
    console.log(encoded);

    window.location.pathname = '/topics/' + encoded;

  }

  constructor(props) {
    super(props);
    if(props.opentopic) {
      const { name } = this.props.match.params;
      this.topic = name;
    }
    else {
      this.topic = false;
    }
    this.clicked = this.clicked.bind(this);
  }
}

export default withRouter(Home);
