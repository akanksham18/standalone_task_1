import { Indicators, Pareto, Indicator, Timelines } from '../components/index';
import SparklineChart from '../components/SparklineChart';

const Home = () => {
    const texts = ["Alerts", "Alarms"];
    const textStyle = "h-28 w-64 flex items-center justify-center px-10";
    const divStyle = "w-full"

    const sparklineTitles = ["Sparkline1", "Sparkline2", "Sparkline3", "Sparkline4"];



    return (
        <div className="Home h-fit justify-center flex flex-col px-page-px">
            <div className="top flex gap-8">
                <div className="left w-[80vw]">
                    <Indicators />
                    <Timelines />
                </div>
                <div className="OEE w-full flex flex-col">
                    <Pareto />
                    <div className="Alerts w-full h-full flex gap-8 justify-between items-center">
                        {texts.map((text, index) => (
                            <Indicator key={index} text={text} textStyle={textStyle} divStyle={divStyle} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bottom flex gap-8 items-center my-4 justify-between w-full h-fit">
                {sparklineTitles.map((title, index) => (
                    <SparklineChart title={title} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Home