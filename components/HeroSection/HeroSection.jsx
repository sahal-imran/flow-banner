import React from 'react';
import Image from "next/image";
import GradCircle from '../../public/home/gradCircle.svg'
import ReactPlayer from 'react-player/youtube'

const HeroSection = () => {
    return (
        <div className={`pt-20 pb-12 relative`}>

            {/*     Background Images    */}
            <Image src={'/home/heroBg.svg'} layout={'fill'} objectFit={'cover'}/>
            <Image layout={'fill'} objectFit={'cover'} src={GradCircle}/>

            {/*     HeroSection Text    */}
            <div className={`relative z-10`}>

                {/*     Top Heading     */}
                <h1 className={`text-center text-white font-Mortend-Light z-20 relative max-w-3xl text-[24px] md:text-[28px] lg:text-[38px] mx-auto`}>
                    The first
                    <span className={`font-Mortend-Extrabold`}> fully customizable </span>
                    on-chain SVG banner <span
                    className={`font-bold font-Mortend-Extrabold`}> NFT for Flow builders </span>
                </h1>

                {/*     Video Player    */}
                <div className={`pt-12 relative text-center max-w-[700px] px-4 mx-auto`}>
                    <div className='player-wrapper relative pt-[56.25%]'>
                        <ReactPlayer
                            className='react-player absolute top-0 left-0'
                            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;