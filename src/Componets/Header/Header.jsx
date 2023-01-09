import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const nameUser = useSelector((state) => state.reducerRickMorty.nameUser);
  const isNameUser = nameUser.length > 0;

  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <AppBar position='static' sx={{ minHeight: 50 }}>
        <div className='_container'>
          <div className='appBar'>
            <Link to='/remotedCards'>Удаленные</Link>
            <Link to='/'>Главная</Link>
            {isNameUser ? null : <Link to='/login'>LogIn</Link>}
          </div>
        </div>
      </AppBar>
    </Box>
  );
}

export default Header;
