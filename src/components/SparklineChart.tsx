import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const SparklineChart1: React.FC = () => {
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current);

            const options: echarts.EChartsOption = {
                animation: false,
                grid: {
                    left: '10%',
                    right: '10%',
                    top: '10%',
                    bottom: '10%',
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    axisLine: { show: false },
                    axisTick: { show: false },
                    axisLabel: { show: false },
                    splitLine: { show: true, lineStyle: { color: '#F2F2F2' } },
                },
                yAxis: {
                    type: 'value',
                    axisLine: { show: false },
                    axisTick: { show: false },
                    axisLabel: { show: false },
                    splitLine: { show: true, lineStyle: { color: '#F2F2F2' } },
                },
                series: [
                    {
                        data: [3, 8, 5, 10, 7, 4, 9, 6, 3, 5],
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            width: 2,
                            color: '#54A6D1',
                        },
                        symbol: 'circle',
                        symbolSize: 4,
                        itemStyle: {
                            color: '#54A6D1',
                            borderColor: '#FFFFFF',
                            borderWidth: 1.5,
                        },
                    },
                ],
            };

            chart.setOption(options);

            return () => {
                chart.dispose();
            };
        }
    }, []);

    return (
        <div className='w-[290px] h-[180px] top-[508px] left-[26px] rounded-[15px]  bg-[#F3F3F3]'>
            <div className=" w-[290px] h-[180px] top-[508px] left-[26px] gap-0">
                {/* Text inside the Sparkline chart rectangle */}
                <div className="w-[97px] h-[46px] top-[518px] left-[35px] font-['Lexend Deca'] text-[18px] font-normal leading-[22.5px]">
                    Sparkline 1
                </div>

                {/* Chart container */}
                <div className="w-[238px] h-[141.9px] top-[541px] left-[52px]">
                    {/* Line Chart */}
                    <div
                        ref={chartRef}
                        className="rounded-lg flex justify-center items-center w-full h-full"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default SparklineChart1;
