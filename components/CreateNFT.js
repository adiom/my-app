import React, { useState } from 'react';
import { createNFT } from '../utils/contract';

const CreateNFT = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNFT(name, description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Create NFT</button>
    </form>
  );
};

export default CreateNFT;

