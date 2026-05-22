import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Beranda from "./pages/Beranda";
import Seminar from "./pages/Seminar";
import Competition from "./pages/Competition";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/dashboard/Dashboard";

import Biodata from "./pages/biodata/biodata";

// CATEGORY
import CategoryIndex from "./pages/dashboard/kategori/CategoryIndex";
import CategoryCreate from "./pages/dashboard/kategori/CategoryCreate";
import CategoryEdit from "./pages/dashboard/kategori/CategoryEdit";

// EVENT
import EventIndex from "./pages/dashboard/event/EvenIndex";
import EventCreate from "./pages/dashboard/event/EventCreate";

// PEMBICARA
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate";

// LAYOUT
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// ROUTE
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* PUBLIC */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />

        </Route>

        {/* AUTH */}
        <Route element={<AuthLayout />}>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Route>

        {/* DASHBOARD */}
        <Route element={<ProtectedRoute />}>

          <Route element={<DashboardLayout />}>

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/dashboard/biodata" element={<Biodata />} />

            {/* CATEGORY */}
            <Route path="/dashboard/category" element={<CategoryIndex />} />
            <Route path="/dashboard/category/create" element={<CategoryCreate />} />
            <Route path="/dashboard/category/edit/:id/" element={<CategoryEdit />} />
            

            {/* EVENT */}
            <Route path="/dashboard/event" element={<EventIndex />} />
            <Route path="/dashboard/event/create" element={<EventCreate />} />
            <Route path="/dashboard/event/edit/:id" element={<EventCreate />} />

            {/* PEMBICARA */}
            <Route path="/dashboard/pembicara" element={<PembicaraIndex />} />
            <Route path="/dashboard/pembicara/create" element={<PembicaraCreate />} />
            <Route path="/dashboard/pembicara/edit/:id" element={<PembicaraCreate />} />

          </Route>

        </Route>

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;