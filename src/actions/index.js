export const ADD_MOVIE = 'ADD_MOVIE';
// action creators
export function addMovies(movies){
  return  {
        type : ADD_MOVIE,
        movies 
      }
}