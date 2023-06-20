
const filteredSearchData = (coin , searchedCoin) => {
    
    const filtereData = coin.filter((value)=> (value.name.toLowerCase().includes(searchedCoin.toLowerCase())));
    
  return filtereData ;
}

export default filteredSearchData ;