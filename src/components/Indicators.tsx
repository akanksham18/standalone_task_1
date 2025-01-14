import { Indicator } from './index'

const Indicators = () => {
    const texts = ["OEE", "Production", "Idle", "Lock/Unlock"];

    const textStyle = "h-24 w-full flex items-center justify-center px-10";
    const divStyle = "w-full";

    return (
        <div className="flex gap-6 justify-between my-8">
            {texts.map((text, index) => (
                <Indicator key={index} text={text} textStyle={textStyle} divStyle={divStyle}/>
            ))}
        </div>
    );
};

export default Indicators;