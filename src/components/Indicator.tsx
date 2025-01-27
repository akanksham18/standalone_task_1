import React from "react";

const Indicator: React.FC<{ text: string; textStyle: string; divStyle?: string }> = ({ text, textStyle, divStyle }) => {
    return (
        <div className={`flex items-center justify-center cursor-pointer shadow-custom bg-[#FFFFFF] rounded-[15px] ${divStyle}`}>
            <span className={`text-[18px] leading-[22.5px] ${textStyle}`}>
                {text}
            </span>
        </div>
    );
};

export default Indicator;