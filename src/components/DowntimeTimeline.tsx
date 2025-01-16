import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import moment from "moment";
// import axios from "axios";


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

interface DowntimeReason {
  state: string;
  color: string;
  reason_id: number;
  reason: string;
  id: string;
}



const DowntimeTimeline: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const [chartData, setChartData] = useState<DataItem[]>([]);

  const [hasData, setHasData] = useState(true);
  const [reasons, setReasons] = useState<DowntimeReason[]>([]);

  useEffect(() => {
    const fetchDataAndProcessData = async () => {
      try {
 

  

        // cycle data
        let productionResponseData: MachineData[] = [
            {
                "_id": "676ea4371477186c0c1852e0",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735304354000,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676ea5381477186c0c187b95",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735304504126,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676ea5491477186c0c187c83",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735304521109,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676ea5951477186c0c1880ab",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735304597260,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676ea5a21477186c0c188e30",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735304610303,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676ea6771477186c0c18aa11",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735304823647,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676ea8641477186c0c18fd2d",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735305316447,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676ea8651477186c0c18fd39",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735305317478,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676ea86e1477186c0c18fde2",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735305326461,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676ea86f1477186c0c18fdee",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735305327477,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676ea8791477186c0c18fe87",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735305337514,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676ea9991477186c0c191cfd",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735305624978,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676eaaa31477186c0c193084",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735305891436,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676eabc21477186c0c19504b",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735306177962,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676eac431477186c0c196f6a",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735306307266,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676eacbb1477186c0c1976f8",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735306427409,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676eacbd1477186c0c197716",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735306429461,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676eaceb1477186c0c197a4e",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735306475568,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676eacf41477186c0c197af5",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735306484505,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676eae111477186c0c199bb6",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735306768963,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676eaf911477186c0c19cd62",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735307153687,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676eb0b01477186c0c19de6f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735307440211,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676eb2561477186c0c19f42f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735307862890,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676eb2571477186c0c19f441",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735307863890,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676eb25e1477186c0c19f4a8",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735307870847,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676eb37d1477186c0c1a0388",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735308157354,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676eb4291477186c0c1a0b57",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735308329662,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676eb5481477186c0c1a1ca7",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735308616170,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676eb6981477186c0c1a2d45",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735308952819,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676eb8831477186c0c1a461e",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735309443553,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676eb9ac1477186c0c1a56ab",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735309737939,
                "value": 898989,
                "__v": 0
            },
            {
                "_id": "676f63e21477186c0c20a881",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735353314689,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f63e41477186c0c20a889",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735353316057,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f64b81477186c0c20abf0",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735353528349,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f64de1477186c0c20acd2",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735353566419,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f65561477186c0c20b046",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735353686633,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f65681477186c0c20b0b2",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735353704717,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f65721477186c0c20b0e9",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735353714686,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f65761477186c0c20b0fb",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735353718737,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f66a41477186c0c20bb53",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735354020281,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f676b1477186c0c20c24b",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735354219692,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f688a1477186c0c20cbf8",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735354506142,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f68f81477186c0c20d059",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735354616330,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f6a171477186c0c20dcb3",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735354903708,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f6a9f1477186c0c20e2b0",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735355039005,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f6bbe1477186c0c20f159",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735355326431,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f6c1d1477186c0c20f664",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735355421613,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f6d3c1477186c0c2104e3",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735355708111,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f6db31477186c0c210bfb",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735355827308,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f6e5f1477186c0c211588",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735355999552,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f6e631477186c0c2115cd",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356003572,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f6e801477186c0c21178f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356032592,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f6e811477186c0c2117a8",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356033652,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f6eb31477186c0c211a85",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356083677,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f6eb81477186c0c211ab9",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356088735,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f6edc1477186c0c211c69",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356124772,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f6f541477186c0c2122cf",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356243993,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f6ff41477186c0c212a95",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356404324,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f6ffe1477186c0c212b32",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356414330,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f701e1477186c0c212c81",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356446398,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f70271477186c0c212d02",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356455437,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f71291477186c0c2140ae",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356713768,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f71b21477186c0c21479f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735356850086,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f72d11477186c0c215528",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735357137631,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f73de1477186c0c21666b",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735357406007,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f73e21477186c0c2166a9",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735357410048,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f73f31477186c0c2167e3",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735357427078,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f74071477186c0c2168fb",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735357447140,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f74131477186c0c2169e4",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735357459162,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f74401477186c0c216d01",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735357504443,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f74441477186c0c216d3f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735357508226,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f751c1477186c0c2179e3",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735357724774,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f759a1477186c0c21814b",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735357849974,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f75e41477186c0c218607",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735357924093,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f76021477186c0c2187d2",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735357954133,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f77131477186c0c21969f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358227655,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f77771477186c0c219c87",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358327848,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f77c51477186c0c21a192",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358405929,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f77cb1477186c0c21a1dc",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358411940,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f780c1477186c0c21a6c5",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358476057,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f780d1477186c0c21a6d5",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358477072,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f78b61477186c0c21b02e",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358646506,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f78cc1477186c0c21b192",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358668380,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f790a1477186c0c21b52c",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358730516,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f79231477186c0c21b687",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358755536,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f79271477186c0c21b6b9",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358759577,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f79341477186c0c21b760",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358772593,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f795d1477186c0c21b9d9",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358813665,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f795f1477186c0c21b9f3",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735358815665,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f7a1a1477186c0c21c307",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735359002035,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f7c2a1477186c0c21e3dc",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735359530008,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f7e331477186c0c220238",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360050985,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f7e351477186c0c220256",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360052990,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f7e431477186c0c220350",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360067012,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f7e4e1477186c0c2203f3",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360078011,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f7e681477186c0c2205c2",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360104047,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f7ece1477186c0c220d66",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360206274,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f7ee61477186c0c221162",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360230267,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f7eed1477186c0c2211fb",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360237259,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f7ffe1477186c0c222f77",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360510789,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f81411477186c0c224239",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360833654,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f81811477186c0c2246ff",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360897582,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f81891477186c0c224750",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360905588,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f81d81477186c0c224b80",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360984745,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f81e71477186c0c224c0f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735360999761,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f824e1477186c0c225143",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735361102934,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f82e71477186c0c225a41",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735361255293,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f835f1477186c0c2261a9",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735361375512,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f83d61477186c0c226a6c",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735361494829,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f85021477186c0c227f86",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735361794448,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f85a11477186c0c228ad2",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735361953713,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f85a51477186c0c228b18",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735361957726,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f85ae1477186c0c228bdb",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735361966726,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f86d51477186c0c229fc1",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735362261327,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f873f1477186c0c22a79a",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735362367461,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f886b1477186c0c22c9d8",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735362666989,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f89211477186c0c22e33f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735362849321,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f893b1477186c0c22e556",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735362875367,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f896e1477186c0c22e88d",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735362926437,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f899d1477186c0c22ec09",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735362973498,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8a0a1477186c0c23008a",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363082709,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8a0e1477186c0c2300e7",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363086710,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8a291477186c0c2302cb",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363113811,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8a4e1477186c0c2305cf",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363150851,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8a541477186c0c23065a",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363156832,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8a581477186c0c2306b8",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363160926,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8a691477186c0c2307dc",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363177890,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8aa71477186c0c230c82",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363239015,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8aa91477186c0c230cac",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363240998,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8aad1477186c0c230d29",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363245010,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8acd1477186c0c230ff3",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363276996,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8ae71477186c0c2311ea",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363303044,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8ae91477186c0c231237",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363305095,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8aed1477186c0c231285",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363309063,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8af91477186c0c231fe6",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363321118,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8b2a1477186c0c2322c9",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363370175,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8b401477186c0c23243f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363392225,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8b651477186c0c23267d",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363429270,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8bf61477186c0c232fe4",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363574597,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f8bf71477186c0c232ff8",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363575576,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8c0f1477186c0c2331ba",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363599667,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8c111477186c0c2331e6",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363601650,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8c121477186c0c2331fe",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363602658,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8c181477186c0c233283",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363608646,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8c1f1477186c0c233543",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363614654,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8c4f1477186c0c23427a",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363663740,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8c591477186c0c23430b",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363673776,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f8c651477186c0c2343f7",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363685809,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8cde1477186c0c234e3f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363805986,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8cf81477186c0c2350f0",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363831970,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f8cfe1477186c0c235147",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735363838017,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f8e0f1477186c0c236e7a",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735364111558,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f90721477186c0c23adf5",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735364722675,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f90a11477186c0c23b1be",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735364769789,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f90b81477186c0c23b346",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735364792802,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f90bb1477186c0c23b395",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735364795798,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f90bc1477186c0c23b3a1",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735364796816,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f90de1477186c0c23c310",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735364830854,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f90e21477186c0c23c36d",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735364834896,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f92201477186c0c23e604",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735365152487,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f92251477186c0c23e66b",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735365157464,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f92401477186c0c23e864",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735365184517,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f92471477186c0c23e8be",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735365191593,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f93591477186c0c240aa6",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735365465007,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f946d1477186c0c242986",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735365741659,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f94861477186c0c242b85",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735365766587,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f94b01477186c0c242dbb",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735365808642,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f96001477186c0c244f44",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735366144340,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f96041477186c0c244f89",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735366148325,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f96051477186c0c244f9d",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735366149268,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f96091477186c0c244fb5",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735366153349,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f96201477186c0c245185",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735366176367,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f963f1477186c0c245465",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735366207418,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f97511477186c0c2473e6",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735366480978,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f97c21477186c0c247a85",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735366594157,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f98ec1477186c0c249acc",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735366892727,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f99491477186c0c24ad3c",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735366985896,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f995f1477186c0c24ae3a",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367007919,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f99d61477186c0c24b496",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367126147,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f99ec1477186c0c24b5fc",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367148181,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f99f41477186c0c24b6a3",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367156222,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f99f61477186c0c24b6bb",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367158236,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f99fa1477186c0c24b6e5",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367162219,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f9a081477186c0c24b7bd",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367176245,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f9a1e1477186c0c24b8d3",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367198305,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f9a341477186c0c24c32d",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367220447,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f9a591477186c0c24c941",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367257405,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f9a5d1477186c0c24c967",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367261411,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f9a5f1477186c0c24c97f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367263446,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f9a601477186c0c24c9ac",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367264427,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f9aa21477186c0c24cd32",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367330543,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f9aa51477186c0c24cd4a",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367333522,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676f9ac11477186c0c24cee0",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367361638,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f9b651477186c0c24e93f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367525891,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f9b851477186c0c24eb2e",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367557957,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f9b8f1477186c0c24ebb3",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367567971,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f9ca11477186c0c2509a3",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735367841644,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f9d531477186c0c2517cd",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735368019693,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676f9e7e1477186c0c253ae6",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735368318320,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676f9ef41477186c0c2550b7",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735368436596,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fa0201477186c0c257607",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735368736118,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fa1651477186c0c259dbd",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735369061512,
                "value": 898989,
                "__v": 0
            },
            {
                "_id": "676fa9411477186c0c267780",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735371073281,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fa9421477186c0c267792",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735371074667,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676fa9e21477186c0c2691e8",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735371233948,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676faa001477186c0c2694d1",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735371264020,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676faa181477186c0c269732",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735371288012,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676faa1d1477186c0c26976c",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735371293052,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676faa4c1477186c0c269bca",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735371340149,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676faa761477186c0c269ffa",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735371382218,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fab871477186c0c26c975",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735371655672,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fac401477186c0c26e7e2",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735371839985,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fad6b1477186c0c270553",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735372139552,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fadc51477186c0c270def",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735372229750,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676faef01477186c0c272ab2",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735372528410,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676faf6a1477186c0c273655",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735372650631,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fb0951477186c0c27541c",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735372949157,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fb1071477186c0c276006",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735373063417,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fb2331477186c0c278245",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735373362988,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fb2961477186c0c278de4",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735373462178,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fb3c11477186c0c27b0ee",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735373761647,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fb43d1477186c0c27c0e4",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735373885937,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fb4411477186c0c27c10c",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735373889889,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fb4491477186c0c27c215",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735373897902,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fb5711477186c0c27e590",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735374193498,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fb6251477186c0c27fbe1",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735374373885,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fb7501477186c0c28265d",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735374672454,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fb7cc1477186c0c28383e",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735374796720,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fb7e61477186c0c283b5e",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735374822720,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fb83c1477186c0c284879",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735374908861,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fb8401477186c0c2848af",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735374912865,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fb84a1477186c0c284a07",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735374922931,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fb8761477186c0c2850a0",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735374965965,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fb8831477186c0c28527f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735374979962,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fb8ac1477186c0c285825",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735375020044,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fb8c51477186c0c285af7",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735375045097,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fb97e1477186c0c287414",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735375230436,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fba1e1477186c0c288b96",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735375390708,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fbb491477186c0c28b8b5",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735375689158,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fbc3a1477186c0c28df81",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735375930659,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fbd661477186c0c291229",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735376230218,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fbe911477186c0c2942af",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735376529812,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fbeac1477186c0c2946db",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735376555930,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fbf841477186c0c296b42",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735376772264,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676fc01a1477186c0c29837b",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735376922469,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fc0201477186c0c298505",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735376928528,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fc0381477186c0c2988bd",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735376952555,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fc03e1477186c0c298a19",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735376958576,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fc1501477186c0c29b547",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735377232084,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fc1e11477186c0c29cd98",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735377377329,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fc30b1477186c0c2a0087",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735377675878,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fc3921477186c0c2a1963",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735377810067,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fc4bc1477186c0c2a51ba",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735378108598,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fc5371477186c0c2a7236",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735378231880,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fc6631477186c0c2aa977",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735378531455,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fc7591477186c0c2ad9e6",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735378777904,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fc8851477186c0c2af591",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735379077435,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fca961477186c0c2b1698",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735379606482,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676fcd8d1477186c0c2b4d2e",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735380365806,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fcd991477186c0c2b4e02",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735380377785,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676fcd9a1477186c0c2b4e16",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735380378796,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fcd9d1477186c0c2b4e3a",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735380381822,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676fcd9f1477186c0c2b4e54",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735380383835,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fcdcb1477186c0c2b510f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735380427898,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676fcf011477186c0c2b6628",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735380737380,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fcf1a1477186c0c2b6790",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735380762409,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fd0471477186c0c2b7d78",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735381063946,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fd1401477186c0c2b8f23",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735381312326,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fd26a1477186c0c2ba497",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735381610883,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fd3021477186c0c2bae70",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735381762145,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fd42c1477186c0c2bc45d",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735382060631,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fd5871477186c0c2bd9d6",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735382407258,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676fd5881477186c0c2bd9f0",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735382408319,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fd58c1477186c0c2bda20",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735382412276,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fd6b71477186c0c2be96b",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735382711776,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fd88a1477186c0c2c049d",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735383178647,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fd8d61477186c0c2c0930",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735383254816,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fd8ed1477186c0c2c0ab1",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735383277836,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fd9cd1477186c0c2c17ef",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735383501286,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fda2b1477186c0c2c1c80",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735383595449,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676fda2c1477186c0c2c1c9b",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735383596468,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fda8b1477186c0c2c22db",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735383691599,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fda8e1477186c0c2c22fb",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735383694586,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fda9a1477186c0c2c23af",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735383706655,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fdbc21477186c0c2c3411",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735384002137,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fdc0e1477186c0c2c379d",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735384078271,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fdd391477186c0c2c4afd",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735384377774,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fdd941477186c0c2c516e",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735384468908,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fdd981477186c0c2c51be",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735384472938,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fdd9d1477186c0c2c520f",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735384476984,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fdec41477186c0c2c6404",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735384772416,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fdf191477186c0c2c68df",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735384857554,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fe0441477186c0c2c99f1",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735385156023,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fe1291477186c0c2cb6b4",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735385385424,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fe1711477186c0c2cc051",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735385457560,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fe1a51477186c0c2cc3a2",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735385509627,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fe2881477186c0c2ced8d",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735385736065,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fe2d71477186c0c2cf368",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735385815241,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fe4021477186c0c2d2552",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735386114849,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fe4d71477186c0c2d40f7",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735386327199,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fe5261477186c0c2d4696",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735386406388,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fe5491477186c0c2d4a00",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735386441506,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fe65b1477186c0c2d6cf3",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735386715912,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fe6dc1477186c0c2d83c2",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735386844111,
                "value": 3,
                "__v": 0
            },
            {
                "_id": "676fea2a1477186c0c2dddc7",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735387690688,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fea321477186c0c2dde74",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735387698680,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fea861477186c0c2df12a",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735387782841,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fea8f1477186c0c2df19b",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735387791850,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676feb6f1477186c0c2e022d",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735388015281,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676febc81477186c0c2e14d8",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735388104434,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fecf31477186c0c2e397c",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735388403904,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fedde1477186c0c2e4fe0",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735388638339,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676fef081477186c0c2e710c",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735388936875,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676fef641477186c0c2e85c4",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735389028063,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676ff0951477186c0c2ea75a",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735389333573,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676ff3c51477186c0c2eddd0",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735390149062,
                "value": 1,
                "__v": 0
            },
            {
                "_id": "676ff4f01477186c0c2f17cc",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735390448559,
                "value": 0,
                "__v": 0
            },
            {
                "_id": "676ff58c1477186c0c2f22eb",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735390604889,
                "value": 1,
                "__v": 0
            }
        ]

        // sort ascending state save && filter out only 1s
        productionResponseData = productionResponseData
          .filter((a) => a.value === 1 || a.value === 0 || a.value === 898989)
          .sort((a, b) => a.ts - b.ts);

          //downtime data
        const responseData: MachineData[] = [
            {
                "_id": "676e8c061477186c0c144413",
                "machineId": "66ffdd636e8bb64de75486e5",
                "ts": 1735304354000,
                "value": 3,
                "__v": 0
            }
        ]

        if (responseData.length === 0) {
     
          setHasData(false);
        } else {
     
          setHasData(true);
        }

        const data: DataItem[] = responseData
          .map<DataItem | null>((item, index) => {
            const reason = reasons.find((r) => r.reason_id === item.value);
            if (!reason) return null;

            const startTime = item.ts; // downtime start
            // endTime  = productionData.filter((item)=> item.ts >startTime))?[0];
            // Find the next production cycle to determine the actual end time of downtime
            const filtereddata = productionResponseData.filter(
              (item) => item.ts > startTime
            );
            // if we don't have cycle data our next end time will be start next downtime / if next downtime not there it will requested end time.
            const nextIndex =
              index + 1 <= responseData.length - 1 ? index + 1 : undefined;
            let endOfdowntime = filtereddata[0];
            if (!filtereddata[0]) {
              if (nextIndex) {
                endOfdowntime = responseData[nextIndex];
              } else {
                endOfdowntime = {
                  _id: "",
                  machineId: "",
                  ts: moment(1735304354000).valueOf(), // startdate 
                  value: 123,
                  __v: 1,
                };
              }
            }
            let endTime: any =
              index <= responseData.length
                ? endOfdowntime.ts
                : new Date().getTime(); //production status start = 1

            if (!endOfdowntime) {
              endTime = endTime
                ? moment(1735390604889).valueOf() // enddate of chart
                : new Date().getTime();
            }

            const duration = endTime - startTime;

            return {
              name: reason.reason,
              value: [0, startTime, endTime, duration],
              itemStyle: {
                normal: {
                  color: reason.color,
                },
              },
            };
          })
          .filter((item): item is DataItem => item !== null);

        // Add "Not Assigned" segments for any gaps in the timeline
        const notAssignedData: DataItem[] = [];
        let previousEndTime = moment(1735304354000).valueOf(); // Initialize to the chart's startDate

        data.forEach((item) => {
          const currentStartTime = item.value[1]; // Start timestamp of the current downtime
          if (previousEndTime < currentStartTime) {
            // Gap detected between the previous end time and the current start time
            notAssignedData.push({
              name: "Not Assigned", // Label for the gap
              value: [
                0, // Default y-axis value
                previousEndTime, // Start of the gap
                currentStartTime, // End of the gap
                currentStartTime - previousEndTime, // Duration of the gap
              ],
              itemStyle: {
                normal: {
                  color: "#000000", // Black color for "Not Assigned"
                },
              },
            });
          }
          previousEndTime = item.value[2]; // Update to the end timestamp of the current downtime
        });

        // Check for a final gap between the last downtime and the chart's endDate
        const lastEndTime = previousEndTime; // End timestamp of the last downtime
        const chartEndTime = moment(1735390604889).valueOf(); // Chart's endDate as timestamp
        if (lastEndTime < chartEndTime) {
          // If a gap exists at the end of the timeline, add a "Not Assigned" segment
          notAssignedData.push({
            name: "Not Assigned", // Label for the gap
            value: [
              0, // Default y-axis value
              lastEndTime, // Start of the gap
              chartEndTime, // End of the gap
              chartEndTime - lastEndTime, // Duration of the gap
            ],
            itemStyle: {
              normal: {
                color: "#000000", // Black color for "Not Assigned"
              },
            },
          });
        }

        // Combine processed data and "Not Assigned" segments into the final dataset
        const finalData = [...data, ...notAssignedData];
        setChartData(finalData);

       
      } catch (error) {
        console.error("Error:", error);
     
      }
    };

    fetchDataAndProcessData();
  }, [reasons]);

