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

const URL_BASE = 'http://be-a-rym.up.railway.app/api/character';
const API_KEY = '97d67353799d.b43696302e658f63bccb';


function App() {
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   const EMAIL = "caroquinto@gmail.com";
   const PASSWORD = "krisCaro33"

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      } else{
         alert("Credenciales Invalidas")
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access,navigate]);
      
   const { pathname } = useLocation();
   
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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
