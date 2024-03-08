import React from 'react'
import Tick1Image from '../assets/herosectionassets/tick1.png'
import Tick2Image from '../assets/herosectionassets/tick2.png'
import CategoryBtn from './CategoryBtn'
import Vector from '../assets/herosectionassets/Vector.png'
import DisplayContainer from './DisplayContainer'
import DisplayContainerTwo from './DisplayContainerTwo'
import RelatedDealContainer from './RelatedDealContainer'

function HeroSection() {
    return (
        <div className='w-full bg-[#FBFCFD] font-["Inter"] '>
            <div className='text-[48px] text-[#2C384A] font-[400] leading-[60px] w-[80%]  m-auto pt-5 pb-2 '>Best Website builders in the US</div>

            <div className='max-sm:flex-col max-sm:items-start max-sm:gap-6 border-b-[2px] border-t-[2px] px-2 py-2 border-[#E1E4E6] flex justify-between items-center w-[80%]  m-auto'>
                {/* Left Content */}
                <div className='flex gap-2 items-center max-sm:hidden'>
                    <img src={Tick1Image} alt="tick1" className='w-[20px] h-[20px]' />
                    <div>Last Updated</div>
                    <div>-</div>
                    <div>February 22, 2020</div>
                    <img src={Tick2Image} alt="tick2" className='w-[20px] h-[20px]' />
                    <div>Advertising Disclosure</div>
                </div>


                {/* Right Content */}
                <div>
                    <select name="category" id="cat" className='bg-[#FBFCFD]'>
                        <option value="Top Rated">Top Rated</option>
                        <option value="Most Liked">Most Liked</option>
                        <option value="Recent Build">Recent Build</option>
                    </select>
                </div>

            </div>


            <div className='flex flex-wrap gap-2 w-[80%]  m-auto mt-3 pb-3'>
                <CategoryBtn title={"Tools"} />
                <CategoryBtn title={"AWS Builder"} />
                <CategoryBtn title={"Start Build"} />
                <CategoryBtn title={"Build Supplies"} />
                <CategoryBtn title={"Tooling"} />
                <CategoryBtn title={"BlueHosting"} />
            </div>


            <div className='max-sm:flex-wrap flex w-[80%]  m-auto mt-3 pb-3 gap-3 items-center'>
                <div>Home</div>
                <img src={Vector} alt="vector" className='w-[10px] h-[8.25px]' />
                <div>Hosting for all</div>
                <img src={Vector} alt="vector" className='w-[10px] h-[8.25px]' />
                <div>Hosting</div>
                <img src={Vector} alt="vector" className='w-[10px] h-[8.25px]' />
                <div>Hosting6</div>
                <img src={Vector} alt="vector" className='w-[10px] h-[8.25px]' />
                <div>Hosting5</div>
            </div>

            <div className='flex flex-col gap-12 mt-5'>
                <DisplayContainer number={"1"} name={"Builder 1"}
                    des={"WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"}
                    highlight={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."}
                    rating={"9.8"}
                    remark={"Exceptional"} />
                <DisplayContainer number={"2"} name={"Builder"}
                    des={"SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"}
                    highlight={"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."}
                    rating={"9.5"}
                    remark={"Excellent"} />
                <DisplayContainer number={"3"} name={"Builder 1"}
                    des={"WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"}
                    highlight={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."}
                    rating={"9.3"}
                    remark={"Exceptional"} />

                <DisplayContainerTwo number={"4"} name={"CDK"}
                    des={"CDK Resposive Builder: An extensive library of widgets and apps, and detailed step-by-step guides"}
                    highlight={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."}
                    rating={"9.1"}
                    remark={"Very Good"} />
            </div>


            <div className='flex flex-col w-[80%] m-auto gap-6 mb-7'>
                <div className='text-[32px] text-[#2C384A]'>Related deals you might like for</div>

                <div className='flex flex-wrap gap-9'>
                    <RelatedDealContainer />
                    <RelatedDealContainer />
                    <RelatedDealContainer />
                </div>
            </div>


            {/* Sub Footer */}
            <div className='max-sm:flex-col max-sm:gap-9 flex justify-between items-center w-[80%] m-auto mb-14 mt-10'>
                <div className='text-[#5C6874] text-[32px]'>Sign up and get exclusive special deals</div>
                <div className='flex max-sm:flex-col max-sm:gap-5'>
                <input type="text" name="news" id="news" className='bg-[#FFFFFF]  rounded-l-[12px] pl-3 max-sm:rounded-r-[12px]
                max-sm:shadow-lg'/>
                <div className='max-sm:rounded-l-[12px] max-sm:w-auto  max-sm:p-3 bg-[#1B88F4] text-white w-[97px] h-[52px] rounded-r-[12px] flex justify-center items-center'>Sign Up</div>
                </div>
            </div>


            {/* Footer */}
            <div className='flex bg-[#212731] pt-16 pb-16'>
                <div className=' w-[80%] m-auto flex justify-between items-center max-sm:flex-col max-sm:gap-11'>

                    {/* Left */}
                    <div className='flex justify-between flex-[0.5] gap-4'>
                        <div className='flex flex-col text-[13px] text-[#B6BDC4] gap-[13px]'>
                            <div className='text-white text-[16px]'>Categories</div>
                            <div>Web Builder</div>
                            <div>Hosting</div>
                            <div>Data Center</div>
                            <div>Robotic-Automation</div>
                        </div>

                        <div className='flex flex-col text-[13px] text-[#B6BDC4] gap-[13px]'>
                            <div className='text-white text-[16px]'>Contact</div>
                            <div>Contact</div>
                            <div>Privacy Policy</div>
                            <div>Terms Of Service</div>
                            <div>Categories</div>
                            <div>About</div>
                        </div>

                    </div>



                    {/* Right */}
                    <select name="country" id="country" className='bg-[#212731] text-white text-[13px] h-fit'>
                        <option value="United States">United States</option>
                        <option value="India">India</option>
                        <option value="Russia">Russia</option>
                        <option value="South Korea">South Korea</option>
                    </select>



                </div>
            </div>


        </div>
    )
}

export default HeroSection