 import { combineReducers } from 'redux';

const moviesReducer = () => {
    return [
        {title:'KGF' ,releaseDate:'21-12-2019', rating:8.2},
        {title:'Aquaman' ,releaseDate:'12-07-2018', rating:7.6},
        {title:'Black Panther' ,releaseDate:'13-03-2018', rating:8.6},
        {title:'EndGame' ,releaseDate:'21-12-2019', rating:8.2},
        {title:'War' ,releaseDate:'21-12-2019', rating:6.2},
    ]
}

const selectedMovieReducer = (state = null, action) => {
    switch(action.type) {
        case 'MOVIE_SELECTED' :
            return action.payload;
        default:
            return state;
    }

}

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
})