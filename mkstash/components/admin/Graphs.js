﻿
import React, { useState, useEffect } from 'react';
import { Pie, Line } from '@ant-design/plots';
import pieData from '../../lib/pieData.json'

const DemoPie = () => {
    const data = pieData
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.5,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: 'Clicks',
            },
        },
    };
    return <Pie {...config} />;
};  


const LineGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'year',
        yField: 'gdp',
        seriesField: 'name',
        yAxis: {
            label: {
                formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
            },
        },
        legend: {
            position: 'top',
        },
        smooth: true,
        animation: {
            appear: {
                animation: 'path-in',
                duration: 2000,
            },
        },
    };

    return <Line {...config} />;
};


export default function Graphs() {
    return (
            <div class="row w-100 m-0 p-0" >
                <div class="col-lg-8 col-md-12 m-0 p-0  ">
                    <div class="p-4 border bg-light">
                            <h5 className='mb-0 p-0'>Product Clicks</h5>
                     </div>
                    <div className="card-body border bg-light">
                        <LineGraph
                            width={400}
                            height={'200rem'}
                        />
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 m-0 p-0">
                    <div class="p-4 border bg-light ">
                            <h5 className='mb-0 p-0'> Total  Number of Clicks</h5>
                    </div>
                    <div className="card-body border bg-light">
                        <DemoPie
                            width={400}
                            height={'185rem'}
                        />
                    </div>
                </div>
            </div>

       
     )  
}