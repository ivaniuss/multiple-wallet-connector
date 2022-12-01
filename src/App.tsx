import { useAccount, useContractWrite } from 'wagmi'
import { writeContract } from '@wagmi/core'
// import wagmigotchiABI from "./abi.json"
import { Account, Connect, NetworkSwitcher } from './components'

const wagmigotchiABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caretaker","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CaretakerLoved","type":"event"},{"inputs":[],"name":"clean","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAlive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoredom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getHunger","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSleepiness","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUncleanliness","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"love","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"play","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sleep","outputs":[],"stateMutability":"nonpayable","type":"function"}]



// const data = await writeContract(config)

 

export function App() {
  const { isConnected } = useAccount()

  const sendTx = async () => {

    const { hash } = await writeContract({
      mode: 'recklesslyUnprepared',
      abi: wagmigotchiABI,
      address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
      functionName: 'feed',
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
    </>
  )
}
