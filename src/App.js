import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";

function App() {
  const [account, setAccount] = useState("");
  const [nftContract, setNftContract] = useState<Contract | null>(null);
  const [tokenId, setTokenId] = useState("");
  const [nftData, setNftData] = useState("");

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          const contractAddress = "0x1234..."; // Адрес вашего NFT-контракта
          const contract = new web3.eth.Contract(NFT_ABI, contractAddress);
          setNftContract(contract);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("No web3 provider detected");
      }
    };
    initWeb3();
  }, []);

  const handleTokenIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTokenId(event.target.value);
  };

  const handleNftDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNftData(event.target.value);
  };

  const handleCreateNft = async () => {
    if (nftContract) {
      try {
        const result = await nftContract.methods.createNFT(nftData).send({
          from: account,
        });
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleGetNftData = async () => {
    if (nftContract) {
      try {
        const result = await nftContract.methods.getNFTData(tokenId).call();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h1>Create and view NFTs</h1>
      <p>Your account: {account}</p>
      <div>
        <label>
          Token ID:
          <input type="text" value={tokenId} onChange={handleTokenIdChange} />
        </label>
        <button onClick={handleGetNftData}>Get NFT data</button>
      </div>
      <div>
        <label>
          NFT data:
          <input type="text" value={nftData} onChange={handleNftDataChange} />
        </label>
        <button onClick={handleCreateNft}>Create NFT</button>
      </div>
    </div>
  );
}

export default App;

