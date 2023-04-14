import React, { useState } from 'react';
import { connectToMetaMask } from '../utils/web3';

const Login = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const address = await connectToMetaMask();
    setLoading(false);
    onLogin(address);
  };

  return (
    <div>
      {loading ? (
        <div>Loading MetaMask...</div>
      ) : (
        <button onClick={handleLogin}>Connect with MetaMask</button>
      )}
    </div>
  );
};

export default Login;

