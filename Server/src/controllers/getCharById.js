const axios = require('axios');

const getCharById = async (req, res) =>{
    
    const URL = "https://rickandmortyapi.com/api/character/";
    try{
        const { id } = req.params;
        const { data } = await axios (`${URL}/${id}`);

        if(!data.name) throw Error (`ID: ${id}Not found`);
        const character = {
            id : data.id,
            name: data.name,
            species: data.name,
            origin: data.origin,
            image: data.image,
            gender: data.gender.name,
            status: data.status
        }
        
        return  res.status(200).json(character);
                      
     
    }catch(error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.message)
    }
}
    


module.exports = {getCharById};




// 

//     axios.get(`https://rickandmortyapi.com/api/character/${id}`) 
//     .then(({data}) =>{
//         if(data){
//             const character = {
//                 id: data.id,
//                 status: data.status,
//                 name: data.name,
//                 species: data.name,
//                 origin: data.origin?.name,
//                 image: data.image,
//                 gender: data.gender
//             };
//             res.status(200).json(character);
//         } else{
//             res.status(404).json({message: "Character not found"})
//         }
//     });

//     catch(error){
//             res.status(500).json({message: error});
//         }





// //https://rickandmortyapi.com/api/character/:id
// // este res es el que viene del servidor ya creado y response es la respuesta de la api
// const getCharById = (res, id) => { // este ID que viene por parametro me lo van a estar dando cuando se ejecute esta funcion
//     axios.get(`http://localhost:3001/rickandmorty/character/${id}?key=${Key}`)
//     .then(response => { //porque este response seria => response.data
//         const {id,name, gender, species, origin, image, status} = response.data//los datos que yo quiero sacar y es igual a donde estan esos datos
//         res.writeHead(200, {"Content-type":'application/json'})
//         res.end(JSON.stringify({id,name, gender, species, origin, image, status}))
//     })
//     .catch(error =>{
//         res.writeHead(500, {"Content-type":'text/plain'})
//         res.end(error.message)
//     })

// }


// module.exports = getCharById;

//Una vez que tienes la respuesta de tu petición crea un objeto en el que guardes las siguientes propiedades del personaje: id (lo recibes por parámetro), name, gender, species, origin, image y status.
