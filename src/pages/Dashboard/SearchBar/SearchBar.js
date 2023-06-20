import  {React} from 'react'
import "./style.css"
import SearchIcon from '@mui/icons-material/Search';
function SearchBar({onCoinSearch}) {
   
  return (
    <div className='searchbar'>
        <SearchIcon />
      <input placeholder='Search' type='text' 
      onChange={(event)=> onCoinSearch(event)}>
      </input>
    </div>
  )
}

export default SearchBar
