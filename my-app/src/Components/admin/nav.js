import React from 'react'
import logo from './logo.png'
import '../../assets/css/navstyle.css';
import { Link } from 'react-router-dom'

const AdminNav = () => {
  var x = false;
  function onclickproduct() {
    var b = document.getElementById("product");
    if (x) {
      b.style.display = "block";
      x = false;
    } else {
      b.style.display = "none";
      x = true;
    }
  }
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <img src={logo} width='150' />
      </div>
      <ul className="list-unstyled components">
        <p>Admin Control</p>
        <li><a href="http://localhost:3000/index">Home</a></li>
        <li id="log" >

          <a onClick={onclickproduct} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Sản phẩm</a>
          <ul className="collapse list-unstyled" id="product">
            <li>
              <Link to="Fashion" >Đồng hồ thời trang</Link>
            </li>
            <li>
              <Link to="diamond" >Đồng hồ cao cấp</Link>
            </li>
            <li>
              <Link>Đồng hồ thể thao</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Acount</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>

  )
}

export default AdminNav
