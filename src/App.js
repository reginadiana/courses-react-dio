import React from 'react';

// mostrar as slikks
// mostrar um botao com o id de cada cliente

const listCustomers = [
  {
    id: '1',
    name: 'Diana Regina',
    skills: ['React, Node, Html']
  },
  {
    id: '2',
    name: 'Bruno Cordeiro',
    skills: []
  }
];

const App = () => { 
  const renderCustomers = (customer) => {
    return( 
      <div key={`customer-${customer.id}`}>
        <li>{customer.name} <button onClick={() => deleteCustomer(customer.id)}>X</button></li>
        {customer.skills.map(renderSkills)}
      </div>
    );
  };

  const deleteCustomer = (id) => {
    alert(id);
  }; 

  const renderSkills = (skill, index) => <li key={index}>{skill}</li>;

  return (
    <div className="App">
      <ul>
        {listCustomers.map(renderCustomers)}
      </ul>
    </div>
  );
};

export default App;
