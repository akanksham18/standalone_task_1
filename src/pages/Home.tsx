import { Indicators, Pareto, Indicator, Timelines } from '../components/index';
import SparklineChart from '../components/SparklineChart';

const Home = () => {
    const texts = ["Alerts", "Alarms"];
    const textStyle = "h-28 w-64 flex items-center justify-center px-10";
    const divStyle = "w-full min-h-[10vh]"

    const sparklineTitles = ["Sparkline1", "Sparkline2", "Sparkline3", "Sparkline4"];



    return (
        <div className="Home h-fit justify-center flex flex-col gap-8 px-page-px my-8">
            <div className="top flex gap-8">
                <div className="left flex flex-col gap-8 w-[80vw]">
                    <Indicators />
                    <Timelines />
                </div>
                <div className="right OEE w-full flex flex-col gap-8">
                    <Pareto />
                    <div className="flex gap-6 justify-between">
                        {texts.map((text, index) => (
                            <Indicator key={index} text={text} textStyle={textStyle} divStyle={divStyle} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bottom flex gap-8 items-center justify-between w-full">
                {sparklineTitles.map((title, index) => (
                    <SparklineChart title={title} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Home