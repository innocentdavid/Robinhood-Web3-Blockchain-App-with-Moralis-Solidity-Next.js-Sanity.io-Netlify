const styles = {
  options: 'w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white',
}

export default function BuyTokens() {
  const mint = () => { }

  return (
    <div className="formContainer flex items-center">
      <div className="flex h-full w-full flex-col items-center">
        <select name="" id="" className="select w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white">
          <option value="BTC" className={styles.options}>BTC</option>
          <option value="ETH" className={styles.options}>ETH</option>
          <option value="SOL" className={styles.options}>SOL</option>
          <option value="USDC" className={styles.options}>USDC</option>
        </select>
        <input
          className="inputAmount w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white"
          placeholder="Amount..."
          type="number" />
        <button className="noticeCTA font-bold text-green-500 cursor-pointer mt-5" type="submit" onClick={() => mint()}>Send</button>
      </div>
    </div>
  )
}
