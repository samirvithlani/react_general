import axios from 'axios';
import React, { useState } from 'react'
import { MovieDetail } from './MovieDetail';

export const SearchMovie = () => {


    const [movieName, setmovieName] = useState('')
    const [movieId, setmovieId] = useState(undefined)

    async function search(e) {

        e.preventDefault();
        console.log(movieName)
        //post
        const res = await axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movieName}`
            , {
                headers: {
                    'x-rapidapi-host': '',
                    'x-rapidapi-key': ''
                }


            }
        )
        //contextApi ->
        //props
        console.log(res.data.titles[0].id)
        setmovieId(res.data.titles[0].id)

    }

    //fetch vs axios
    return (
        <div>
            <form onSubmit={search}>
                <div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" onChange={(e) => { setmovieName(e.target.value) }} />
                        <label class="form-label" for="form1">Search</label>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-search">Search</i>
                    </button>

                </div>
            </form>
            {
                movieId!== undefined &&
                <MovieDetail id={movieId} />
            }
        </div>
    )
}
