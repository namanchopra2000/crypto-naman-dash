import ConvertDate from "./ConvertDate"

function functionChartData (setChartData , price1 , price2 , chartType){
  var price1TypeData = "" ;
  var price2TypeData = "" ;
  // set data accordingly chartstype which type of chart needed volume price or marketcap
  if(chartType=="total_volume"){
    price1TypeData = price1.total_volumes
    price2TypeData = price2.total_volumes
  }
  else if (chartType=="market_cap"){
    price1TypeData = price1.market_caps
    price2TypeData = price2.market_caps
  }
  else{
    price1TypeData = price1.prices
    price2TypeData = price2.prices
  }
  if(price2 != "" ){
    setChartData({
      labels: price1TypeData && price1TypeData.map((date)=>{ return ConvertDate(date)}),
      datasets: [
        {
        label:"Crypto 1",
        data: price1TypeData && price1TypeData.map((item)=>{return item[1]}),
        fill: false,
        backgrounddColor:"var(--darkgrey)",
        borderColor: "#3a88e9",
        tension: 0.25,
        pointRadius:0,
        yAxisID:"crypto1",
        
      },
      {
        label:"Crypto 2",
        data: price2TypeData && price2TypeData.map((item)=>{return item[1]}),
        fill: false,
        backgrounddColor:"var(--darkgrey)",
        borderColor: "#61c96f",
        tension: 0.25,
        pointRadius:0,
        yAxisID:"crypto2",
      }
    ]
    }
      )
  }
  else{   
  setChartData({
    labels: price1TypeData && price1TypeData.map((date)=>{ return ConvertDate(date)}),
    datasets: [{
      data: price1TypeData && price1TypeData.map((item)=>{return item[1]}),
      fill: true,
      backgrounddColor:"var(--darkgrey)",
      borderColor: "#3a88e9",
      tension: 0.25,
      pointRadius:0,
      yAxisID:"crypto1"
    }]
  }
    )
}

  };

export default functionChartData ;