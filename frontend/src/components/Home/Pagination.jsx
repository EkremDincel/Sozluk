import React from 'react';
import ReactPaginate from 'react-paginate';
import TopicContent from './TopicContent.jsx';
import './Home.css';

const SERVER_URL = 'flask/topic/{topic_name}/{page_number}';

var getPage = (n) => example_data[n];

var example_data = [
  [
    {
      content: 'PAGE1',
      user: 'ramazanemre',
      date: '12.03.2021 Pazar'
    },
    {
      content: 'PAGE1',
      user: 'ramazanemre',
      date: '12.03.2021 Pazar'
    },
    {
      content: 'PAGE1',
      user: 'ramazanemre',
      date: '12.03.2021 Pazar'
    },
    {
      content: 'PAGE1',
      user: 'ramazanemre',
      date: '12.03.2021 Pazar'
    },
  ],

  [
    {
      content: 'PAGE2',
      user: 'ramazanemre',
      date: '12.03.2021 Pazar'
    },
    {
      content: 'PAGE2',
      user: 'ramazanemre',
      date: '12.03.2021 Pazar'
    },
    {
      content: 'PAGE2',
      user: 'ramazanemre',
      date: '12.03.2021 Pazar'
    },
    {
      content: 'PAGE2',
      user: 'ramazanemre',
      date: '12.03.2021 Pazar'
    },
  ],
];


export default class Pagination extends React.Component {

  render() {
    return (
        <React.Fragment>
            <TopicContent data={this.state.data}/>

            <ReactPaginate
                previousLabel={'Onceki'}
                nextLabel={'Sonraki'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={this.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'page-link'}
                activeClassName={'active'}
            />
        </React.Fragment>
    )
  }

  handlePageClick(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);


    this.setState({
      currentPage: selected,
      offset: offset,
    })
    this.loadEntriesFromServer();
  }

  loadEntriesFromServer() {
    // Load entries from server
    this.setState((state, props) => ({
      data: getPage(state.currentPage)
    })
    )
      
  }

  constructor(props) {
      super(props);

      // var currentPage = new URLSearchParams(window.location.search);
      // if(currentPage===null) {
      //   currentPage = 0;
      // }
      this.state = {
          data: [],
          offset: 0,
          perPage: 4,
          currentPage: 0,
      }

      // TODO: Get the number of pages from server
      this.pageCount = 2;
  
      this.handlePageClick = this.handlePageClick.bind(this);
      this.loadEntriesFromServer = this.loadEntriesFromServer.bind(this);
      this.loadEntriesFromServer();

  }
}
