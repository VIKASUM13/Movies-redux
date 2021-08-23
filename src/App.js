import React , { Component } from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="H1">Redux Movies</h1>
        <div className="container">
          <table className="table1">
            <tr>
              <td>
          <MovieList />
              </td>
              <td>
          <MovieDetails />
              </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}
export default App ;
