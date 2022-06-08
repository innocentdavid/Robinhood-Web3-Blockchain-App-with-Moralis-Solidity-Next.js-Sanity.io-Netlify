import { createContext, useContext, useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import {
  dogeAbi,
  daiAbi,
  linkAbi,
  usdcAbi,
  dogeAddress,
  linkAddress,
  daiAddress,
  usdcAddress,
} from '../lib/constants'

export const RobinhoodContext = createContext()

export const useAuth = () => useContext(RobinhoodContext)

export const RobinhoodProvider = ({children}) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [formattedAccount, setFormattedAccount] = useState('')

  const { isAuthenticated, authenticate, user, logout, Moralis, enableWeb3 } = useMoralis()

  useEffect(() => {
    if(isAuthenticated) {
      const account = user.get('ethAddress');
      let fAccount = account.slice(0, 4) + '...' + account.slice(-4);
      setFormattedAccount(fAccount);
      account && setCurrentAccount(account);
    }
  }, [isAuthenticated, enableWeb3])
  
  
  useEffect(() => {
    if(!currentAccount) return
    ;(async () => {
      const response = await fetch('/api/createUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ walletAddress: currentAccount }),
      })
      console.log(response)
      const data = await response?.json()
      console.log(data)
    })
  }, [currentAccount])

  const connectWollet = () => {
    authenticate()
  }

  const signOut = () => {
    logout()
  }

  return (
    <RobinhoodContext.Provider value={{
      connectWollet, signOut, currentAccount, isAuthenticated, formattedAccount,
    }}>
      {children}
    </RobinhoodContext.Provider>
  )
}