import React, { useEffect, useState } from 'react';
import { getNFTs, buyNFT } from '../utils/contract';
import NFT from './NFT';

const NFTList = () => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const nfts = await getNFTs();
      setNFTs(nfts);
    };
    fetchNFTs();
  }, []);

  const handleBuy = async (nftId, price) => {
    await buyNFT(nftId, price);
    const updatedNFTs = await getNFTs();
    setNFTs(updatedNFTs);
  };

  return (
    <div>
      {nfts.map((nft) => (
        <NFT
          key={nft.id}
          name={nft.name}
          description={nft.description}
          price={nft.price}
          owner={nft.owner}
          onBuy={() => handleBuy(nft.id, nft.price)}
        />
      ))}
    </div>
  );
};

export default NFTList;
``

