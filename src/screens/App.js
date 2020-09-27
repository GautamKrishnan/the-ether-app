import React , {useState, useEffect} from 'react';
import '../styles/App.css';
import {getCurrentBalance, getCurrentBlock} from '../api/EthereumAPI';
import * as Constants from '../utils/Constants'

const ETHEREUM_LOGO = require('../assets/Ethereum_Classic_Logo.svg');

function App() {
  const [contractAddress,setcntAddress] = useState(Constants.DEFAULT_ADDRESS);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [currentBlockHeight, setCurrentBlockHeight] = useState(0);


  useEffect(() => {
      ( async () => {
          const [balance,block] = await Promise.all([
              getCurrentBalance(contractAddress),
              getCurrentBlock(),
          ]);
          setCurrentBalance( (parseInt(balance, 16) * Math.pow(10,(-18))).toFixed(9));
          setCurrentBlockHeight( parseInt(block, 16));
      })();
  },[contractAddress]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={ETHEREUM_LOGO} className="App-logo" alt="logo" />
        <div className="Div-text">
            <p className="Align-left">
                The address being checked is
            </p>
            <p className="Align-right">
                {contractAddress}
            </p>
        </div>
        <div className="Div-text">
            <p className="Align-left">
                whose current Ether balance is
            </p>
            <p className="Align-right">
                {currentBalance}
            </p>
        </div>
        <div className="Div-text">
            <p className="Align-left">
                The current Ethereum block height is
            </p>
            <p className="Align-right">
                {currentBlockHeight}
            </p>
        </div>
      </header>
    </div>
  );
}

export default App;
