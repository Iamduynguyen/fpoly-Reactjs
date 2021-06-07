import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, Link } from 'react-router-dom'

const AdminproductAddpage = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const onSubmit = (data) => {
        props.onAdd(data);
        history.push('/admin/product');
    }
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Them san pham</h1>
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
                        {...register('name', { required: true })} />
                    {errors.name && <div className="form-text text-danger">ban chua nhap ten sp</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Gia san pham</label>
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        {...register('price', { required: true })} />
                    {errors.name && <div className="form-text text-danger">ban chua nhap gia san pham</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-quantity" className="form-label">So luong san pham</label>
                    <input type="number"
                        className="form-control"
                        id="product-quantity"
                        {...register('quantity', { required: true })} />
                    {errors.name && <div className="form-text text-danger">ban chua nhap so luong san pham</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-img" className ="form-label">Hinh anh</label><br/>
                    <input type="text"
                        className="form-control"
                         id="product-img" 
                         {...register('img', { required: true })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AdminproductAddpage
