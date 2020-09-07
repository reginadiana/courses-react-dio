import React from 'react';

const buttonHistoryClient = <button>Histórico de cliente</button>;
const buttonAddClient = <button>Cadastrar cliente</button>;
const hasCustomer = true;

const App = () => {

  const renderShowHistory = () =>
    <div>Historico de clientes, clique abaixo:
      {buttonHistoryClient}
    </div>;

  const renderAddCustomer = () =>
    <div>Clique abaixo para cadastrar um cliente:
      {buttonAddClient}
    </div>;

  const customer = 'Diana Regina';

  const showCustomer = () => hasCustomer ? customer : 'Sem cliente';

  return (
    <div className="App">
      {showCustomer()}
      {hasCustomer ? renderShowHistory() : renderAddCustomer() }
    </div>
  );
};

export default App;
