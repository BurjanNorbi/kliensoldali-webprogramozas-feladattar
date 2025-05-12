import { GraphiLogics } from "./graphilogics/Graphilogics";
import LoginForm from "./auth/LoginForm";
import { useSelector } from "react-redux";
import { selectToken } from "../state/authSlice";
import AuthStatus from "./auth/AuthStatus";
import { BrowserRouter, Routes, Route } from "react-router";
import { RequireAuth } from "./auth/RequireAuth";
import { Layout } from "./layout/Layout";

function App() {
  const token = useSelector(selectToken);

  if (!token) {
    return <LoginForm />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <GraphiLogics />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
