import React , {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import {getCurrentBalance, getCurrentBlock} from '../api/EthereumAPI';
import * as Constants from '../utils/Constants'

function App() {
  const [contractAddress,setcntAddress] = useState(Constants.DEFAULT_ADDRESS);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [currentBlockHeight, setCurrentBlockHeight] = useState(0);


  useEffect(async() => {
      const [balance,block] = await Promise.all([
          getCurrentBalance(contractAddress),
          getCurrentBlock(),
      ]);
      setCurrentBalance( parseInt(balance, 16));
      setCurrentBlockHeight( parseInt(block, 16));
  },[]);

  console.log(currentBalance);
  console.log(currentBlockHeight);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        The address being checked is {contractAddress}
        </p>
        <p>
         whose current ether balance is {currentBalance}
        </p>
        <p>
         The current Ethereum block height is {currentBlockHeight}
        </p>
      </header>
    </div>
  );
}

export default App;
