import React from "react";

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from "axios";


class App extends React.Component {

    state = {
        movies: [
        ],
        searchQuery : ""
    }

   /* async componentDidMount(){
        const baseURL = "http://localhost:3002/movies"; //Verilerimizin olduğu URL yazıyoruz. VErilerimiz nerede? localhost3002movies in içerisinde
        const response = await fetch(baseURL);
        console.log(response) //respsonse uğruyoruz
        const data =await response.json(); //json fonksiyonu yardımıyla  json formatında dataya dönüştürüyoruz
        console.log = (data)
        this.setState({movies: data}) //setStatele state aktarıyoruz
    } */

    async componentDidMount(){
        const response = await axios.get("http://localhost:3002/movies");
       // console.log(response);
        this.setState({movies: response.data})
    }

    searchMovie = (event) => {
        this.setState({searchQuery : event.target.value} )
    }

   /* deleteMovie = (movie) => {
        const newMovieList =this.state.movies.filter(
            m => m.id !== movie.id
        );

       // this.setState({movies: newMovieList})
       this.setState( state => (
        {
            movies : newMovieList
        }
       ))
    } */

    //FETCH API
   /* deleteMovie = async (movie) => {
        const baseURL = `http://localhost:3002/movies/${movie.id}` //silme işlemi yapılacak idyi belirledik
        await fetch(baseURL, {
            method : "DELETE"
        })
        const newMovieList =this.state.movies.filter(
            m => m.id !== movie.id
        );

       // this.setState({movies: newMovieList})
       this.setState( state => (
        {
            movies : newMovieList
        }
       ))
    } */
    //AXIOS API
    deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3002/movies/${movie.id}`);
        const newMovieList =this.state.movies.filter(
            m => m.id !== movie.id
        );

       // this.setState({movies: newMovieList})
       this.setState( state => (
        {
            movies : newMovieList
        }
       ))
    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

         return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <SearchBar searchMoviep = {this.searchMovie} />
                    </div>
                </div>

                <MovieList 
                movies = {filteredMovies}
                deleteMoviep = {this.deleteMovie} />
                
            </div>
    )
    }
       
    


}
export default App;

