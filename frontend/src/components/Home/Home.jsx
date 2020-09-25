import {
    Row,
    Col,
} from 'react-bootstrap';
import React from 'react';
import './Home.css';
import TopicList from './TopicList.jsx';
import TopicContent from './TopicContent.jsx';
import {
  withRouter,
} from 'react-router-dom';
import ReactPaginate from 'react-paginate';

var example_data = [
  {
    id: 1,
    content: 'Lorem Ipsum Dolor Sit Amet',
    user: 'ramazanemre',
    date: '12.03.2021 Pazar'
  },
  {
    id: 2,
    content: 'Basit bir deneme',
    user: 'admin',
    date: '10.03.2021 Cuma',
  },
  {
    id: 3,
    content: 'Basit bir deneme',
    user: 'admin',
    date: '9.03.2021 Cuma',
  },
  {
    id: 4,
    content: 'Basit bir deneme',
    user: 'admin',
    date: '8.03.2021 Cuma',
  },
];


class Home extends React.Component {
  render() {
    return (
      <div className='main'>
        <Row>
          <Col sm={2} className='border-1'>
            <TopicList onClick={this.clicked}/>
          </Col>

          <Col sm={6}>
            <TopicContent data={example_data}/>
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
