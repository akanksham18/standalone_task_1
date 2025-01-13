import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const SparklineChart: React.FC = () => {
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
                    splitLine: { show: false },
                },
                yAxis: {
                    type: 'value',
                    axisLine: { show: false },
                    axisTick: { show: false },
                    axisLabel: { show: false },
                    splitLine: { show: false },
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
        <div className="relative w-full h-full flex justify-center items-center">
            {/* Sparkline Chart */}
            <div
                ref={chartRef}
                className="bg-white rounded-md shadow-md flex justify-center items-center"
                style={{
                    width: '100%',
                    height: '100%',
                    minWidth: '238px',
                    minHeight: '132.69px',
                    border: '2px solid #54A6D1',
                }}
            ></div>

            {/* Sparkline Text */}
            <div
                className="absolute top-2 left-2"
                style={{
                    fontFamily: 'Lexend Deca',
                    fontSize: '18px',
                    fontWeight: 'normal',
                    lineHeight: '22.5px',
                }}
            >
                Sparkline 1
            </div>
        </div>
    );
};

export default SparklineChart;
