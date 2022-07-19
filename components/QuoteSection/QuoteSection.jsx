import React from 'react';
import Image from "next/image";

const QuoteSection = () => {
    return (
        <div className='bg-[#000000] w-full' >
            <div className={`relative max-w-[1300px] m-auto`}>
                {/*     Background Images    */}
                <Image src={'/Quote/Quote-bg.png'} layout={'fill'} objectFit={'cover'} />
                {/*   Gradient Overlay   */}
                <Image layout={'fill'} objectFit={'cover'} src={'/Quote/Quote-bg-overlay.png'} />

                {/* Left Inverted comma */}
                <div className='absolute left-[80px] top-[110px] hidden lg:block ' >
                    <Image src={'/Quote/leftcomma.png'} width={200} height={200} objectFit={'contain'} />
                </div>
                <div className='absolute left-[20px] top-[290px] hidden sm:block lg:hidden' >
                    <Image src={'/Quote/leftcomma.png'} width={100} height={100} objectFit={'contain'} />
                </div>
                <div className='absolute left-[0px] top-[250px] block sm:hidden' >
                    <Image src={'/Quote/leftcomma.png'} width={80} height={80} objectFit={'contain'} />
                </div>

                {/* Middle text */}
                <div className='w-full flex min-h-screen justify-center items-center flex-col relative' >
                    <h1 className={` w-[90%] lg:w-[80%] text-center text-white font-Mortend-Bold z-20 relative text-[24px] md:text-[28px] lg:text-[42px] lg:leading-[55.1px]`}>
                        I really like this project because it's not just generative art. It actually incorporates part of the Flow ecosystem
                    </h1>
                    <h1 className={`text-center text-white font-[Inter] text-[30px] font-[700] lg:leading-[48.4px] mt-10`}>
                        Jacob Tucker
                    </h1>
                </div>

                {/* Right Inverted comma */}
                <div className='absolute right-[290px] bottom-[210px] hidden lg:block ' >
                    <Image src={'/Quote/rightcomma.png'} width={200} height={200} objectFit={'contain'} />
                </div>
                <div className='absolute right-[290px] bottom-[380px] hidden md:block lg:hidden ' >
                    <Image src={'/Quote/rightcomma.png'} width={100} height={100} objectFit={'contain'} />
                </div>
                <div className='absolute right-[60px] bottom-[360px] hidden sm:block md:hidden ' >
                    <Image src={'/Quote/rightcomma.png'} width={100} height={100} objectFit={'contain'} />
                </div>
                <div className='absolute right-[20px] bottom-[320px] block sm:hidden ' >
                    <Image src={'/Quote/rightcomma.png'} width={80} height={80} objectFit={'contain'} />
                </div>
            </div>
        </div>
    );
};

export default QuoteSection;