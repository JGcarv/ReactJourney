import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoMain from './components/video_main'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search';
import { Grid, Col, Row, Navbar} from 'react-bootstrap';
import './App.css';

const API_KEY = "AIzaSyDMwqaiu6pIYRDjZYQ-z9_Cvo69hTrnmls"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedVideo: null,
        videos: []
      }

      this.videoSearch("React");
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState(
        {
          selectedVideo: videos[0],
          videos: videos
        }
      )
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div className="App">
        <Grid className="show-grid">
          <Navbar>
            <Navbar.Brand>Faketube</Navbar.Brand>
            <SearchBar onSearchChange={videoSearch}/>
          </Navbar>
          <Row>
            <Col md={8}>
                <VideoMain video={this.state.selectedVideo}/>
            </Col>
            <Col md={4}>
                <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </Col>
        </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
