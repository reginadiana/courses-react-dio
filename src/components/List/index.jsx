import React from 'react';
import listCustomers from '../../mocks/Customers';
import Button from '../Button/index';

const List = () => {

  const renderCustomers = (customer) => {
    return( 
      <div key={`customer-${customer.id}`}>
        <li>{customer.name} <Button id={customer.id}/> </li>
        {customer.skills.map(renderSkills)}
      </div>
    );
  };

  const renderSkills = (skill, index) => <li key={index}>{skill}</li>;

  return(
    <ul>
      {listCustomers.map(renderCustomers)}
    </ul>
  );
};

export default List;