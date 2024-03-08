import React from 'react'
import PCImage from '../assets/herosectionassets/pc.png'

function RelatedDealContainer() {
  return (
    <div className='flex flex-col w-[333px]  bg-white rounded-[12px] p-3'>
        <div className='flex flex-col items-center gap-10'>
            <img src={PCImage} alt="pc" className='w-[141px] h-[103px]'/>


            <div className='flex flex-col gap-2'>
                <div className='flex gap-3 text-[14px]'>
                    <div className='text-[#074786] px-2 py-1 rounded-[8px] bg-[#F2F4F7] flex justify-center items-center'>20% Off</div>
                    <div className='text-[#074786] px-2 py-1 rounded-[8px] bg-[#F2F4F7] flex justify-center items-center'>Limited time </div>
                </div>

                <div className='text-center'>Webbuilder 1</div>


                <div>Computer  Modern clasic with wix support</div>

                <div className='flex gap-2 items-end'>
                    <div className='text-[#5C6874] text-[20px]'>$39.96</div>
                    <div className='text-[#9FA9B3] text-[14px]'>$49.96</div>
                    <div className='text-[#EF4C5D] text-[13px]'>(20% Off)</div>
                </div>

                <div className='flex justify-center items-center bg-[#1B88F4] rounded-[12px] w-full h-[48px] text-white mb-3'>
                    View
                </div>

            </div>
        </div>
    </div>
  )
}

export default RelatedDealContainer