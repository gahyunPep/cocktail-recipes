import React from 'react';
import SearchBar from './SearchBar';
import 'antd/dist/antd.css';

class App extends React.Component {
  render() {
    return(
      <div>
        <div>Cocktail Recipes</div>
        <SearchBar />
      </div>
    )
  }
}

export default App;