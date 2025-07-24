import { RouterProvider } from "react-router";
import { router } from "./router/browserRouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./router/queryRouter";
import "../shared/styles/base/normalize.scss";
import "../shared/styles/base/globals.scss"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
