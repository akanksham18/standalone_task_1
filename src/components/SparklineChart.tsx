import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';


const SparklineChart1: React.FC<{title:string}> = ({title}) => {
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
                    type: 'time', // Time scale on x-axis
                    axisLine: { show: false },
                    axisTick: { show: false },
                    axisLabel: { show: true, formatter: '{HH:mm}', rotate: 30, fontSize:4 }, // Format timestamps
                    splitLine: { show: true, lineStyle: { color: '#F2F2F2' } },
                },
                yAxis: {
                    type: 'value', // Values on y-axis
                    axisLine: { show: false },
                    axisTick: { show: false },
                    axisLabel: { show: true },
                    splitLine: { show: true, lineStyle: { color: '#F2F2F2' } },
                },
                series: [
                    {
                        data: [
                            ['2025-01-01 00:00', 3],
                            ['2025-01-01 01:00', 8],
                            ['2025-01-01 02:00', 5],
                            ['2025-01-01 03:00', 10],
                            ['2025-01-01 04:00', 7],
                            ['2025-01-01 05:00', 4],
                            ['2025-01-01 06:00', 9],
                            ['2025-01-01 07:00', 6],
                            ['2025-01-01 08:00', 3],
                            ['2025-01-01 09:00', 5],
                        ], // Timestamps and values
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
        <div className='w-full min-h-14 h-48 rounded-2xl bg-[#F3F3F3]'>
            <div className="min-h-10 h-[70%]">
                {/* Text inside the Sparkline chart rectangle */}
                <div className="px-4 py-2 leading-[22.5px]">
                    {title}
                </div>

                {/* Chart container */}
                <div className="w-full h-full">
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
