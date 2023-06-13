import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layout
import RootLayout from "./components/layout/RootLayout";
import Homepage from "./pages/Homepage";

// Pages

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
