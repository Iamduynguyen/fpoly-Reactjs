/* eslint-dis
able jsx-a11y/alt-text */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Tbody from './body';

const AdminproductPage = (props) => {
  const onchange = (event)=>{
    props.oncheckandsort(event.target.value)
  }

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quan Ly San Pham</h1>
        <form className="d-none d-sm-block  mr-auto ml-md-5 my-25 my-md-0 mw-150 ">
          <input onKeyUp={props.onSeach} type="text"
            className="form-control bg-light border-0 small " width='50'
            placeholder="Tìm kiếm sản phẩm..."
            aria-label="Search" aria-describedby="basic-addon2" />
        </form>
        <form className="d-none d-sm-block  mr-auto ml-md-5 my-25 my-md-0 mw-150 ">
          <select onChange={onchange} name="gia11" className = "form-control bg-light border-0 small " >
            <option value="0">Tất cả sản phẩm</option>
            <option value="1">Giá tăng dần</option>
            <option value="2">Giá giảm dần</option>
            <option value="3">Hết hàng</option>
            <option value="4">Còn hàng</option>
          </select>
        </form>
        <div className="btn-toolbar mb-2 mb-md-0 pd-5">
          <Link to="/admin/diamond/add" className="btn btn-primary me-5 " >Them san pham</Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Img</th>
              <th>Price</th>
              <th>Status</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.products.map(function (product, index) {
              return (
                <tr key={index}>
                  <td>{index + 1 + (props.page - 1) * 6}</td>
                  <td>{product.name}</td>
                  <td>
                    <img src={product.img} width='70' /></td>
                  <td>{product.price}
                  </td>
                  <td>{product.quantity > 0 ? <span className="chuxanh">con hang</span> : <span className="pagenumber">hethang</span>}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Link className="btn btn-primary" to={`diamond/${product.id}`}>Sua</Link>
                    <button className="btn btn-danger" onClick={() => props.onRemove(product.id)} >Xoa</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tr>
            <th></th>
            <th>
              <Link onClick={props.onprev} ><i className="fa fa-angle-double-left" /></Link>
              <Link className="pagenumber">{props.page}</Link>
              <Link onClick={props.onnext}><i className="fa fa-angle-double-right" /></Link>
            </th>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default AdminproductPage
