import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import style from '../Card/Card.module.css';
import { Link } from 'react-router-dom';
import {  filterCards, orderCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';


const Favorites = () => {
    const {myFavorites} = useSelector( state => state);
    const dispatch = useDispatch();
    const[aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch( orderCards(event.target.value));
        setAux(!aux);
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

  return (
    <div>
        <select onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
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