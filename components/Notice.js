export default function Notice() {
  return (
    <div className="notice flex flex-1 flex-col border border-[#30363b] mx-11 my-4 p-5">
      <div className="noticeContainer flex-1">
        <div className="noticeTitle text-gray-500">Fund Your Account</div>
        <div className="noticeMessage text-white font-bold">Your bank account is ready! Fund your Robinhood account to begin trading.</div>
      </div>
      <div className="noticeCTA font-bold text-green-500 cursor-pointer mt-5">Add Funds</div>
    </div>
  )
}
