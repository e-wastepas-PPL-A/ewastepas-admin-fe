import Dashboard from './pages/DashboardPage.jsx'
import Register from './pages/RegisterPage.jsx'
import PermintaanSampah from './pages/PermintaanSampah.jsx'
import './style/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/test",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/permintaan-sampah",
    element: <PermintaanSampah />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);