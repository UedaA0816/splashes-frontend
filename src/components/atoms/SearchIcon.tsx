import searchIcon from './../../assets/search_black_24dp.svg'


const SearchIcon = ({className}:{className?:string})=>{
  return <img src={searchIcon} alt="SearchIcon" className={className}/>
}

export default SearchIcon