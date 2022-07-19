import React, { useState } from 'react';
import Image from "next/image";
import { HexColorPicker } from "react-colorful";

const CustomNftSection = () => {

    const [Wall_Customize, Set_Wall_Customize] = useState(true);
    const [FloorTrim_Customize, Set_FloorTrim_Customize] = useState(false);
    const [Floor_Customize, Set_Floor_Customize] = useState(false);
    const [DeskTab_Customize, Set_DeskTab_Customize] = useState(false);
    const [Chair_Customize, Set_Chair_Customize] = useState(false);
    const [SodaCan_Customize, Set_SodaCan_Customize] = useState(false);

    const ManageState = (id, Box) => {

        Set_Wall_Customize(false);
        Set_FloorTrim_Customize(false);
        Set_Floor_Customize(false);
        Set_DeskTab_Customize(false);
        Set_Chair_Customize(false);
        Set_SodaCan_Customize(false);
        if (id === 1 && Box === 'Wall') {
            Set_Wall_Customize(true);
            return;
        }
        else if (id === 2 && Box === 'Floor Board Trim') {
            Set_FloorTrim_Customize(true);
            return;
        }
        else if (id === 3 && Box === 'Floor') {
            Set_Floor_Customize(true);
            return;
        }
        else if (id === 4 && Box === 'Desk') {
            Set_DeskTab_Customize(true);
            return;
        }
        else if (id === 5 && Box === 'Chair') {
            Set_Chair_Customize(true);
            return;
        }
        else if (id === 6 && Box === 'Soda can') {
            Set_SodaCan_Customize(true);
            return;
        }
    }

    const UI_With_MarginSet = (Item) => {
        if (Item.id === 1) {
            return <div key={Item.id} className='w-[80%] sm:w-[140px] flex justify-center items-start flex-col' >
                <h1 className={`text-start text-white font-[Inter] text-[18px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px]`}>
                    {Item.Box_Name}
                </h1>
                <div onClick={() => ManageState(Item.id, Item.Box_Name)} className={Item.Box_State ? 'w-full h-[120px] flex justify-center items-center rounded-[3.65948px] border-[1px] border-solid border-[#FFFFFF] bg-[#2D2A31] mt-3 cursor-pointer' : 'w-full h-[120px] flex justify-center items-center rounded-[3.65948px] hover:border-[1px] border-solid border-[#FFFFFF] bg-[#2D2A31] mt-3 cursor-pointer'} >
                    <Image src={Item.Box_State ? Item.SVG_White : Item.SVG_Gray} width={60} height={60} objectFit='contain' />
                </div>
            </div>
        }
        else {
            return <div key={Item.id} className='w-[80%] sm:w-[140px] flex justify-center items-start flex-col mt-6' >
                <h1 className={`text-start text-white font-[Inter] text-[18px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[26.63px]`}>
                    {Item.Box_Name}
                </h1>
                <div onClick={() => ManageState(Item.id, Item.Box_Name)} className={Item.Box_State ? 'w-full h-[120px] flex justify-center items-center rounded-[3.65948px] border-[1px] border-solid border-[#FFFFFF] bg-[#2D2A31] mt-3 cursor-pointer' : 'w-full h-[120px] flex justify-center items-center rounded-[3.65948px] hover:border-[1px] border-solid border-[#FFFFFF] bg-[#2D2A31] mt-3 cursor-pointer'} >
                    <Image src={Item.Box_State ? Item.SVG_White : Item.SVG_Gray} width={60} height={60} objectFit='contain' />
                </div>
            </div>
        }
    }

    const SelectionData = [
        {
            id: 1,
            SVG_White: '/Customize/wall-white.svg',
            SVG_Gray: '/Customize/wall-gray.svg',
            Box_Name: 'Wall',
            Box_State: Wall_Customize
        },
        {
            id: 2,
            SVG_White: '/Customize/floorTrim-white.svg',
            SVG_Gray: '/Customize/floorTrim-gray.svg',
            Box_Name: 'Floor Board Trim',
            Box_State: FloorTrim_Customize
        },
        {
            id: 3,
            SVG_White: '/Customize/floor-white.svg',
            SVG_Gray: '/Customize/floor-gray.svg',
            Box_Name: 'Floor',
            Box_State: Floor_Customize
        },
        {
            id: 4,
            SVG_White: '/Customize/desk-white.svg',
            SVG_Gray: '/Customize/desk-gray.svg',
            Box_Name: 'Desk',
            Box_State: DeskTab_Customize
        },
        {
            id: 5,
            SVG_White: '/Customize/chair-white.svg',
            SVG_Gray: '/Customize/chair-gray.svg',
            Box_Name: 'Chair',
            Box_State: Chair_Customize
        },
        {
            id: 6,
            SVG_White: '/Customize/can-white.svg',
            SVG_Gray: '/Customize/can-gray.svg',
            Box_Name: 'Soda can',
            Box_State: SodaCan_Customize
        },
    ]

    const SelectInStantColor = (color) => {
        setColor(color);
    }

    const Chairs = [ // place your all chairs in this array of objects
        {
            id: 1,
            URL: '/Customize/sampleChair1.svg'
        },
        {
            id: 0,
            URL: '/Customize/sampleChair2.svg'
        },
        {
            id: 3,
            URL: '/Customize/sampleChair3.svg'
        },
        {
            id: 4,
            URL: '/Customize/sampleChair4.svg'
        }
    ]
    const [Selected_Chair, Set_Selected_Chair] = useState('/Customize/NFT.svg');
    const [Selected_Chair_index, Set_Selected_Chair_index] = useState(0); // will give chair index
    const ChangeChair = (chairInd) => {
        switch (chairInd) {
            case 0:
                Set_Selected_Chair('/Customize/sampleChair1.svg');
                Set_Selected_Chair_index(chairInd);
                break;
            case 1:
                Set_Selected_Chair('/Customize/sampleChair2.svg');
                Set_Selected_Chair_index(chairInd);
                break;
            case 2:
                Set_Selected_Chair('/Customize/sampleChair3.svg');
                Set_Selected_Chair_index(chairInd);
                break;
            case 3:
                Set_Selected_Chair('/Customize/sampleChair4.svg');
                Set_Selected_Chair_index(chairInd);
                break;
            default:
                Set_Selected_Chair('/Customize/NFT.svg');
                break;
        }
    }

    const Render_Ui_On_Condition = () => {
        if (Wall_Customize) {
            return <div className='w-full h-full flex justify-start items-start flex-col' >
                <h1 className={`text-start text-white font-[Inter] text-[18px] md:text-[22px] font-[700] tracking-[2%] lg:leading-[31.47px]`}>
                    Wall Color
                </h1>
                <div className='scroll-set grid grid-cols-2 gap-4 mt-2 md:min-h-[450px] overflow-y-auto overflow-x-hidden' >
                    <div onClick={() => SelectInStantColor('#D64747')} className='w-[50px] sm:w-[80px] md:w-[140px] h-[50px] sm:h-[80px] md:h-[120px] bg-[#D64747] cursor-pointer' ></div>
                    <div onClick={() => SelectInStantColor('#D1681C')} className='w-[50px] sm:w-[80px] md:w-[140px] h-[50px] sm:h-[80px] md:h-[120px] bg-[#D1681C] cursor-pointer' ></div>
                    <div onClick={() => SelectInStantColor('#DD58D8')} className='w-[50px] sm:w-[80px] md:w-[140px] h-[50px] sm:h-[80px] md:h-[120px] bg-[#DD58D8] cursor-pointer' ></div>
                    <div onClick={() => SelectInStantColor('#1CD190')} className='w-[50px] sm:w-[80px] md:w-[140px] h-[50px] sm:h-[80px] md:h-[120px] bg-[#1CD190] cursor-pointer' ></div>
                    <div onClick={() => SelectInStantColor('#474DD6')} className='w-[50px] sm:w-[80px] md:w-[140px] h-[50px] sm:h-[80px] md:h-[120px] bg-[#474DD6] cursor-pointer' ></div>
                    <div onClick={() => SelectInStantColor('#53C7EC')} className='w-[50px] sm:w-[80px] md:w-[140px] h-[50px] sm:h-[80px] md:h-[120px] bg-[#53C7EC] cursor-pointer' ></div>
                    <div onClick={() => SelectInStantColor('#F8F8F8')} className='w-[50px] sm:w-[80px] md:w-[140px] h-[50px] sm:h-[80px] md:h-[120px] bg-[#F8F8F8] cursor-pointer' ></div>
                    <div onClick={() => SelectInStantColor('#181818')} className='w-[50px] sm:w-[80px] md:w-[140px] h-[50px] sm:h-[80px] md:h-[120px] bg-[#181818] cursor-pointer' ></div>
                    <div onClick={() => SelectInStantColor('#180018')} className='w-[50px] sm:w-[80px] md:w-[140px] h-[50px] sm:h-[80px] md:h-[120px] bg-[#180018] cursor-pointer' ></div>
                    <div onClick={() => SelectInStantColor('#185818')} className='w-[50px] sm:w-[80px] md:w-[140px] h-[50px] sm:h-[80px] md:h-[120px] bg-[#185818] cursor-pointer' ></div>
                </div>
                <h1 className={`text-start text-white font-[Inter] text-[18px] md:text-[22px] font-[700] tracking-[2%] lg:leading-[31.47px] mt-10`}>
                    Add custom color
                </h1>
                <div className='w-full min-h-[200px] md:min-h-[260px] flex justify-center items-center mt-2' >
                    <HexColorPicker style={{ width: '100%', height: '100%' }} color={color} onChange={setColor} />
                </div>
                <div className='w-full flex justify-center items-center flex-col sm:flex-row my-6 md:py-0 md:min-h-[40px]' >
                    <div className='w-[31px] h-[31px] rounded-[2px] mr-2' style={{ backgroundColor: color }} ></div>
                    <h1 className={`text-center sm:text-start text-[#CACACA] font-[Inter] text-[18px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[24.2px]`}>
                        {'Current color is ' + color}
                    </h1>
                </div>
                <div className='w-full h-[100px] sm:min-h-[60px] flex justify-center items-center flex-col sm:flex-row rounded-[6px] bg-[#19161C] overflow-hidden' >
                    <div className='w-[100%] sm:w-[40%] h-full flex justify-center items-center bg-[#1E1A21] sm' >
                        <h1 className={`text-[#645C6A] font-[Inter] text-[18px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[24.2px]`}>
                            Wall Color
                        </h1>
                    </div>
                    <div className='w-[100%] sm:w-[60%] h-full flex justify-center sm:justify-start items-center bg px-4 sm' >
                        <h1 className={`text-center sm:text-start text-[#CACACA] font-[Inter] text-[18px] md:text-[22px] font-[400] tracking-[2%] lg:leading-[24.2px]`}>
                            {color}
                        </h1>
                    </div>
                </div>
                <div className='min-h-[60px] w-full bg-[#242127] hidden md:block' >
                </div>
            </div>
        }
        else if (FloorTrim_Customize) {
            return <div className='w-full h-full flex justify-start items-start flex-col' >
                <h1 className={`text-start text-white font-[Inter] text-[22px] font-[700] tracking-[2%] lg:leading-[31.47px]`}>
                    Floor Board Trim
                </h1>
                {
                    Chairs.map((chair, index) => {
                        return <div key={chair.id} onClick={() => ChangeChair(index)} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                            <Image src={chair.URL} width={126.27} height={189.17} objectFit='contain' />
                        </div>
                    })
                }
                <div className='min-h-[60px] w-full bg-[#242127] hidden md:block' >
                </div>
            </div>
        }
        else if (Floor_Customize) {
            return <div className='w-full h-full flex justify-start items-start flex-col' >
                <h1 className={`text-start text-white font-[Inter] text-[22px] font-[700] tracking-[2%] lg:leading-[31.47px]`}>
                    Floor
                </h1>
                <div onClick={() => ChangeChair('chair1')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div onClick={() => ChangeChair('chair2')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div onClick={() => ChangeChair('chair3')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div onClick={() => ChangeChair('chair4')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div className='min-h-[60px] w-full bg-[#242127] hidden md:block' >
                </div>
            </div>
        }
        else if (DeskTab_Customize) {
            return <div className='w-full h-full flex justify-start items-start flex-col' >
                <h1 className={`text-start text-white font-[Inter] text-[22px] font-[700] tracking-[2%] lg:leading-[31.47px]`}>
                    Desk
                </h1>
                <div onClick={() => ChangeChair('chair1')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div onClick={() => ChangeChair('chair2')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div onClick={() => ChangeChair('chair3')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div onClick={() => ChangeChair('chair4')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div className='min-h-[60px] w-full bg-[#242127] hidden md:block' >
                </div>
            </div>
        }
        else if (Chair_Customize) {
            return <div className='w-full h-full flex justify-start items-start flex-col' >
                <h1 className={`text-start text-white font-[Inter] text-[22px] font-[700] tracking-[2%] lg:leading-[31.47px]`}>
                    Chairs
                </h1>
                <div onClick={() => ChangeChair('chair1')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div onClick={() => ChangeChair('chair2')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div onClick={() => ChangeChair('chair3')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div onClick={() => ChangeChair('chair4')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div className='min-h-[60px] w-full bg-[#242127] hidden md:block' >
                </div>
            </div>
        }
        else if (SodaCan_Customize) {
            return <div className='w-full h-full flex justify-start items-start flex-col' >
                <h1 className={`text-start text-white font-[Inter] text-[22px] font-[700] tracking-[2%] lg:leading-[31.47px]`}>
                    Soda can
                </h1>
                <div onClick={() => ChangeChair('chair1')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div onClick={() => ChangeChair('chair2')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div onClick={() => ChangeChair('chair3')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div onClick={() => ChangeChair('chair4')} className='w-full h-[227px] bg-[#2D2A31] rounded-[6.87898px] flex justify-center items-center mt-6 py-4 cursor-pointer' >
                    <Image src={'/Customize/sampleChair1.svg'} width={126.27} height={189.17} objectFit='contain' />
                </div>
                <div className='min-h-[60px] w-full bg-[#242127] hidden md:block' >
                </div>
            </div>
        }
    }

    // Color Picker
    const [color, setColor] = useState("#aabbcc");

    return (
        <>
            <div className='relative w-full flex justify-center items-center flex-col md:py-10' >

                {/* Main heading */}
                <div className='h-[70px] bg-[#120E15] w-full flex justify-center items-center' >
                    <h1 className={`text-center text-white font-Mortend relative text-[22px] tracking-[2%] lg:leading-[24.2px]`}>
                        Customize Your NFT
                    </h1>
                </div>

                {/* NFT Customize section */}
                <div className='w-full md:h-screen flex justify-center items-center flex-col md:flex-row' >
                    {/* Selection section */}
                    <div className='flex justify-center items-center w-full md:w-auto md:h-full h-[1200px]' >
                        <div className='scroll-set w-[50%] md:w-[250px] h-full overflow-y-auto md:h-full flex justify-center items-center flex-col py-14 bg-[#201D23]'>
                            <div className='min-h-[450px] w-full bg-[#201D23] hidden md:block' >
                            </div>
                            {
                                SelectionData.map((Item) => {
                                    return UI_With_MarginSet(Item)
                                })
                            }
                        </div>
                        <div className='scroll-set w-[50%] md:w-[360px] h-full overflow-y-auto md:h-full flex justify-center items-center py-14 px-6 sm:px-8 bg-[#242127]' >
                            {Render_Ui_On_Condition()}
                        </div>
                    </div>

                    {/* NFT View Section */}
                    <div className='w-[90%] md:w-[calc(100%-610px)] flex justify-center items-center h-full mt-14 md:mt-0' >
                        <Image src={Selected_Chair} width={700} height={700} objectFit='contain' />
                    </div>
                </div>


            </div>
        </>
    );
};

export default CustomNftSection;


