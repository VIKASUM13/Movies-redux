import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = (props) => {

    if(!props.selectedMovie)
    {
        return(
        <div className="details-container" >
            <h2>Movie</h2>
            <div className="properties">
                <p>select Movie</p>
            </div>
        </div>

        )

    }
    else
    {
        return(
            <div className="details-container" >
                <h2>Movie</h2>
                <div className="properties">
                    <p>TITLE : {props.selectedMovie.title}</p>
                    <p>REALEASE DATE : {props.selectedMovie.releaseDate}</p>
                    <p>RATINGS : { props.selectedMovie.rating}</p>
                </div>
            </div>
        )
    
    }

}

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetails)