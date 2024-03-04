import Dashboard from "../../Components/Personal/Dashboard";

const roleTwo = [
  {
    path: "/user/",
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default roleTwo;