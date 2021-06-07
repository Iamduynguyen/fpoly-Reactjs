import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory, useParams } from 'react-router-dom'

const AdminproductEditpage = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    let { id } = useParams();
    const [product,setproduct] = useState([]);
    console.log(id);
    useEffect(() =>{
        const getproduct = async() =>{
            try {
                const respose = await fetch(`http://localhost:3001/product/${id}`);//ok :))
                const data = await respose.json();
                setproduct(data);
            } catch (error) {
                console.log(error)
            }
        };
        getproduct();
    },[])
    const onSubmit = (data) => {
        const  newdata = {
            id,
            ...data
        }
        console.log(newdata);
        props.onchange(newdata);
        history.push('/admin/product');
    }
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Sua san pham</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/product" className="btn btn-primary">Quay tro lai</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Ten san pham</label>
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        defaultValue = {product.name}
                        {...register('name', { required: true })} />
          
                </div>
                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Gia san pham</label>
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        defaultValue= {product.price}
                        {...register('price', { required: true })} />

                </div>
                <div className="mb-3">
                    <label htmlFor="product-quantity" className="form-label">So luong san pham</label>
                    <input type="number"
                        className="form-control"
                        id="product-quantity"
                        defaultValue = {product.quantity}
                        {...register('quantity', { required: true })} />
            
                </div>
                <div className="mb-3">
                    <label htmlFor="product-img" className ="form-label">Hinh anh</label><br/>
                    <input type="text"
                        className="form-control"
                         id="product-img" 
                         defaultValue = {product.img}
                         {...register('img', { required: true })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AdminproductEditpage
