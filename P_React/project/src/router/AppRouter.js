import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from "../register/Register"
import Find from "../find/Find"
import Main from "../main/Main"
import Mypage from "../mypage/Mypage"
import ProductManage from "../product/ProductManage";
import EmployeeManage from "../employee/EmployeeManage";
import HelpManage from "../help/HelpManage";
import OrderMenu from "../product/OrderMenu";
import Order from "../product/Order";
import App from "../App";

function AppRouter() {
    return (
      <Router>
        <Routes>
            <Route path="/" element= {<App/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/find" element={<Find/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/mypage" element={<Mypage/>} />
          <Route path="/productmanage" element={<ProductManage />} />
          <Route path="/employeemanage" element={<EmployeeManage />} />
          <Route path="/helpmanage" element={<HelpManage/>}/>
          <Route path="/ordermenu" element={<OrderMenu/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>
      </Router>
    );
  }

  export default AppRouter;