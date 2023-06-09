
import Dashboard from "../Tequila/Dashboard";
import About from "../Tequila/About";
import Drinks from "../Tequila/Drinks";

interface Routetype {
    path: string
    component:() => JSX.Element,
    name: string,
    protected:boolean



}
const routes: Routetype[] = [
    {
      path: "",
      component: Drinks,
      name: "Drink list ",
      protected: false
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false,
  
    },
    
     
    
  ];

export default routes 