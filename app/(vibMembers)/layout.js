
const layou = ({children}) => {
  return (
    <div className='p-20'>
        <div className="bg-yellow-600 font-bold">
            <span>your are vip member</span>
        </div>
        {children}
    </div>
  )
}

export default layou