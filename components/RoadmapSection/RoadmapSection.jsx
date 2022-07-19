import React from 'react';
import Image from "next/image";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import HexagonIcon from '@mui/icons-material/Hexagon';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


const RoadmapSection = () => {
    return (
        <div className={`relative max-w-[1300px] m-auto md:min-h-[1300px] my-32`}>
            {/*     Background Images    */}
            <Image src={'/Roadmap/bg.png'} layout={'fill'} objectFit={'cover'} />

            {/* Middle text */}
            <div className='w-full md:min-h-[1300px] py-14 md:py-0 flex justify-center items-center flex-col relative ' >
                {/* Main haeding */}
                <h1 className={`text-center text-white font-Mortend-Bold relative text-[46px] tracking-[4%] lg:leading-[68.4px]`}>
                    Roadmap
                </h1>
                <div className='w-screen sm:w-full md:mt-40 mt-8' >
                    <Timeline position="left">
                        <TimelineItem>
                            <TimelineOppositeContent sx={{
                                position: 'relative', width: '180px', height: '220px', mt: -8, px: {
                                    md: 'auto',
                                    xs: '0'
                                }, ml: {
                                    md: 0,
                                    xs: 1
                                }
                            }} >
                                <div className='hidden md:block' >
                                    <Image src={'/Roadmap/contentBox.png'} layout={'fill'} objectFit={'contain'} />
                                </div>
                                <div className='md:hidden block' >
                                    <Image src={'/Roadmap/contentBoxMobile.png'} layout={'fill'} objectFit={'contain'} />
                                </div>
                                {/*text */}
                                <div className='w-full h-full flex justify-center items-start flex-col relative p-1 md:p-0' >
                                    <h1 className={`text-start text-white font-Mortend text-[14px] sm:text-[22px] lg:leading-[66px] md:ml-10 ml-3`}>
                                        Ideation and Testing
                                    </h1>
                                    <h1 className={`text-start text-white font-[Inter] text-[12px] md:text-[16px] font-[300] tracking-[2%] md:ml-10 ml-3`}>
                                        Building out the website, brand, SVG, and attributes
                                    </h1>
                                </div>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <HexagonIcon />
                                <TimelineConnector sx={{
                                    height: {
                                        md: '300px',
                                        xs: '200px'
                                    }, width: '1px', background: 'radial-gradient(#A441F2 100%, #9435F3 100%)'
                                }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{
                                px: {
                                    md: 'auto',
                                    xs: '0'
                                }
                            }} >
                                <h1 className={`text-right text-white font-Mortend-Bold relative text-[14px] md:text-[38px] tracking-[2%] lg:leading-[66px] mr-2 md:mr-6`}>
                                    April 2022 - In Progress
                                </h1>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{
                                position: 'relative', width: '180px', height: '220px', mt: -8, px: {
                                    md: 'auto',
                                    xs: '0'
                                }, ml: {
                                    md: 0,
                                    xs: 1
                                }
                            }} >
                                <div className='hidden md:block' >
                                    <Image src={'/Roadmap/contentBox.png'} layout={'fill'} objectFit={'contain'} />
                                </div>
                                <div className='md:hidden block' >
                                    <Image src={'/Roadmap/contentBoxMobile.png'} layout={'fill'} objectFit={'contain'} />
                                </div>
                                {/*text */}
                                <div className='w-full h-full flex justify-center items-start flex-col relative p-1 md:p-0' >
                                    <h1 className={`text-start text-white font-Mortend text-[14px] sm:text-[22px] lg:leading-[66px] md:ml-10 ml-3`}>
                                        NFT Completed
                                    </h1>
                                    <h1 className={`text-start text-white font-[Inter] text-[12px] md:text-[16px] font-[300] tracking-[2%] md:ml-10 ml-3`}>
                                        Smart contracts deployed to Flow testnet and rigorous testing
                                    </h1>
                                </div>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <HexagonIcon />
                                <TimelineConnector sx={{
                                    height: {
                                        md: '300px',
                                        xs: '200px'
                                    }, width: '1px', background: 'radial-gradient(#A441F2 100%, #9435F3 100%)'
                                }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{
                                px: {
                                    md: 'auto',
                                    xs: '0'
                                }
                            }} >
                                <h1 className={`text-right text-white font-Mortend-Bold relative text-[14px] md:text-[38px] tracking-[2%] lg:leading-[66px] mr-2 md:mr-6`}>
                                    July 2022
                                </h1>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{
                                position: 'relative', width: {
                                    md: '180px',
                                    xs: 'auto'
                                }, height: '220px', mt: -8, px: {
                                    md: 'auto',
                                    xs: '0'
                                }, ml: {
                                    md: 0,
                                    xs: 1
                                }
                            }} >
                                <div className='hidden md:block' >
                                    <Image src={'/Roadmap/contentBox.png'} layout={'fill'} objectFit={'contain'} />
                                </div>
                                <div className='md:hidden block' >
                                    <Image src={'/Roadmap/contentBoxMobile.png'} layout={'fill'} objectFit={'contain'} />
                                </div>
                                {/*text */}
                                <div className='w-full h-full flex justify-center items-start flex-col relative p-1 md:p-0' >
                                    <h1 className={`text-start text-white font-Mortend text-[14px] sm:text-[22px] lg:leading-[66px] md:ml-10 ml-3`}>
                                        Mainnet
                                    </h1>
                                    <h1 className={`text-start text-white font-[Inter] text-[12px] md:text-[16px] font-[300] tracking-[2%] md:ml-10 ml-3`}>
                                        Smart contracts deployed to mainnet after passing the review process from Flow and Dapper Labs
                                    </h1>
                                </div>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <HexagonIcon />
                            </TimelineSeparator>
                            <TimelineContent sx={{
                                px: {
                                    md: 'auto',
                                    xs: '0'
                                }
                            }}>
                                <h1 className={`text-right text-white font-Mortend-Bold relative text-[14px] md:text-[38px] tracking-[2%] lg:leading-[66px] mr-2 md:mr-6`}>
                                    August 2022
                                </h1>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default RoadmapSection;