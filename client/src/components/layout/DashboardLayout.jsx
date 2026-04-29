import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
