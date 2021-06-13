import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../../assets/css/infor.css'
import iconbuy from '../../../images/mua.png'


const Webproductinfor = () => {
    let { id } = useParams();
    const [product,setproduct] = useState([]);
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
                    <input type= 'number' min='1'></input>
                    <a href="#">
                    <img width='120' src={iconbuy}>
                    </img>
                    </a>
                </form>
            </div>
            <div className="addifpro">
                
            </div>
          </div>
          
    )
}

export default Webproductinfor
