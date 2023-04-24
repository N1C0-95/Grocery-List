import { NavLink } from "react-router-dom";
import logo from "../../assets/LogoNF-removebg-preview.png";


export function NavBar() {
  
  
  function isActive(obj:{isActive:boolean}){
    return obj.isActive ? "text-fuchsia-500 font-bold" : "text-[#67748E]";
  }
  console.log("riprocesso il componente")
  return (
    
    <div className="w-full h-24 flex flex-wrap justify-center items-center gap-7
     sm:h-16 sm:justify-between sm:pr-20 sm:pl-10  ">
      {/* LOGO */}
      <div className="flex ">
        <img src={logo} className="w-12"/>
      </div>
      
      {/* PATH */}
      <div className="flex items-center gap-5 font-normal text-[#67748E]">
        <NavLink to={"/home"} className={isActive} >Home</NavLink>
        <NavLink to={"/grocery"} className={isActive} >Lista</NavLink>
        <NavLink to={"/pantry"} className={isActive}>Dispensa</NavLink>
        <i className="fa fa-user" />
      </div>
    </div>
  );
}
