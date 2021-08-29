import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

export const MovieDetail = ({ id }) => {

    const [movieData, setmovieData] = useState('')
    useEffect(() => {
       fetchMovieDetail()
        return () => {
            
        }
    }, )

    var movieRecord = {

        id: movieData.id,
        title: movieData.title,
        year: movieData.year,
        length: movieData.length,
        rating: movieData.rating,
        poster: movieData.poster

    }

    async function fetchMovieDetail() {

    
        //contextAPI
        const res = await axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`,
            {
                headers: {
                    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
                    'x-rapidapi-key': '2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6'
                }
            }
        )
        console.log(res.data)
        setmovieData(res.data)
    }

    const style = {
        width: "18rem"
    }
    return (
        <div>

            

            <div class="card" style={style}>
                <img class="card-img-top" src={movieRecord.poster} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{movieRecord.title}</h5>
                    Duration<p class="card-text">{movieRecord.length}</p>
                    Ratings<p class="card-text">{movieRecord.rating}</p>

                </div>

            </div>

        </div>
    )
}
