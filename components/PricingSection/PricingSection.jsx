import React from 'react';
import Image from "next/image";

const PricingSection = () => {
    return (
        <div className='relative w-full' >
            <div className='absolute top-0 left-0 ml-[-50px]' >
                <Image src={'/Pricing/Right-side-topographic.svg'} width={1209.54} height={1065} objectFit={'contain'} />
            </div>
            <div className='absolute top-0 right-0' >
                <Image src={'/Pricing/Ellipse.svg'} width={868} height={869} objectFit={'cover'} />
            </div>
            <div className={`max-w-[1300px] m-auto py-12 flex justify-center items-center flex-col relative z-20`}>
                {/* Main haeding */}
                <h1 className={`text-center text-white font-Mortend-Bold relative text-[46px] tracking-[4%] lg:leading-[68.4px]`}>
                    Pricing
                </h1>

                <div className='flex justify-center items-center flex-col md:flex-row w-[80%] mt-4'>
                    <div className='w-[90%] md:w-[50%] flex justify-center items-center relative' >
                        <Image src={'/Pricing/shape-left.png'} width={440} height={650} objectFit={'contain'} />
                        <div className='w-full h-full flex justify-center items-center flex-col absolute' >
                            <h1 className={`text-center text-white font-Mortend-Light text-[26px] md:text-[38px] tracking-[2%] lg:leading-[45.27px]`}>
                                Basic
                            </h1>
                            <h1 className={`text-center text-white font-Mortend-Bold text-[40px] md:text-[72.08px] tracking-[2%] lg:leading-[79.28px] md:mt-4`}>
                                $25
                            </h1>
                            <h1 className={`text-center text-white font-[Inter] text-[18px] md:text-[21.2px] font-[300] tracking-[2%] lg:leading-[25.66px]`}>
                                Per Month
                            </h1>
                            <h1 className={`text-center text-white font-[Inter] text-[14px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-6 mt-6`}>
                                Plan Feature First
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-2 md:mt-3' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[14px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-4 mt-3`}>
                                Plan Feature Second
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-2 md:mt-3' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[14px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-4 mt-3`}>
                                Plan Feature
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-2 md:mt-3' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-4 mt-3`}>
                                Plan Feature Fourth
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-2 md:mt-3' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-4 mt-3`}>
                                + Previous Plan
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-2 md:mt-3' ></div>
                        </div>
                    </div>
                    <div className='w-[90%] md:w-[50%] flex justify-center items-center relative mt-4 md:mt-0' >
                        <Image src={'/Pricing/shape-left.png'} width={440} height={650} objectFit={'contain'} />
                        <div className='w-full h-full flex justify-center items-center flex-col absolute' >
                            <h1 className={`text-center text-white font-Mortend-Light text-[26px] md:text-[38px] tracking-[2%] lg:leading-[45.27px]`}>
                                Pro
                            </h1>
                            <h1 className={`text-center text-white font-Mortend-Bold text-[40px] md:text-[72.08px] tracking-[2%] lg:leading-[79.28px] md:mt-4`}>
                                $45
                            </h1>
                            <h1 className={`text-center text-white font-[Inter] text-[18px] md:text-[21.2px] font-[300] tracking-[2%] lg:leading-[25.66px]`}>
                                Per Month
                            </h1>
                            <h1 className={`text-center text-white font-[Inter] text-[14px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-6 mt-6`}>
                                Plan Feature First
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-2 md:mt-3' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[14px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-4 mt-3`}>
                                Plan Feature Second
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-2 md:mt-3' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[14px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-4 mt-3`}>
                                Plan Feature
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-2 md:mt-3' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-4 mt-3`}>
                                Plan Feature Fourth
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-2 md:mt-3' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-4 mt-3`}>
                                + Previous Plan
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-2 md:mt-3' ></div>
                        </div>
                    </div>
                    {/* <div className='w-[90%] md:w-[50%] flex justify-center items-center relative' >
                        <Image src={'/Pricing/shape-left.png'} width={506.56} height={730.84} objectFit={'contain'} />
                        <div className='w-full h-full flex justify-center items-center flex-col absolute' >
                            <h1 className={`text-center text-white font-Mortend-Light text-[30px] md:text-[41.15px] tracking-[2%] lg:leading-[45.27px]`}>
                                Basic
                            </h1>
                            <h1 className={`text-center text-white font-Mortend-Bold text-[40px] md:text-[72.08px] tracking-[2%] lg:leading-[79.28px] mt-3`}>
                                $25
                            </h1>
                            <h1 className={`text-center text-white font-[Inter] text-[21.2px] font-[300] tracking-[2%] lg:leading-[25.66px]`}>
                                Per Month
                            </h1>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-8 mt-6`}>
                                Plan Feature First
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-3 md:mt-5' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-8 mt-3`}>
                                Plan Feature Second
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-3 md:mt-5' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-8 mt-3`}>
                                Plan Feature
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-3 md:mt-5' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-8 mt-3`}>
                                Plan Feature Fourth
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-3 md:mt-5' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-8 mt-3`}>
                                + Previous Plan
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-3 md:mt-5' ></div>
                        </div>
                    </div>
                    <div className='w-[90%] md:w-[50%] flex justify-center items-center relative mt-10 md:mt-0' >
                        <Image src={'/Pricing/shape-right.png'} width={506.56} height={730.84} objectFit={'contain'} />
                        <div className='w-full h-full flex justify-center items-center flex-col absolute' >
                            <h1 className={`text-center text-white font-Mortend-Light text-[30px] md:text-[41.15px] tracking-[2%] lg:leading-[45.27px]`}>
                                Pro
                            </h1>
                            <h1 className={`text-center text-white font-Mortend-Bold text-[40px] md:text-[72.08px] tracking-[2%] lg:leading-[79.28px] mt-3`}>
                                $45
                            </h1>
                            <h1 className={`text-center text-white font-[Inter] text-[21.2px] font-[300] tracking-[2%] lg:leading-[25.66px]`}>
                                Per Month
                            </h1>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-8 mt-6`}>
                                Plan Feature First
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-3 md:mt-5' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-8 mt-3`}>
                                Plan Feature Second
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-3 md:mt-5' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-8 mt-3`}>
                                Plan Feature
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-3 md:mt-5' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-8 mt-3`}>
                                Plan Feature Fourth
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-3 md:mt-5' ></div>
                            <h1 className={`text-center text-white font-[Inter] text-[16px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px] md:mt-8 mt-3`}>
                                + Previous Plan
                            </h1>
                            <div className='h-[1px] bg-[#282828] w-[50%] mt-3 md:mt-5' ></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default PricingSection;