import React from 'react';

const ButtonPrimary = ({children,className,props}) => {
    return (
        <button className={`w-[130] md:w-[170px] h-[40px] md:h-[50px] px-2 md:px-0 leading-[27px] text-[18px] font-[Poppins] font-[500] cursor-pointer bg-green border-2 border-solid border-green rounded-[5px] text-primary`} {...props}>
            {children}
        </button>
    );
};

export default ButtonPrimary;