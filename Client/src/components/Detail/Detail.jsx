import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from './Detail.module.css';

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
        <div className={style.detail}>
         <div className={style.box}>
            <div className={style.boxImg}>
                <img src={character?.image} alt={character.name} />
            </div>
            <div className={style.boxText}>
             <h1>Character: {character?.name}</h1>
             
             <h2>Status:  {character?.status}</h2>
             <h2>Species:{character?.species}</h2>
             <h2>Gender:{character?.gender}</h2>
             <h2>Origin:{character?.origin?.name}</h2>
            </div>
         </div>
        </div>
    )
}
export default Detail; 