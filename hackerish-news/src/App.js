import React, { Component } from 'react';
import './App.css';

//Define Global Variables
const DEFAULT_QUERY = 'ethereum';
// const DEFAULT_PAGE = 0;
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';



class App extends Component {

   constructor(props){
      super(props);

      this.state = {
         results: null,
         searcKey: '',
         searchTerm: DEFAULT_QUERY,
      };

      //Bind all Class Functions Here
      this.getFrontPage = this.getFrontPage.bind(this);
      this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
      this.onSearchSubmit = this.onSearchSubmit.bind(this);
      this.onSearchChange = this.onSearchChange.bind(this);
      this.setSearchTopStories = this.setSearchTopStories.bind(this);

   }

   setSearchTopStories(results){
      this.setState({
         results
      })
      //see if there're more stories. Se sim, amendar. Se não, set results
   }

   getFrontPage(){
      fetch(`${PATH_BASE}${PATH_SEARCH}?${"tags=front_page"}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
   }


   fetchSearchTopStories(){
      const {searchTerm} = this.state;

      //make the api call -> return list of results
      fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
   }

   onSearchSubmit(event){
      const {searchTerm} = this.state;
      this.fetchSearchTopStories(searchTerm);
      event.preventDefault();
   }

   onSearchChange(event){
      this.setState({searchTerm: event.target.value})
   }

   componentDidMount(){
      //Call the API
      this.getFrontPage();
   }

   render() {
      const {results, searchTerm} = this.state;
      if (!results) { return null; }
      return (
         <div className="box">
            <div className="flex-item">
               <h1 className="title"> HACKERish NEWS</h1>
            </div>
            <div className="flex-item">
               <Search onSubmit={this.onSearchSubmit} onChange={this.onSearchChange}>
                  Serch
               </Search>
            </div>
            <div className="flex-item">
               <Table list={results.hits}/>
            </div>
         </div>
      );
   }
}

const Button = ({onClick, className = "", children}) =>
   <button
      onClick={onClick}
      className={className}
      type="button">
         {children}
      </button>

const Table = ({list}) =>
   <div className="table">
      { list.map(item =>
         <div key={item.objectID} className="table-row">
            <Item title={item.title} author={item.author} url={item.url} point={item.points}/>
         </div>
      )}
   </div>

const Item = ({title,author, url, point}) =>
   <div className="card">
      <span className="card-points">{point}</span>
      <a href={url} className="card-main" >{title}</a>
      <span className="card-author"> by {author}</span>
   </div>


const Search = ({value, children, onSubmit, onChange}) =>
   <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange}/>
      <button type="submit">
         {children}
      </button>
   </form>

export default App;
