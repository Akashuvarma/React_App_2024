import AboutPage from "../../Components/Common/About/AboutPage";
import HomePage from "../../Components/Common/Home/HomePage";

const roleOne = [
  {

    element: <HomePage />,
    path: "/",
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
];

export default roleOne;
