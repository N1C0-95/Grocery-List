import { NavLink } from "react-router-dom";
import logo from "../../assets/LogoNF-removebg-preview.png";

export function NavBar() {
  return (
    <div className="w-full h-16 flex flex-wrap justify-between items-center pr-20 pl-10">
      
      {/* LOGO */}
      <div className="flex ">
        <img src={logo} className="w-12"/>
      </div>
      
      {/* PATH */}
      <div className="flex items-center gap-10 font-normal text-[#67748E]">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/grocery"}>Lista</NavLink>
        <NavLink to={"/pantry"}>Dispensa</NavLink>
        <i className="fa fa-user" />
      </div>
    </div>
  );
}
