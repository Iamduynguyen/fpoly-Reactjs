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
                const respose = await fetch(`http://localhost:3001/fashion-Watch/${id}`);//ok :))
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
        history.push('/admin/Fashion');
    }
    var src = "https://lamdong.gov.vn/Shared%20Documents/images/noPhoto.jpg";
    function onchangeimg(data){
        console.log(data.target.value)
        var x = document.getElementById("img")
        if(1>0){
            x.src = data.target.value
        }else{
            x.src = src
        }
        
    }
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Sửa sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/Fashion" className="btn btn-primary">Quay trở lại</Link>
                </div>
            </div>

            <div className="formadd">            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        defaultValue ={product.name}
                        id="product-name"
                        {...register('name', { required: true })} />
                    {errors.name && <div className="form-text text-danger">ban chua nhap ten sp</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Giá sản phẩm</label>
                    <input type="number"
                        className="form-control"
                        defaultValue = {product.price}
                        id="product-price"
                        min= '1'
                        {...register('price', { required: true })} />
               
                </div>
                <div className="mb-3">
                    <label htmlFor="product-quantity" className="form-label" id="quantity">Số lượng</label>
                    <input type="number"
                        className="form-control"
                        defaultValue ={product.quantity}
                        min= '0'
                        id="product-quantity"
                        {...register('quantity', { required: true })} />
              
                </div>
                <div className="mb-3">
                    <label htmlFor="product-img" className="form-label">Hình ảnh</label><br />
                    <input
                        onMouseEnter = {onchangeimg}
                        onClick= {onchangeimg}
                        type="text"
                        className="form-control"
                        defaultValue ={product.img}
                        id="product-img"
                        {...register('img', { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="product-quantity" className="form-label" id="quantity">Mô tả</label>
                    <textarea                       className="form-control"
                        id="product-quantity"
                        defaultValue ={product.title}
                        {...register('title', { required: true })}>
                        
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Thay đổi</button>
            </form></div>
            <div className="formimg">                        <div >
                <img  src = {product.img} id = 'img' height="450" />
            </div></div>
        </div>
    )
}

export default AdminproductEditpage
