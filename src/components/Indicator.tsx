import React from "react";

const Indicator: React.FC<{ text: string; customStyle: string; spanStyle: string }> = ({ text, customStyle, spanStyle }) => {
    return (
        <div className={`flex items-center justify-center shadow-custom bg-[#FFFFFF] rounded-[15px] w-[150px] h-[80px] absolute top-[89px] ${customStyle}`}>
            <span className={`font-lexend top-[118px] underline-from-font text-decoration-skip-ink-none text-[18px] font-normal leading-[22.5px] text-left underline-from-font text-decoration-skip-ink-none ${spanStyle}`}>
                {text}
            </span>
        </div>
    );
};

export default Indicator;
