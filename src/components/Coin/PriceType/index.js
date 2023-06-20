import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleCharts({handleType}) {
  const [type, setType] = React.useState('prices')

  const handlePriceType = (event , newType) => {
    handleType(newType);
    setType(newType);
  };

  return (
    <ToggleButtonGroup
      value={type}
      exclusive
       color="primary"
      onChange={handlePriceType}
      aria-label="text alignment"
      sx={{
          borderColor:"var(--blue) important",
          border:"unset !important",
          
          "& .MuiToggleButtonGroup-grouped":{
            border:"1px solid !important",
            borderColor:"unset !important",
            color:"#3a88e9 !important",
          },
          "& .MuiToggleButton-standard":{
            color:"var(--blue) !importanat",
          },
      }}
    >
      <ToggleButton value="prices" aria-label="left aligned">Prices</ToggleButton>
      <ToggleButton value="market_cap" aria-label="centered">Market Cap</ToggleButton>
      <ToggleButton value="total_volume" aria-label="right aligned">Total Volume</ToggleButton>
     
    </ToggleButtonGroup>
  );
}