import React from "react";

const Indicator: React.FC<{ text: string; style: string }> = ({ text, style }) => {
    return (
        <div className={`flex items-center justify-center cursor-pointer shadow-custom bg-[#FFFFFF] rounded-[15px]`}>
            <span className={`text-[18px] leading-[22.5px] ${style}`}>
                {text}
            </span>
        </div>
    );
};

export default Indicator;