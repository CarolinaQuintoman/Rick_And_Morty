import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

//const URL_BASE = 'http://be-a-rym.up.railway.app/api/character';
//const API_KEY = '97d67353799d.b43696302e658f63bccb';

const Detail = () =>{

    const [character , setCharacter] = useState({});

    const {id} = useParams();
    //axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then (response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


     

    return(
        <div>
            <h2>{character?.name}</h2>
            <h2> {character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character.name} />
        </div>
    )
}
export default Detail; 