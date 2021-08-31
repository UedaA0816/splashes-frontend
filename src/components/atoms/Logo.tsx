import logo from './../../assets/my_unsplash_logo.svg'


const Logo = ({className}:{className?:string})=>{
  return <img src={logo} alt="Logo" loading="lazy" className={className}/>
}

export default Logo