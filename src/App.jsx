import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import OverviewPage from "./pages/dashboard/OverviewPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import InvoicesPage from "./pages/dashboard/InvoicesPage";
import CreateInvoicePage from "./pages/dashboard/CreateInvoicePage";

const authRoutes = [
  {
    path: "login",
    element: <LoginPage />,
  },
  { path: "register", element: <RegisterPage /> },
  { path: "forgot-password", element: <ForgotPasswordPage /> },
  // { path: "email-sent", element: <EmailSent /> },
  // { path: "reset-password", element: <ResetPassword /> },
];

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index path="overview" element={<OverviewPage />} />
          <Route path="invoices" element={<InvoicesPage />} />
          <Route path="create-invoice" element={<CreateInvoicePage />} />
          <Route path="users" element={<>users</>} />
          <Route path="settings" element={<>settings</>} />
        </Route>
        <Route path="auth">
          {authRoutes.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
