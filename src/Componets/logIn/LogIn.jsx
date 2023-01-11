import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../../store/actions';
import { Button, FormGroup, Input } from '@mui/material';
import { Link } from 'react-router-dom';
import './Login.css';
import { MAIN } from '../layout/paths';

function LogIn() {
  const dispatch = useDispatch();
  const nameUser = useSelector((state) => state.reducerRickMorty.nameUser);
  const [user, setUser] = useState('');

  const isNameUser = nameUser.length > 0;

  function generatesUserName(event) {
    event.preventDefault();
    dispatch(setUserName(user));
    setUser((prev) => (prev = ''));
  }

  function getValueInputUserName(e) {
    setUser(() => e.target.value);
  }
  return (
    <>
      <div className='page-login _container'>
        {isNameUser ? (
          <div className='page-you-registered'>
            <h2 style={{ color: 'black', fontSize: 18, margin: 20 }}>
              Вы Зарагестрированы
            </h2>
            <Button variant='contained'>
              <Link to={MAIN}>На галвную</Link>
            </Button>
          </div>
        ) : (
          <FormGroup sx={{ width: 300 }}>
            <h2 style={{ color: 'black', fontSize: 18, margin: 20 }}>
              Чтобы писать комментарии , Вам необходимо пройти регистрацию
            </h2>
            <Input
              placeholder='Введите имя'
              type='text'
              id='name'
              name='name'
              value={user}
              onChange={getValueInputUserName}
            />
            <Button onClick={generatesUserName}>Зарагестрироваться</Button>
          </FormGroup>
        )}
      </div>
    </>
  );
}

export default LogIn;
