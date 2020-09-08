import React from 'react';

const Button = ({ id }) => {
  const deleteCustomer = (id) => {
    console.log(id.id);
  }; 

  return(
    <button onClick={() => deleteCustomer(id)}>X</button>
  );
};

export default Button;