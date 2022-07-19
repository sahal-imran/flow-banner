import React from 'react';
import Image from "next/image";

const AboutSection = () => {
    return (
        <div className={`max-w-[1300px] m-auto flex justify-center items-center flex-col`}>

            {/* Main haeding */}
            <h1 className={`text-center text-white font-Mortend-Bold relative text-[46px] tracking-[4%] lg:leading-[68.4px]`}>
                what is bofb
            </h1>

            {/* Section with logo and about text info */}
            <div className='flex justify-center items-center flex-col md:flex-row w-full md:mt-2' >
                <div className='w-[50%] md:w-[40%] flex justify-center items-center' >
                    <Image src={'/About/logo.svg'} width={400} height={400} />
                </div>
                <div className='w-[90%] md:w-[60%] flex justify-center items-center mt-8 md:mt-0' >
                    <h3 className='font-[Inter] text-[16px] md:text-[22px] md:leading-[35px] text-white font-[400] text-center md:text-start' >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;