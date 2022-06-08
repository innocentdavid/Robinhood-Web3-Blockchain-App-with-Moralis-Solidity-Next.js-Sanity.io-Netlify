const styles = {
  wrapper: 'w-screen h-screen flex flex-col'
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
     {/* <Header /> */}
     <div className={styles.maniContainer}>
       <div className={styles.portfolioAmountContainer}>
        <div className={styles.portfolioAmount}>23 ETH</div>
        <div className={styles.portfolioAmount}>
          +0.0008(+0.57%)
          <span className={styles.pastHour}>Past Hour</span>
        </div>
       </div>
       div  
     </div>
    </div>
  )
}
