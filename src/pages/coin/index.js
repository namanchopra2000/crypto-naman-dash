import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./style.css"
import CircularProgress from '@mui/material/CircularProgress';
import List from '../Dashboard/List';
import filterNeededData from '../../functions/filterSinglecoinpage';
import CoinInfo from '../../components/Coin/CoinInfo';
import FetchSinglecoin from '../../functions/getCoinData';
import fetchChartData from '../../functions/getChartData';
import LineChart from '../../components/Coin/Charts/LineChart';
import functionChartData from '../../functions/setChartData';
import BasicSelect from '../../components/Coin/SelectDays';
import ToggleCharts from '../../components/Coin/PriceType';

function Coin() {

  // take id from url and fetch data using coin id from coingeko
  const { id } = useParams();
  // state of loader
  const [loader, setloader] = useState(true);
  // state to set the data of the single coin when recieve from api
  const [singleCoinData, setSingleCoinData] = useState([]);

  // state to set chart data of given days from api and make chart from this data
  const [chartData, setChartData] = useState([]);
  // state to set days and according to that fetch data for charts
  const [days, setDays] = useState(30);

  // state to handle type of chart market cap volume or price default price
  const [chartType, setchartType] = useState("");


  // raect hook useEffect is used when evere id changed this fetchstart function runs
  useEffect(() => {
    if (id) {
      fetchStartCoin(id);
      fetchStartChart();
    }
  }, [id, days, chartType]);

  // asyncronous function that call api function from functions and get call to coingecko and fectch data of single coin

  async function fetchStartCoin(id) {
    const fetchDoneCoin = await FetchSinglecoin(id);
    setSingleCoinData(fetchDoneCoin);
    setloader(false);
  }

  // asyncronous function that call api coingecko for charts here we to parameters id of coin and no. of days want chart also set data in chart component to render
  async function fetchStartChart() {
    const price1 = await fetchChartData(id, days);
    const price2="";
    functionChartData(setChartData, price1 , price2 , chartType);

  }

  // jsx
  return (
    <div>
      {
        loader ? <div className='loader'>
          <CircularProgress size={100} />
        </div>
          :
          (
            <>
              <table className='table'>
                {/* we need only limited data of single coin so we filter data from all data of single coin to whichever needed */}
                <List coin={filterNeededData(singleCoinData)} coinlist="true" />
              </table>

              {/* middle area of sigle coin page */}
              <div className='center-area'>
                {/* selection component  */}
                <div className='days-selection'>
                  <span>Price Change In Last</span><BasicSelect setDays={setDays} />
                </div>
                {/* toggle between market price and volume */}
                <div className='toggle-button'>
                  <ToggleCharts handleType={setchartType} />
                </div>
                <div className='chart'>
                  {/* Charts */}
                  <LineChart chartData={chartData} />
                </div>
              </div>
              {/* call callinfo component to render accordingly */}
              <CoinInfo name={singleCoinData.name} description={singleCoinData.description} />
            </>
          )
      }
    </div>
  )
}

export default Coin;
