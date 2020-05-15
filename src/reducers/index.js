import {ADD_MOVIE} from '../actions'
const moviesFav = {
    list : [] ,
    favourites : []
}
export default function movies(state = moviesFav, action){
    if(action.type === ADD_MOVIE){
    return{
        ...state,
        list: action.movies
    }
    }
    return state;
}

