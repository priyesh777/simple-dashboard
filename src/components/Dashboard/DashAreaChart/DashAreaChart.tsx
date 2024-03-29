import React, { useEffect, useState } from 'react';

import { Card, AreaChart, Title, Text } from "@tremor/react";
import { DashAreaChartData } from "./DashAreaChart.data";

interface StockData {
    avgVolume: number;
    change: number;
    changesPercentage: number;
    dayHigh: number;
    dayLow: number;
    earningsAnnouncement: string;
    eps: number;
    exchange: string;
    marketCap: number;
    name: string;
    open: number;
    pe: number;
    previousClose: number;
    price: number;
    priceAvg50: number;
    priceAvg200: number;
    sharesOutstanding: number;
    symbol: string;
    timestamp: number;
    volume: number;
    yearHigh: number;
    yearLow: number;
}

const valueFormatter = (number: number) =>
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;

function DashAreaChart() {

    const [stockData, setStockData] = useState<StockData[]>([]);

    //Fetched API for stock market of various companies
    useEffect(() => {
        const fetchStockData = async () => {
            const symbol = "AAPL";
            const apiKey = "bsXSeBnccajVCa8hGq5lprbGEtpbPC68";
            const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setStockData(data);
            } catch (error) {
                console.error("Failed to fetch stock data", error);
            }
        };

        fetchStockData();
    }, []);

    console.log("Check the stock data::>>", stockData);

    return (
        <div>
            <Card decoration="top" decorationColor="blue" maxWidth="max-w-full">
                <Title>Financial Information API</Title>
                <Text>Recent stock Market Data</Text>
                <AreaChart
                    marginTop="mt-4"
                    data={stockData}
                    categories={["yearHigh", "yearLow"]}
                    dataKey="name"
                    colors={["indigo", "fuchsia"]}
                    valueFormatter={valueFormatter}
                />
            </Card>
        </div>
    );
}

export default DashAreaChart;
