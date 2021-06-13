import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import prev from '../.././images/prev.png'
import next from '../.././images/next.png'
import { Link } from 'react-router-dom';

const Webservicepage = () => {
    const [products, setProducts] = useState([]);
    const [productsmall, setProductsmall] = useState([]);
    const [page, setPage] = useState([]);
    const [pages, setPages] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const respose = await fetch(`http://localhost:3001/fashion-Watch?_limit=3`);
            const data = await respose.json();
            setProducts(data);
            setPage(1);
        }
        getProducts();
    }, [])
    useEffect(() => {
        const getProducts = async () => {
            const respose = await fetch(`http://localhost:3001/fashion-Watch?_limit=8`);
            const data = await respose.json();
            setProductsmall(data);
            setPages(1)
        }
        getProducts();
    }, [])

    const getproductpage = async (page) => {
        const respose = await fetch(`http://localhost:3001/fashion-Watch?_page=${page}&_limit=3`);
        const data = await respose.json();
        setProducts(data);
    }
    const getproductpages = async (pages) => {
        const respose = await fetch(`http://localhost:3001/fashion-Watch?_page=${pages}&_limit=8`);
        const data = await respose.json();
        setProductsmall(data);
        setPages(1)
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

    const onnexts = () => {
        if (productsmall.length == 8) {
            getproductpages(pages + 1)
            setPages(pages + 1)
        }
        console.log(pages)
    }

    const onprevs = () => {
        if (true) {
            getproductpages(pages - 1)
            setPages(pages - 1)
        }
        console.log(pages)
    }

    return (
        <div>
            <section className="services">
                <div className="prevstyle"><img onClick={onprev} width='60' src={prev} /></div>
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
                <div className="nextstyle"><img width='60' onClick={onnext} src={next} /></div>
                <br /><br />
                <div className="container colum">
                    <div className="prevstyles"><img onClick= {onprevs} width='50' src={prev} /></div>
                    {productsmall.map(function (product) {
                        return (
                            <div className="items">
                                <div>
                                    <div className="single-service">
                                        <div className="service-head">
                                            <img width='130' height='140' src={product.img} alt="#" />
                                        </div>
                                        <div className="service-content">
                                            <h4 className="nmstyles">{product.name}</h4>
                                            <h5 className="colorreds">{product.price} đ</h5>
                                            <Link to= {`/service/infor/${product.id}`} className="btn" href="service-business.html"><i className="fa fa-arrow-circle-o-right" />View Service</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="nextstyles"><img onClick ={onnexts} width='50' src={next} /></div>
                </div>
            </section>
        </div>
    )
}

export default Webservicepage
