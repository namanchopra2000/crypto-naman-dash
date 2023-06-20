import * as React from 'react';
import Tab from '@mui/material/Tab'; //import tab from material ui
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList'; //tablist from material ui lab
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../Grid';
import List from '../List';
import "./style.css";
import filteredSearchData from '../../../functions/filteredSearchData';



// recieve api data using props here named coin
export default function TabsComponent({ coin, searchedCoin }) {


    //this state handles switch between the tabs grid and list
    const [value, setValue] = React.useState("Grid");

    // function change state when onclick to list and grid 
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // style object of tabs grid and list 
    const style = {
        color: "var(--white)",
        width: "50vw",
        fontWeight: "600",
        fontSize: "1rem",
    }
    return (<div>

        <TabContext value={value}>
            <div >
                <TabList onChange={handleChange} variant='fullWidth'>
                    <Tab label="Grid" value="Grid" sx={style} />
                    <Tab label="List" value="List" sx={style} />

                </TabList>
            </div>
            <TabPanel value="Grid">
                <div className='full-grid'>
                    {/* mapping for grid for each iterate  grid component runs  */}

                    {searchedCoin === "" ?
                        (

                          coin &&  coin.map((value, i) => {
                                return (
                                    // Grid component and pass data of single coin 
                                    <Grid coin={value} key={i} />)
                            })
                        )
                        :
                        (
                            filteredSearchData(coin, searchedCoin) &&   filteredSearchData(coin, searchedCoin).map((value, i) => {
                                return (
                                    <Grid coin={value} key={i} />
                                )
                            })
                        )

                    }

                </div>
            </TabPanel>
            <TabPanel value="List">

                <table className='full-List'>
                    {/* mapping for grid for each iterate  List component runs  */}
                    {searchedCoin === "" ?
                        (

                            coin.map((value, i) => {
                                return (
                                    // Grid component and pass data of single coin 
                                    <List coin={value} key={i} />)
                            })
                        )
                        :
                        (
                            filteredSearchData(coin, searchedCoin).map((value, i) => {
                                return (
                                    <List coin={value} key={i} />
                                )
                            })
                        )
                    }
                </table>
            </TabPanel>
        </TabContext>

    </div>

    )
}








