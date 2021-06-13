import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, Link } from 'react-router-dom'
import Api from '../../../Api/fashionApi'

const AdminproductAddpage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();

    const onAdd = async (item) => {
        const data = await Api.addProduct(item);
    }
    const onSubmit = (data) => {
        onAdd(data);
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
                <h1 className="h2">Thêm sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/Fashion" className="btn btn-primary">Quay tro lai</Link>
                </div>
            </div>

            <div className="formadd">            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Ten san pham</label>
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        {...register('name', { required: true })} />
                    {errors.name && <div className="form-text text-danger">ban chua nhap ten sp</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Gia san pham</label>
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        min= '1'
                        {...register('price', { required: true })} />
                    {errors.name && <div className="form-text text-danger">ban chua nhap gia san pham</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-quantity" className="form-label" id="quantity">So luong san pham</label>
                    <input type="number"
                        className="form-control"
                        min= '0'
                        id="product-quantity"
                        {...register('quantity', { required: true })} />
                    {errors.name && <div className="form-text text-danger">ban chua nhap so luong san pham</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-img" className="form-label">Hinh anh</label><br />
                    <input
                        onMouseEnter = {onchangeimg}
                        onClick= {onchangeimg}
                        type="text"
                        className="form-control"
                        id="product-img"
                        {...register('img', { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="product-quantity" className="form-label" id="quantity">Mô tả</label>
                    <textarea                       className="form-control"
                        id="product-quantity"
                        {...register('title', { required: true })}>
                        
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form></div>
            <div className="formimg">                        <div >
                <img  src = {src} id = 'img' height="450" />
            </div></div>
        </div>
    )
}

export default AdminproductAddpage
