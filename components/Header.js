import React, { useContext } from 'react'
import logoImg from '../assets/main-512x512.png'
import Image from 'next/image'
import { AiOutlineSearch } from "react-icons/ai";
import { RobinhoodContext } from '../context/RobinhoodContext';

const styles = {
  logo: 'object-cover cursor-pointer',
  menuItem: 'cursor-pointer font-bold hover:text-green-500 duration-300'
}

const Header = () => {
  const {
    signOut,
    isAuthenticated,
    formattedAccount,
  } = useContext(RobinhoodContext)

  return (
    <div className="flex w-screen h-16 bg-black px-24 py-3 mb-5 fixed">
      <div className="leftHeader flex flex-1">
        <Image src={logoImg} alt="logo" width={30} height={100} className={styles.logo} />
      </div>
      <div className="searchWrapper flex flex-1">
        <div className="searchInputContainer text-white items-center flex flex-1 -ml-64 border border-gray-400 mr-64 hover:bg-[#1E2123] duration-300 p-3 rounded-lg">
          <AiOutlineSearch className="searchIcon text-gray-400 text-3xl mr-3" />
          <div className="searchInputWrapper text-gray-400 text-lg w-full">
            <input placeholder="Search..." className="searchInput bg-transparent outline-none w-full" />
          </div>
        </div>
      </div>
      <div className="rightHeader flex items-center justify-end text-white gap-8">
        <div className={styles.menuItem}>Rewards</div>
        <div className={styles.menuItem}>Portfolio</div>
        <div className={styles.menuItem}>Cash</div>
        <div className={styles.menuItem}>Messages</div>

        {isAuthenticated && (<>
          <div className={styles.menuItem}>{formattedAccount}</div>
          <div className={styles.menuItem} onClick={() => signOut()}>Logout</div>
        </>)}

        {!isAuthenticated && (<>
          <div className={styles.menuItem} onClick={() => connectWollet()}>Login</div>
        </>)}
      </div>
    </div>
  )
}

export default Header
