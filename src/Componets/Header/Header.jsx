import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
   return (
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
         <AppBar position="static" sx={{ minHeight: 50 }}>
            <div className="appBar">
               <Link to="/remotedCards">Удаленные</Link>
               <Link to="/">Главная</Link>
               <Link to="/login">LogIn</Link>

            </div>
         </AppBar>
      </Box>
   );
}

export default Header;
