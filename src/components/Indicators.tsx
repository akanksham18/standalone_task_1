<<<<<<< HEAD
import Indicator from "./Indicator";
=======
import { Indicator } from './index'
>>>>>>> a80c99bf72b86efb55f61992e95c29dfad79fcbd

const Indicators = () => {
    const texts = ["OEE", "Production", "Idle", "Lock/Unlock"];

<<<<<<< HEAD
    const containerStyles = [
        "left-[26px]",
        "left-[198px]",
        "left-[396px]",
        "left-[588px]",
    ];

    const spanStyles = [
        "w-[37px] h-[23px] left-[83px]",
        "w-[96px] h-[46px] left-[225px] ",
        "w-[35px] h-[23px] left-[450px] ",
        "w-[111px] h-[23px] left-[607px]",
    ];

    return (
        <div className="relative w-[712px] h-[80px] left-[26px]">
            {texts.map((text, index) => (
                <Indicator
                    key={index}
                    text={text}
                    customStyle={containerStyles[index]}
                    spanStyle={spanStyles[index]}
                />
=======
    const style= "h-24 w-48 flex items-center justify-center px-10";

    return (
        <div className="flex gap-8 justify-between">
            {texts.map((text, index) => (
                <Indicator key={index} text={text} style={style} />
>>>>>>> a80c99bf72b86efb55f61992e95c29dfad79fcbd
            ))}
        </div>
    );
};

<<<<<<< HEAD
export default Indicators;
=======
export default Indicators;
>>>>>>> a80c99bf72b86efb55f61992e95c29dfad79fcbd
