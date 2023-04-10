import style from '../Card/Card.module.css';
import {Link} from 'react-router-dom';


export default function Card({id,status,name, species, gender,origin,image,onClose}) {
   return ( 
      <div className = {style.container}>
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
