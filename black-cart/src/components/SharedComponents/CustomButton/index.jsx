import React from 'react'

function CustomButton({btnText,mt}) {
  return (
    <button className = {`bg-[#FA8232] cursor-pointer hover:bg-transparent hover:border-[1px] hover:border-[#FA8232] hover:text-[#FA8232] transition-all delay-150 rounded-[5px] text-[16px] font-medium w-full md:w-[190px] h-[56px] text-white mt-[${mt ? mt : 0}] `}>
      {btnText}
    </button>
  )
}

export default CustomButton