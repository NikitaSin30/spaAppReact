import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';
import { MAIN, REMOTED_CARDS, LOGIN } from '../layout/paths';

function Header() {
   const nameUser = useSelector((state) => state.reducerRickMorty.nameUser);
   const isNameUser = nameUser.length > 0;

   return (
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
         <AppBar position="static" sx={{ minHeight: 50 }}>
            <div className="_container">
               <div className="appBar">
                  <Link to={REMOTED_CARDS}>Удаленные</Link>
                  <Link to={MAIN}>Главная</Link>
                  {isNameUser ? null : <Link to={LOGIN}>LogIn</Link>}
               </div>
            </div>
         </AppBar>
      </Box>
   );
}

export default Header;
