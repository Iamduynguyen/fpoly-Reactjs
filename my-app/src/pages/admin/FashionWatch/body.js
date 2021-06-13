import React from 'react'
import { Link } from 'react-router-dom'
const Tbody = (props) => {
    return (
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
    )
}

export default Tbody
