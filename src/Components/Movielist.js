import React from 'react'
import MovieCard from './MovieCard'
import MovieFilter from './MovieFilter'
import { useState} from 'react';


function MovieList({films}) {
    const[text,settext]=useState('')
    const[rate,setrate]=useState('')
    const filterText=(text)=>{
        settext(text)

    }
    const filterRate=(rate)=>{
        setrate(rate)

    }
    console.log(text)
    return (
        <div>
        <MovieFilter filterText={filterText} filterRate={filterRate} />
        <div className="container">
            {films.filter(el=>el.title.toLowerCase().includes(text.toLowerCase())&& el.rate>=rate).map(el=><MovieCard film={el}/>)}
        </div>
        </div>
    )
}

export default MovieList