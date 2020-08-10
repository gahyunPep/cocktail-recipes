import React from "react";
import "antd/dist/antd.css";
import { resolveOnChange } from "antd/lib/input/Input";
import SearchBar from "./SearchBar";
import CocktailList from './CocktailList';
class App extends React.Component {

  state = { cocktails: [] };

  handleSearchSubmit = (term) => {
    fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${term}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "e9500210e5msha4faa2dc4f453aep1192f7jsn30824a744f33"
      }
    })
    .then((response) => {
      const reader = response.body.getReader();
      const stream = new ReadableStream({
        start(controller) {
          function push() {
            reader.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              controller.enqueue(value);
              push();
            });
          };
          push();
        }
      });

      return new Response(stream, { headers: { 'Content-Type': 'application/json' } });
    })
    .then((res) => {
      const json = res.json();
      console.log('res?', json);
      return json;
    })
    .then((data) => {
      this.setState({ cocktails: data.drinks });
      console.log(data.drinks);
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>
        <div>Cocktail Recipes</div>
        <SearchBar onSearchSubmit={this.handleSearchSubmit}/>
        <CocktailList cocktails={this.state.cocktails}/>
      </div>
    );
  }
}

export default App;
