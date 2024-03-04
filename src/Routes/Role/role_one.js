import AboutPage from "../../Components/Common/About/AboutPage";
import HomePage from "../../Components/Common/Home/HomePage";
import ErrorComponent from "../../ErrorPage/ErrorComponent";


const roleOne = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <ErrorComponent /> 
  },
];

export default roleOne;
