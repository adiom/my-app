import React from 'react';

const NFT = ({ name, description, price, owner, onBuy }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {price} ETH</p>
      <p>Owner: {owner}</p>
      <button onClick={onBuy}>Buy NFT</button>
    </div>
  );
};

export default NFT;

