import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About.jsx'; 
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
//import Error404 from './components/Error404/Error404.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

//const URL_BASE = 'http://be-a-rym.up.railway.app/api/character';
//const API_KEY = '97d67353799d.b43696302e658f63bccb';


function App() {
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   //const EMAIL = "caroquinto@gmail.com";
   //const PASSWORD = "krisCaro33"

   function login(userData) { //conectando con backEnd
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access,navigate]);
      
   const { pathname } = useLocation();
   //axios(`${URL_BASE}/${id}?key=${API_KEY}`)
   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data)
      .then(( data ) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      const charactersFilter = characters.filter(characters =>
         characters.id !== id)
         setCharacters(charactersFilter)
   }
   return (
      <div>
         {
            pathname !== "/" && <Nav onSearch={onSearch}/>
         }
         
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/Home' element={<Cards characters={characters}  onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorite' element={<Favorites/>} />

            {/* <Route path='*' element={<Error404/>}/> */}
         </Routes>
         
      </div>
   );
}

export default App;
