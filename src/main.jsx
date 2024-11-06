import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Dashboard from './pages/DashboardPage.jsx'
import Register from './pages/ApproveMasyarakat/RegisterPage.jsx'
import RegisterKurir from './pages/ApproveKurir/RegisterKurirPage.jsx'
import PermintaanSampah from './pages/PermintaanSampah/PermintaanSampah.jsx'
import DaftarPenjemputan from './pages/DaftarPenjemputan/DaftarPenjemputan.jsx'
import KonversiPoin from './pages/KonversiPoin/KonversiPoin.jsx'
import JenisKategori from './pages/Jenis&Kategori/JenisKategoriPage.jsx'
import Dropbox from './pages/Dropbox/DropboxPage.jsx'
import TotalWastePoint from './pages/TotalWastePoint/TotalWastePoint.jsx'
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
    path: "/register-masyarakat",
    element: <Register />,
  },
  {
    path: "/register-kurir",
    element: <RegisterKurir />,
  },
  {
    path: "/permintaan-sampah",
    element: <PermintaanSampah />,
  },
  {
    path: "/daftar-penjemputan",
    element: <DaftarPenjemputan />,
  },
  {
    path: "/konversi-poin",
    element: <KonversiPoin />,
  },
  {
    path: "/jenis-kategori",
    element: <JenisKategori />,
  },
  {
    path: "/dropbox",
    element: <Dropbox />,
  },
  {
    path: "/total-waste-point",
    element: <TotalWastePoint />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);