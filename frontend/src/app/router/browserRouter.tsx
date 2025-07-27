import {
  AboutPage,
  AllNewsPage,
  EventsPage,
  HomePage,
  NewsPage,
  PaymentPage,
} from "@pages/index";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/news",
    children: [
      {
        index: true,
        element: <AllNewsPage />,
      },
      {
        path: ":id",
        element: <NewsPage />,
      },
    ],
  },
  {
    path: "/event/:title",
    children: [
      {
        index: true,
        element: <EventsPage />,
      },
      {
        path: "payments",
        element: <PaymentPage />,
      },
    ],
  },
]);
