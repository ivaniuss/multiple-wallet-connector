import { useAccount, useContractWrite, useContractRead } from 'wagmi'
import { writeContract, readContract, getProvider } from '@wagmi/core'
import contract  from"./SaleUtopiaNFTV2.json";
import { Account, Connect, NetworkSwitcher } from './components'
import { ethers } from "ethers";
 

export function App() {
  const { isConnected } = useAccount()
  const provider = getProvider()

const contractabi = [{"inputs":[{"internalType":"contract IUtopia","name":"_utopia","type":"address"},{"internalType":"address","name":"_treasuryAddr","type":"address"},{"internalType":"address","name":"_priceFeedAddress","type":"address"},{"internalType":"uint8","name":"_currentPhaseId","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_priceInUSDPerNFT","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_priceInUSDPerNFTWithoutWhiteList","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_maxTotalSales","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_maxSalesPerWallet","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_whiteListRequired","type":"bool"},{"indexed":false,"internalType":"bool","name":"_phasePriceInUSD","type":"bool"},{"indexed":false,"internalType":"uint256","name":"_priceInWeiPerNFT","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_priceInWeiPerNFTWithoutWhiteList","type":"uint256"}],"name":"AddPhase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"quantity","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"quantity","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"BuyWithCreditCard","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"_phaseId","type":"uint8"}],"name":"ChangeCurrentPhase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_priceFeedAddress","type":"address"}],"name":"ChangePriceFeedAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"_phaseId","type":"uint8"},{"indexed":true,"internalType":"uint256","name":"_priceInUSDPerNFT","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_priceInUSDPerNFTWithoutWhiteList","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_maxTotalSales","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_maxSalesPerWallet","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_whiteListRequired","type":"bool"},{"indexed":false,"internalType":"bool","name":"_phasePriceInUSD","type":"bool"},{"indexed":false,"internalType":"uint256","name":"_priceInWeiPerNFT","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_priceInWeiPerNFTWithoutWhiteList","type":"uint256"}],"name":"EditPhase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_priceInUSDPerNFT","type":"uint256"},{"internalType":"uint256","name":"_priceInUSDPerNFTWithoutWhiteList","type":"uint256"},{"internalType":"uint256","name":"_maxTotalSales","type":"uint256"},{"internalType":"uint256","name":"_maxSalesPerWallet","type":"uint256"},{"internalType":"bool","name":"_whiteListRequired","type":"bool"},{"internalType":"bool","name":"_phasePriceInUSD","type":"bool"},{"internalType":"uint256","name":"_priceInWeiPerNFT","type":"uint256"},{"internalType":"uint256","name":"_priceInWeiPerNFTWithoutWhiteList","type":"uint256"}],"name":"addPhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"allowlistMerkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"buyWithCreditCard","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_priceFeedAddress","type":"address"}],"name":"changePriceFeedAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentPhaseId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_phaseId","type":"uint8"},{"internalType":"uint256","name":"_priceInUSDPerNFT","type":"uint256"},{"internalType":"uint256","name":"_priceInUSDPerNFTWithoutWhiteList","type":"uint256"},{"internalType":"uint256","name":"_maxTotalSales","type":"uint256"},{"internalType":"uint256","name":"_maxSalesPerWallet","type":"uint256"},{"internalType":"bool","name":"_whiteListRequired","type":"bool"},{"internalType":"bool","name":"_phasePriceInUSD","type":"bool"},{"internalType":"uint256","name":"_priceInWeiPerNFT","type":"uint256"},{"internalType":"uint256","name":"_priceInWeiPerNFTWithoutWhiteList","type":"uint256"}],"name":"editPhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getLatestPrice","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"phasesInfo","outputs":[{"internalType":"uint256","name":"priceInUSDPerNFT","type":"uint256"},{"internalType":"uint256","name":"priceInUSDPerNFTWithoutWhiteList","type":"uint256"},{"internalType":"uint256","name":"maxTotalSales","type":"uint256"},{"internalType":"uint256","name":"maxSalesPerWallet","type":"uint256"},{"internalType":"bool","name":"whiteListRequired","type":"bool"},{"internalType":"bool","name":"phasePriceInUSD","type":"bool"},{"internalType":"uint256","name":"priceInWeiPerNFT","type":"uint256"},{"internalType":"uint256","name":"priceInWeiPerNFTWithoutWhiteList","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"phasesTotalSales","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"phasesWalletSales","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftAddress","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"recoverERC721SafeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftAddress","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"recoverERC721TransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_allowlistMerkleRoot","type":"bytes32"}],"name":"setAllowlistMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_currentPhaseId","type":"uint8"}],"name":"setCurrentPhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasuryAddr","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokensId","type":"uint256[]"},{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"transferGuardedNfts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"utopia","outputs":[{"internalType":"contract IUtopia","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawMoney","outputs":[],"stateMutability":"nonpayable","type":"function"}]
      
  
  const getContractValue = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contractData = new ethers.Contract(
      '0x3fdde76377dD00575dfe6320bDf92688D7fB8B30', 
      contract.abi, 
      provider
      // getProvider()
    );
    const tokenName = await contractData.getLatestPrice();
    console.log('tokennameeeeee', tokenName)
  }
    
  const sendTx = async () => {

  const HASHZERO = "0x0000000000000000000000000000000000000000000000000000000000000000"
  const { hash } = await writeContract({
    mode: 'recklesslyUnprepared',
    abi: contractabi,
    address: '0x3fdde76377dD00575dfe6320bDf92688D7fB8B30',
    functionName: 'buyWithCreditCard',
    args: [
      1, "0x65AE85Dfa2b6be89F0e31E171A99b2F5981B4d58", [HASHZERO]
    ]
  })
  console.log('hash', hash)
}

  return (
    <>
      <h1>wagmi + Vite</h1>

      <Connect />

      {isConnected && (
        <>
          <Account />

          <div>switch to another network</div>
          <NetworkSwitcher />

          
          <button onClick = {() => sendTx()} >Call to contract</button>
        </>
      )}
      <button onClick = {() => getContractValue()} >getContractValue</button>
    </>
  )
}
