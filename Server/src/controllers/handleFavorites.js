let handleFavorites = [];

const postFav = (req, res) =>{
    try {
        const character  = req.body;
        const characterFound = handleFavorites.find(fav => fav.id === character.id)
         if(characterFound) throw Error ('El personaje ya existe en favoritos')
         handleFavorites.push(character);
         
         return res.status(200).json(handleFavorites);
        
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

const deleteFav = (req, res) =>{
    const { id } = req.params;

    let handleFavorites = handleFavorites.filter((favorite) => favorite.id !== +id)
    // let filterCharacterId = handleFavorites.filter( fav => fav.id !== +id)
    
    // if(handleFavorites.length === filterCharacterId.length){
    //     handleFavorites = filterCharacterId;
    // }
    return res.status(200).json(filterCharacterId)
}

module.exports = {postFav, deleteFav};