import React from 'react'
import { useSelector } from 'react-redux'
import style from '../Card/Card.module.css';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const {myFavorites} = useSelector( state => state)

  return (
    <div>
        {
            myFavorites.map((character) =>{
                return(
                    <div className = {style.container}>
         
                        
         
                        <Link to={`/detail/${character.id}`}>
                            <h2 className={style.h2}>{character.name}</h2>
                        </Link>
         
                        
                        <h2>{character.species}</h2>
                        <h2>{character.gender}</h2>
                        <h2>{character.origin}</h2>
                        <img src={character.image} alt={character.image} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Favorites