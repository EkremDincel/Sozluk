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
import React from 'react';
import './Home.css';
import TopicList from './TopicList.jsx';
import TopicContent from './TopicContent.jsx';
import {
  useParams,
  withRouter,
} from 'react-router-dom';


class Home extends React.Component {
  render() {
    return (
      <div className='main'>
        <Row>
          <Col sm={2} className='border-1'>
            <TopicList onClick={this.clicked}/>
          </Col>

          <Col sm={6}>
            <TopicContent/>
          </Col>
        </Row>
      </div>
    );
  }

  clicked(title) {
    var encoded = encodeURIComponent(title);
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
  }
}

export default withRouter(Home);
