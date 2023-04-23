let handleFavorites = [];

const postFav = (req, res) =>{
 const character  = req.body;
  
  handleFavorites.push(character)
  
  res.json(handleFavorites);
}

const deleteFav = (req, res) =>{
    const { id } = req.params;

    let filterCharacterId = handleFavorites.filter( fav => fav.id !== Number(id))

    if(handleFavorites.length === filterCharacterId.length){
        handleFavorites = filterCharacterId;
    }
    res.status(200).json({handleFavorites})
}

module.exports = postFav, deleteFav;