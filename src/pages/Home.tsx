import { Indicators, Pareto, Indicator, Timelines } from '../components/index';

const Home = () => {
    const texts = ["Alerts", "Alarms"];
    const style = "h-28 w-64 flex items-center justify-center px-10";

    return (
        <div className="Home flex flex-col px-page-px my-6">
            <div className="top flex gap-10">
                <div className="left w-[56vw]">
                    <Indicators />
                    <Timelines />
                </div>
                <div className="OEE w-full flex flex-col">
                    <Pareto />
                    <div className="Alerts flex justify-between w-full py-10">
                        {texts.map((text, index) => (
                            <Indicator key={index} text={text} style={style} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bottom">
                
            </div>
        </div>
    )
}

export default Home