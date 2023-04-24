import style from './Card.module.css';
import {Link} from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


export default function Card({id,status,name, species, gender,origin,image,onClose}) {
   const dispatch = useDispatch();
   const myFavorites= useSelector( state => state.myFavorites);

   const [ isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(id))
      }
      else {
         setIsFav(true);
         dispatch(addFav({id,status,name, species, gender,origin,image,onClose}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id]);

   return ( 
      <div className = {style.container}>
         {
            isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={style.button} onClick={() => onClose(id)}>X</button>
         
         <Link to={`/detail/${id}`}>
            <h2 className={style.h2}>{name}</h2>
         </Link>
         
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}

// export function mapDispatchToProps(dispatch) {
//    return{
//       addFav: () => { dispatch(addFav())},
//       removeFav: (id) =>{ dispatch(removeFav(id))}
//    }
// } Componente de clases 

