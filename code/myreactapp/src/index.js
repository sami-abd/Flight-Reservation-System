import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Adminpage from "./pages/Adminpage";
import SelectFlights from "./pages/SelectFlights";
import Registration from "./pages/Registration";
import Payment from "./pages/Payment";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import SelectSeat from "./pages/SelectSeat";
import MyAccount from "./pages/MyAccount";
import MaintainAir from "./pages/MaintainAir";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="User" element={<User />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="AdminPage" element={<Adminpage />} />
          <Route path="selectFlights" element={<SelectFlights />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="PaymentConfirmation" element={<PaymentConfirmation />} />
          <Route path="SelectSeat" element={<SelectSeat />} />
          <Route path="MyAccount" element={<MyAccount />} />
          <Route path="MaintainAir" element={<MaintainAir />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
