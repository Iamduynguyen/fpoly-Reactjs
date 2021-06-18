import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../../assets/css/infor.css'
import iconbuy from '../../../images/mua.png'
import Api from '../../../Api/fashionApi'


const Webproductinfor = () => {
    const [productsadd, setProductsadd] = useState([]);
    let { id } = useParams();
    const [product,setproduct] = useState([]);
    const [price,setprice] = useState([]);
    useEffect(() =>{
        getproduct();
    },[])


    const getproductpage = async (price) => {
        const {data} = await Api.gethangthem(price)
        console.log(data)
        setProductsadd(data)
      }

    const getproduct = async() =>{
        const {data} = await Api.getbyid(id);
        console.log(data.price)
        setproduct(data)
        getproductpage(data.price);
    }
    return (
          <div className="container khung">
            <div className= "leftstyle">
                <img height='400px' src={product.img}/>
            </div>
            <div className=" rightstyle">
                <img width ="70" src="https://i1.wp.com/benhvienungbuoudanang.com.vn/wp-content/uploads/2020/01/new-icon.gif?fit=368%2C333&ssl=1"/>
                <h1>{product.price} đ</h1>
                <label>{product.name}</label>
                <span>{product.title}</span>
                <form>
                    <input type= 'number' className="bg-light bordercolor-cyan" min='1'></input>
                    <a href="#">
                    <img width='120' src={iconbuy}>
                    </img>
                    </a>
                </form>
            </div>
            <div className="addinforpro">
                    {productsadd.map(function (product) {
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
            </div>
          </div>
          
    )
}

export default Webproductinfor
