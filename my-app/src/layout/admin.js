import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './../assets/dashboard.css';
import AdminNav from '../Components/admin/nav';

const Adminlayout = ({ children }) => {
  return (
    <div>
      {/* <AdminHeader/> */}
      <div className="container-fluid">
        <div className="row">
          <AdminNav/>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Adminlayout
