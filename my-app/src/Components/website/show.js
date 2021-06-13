import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import prev from '../.././images/prev.png'
import next from '../.././images/next.png'
import { Link } from 'react-router-dom';

const Webshow = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState([]);
    
    useEffect(() => {
        const getProducts = async () => {
            const respose = await fetch(`http://localhost:3001/fashion-Watch?_limit=3`);
            const data = await respose.json();
            setProducts(data);
            setPage(1);
        }
        getProducts();
    }, [])

    const getproductpage = async (page) => {
        const respose = await fetch(`http://localhost:3001/fashion-Watch?_page=${page}&_limit=3`);
        const data = await respose.json();
        setProducts(data);
    }
    const onnext = () => {
        if (products.length == 3) {
            getproductpage(page + 1)
            setPage(page + 1)
        }
    }

    const onprev = () => {
        if (page > 1) {
            getproductpage(page - 1)
            setPage(page - 1)
        }
    }
    return (
        <div>
                <div className="container colum">
                    {products.map(function (product, index) {
                        return (
                            <div className="item">
                                <div>
                                    <div className="single-service">
                                        <div className="service-head">
                                            <img width='350' height='400' src={product.img} alt="#" />
                                            <div className="icon-bg"><i className="fa fa-handshake-o" /></div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="nmstyle">{product.name}</h4>
                                            <h5 className="colorred">{product.price} đ</h5>
                                            <Link to= {`/service/infor/${product.id}`} className="btn" href="service-business.html"><i className="fa fa-arrow-circle-o-right" />View Service</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Webshow
