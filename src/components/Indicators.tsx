import { Indicator } from './index';

const Indicators = () => {
    const texts = ["OEE", "Production", "Idle", "Lock/Unlock"];

    const textStyle = "w-full flex items-center justify-center px-10";
    const divStyle = "w-full min-h-[10vh]";

    return (
        <div className="flex gap-6 justify-between">
            {texts.map((text, index) => (
                <Indicator key={index} text={text} textStyle={textStyle} divStyle={divStyle} />
            ))}
        </div>
    );
};

export default Indicators;
