import { Indicator } from './index'

const Indicators = () => {
    const texts = ["OEE", "Production", "Idle", "Lock/Unlock"];

    const style = "h-24 md:min-w-32 sm:min-w-20 lg:min-w-48 flex items-center justify-center px-10";

    return (
        <div className="flex gap-8 justify-between">
            {texts.map((text, index) => (
                <Indicator key={index} text={text} style={style} />
            ))}
        </div>
    );
};

export default Indicators;