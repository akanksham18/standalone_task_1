import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import moment from "moment";
import CyclesData from '../sampleData/CyclesData.json';



interface DataItem {
    name: string;
    value: [number, number, number, number];
    itemStyle: {
        normal: {
            color: string;
        };
    };
}

interface MachineData {
    _id: string;
    machineId: string;
    ts: number;
    value: number;
    __v: number;
}

// Change as required 
interface CycleStatusTimelineProps {
    macId: any;
    machineName: any;
    selectedDate: any;
    endDate: any;
}

const CycleStatusTimeline: React.FC<CycleStatusTimelineProps> = ({
    macId,
    machineName,
    selectedDate,
    endDate,
}) => {
    const chartRef = useRef<HTMLDivElement>(null);

    const [hasData, setHasData] = useState(true);

    const [chartData, setChartData] = useState<DataItem[]>([]);



    useEffect(() => {
        const fetchDataAndProcessData = async () => {
            try {

                const responseData: MachineData[] = CyclesData;
                console.log(responseData)

                if (responseData.length === 0) {
                    setHasData(false);
                } else {
                    setHasData(true);
                }

                const data: DataItem[] = responseData.map((item, index) => {
                    const types = [
                        { name: "productive", color: "green" },
                        { name: "idle", color: "yellow" },
                        { name: "others", color: "orange" },
                        { name: "offline", color: "red" },
                    ];

                    const typesItem =

                        item.value === 1
                            ? types[0]
                            : item.value === 0
                                ? types[1]
                                : item.value === 898989
                                    ? types[3]
                                    : types[2];

                    const startTime = item.ts;
                    let endTime =
                        index < responseData.length - 1
                            ? responseData[index + 1].ts
                            : new Date().getTime();

                    if (index >= responseData.length - 1) {
                        endTime = endTime
                            ? moment(endDate).valueOf()
                            : new Date().getTime();
                    }

                    const duration = endTime - startTime;

                    return {
                        name: typesItem.name,
                        value: [0, startTime, endTime, duration],
                        itemStyle: {
                            normal: {
                                color: typesItem.color,
                            },
                        },
                    };
                });

                setChartData(data);

            } catch (error) {
                console.error("Error:", error);

            }
        };

        fetchDataAndProcessData();
    }, [selectedDate, endDate]);

    useEffect(() => {
        if (!chartRef.current || chartData.length === 0) return;

        const option = {
            tooltip: {
                formatter: (params: any) => {
                    const startDateTime = new Date(params.value[1]).toLocaleString();
                    const endDateTime = new Date(params.value[2]).toLocaleString();

                    return (
                        params.marker +
                        params.name +
                        ": " +
                        params.value[3] +
                        "<br>Start Time:" +
                        startDateTime +
                        "<br>End Time: " +
                        endDateTime
                    );
                },
            },
            title: {

                subtext: "Cycle Status",

                top: -15,
            },
            grid: {
                height: 20,
                left: 30, // Adjusted left padding
                right: 30, // Adjusted right padding
                bottom: 5, // Adjusted bottom padding
                top: 15, // Adjusted top padding
            },
            xAxis: {
                interval: 1,
                type: "time",
                min: 1735304354000,
                max: 1735390604889,
                scale: true,
                axisTick: { show: "auto", inside: true, length: 15 },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "black",
                        width: 2.5,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "blue",
                        type: "dashed",
                    },
                },
                axisLabel: {
                    formatter: (val: number) => {
                        const date = new Date(val);
                        const hours = date.getHours().toString().padStart(2, "0");
                        const minutes = date.getMinutes().toString().padStart(2, "0");
                        const seconds = date.getSeconds().toString().padStart(2, "0");
                        return hours + ":" + minutes + ":" + seconds;
                    },
                    interval: 0,
                    showMinLabel: true,
                    showMaxLabel: true,
                    show: true,
                },
            },
            yAxis: {
                data: ["Cyclestatus"],
                show: false,
            },
            series: [
                {
                    type: "custom",
                    renderItem: renderItem,
                    itemStyle: {
                        opacity: 0.8,
                    },
                    encode: {
                        x: [1, 2],
                        y: 0,
                    },
                    lineStyle: {
                        width: 10,
                        opacity: 0.5,
                    },
                    data: chartData,
                },
            ],
        };

        const chartInstance = echarts.init(chartRef.current);
        chartInstance.setOption(option);

        window.addEventListener("resize", () => {
            chartInstance.resize();
        });

        return () => {
            chartInstance.dispose();
            window.removeEventListener("resize", () => {
                chartInstance.resize();
            });
        };
    }, [chartData]);

    const renderItem = (params: any, api: any) => {
        const categoryIndex = api.value(0);
        const start = api.coord([api.value(1), categoryIndex]);
        const end = api.coord([api.value(2), categoryIndex]);
        const height = api.size([0, 1])[1] * 100.15;
        const rectShape = echarts.graphic.clipRectByRect(
            {
                x: start[0],
                y: start[1] - height / 2,
                width: end[0] - start[0],
                height: height,
            },
            {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height,
            }
        );
        return (
            rectShape && {
                type: "rect",
                transition: ["shape"],
                shape: rectShape,
                style: api.style(),
            }
        );
    };


    return (
        <div className="relative mt-8">
            {hasData ? (
                <div>
                    <div
                        ref={chartRef}
                        className={`w-full  h-[9vh]`}
                    />

                    {/* Legend here  */}
                </div>
            ) : (
                <h6 className="relative text-center pt-1 text-red-400 h-20">
                    Cycle Data is not available for this time period.
                </h6>
            )}
        </div>
    );
};

export default CycleStatusTimeline;
