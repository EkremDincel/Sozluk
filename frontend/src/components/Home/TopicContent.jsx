import React from 'react';

export default class TopicContent extends React.Component {
  state = {
    content: '',
  };
  render() {
    return (
      <React.Fragment>
        {this.decoded}
      </React.Fragment>
    )
  }

  constructor(props) {
    super(props);
    var name = window.location.pathname.split('/')[2];
    if(name==undefined){
      var name = 'Merhaba!';
    }
    else{
      this.decoded = decodeURIComponent(name);
    }
    console.log(name);
  }
}
