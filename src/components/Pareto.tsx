import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const Pareto: React.FC = () => {
    // Example data (replace with your own data)
    const categories = [
        'Out of requested roast',
        'Incorrect dairy',
        'Incorrect syrup',
        'Wrong temperature',
        'Forgot whip',
        'Forgot syrup',
        'Forgot utensils',
        'Incorrect roast',
        'Incorrect sweetener',
    ];

    const values = [70, 40, 30, 20, 10, 10, 5, 5, 5]; // Values for bars

    // Calculate cumulative percentages
    const total = values.reduce((acc, val) => acc + val, 0);
    const cumulativePercentages = values
        .map((value, index) => values.slice(0, index + 1).reduce((acc, val) => acc + val, 0))
        .map((cumulative) => (cumulative / total) * 100);

    // ECharts options
    const options: echarts.EChartsOption = {
        title: {
            text: 'Pareto Chart of Coffee Service Problems (Duration – 1 Week)',
            left: 'center',
            textStyle: {
                fontSize: 14,
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            textStyle: {
                fontSize: 10,
            },
            formatter: (params: any) => {
                let result = `${params[0].axisValue}<br/>`;
                params.forEach((item: any) => {
                    result += `${item.marker} ${item.seriesName}: ${item.value}${item.seriesName === 'Cumulative Percentage' ? '%' : ''}<br/>`;
                });
                return result;
            },
        },
        grid: {
            left: '10%',
            right: '0%',
            bottom: '15%',
        },
        xAxis: {
            type: 'category',
            data: categories,
            axisLabel: {
                interval: 0,
                rotate: 24,
                fontSize: 10
            },
        },
        yAxis: [
            {
                type: 'value',
                name: 'Frequency',
                position: 'left',
                nameTextStyle: {
                    fontSize: 12, // Decrease font size for y-axis name
                },
                axisLabel: {
                    fontSize: 10, // Decrease font size for y-axis labels
                },
            },
            {
                type: 'value',
                name: 'Cumulative Percentage',
                position: 'right',
                nameTextStyle: {
                    fontSize: 12, // Decrease font size for y-axis name
                },
                axisLabel: {
                    fontSize: 10, // Decrease font size for y-axis labels
                    formatter: '{value}%',
                },
            },
        ],
        series: [
            {
                name: 'Frequency',
                type: 'bar',
                data: values,
                itemStyle: {
                    color: 'black',
                },
            },
            {
                name: 'Cumulative Percentage',
                type: 'line',
                data: cumulativePercentages,
                yAxisIndex: 1,
                itemStyle: {
                    color: 'red',
                },
                lineStyle: {
                    width: 1,
                    type: 'solid',
                },
                symbol: 'circle',
                symbolSize: 6,
                label: {
                    show: true,
                    position: 'top',
                    formatter: (params: any) => {
                        return `${params.data.toFixed(2)}%`;  // Format to 2 decimal places
                    },
                    fontSize: 10,
                },
            },
        ],
    };

    return <div className="Pareto w-full bg-white shadow-[inset_2px_4px_12px_2px_#D9D9D9] py-6 rounded-[15px] mt-8">
        <ReactECharts option={options} style={{ height: 290, width: '95%' }} />
    </div>;
};

export default Pareto;
