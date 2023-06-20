import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function BasicSelect({setDays}) {
    // deafalt value for chart is 30 days 
   const [day , setDay] = React.useState(30);

    const handleChange = (event) => {
        // this is for change select value or rerender select component with new days in view
        setDay(event.target.value);
        // this setDays makes days global to coin main page to fetch data according to days
        setDays(event.target.value);
    };

    return (
        <div>
            <Select
                sx={{
                    height: "2.5rem",
                    color: "var(--white)",
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#3a80e9" },
                    "& .MuiSvgIcon-root":{
                        color:"var(--white)",
                    },
                    "&:hover": {
                        "&& fieldset": {
                            borderColor: "#3a80e9",
                        },
                    },
                }}
                id="demo-simple-select"
                value={day}
                onChange={handleChange}
            >
                <MenuItem value={7}>7days</MenuItem>
                <MenuItem value={30}>30days</MenuItem>
                <MenuItem value={60}>60days</MenuItem>
                <MenuItem value={90}>90days</MenuItem>
                <MenuItem value={120}>120days</MenuItem>
                <MenuItem value={365}>1 year</MenuItem>
            </Select>

        </div>
    );
}