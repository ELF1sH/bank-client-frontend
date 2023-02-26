import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from './components/ui/organisms/sidebar/SidebarController';
import AuthPage from './pages/auth/AuthPage';
import ClientsPage from './pages/clientsPage/ClientsPageController';
import ClientPage from './pages/clientPage/ClientPageProvider';
import EmployeesPage from './pages/employeesPage/EmployeesPageController';
import TariffsPage from './pages/tariffsPage/TariffsPageController';
import BankAccountPage from './pages/bankAccountPage/BankAccountPageProvider';
import EmployeePage from './pages/employeePage/EmployeePageProvider';

import 'antd/dist/reset.css';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<AuthPage />} />
    <Route
      path="*"
      element={(
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ padding: '20px 30px', flexGrow: 1 }}>
            <Routes>
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/clients/:id" element={<ClientPage />} />

              <Route path="/bank-accounts/:id" element={<BankAccountPage />} />

              <Route path="/employees" element={<EmployeesPage />} />
              <Route path="/employees/:id" element={<EmployeePage />} />

              <Route path="/tariffs" element={<TariffsPage />} />
            </Routes>
          </div>
        </div>
      )}
    />
  </Routes>
);

export default App;
