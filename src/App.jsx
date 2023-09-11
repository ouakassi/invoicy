import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/dashboard/dashboardPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="auth">
        {authRoutes.map(({ path, element }, key) => {
          return <Route key={key} path={path} element={element} />;
        })}
      </Route>
    </Routes>
  );
}
