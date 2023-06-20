import { React, useEffect, useState } from 'react'
import SelectCrypto from './CoinSelector'
import BasicSelect from '../../components/Coin/SelectDays'
import './style.css'
import filterNeededData from '../../functions/filterSinglecoinpage';
import FetchSinglecoin from '../../functions/getCoinData';
import List from '../Dashboard/List';
import CoinInfo from '../../components/Coin/CoinInfo';
import fetchChartData from '../../functions/getChartData';
import LineChart from '../../components/Coin/Charts/LineChart';
import functionChartData from '../../functions/setChartData';
import ToggleCharts from '../../components/Coin/PriceType';
import { color } from 'framer-motion';

function Compare() {

  // coin first id default bitcoin
  const [crypto1, setcrypto1] = useState("bitcoin");
  // coin second id deafult  etereum
  const [crypto2, setcrypto2] = useState("ethereum");
  // state to update data of recieve using fetch of single coin  of coin1
  const [cryptoData1, setcryptoData1] = useState("");
  // state to update data of recieve using fetch of single coin  of coin2
  const [cryptoData2, setcryptoData2] = useState("");
  // set the days of compare in comparision days wise default 120days
  const [day, setDay] = useState(120);
  // chart data of compare page coin 1
  const [cryptoChartData1, setcryptoChartData1] = useState("");
  // chart data of compare page coin 2
  const [cryptoChartData2, setcryptoChartData2] = useState("");
  // final chart data and set data and send to chart js
  const [finalChartData, setfinalChartData] = useState("");
  // state to comparision as type charts volume , marketcap and prices
  const [chartType, setChartType] = useState("prices");

  // hook for rerender coin 1 data when chage option in selector and change day
  useEffect(() => {
    fetchStartCrypto1();
  }, [crypto1, day]);
  
  // hook for rerender coin 2 data when chage option in selector and change day
  useEffect(() => {
    fetchStartCrypto2();
  }, [crypto2, day])


  // hook to rerender or setchartdata into chart js on change of day , type and coins
  useEffect(() => {
    functionChartData(setfinalChartData, cryptoChartData1, cryptoChartData2, chartType)
  }, [cryptoChartData1, cryptoChartData2, day, chartType])


  // function to fetch selected coin1 from selection and and chart data of that coin and set into the states
  async function fetchStartCrypto1() {
    const fetchDoneCoin1 = await FetchSinglecoin(crypto1);
    const fetchDoneCompareChart = await fetchChartData(crypto1, day)
    setcryptoData1(fetchDoneCoin1);
    setcryptoChartData1(fetchDoneCompareChart);
  }
  
  // function to fetch selected coin2 from selection and and chart data of that coin and set into the states
  async function fetchStartCrypto2() {
    const fetchDoneCoin2 = await FetchSinglecoin(crypto2);
    const fetchDoneCompareChart2 = await fetchChartData(crypto2, day)
    setcryptoData2(fetchDoneCoin2);
    setcryptoChartData2(fetchDoneCompareChart2);
  }

  return (
    <>
      <div className='selections-compare'>
        <SelectCrypto crypto1={crypto1} crypto2={crypto2} setcrypto1={setcrypto1} setcrypto2={setcrypto2} />
        <BasicSelect setDays={setDay} />
      </div>
      <div className='compare-page-list-coins'>
        {cryptoData1 == "" ? "" :
          <List coin={filterNeededData(cryptoData1)} coinlist="true" />
        }
        {cryptoData2 == "" ? "" :
          <List coin={filterNeededData(cryptoData2)} coinlist="true" />
        }
      </div>
      <div className='compare-chart'>
        <div className='toggle-button'>
          <ToggleCharts handleType={setChartType} />
          <p style={{ color: "var(--grey)" }} >Comparision between {crypto1} and {crypto2}</p>
        </div>
        {
          finalChartData ? <LineChart chartData={finalChartData} multiAxis={true} /> : ""
        }
      </div>
      <div className='compare-page-list-coinInfo'>
        {
          cryptoData1 == "" ? "" :
            <CoinInfo name={cryptoData1.name} description={cryptoData1.description} />
        }
        {
          cryptoData2 == "" ? "" :
            <CoinInfo name={cryptoData2.name} description={cryptoData2.description} />
        }
      </div>

    </>
  )
}

export default Compare
