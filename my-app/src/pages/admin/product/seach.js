/* eslint-dis
able jsx-a11y/alt-text */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const Adminproductseach = (props) => {
  
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Tim kiem </h1>
        <div className="btn-toolbar mb-2 mb-md-0 pd-5">
          <input type="text"/>
        <Link to="/admin/product" className = "btn btn-primary me-5">Tim kiem</Link>
        <Link to="/admin/product/add" className = "btn btn-primary me-5 " >Them san pham</Link>
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
            {props.products.map(function(product, index){
              return(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{product.name}</td>
                <td>
                  <img src={product.img} width='70'/></td>
                <td>{product.price}
                </td>
                <td>{product.status ? 'con hang':'hethang'}</td>
                <td>{product.quantity}</td>
                <td>
                  <Link className="btn btn-primary" to= {`product/${product.id}`}>Sua</Link>
                  <button className="btn btn-danger" onClick= {()=>props.onRemove(product.id)} >Xoa</button>
                </td>
              </tr>
              )
            })}
          </tbody>
          <tr>
            <tr>
            <th> prew </th>
            <th> 1 </th>
            <th> next </th>
            </tr>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Adminproductseach
