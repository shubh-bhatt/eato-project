import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";
import RestaurantMenu from "../components/RestaurantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default appRouter;
