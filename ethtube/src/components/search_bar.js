import React, {Component} from 'react';
import { Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term:''}
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchChange(term);
  }
  render(){
    return(
      <Navbar.Form pullLeft>
      <FormGroup>
        <input
          value={this.state.term}
          type="text"
          placeholder="search"
          onChange={(event) => this.onInputChange(event.target.value)} />
      </FormGroup>
      </Navbar.Form>
    )
  }
}

export default SearchBar;
