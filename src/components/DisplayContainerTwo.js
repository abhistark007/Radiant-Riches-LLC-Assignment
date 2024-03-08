import React from 'react'
import PCImage from '../assets/herosectionassets/pc.png'
import ArrowDown from '../assets/herosectionassets/adown.png'
import Star from '../assets/herosectionassets/star.png'
import Tick2Image from '../assets/herosectionassets/tick2.png'
import TrophyImage from '../assets/herosectionassets/trophy.png'
import CorrectImage from '../assets/herosectionassets/correct.png'

function DisplayContainerTwo(props) {
  return (
    <div className='max-lg:flex-col max-lg:h-auto w-[80%] h-[436px] bg-white  m-auto  rounded-[12px] flex relative font-["Inter"] items-center  pl-10 pr-5 gap-10 mb-10'>
    {/* Floating div 1 */}
    <div className='absolute z-10 w-[136px] h-[34px] bg-[#FF7724] text-white -left-[6px] shadow-lg -top-4 rounded-r-[8px] flex justify-between items-center px-2 py-2'>
        <img src={TrophyImage} alt="trophy" className='w-[20px] h-[20px]'/>
        <div>Best Choice</div>
    </div>
    {/* Floating Div 2 */}
    <div className='max-lg:top-5 absolute flex z-20 justify-center items-center w-[44px] h-[44px] rounded-[50%]  -left-4 text-[#626E79]'>
        {props.number}
    </div>
    
    {/* left */}
    <div className='max-sm:w-[90%] flex flex-col w-[300px]  items-center'>
        <img src={PCImage} alt="pc" className='w-[141px] h-[103px]'/>
        <div className='text=[13px] text-[#626E79]'>{props.name}</div>
    </div>

    {/* Middle */}
    <div className='flex flex-col gap-3 justify-center h-full'>
        <div>{props.des}</div>
        <div className='font-bold'>Main highlights</div>
        <div className='pl-6 bg-[#FFF4ED] rounded-[12px] flex flex-col gap-2 pt-2 pb-2'>
            <div className='flex gap-3'>
                <div className='bg-[#FFFFFF] rounded-[4px] text-[#1B88F4] p-1'>9.9</div>
                <div>building responsive</div>
            </div>

            <div className='flex gap-3'>
                <div className='bg-[#FFFFFF] rounded-[4px] text-[#1B88F4] p-1'>8.9</div>
                <div>Cool</div>
            </div>

            <div className='flex gap-3'>
                <div className='bg-[#FFFFFF] rounded-[4px] text-[#1B88F4] p-1'>8.9</div>
                <div>Docs</div>
            </div>
            
        </div>

        <div className='flex flex-col gap-3'>
            <div>Why we love it</div>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <img src={CorrectImage} alt="correct" />
                    <div>Documentation</div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={CorrectImage} alt="correct" />
                    <div>Easy Use</div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={CorrectImage} alt="correct" />
                    <div>Out of box</div>
                </div>
            </div>
        </div>

        <div className='flex items-center '>
            <div className='text-blue-600'>Show more</div>
            <img src={ArrowDown} alt="adown" className='w-[16px] h-[16px]'/>
        </div>
    </div>


    {/* Right */}
    <div className='flex flex-col  items-center justify-between  h-full'>
        {/* top */}
        <div className='flex flex-col items-center w-[135px] h-[118px] bg-[#F3F9FF] rounded-b-[12px] relative'>
            <img src={Tick2Image} alt="tick2" className='w-[10px] h-[10px] absolute top-1 right-[25%]'/>
            <div className='text-[32px] text-[#074786]'>{props.rating}</div>
            <div className='text-[#074786]'>{props.remark}</div>
            <img src={Star} alt="star" className='w-[66px] h-[11px]'/>
        </div>


        {/* bottom */}
        <div className='flex justify-center items-center bg-[#1B88F4] rounded-[12px] w-[232px] h-[48px] text-white mb-3'>
            View
        </div>

    </div>


</div>
  )
}

export default DisplayContainerTwo