//   useEffect(() => {
//     const fetchReasons = async () => {
//       try {
//         const response = await axios.get(
//           `https://13.200.129.119/api/v1/downtimeReason/getAllReasons`,
         
//         );
//         setReasons(response.data);
//       } catch (error) {
//         console.error("Error fetching reasons:", error);
//       }
//     };

//     fetchReasons();
//   }, []);

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
            params.value[3]  +
            "<br>Start Time:" +
            startDateTime +
            "<br>End Time: " +
            endDateTime
          );
        },
      },
      title: {
        subtext: "Downtime Reason",
        left: "left",
        top: -15,
      },
      grid: {
        height: "20vh",
        left: 30,
        right: 30,
        bottom: 0,
        top: 12,
      },
      xAxis: {
        interval: 1,
        type: "time",
        // min: chartData[0]?.value[1] ?? 1707366600000,
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
    <div className="relative">
      {hasData ? (
        <div>
          <div
            ref={chartRef}
            className={`w-full ${  "h-[6.5vh]"}`}
          ></div>


          <div className="flex flex-wrap justify-center items-center mb-1">
            {/* Combine reasons from the reasons array and "Not Assigned" from chartData */}
            {[...reasons, { reason: "Not Assigned", color: "#000000" }]
              .filter((reason) =>
                chartData.some((dataItem) => dataItem.name === reason.reason)
              )
              .map((reason, index) => (
                <div key={index} className="flex items-center mb-1 mr-1 ml-1">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: reason.color }}
                  ></div>
                  <span className="text-sm">{reason.reason}</span>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <h6 className="relative  text-center pt-1 text-red-400 h-20">
          Downtime Reason is not available for this time period.
        </h6>
      )}
    </div>
  );
};







export default DowntimeTimeline;
