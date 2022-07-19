import React from 'react';
import Image from 'next/image';
import ButtonPrimary from "../common/Buttons/ButtonPrimary";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
            <div className={`max-w-[1300px] mx-auto py-6 md:py-8 px-4 md:px-0 flex items-center justify-between`}>
                <div className='hidden md:flex' >
                    <Image src={'/logo.svg'} width={220} height={56.37} />
                </div>
                <div className='flex md:hidden' >
                    <Image src={'/logo.svg'} width={160} height={56.37} />
                </div>
                <div className='hidden md:flex items-center justify-center' >
                    <div className='flex items-center justify-center mr-16' >
                        <a href="" className=' text-white font-[Poppins] font-[400] text-[17px] tracking-[2%] mr-10 hover:text-green transition-all duration-[0.3s]' >Home</a>
                        <a href="" className=' text-white font-[Poppins] font-[400] text-[17px] tracking-[2%] mr-10 hover:text-green transition-all duration-[0.3s]' >About</a>
                        <a href="" className=' text-white font-[Poppins] font-[400] text-[17px] tracking-[2%] hover:text-green transition-all duration-[0.3s]' >NFT</a>
                    </div>
                    <ButtonPrimary>
                        Connect Wallet
                    </ButtonPrimary>
                </div>
                {isOpen ? < CloseIcon onClick={toggleDrawer} sx={{
                    color: '#FFFFFF', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2, display: {
                        md: 'none'
                    }
                }} /> : < MenuIcon onClick={toggleDrawer} sx={{
                    display: {
                        md: 'none'
                    }, color: '#FFFFFF', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2
                }} />}
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='drawer'
                style={{ backgroundColor: 'black', width: '80%', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', padding: '30px' }}
            >
                <div>
                    <Image src={'/logo.svg'} width={220} height={56.37} />
                </div>
                <a onClick={() => toggleDrawer()} href="" className=' text-white font-[Poppins] font-[400] text-[18px] tracking-[2%] mt-10 mb-4 hover:text-green transition-all duration-[0.3s]' >Home</a>
                <a onClick={() => toggleDrawer()} href="" className=' text-white font-[Poppins] font-[400] text-[18px] tracking-[2%] mb-4 hover:text-green transition-all duration-[0.3s]' >About</a>
                <a onClick={() => toggleDrawer()} href="" className=' text-white font-[Poppins] font-[400] text-[18px] tracking-[2%] hover:text-green transition-all duration-[0.3s]' >NFT</a>
                <div onClick={() => toggleDrawer()} className='mt-8' >
                    <ButtonPrimary>
                        Connect Wallet
                    </ButtonPrimary>
                </div>
            </Drawer>
        </>
    );
}

export default Header;