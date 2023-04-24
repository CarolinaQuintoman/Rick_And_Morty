import React from 'react';
import Card from '../Card/Card';


export default function Cards({characters, onClose}) {
   
   return <div>
         {
            characters.map(({id,status,name, species, gender,origin,image}) =>{
               return (
                  <Card key = {id}
                        id = {id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin.name}
                        image={image}
                        onClose={onClose}
                  />
               )
            })
         }
   </div>


}