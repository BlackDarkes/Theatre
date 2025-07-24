import { createBrowserRouter } from "react-router";
import { HomePage } from "../../pages/homePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  }
])