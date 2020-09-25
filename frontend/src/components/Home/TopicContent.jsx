import React from 'react';
import Entry from './Entry.jsx';

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
];

function generate_entry(data) {
  return (
    <Entry content={data.content} username={data.user} date={data.date}/>
  )
}

export default class TopicContent extends React.Component {
  state = {
    content: '',
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.decoded}</h1>

        {example_data.map(generate_entry)}
      </React.Fragment>
    )
  }

  constructor(props) {
    super(props);
    var name = window.location.pathname.split('/')[2];
    if(name==undefined){
      this.decoded = 'Merhaba!';
    }
    else{
      this.decoded = decodeURIComponent(name);
    }
    console.log(name);
  }
}
