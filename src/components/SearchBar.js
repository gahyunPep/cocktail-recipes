import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

class SearchBar extends React.Component {
  state = { term: '' };

  render(){
    return(
      <div>
    <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />

      </div>
    );
  }


}

export default SearchBar;
