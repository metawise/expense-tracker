import React from 'react';
import './App.css';
import Header from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState'
import { TransactionList } from './components/TransactionList';


function App() {
  return (
    <GlobalProvider className="App">
      <Header/>
      <Balance/>
      <TransactionList/>
      <IncomeExpenses/>
      <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
