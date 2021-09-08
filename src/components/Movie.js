import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteMovie } from '../actions/movieActions';
import { addFavorite } from '../actions/favoriteActions';

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();
    const [ error, setError ] = useState('');

    const movie = props.movies.find(movie=>movie.id===Number(id));

    const addToFavorite = () => {
        if(props.favorites.find(item => Number(item.id) === Number(movie.id))){
            setError('The movie is already in Favorite List')
        } else {
            props.dispatch(addFavorite(movie))
        }
    }

    const deleteHandler = () => {
        props.dispatch(deleteMovie(movie.id));
        push('/movies');
    }

    if(error){
        setTimeout(() => {
            setError('');
        }, 1000);
    }

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>

                        <section>
                            <span className="m-2 btn btn-dark" onClick={addToFavorite}>Favorite</span>
                            <span className="delete" onClick={deleteHandler}><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                            <span className="favoriteError" style={{color: 'red', fontSize:'0.7rem'}}>{error}</span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = state => {
    return ({
        movies: state.movies.movies,
        favorites: state.favorites.favorites
    })
};

export default connect(mapStateToProps)(Movie);