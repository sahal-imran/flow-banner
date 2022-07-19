import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <div className={`max-w-[1300px] m-auto flex justify-center items-center flex-col overflow-hidden`}>
                <div className={`flex justify-between items-center w-full flex-col md:flex-row`} >
                    <div className='hidden md:flex' >
                        <Image src={'/logo.svg'} width={220} height={56.37} />
                    </div>
                    <div className='flex md:hidden' >
                        <Image src={'/logo.svg'} width={160} height={56.37} />
                    </div>
                    <div className='flex justify-center items-center mt-4 md:mt-0' >
                        <a href="">
                            <Image src={'/Footer/twitter.svg'} width={50} height={50} objectFit='contain' />
                        </a>
                        <a href="" className='ml-4' >
                            <Image src={'/Footer/discord.svg'} width={50} height={50} objectFit='contain' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='h-[89px] bg-[#1E1823] w-full flex justify-center items-center mt-8' >
                <h1 className={`text-center text-white font-[Inter] text-[14px] md:text-[18px] font-[300] tracking-[2%] leading-[35.1px]`}>
                    © 2022 BuildOnFlowBanner - All rights reserved
                </h1>
            </div>
        </>
    );
};

export default Footer;