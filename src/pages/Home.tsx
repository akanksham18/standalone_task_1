import React from 'react';
import { Indicators, Pareto, Indicator, Timelines } from '../components/index';
import SparklineChart from '../components/SparklineChart';

const Home: React.FC = () => {
    const texts = ["Alerts", "Alarms"];
    const style = "h-28 w-64 flex items-center justify-center px-10";

    return (
        <div>
            <div className="Home flex px-page-px my-10 gap-10">
                {/* Left Section */}
                <div className="left w-[56vw]">
                    <Indicators />
                    <Timelines />
                </div>

                {/* Right Section */}
                <div className="OEE w-full flex flex-col">
                    {/* Pareto Chart */}
                    <Pareto />

                    {/* Alerts Section */}
                    <div className="Alerts flex justify-between w-full py-7">
                        {texts.map((text, index) => (
                            <Indicator key={index} text={text} style={style} />
                        ))}
                    </div>

                    {/* Sparkline Chart */}
                    <div className="SparklineContainer flex justify-start mt-10">
                        <SparklineChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
