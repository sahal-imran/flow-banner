import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueSection = () => {
    return (
        <div className='w-full h-[80px] md:h-[127px] my-16 overflow-hidden' >
            <Marquee gradient={false} pauseOnHover={true} style={{ width: '100%', height: '100%', background: 'linear-gradient(90.28deg, #892BDF 13.47%, #4E1BBB 98.58%)' }} >
                <h1 className={`text-center text-white font-Mortend-Bold text-[24px] md:text-[28px] lg:text-[40px] mr-10 mt-1`}>
                    #BuildOnFlow
                </h1>
                <h1 className={`text-center text-white font-Mortend-Bold text-[24px] md:text-[28px] lg:text-[40px] mr-10 mt-1`}>
                    #BuildOnFlow
                </h1>
                <h1 className={`text-center text-white font-Mortend-Bold text-[24px] md:text-[28px] lg:text-[40px] mr-10 mt-1`}>
                    #BuildOnFlow
                </h1>
                <h1 className={`text-center text-white font-Mortend-Bold text-[24px] md:text-[28px] lg:text-[40px] mr-10 mt-1`}>
                    #BuildOnFlow
                </h1>
            </Marquee>
        </div>
    );
};

export default MarqueSection;