import React from 'react';

function ErrorMessage() {
   const styleError = {
      fontSize: 40,
      color: 'red',
   };
   return <h1 style={styleError}>Ошибка зашрузки.Подпробуйте позже</h1>;
}

export default ErrorMessage;
