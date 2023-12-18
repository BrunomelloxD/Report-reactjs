import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import AllUsers from './pages/AllUsers'
import ForgotPassword from './pages/ForgotPassword'
import Login from './pages/Login'
import Reports from './pages/Reports'
import ResetPassword from './pages/ResetPassword'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/all-users" element={<AllUsers />} />
                <Route
                    path="/reset-password/:email"
                    element={<ResetPassword />}
                />
                <Route path="/reports" element={<Reports />} />
            </Routes>
        </Router>
    )
}

export default App
