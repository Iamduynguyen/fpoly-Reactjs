import React from 'react'

const Webaticle = () => {
    return (
        <div>
            <section className="services section-bg section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            {/* Single Service */}
                            <div className="single-service">
                                <div className="service-head">
                                    <img src="http://thietbiamp.com/wp-content/uploads/2018/04/A168WEGB-1.jpg" alt="#" />
                                    <div className="icon-bg"><i className="fa fa-handshake-o" /></div>
                                </div>
                                <div className="service-content">
                                    <h4><a href="service-business.html">Đồng hồ thể thao</a></h4>
                                    {/* <p>Cras venenatis, purus sit amet tempus mattis, justo nisi facilisis metus, in tempus ipsum ipsum eu ipsum. Class aptent taciti</p> */}
                                    <a className="btn" href="service-business.html"><i className="fa fa-arrow-circle-o-right" />View Service</a>
                                </div>
                            </div>
                            {/*/ End Single Service */}
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            {/* Single Service */}
                            <div className="single-service">
                                <div className="service-head">
                                    <img src="https://donghodangcap.info/wp-content/uploads/2020/04/dong-ho-Patek-Philippe-co-lo-may-1.jpg" alt="#" />
                                    <div className="icon-bg"><i className="fa fa-html5" /></div>
                                </div>
                                <div className="service-content">
                                    <h4><a href="service-develop.html">Đồng hồ cao cấp</a></h4>
                                    {/* <p>Cras venenatis, purus sit amet tempus mattis, justo nisi facilisis metus, in tempus ipsum ipsum eu ipsum. Class aptent taciti</p> */}
                                    <a className="btn" href="service-develop.html"><i className="fa fa-arrow-circle-o-right" />View Service</a>
                                </div>
                            </div>
                            {/*/ End Single Service */}
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            {/* Single Service */}
                            <div className="single-service">
                                <div className="service-head">
                                    <img src="https://taru.vn/image/cache/data/product-3103/H31053-500x500.jpg" alt="#" />
                                    <div className="icon-bg"><i className="fa fa-cube" /></div>
                                </div>
                                <div className="service-content">
                                    <h4><a href="service-market.html">Đồng hồ thời trang</a></h4>
                                    {/* <p>Cras venenatis, purus sit amet tempus mattis, justo nisi facilisis metus, in tempus ipsum ipsum eu ipsum. Class aptent taciti</p> */}
                                    <a className="btn" href="service-market.html"><i className="fa fa-arrow-circle-o-right" />View Service</a>
                                </div>
                            </div>
                            {/*/ End Single Service */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Webaticle
