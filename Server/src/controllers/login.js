const users = require('../utils/users');

const login = (req, res) =>{
    const { email, password} = req.query;

    if(email && password){
        const loginFilter = users.filter( log => log.email === email && log.password === password);
        
        loginFilter.length
        ? res.status(200).json({ access : true})
        : res.status(200).json({ access : false})
    }
}
module.exports = {login};