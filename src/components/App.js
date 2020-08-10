import React from "react";
import SearchBar from "./SearchBar";
import "antd/dist/antd.css";
import { resolveOnChange } from "antd/lib/input/Input";

class App extends React.Component {
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
      </div>
    );
  }
}

export default App;
