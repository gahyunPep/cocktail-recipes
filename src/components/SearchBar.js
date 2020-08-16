import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

class SearchBar extends React.Component {
  state = { term: '' };

  onSearch = (value) => {
    this.setState({ term: value }, this.props.onSearchSubmit(this.state.term));
  }

  render(){
    return(
      <div style={{margin: '2%'}}>
        <Search placeholder="input search text" onSearch={this.onSearch} enterButton />
      </div>
    );
  }


}

export default SearchBar;
