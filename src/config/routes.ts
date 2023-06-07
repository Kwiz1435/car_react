import Car from "../cars/Car";
import Dashboard from "../cars/Dashboard";
import About from "../cars/About";

interface Routetype {
    path: string
    component:() => JSX.Element,
    name: string,
    protected:boolean



}
const routes: Routetype[] = [
    {
      path: "",
      component: Car,
      name: "Car List",
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