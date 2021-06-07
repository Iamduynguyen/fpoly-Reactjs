import './assets/css/animate.min.css';
import './assets/css/bootstrap.min.css';
// import './assets/css/cubeportfolio.min.css';
import './assets/css/font-awesome.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/magnific-popup.min.css';
import './assets/css/style.css';
import Routers from './Routers';
import { useState, useEffect } from 'react';
import Api from './Api/productApi'

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState([]);
  const [search, setSearch] = useState('');
  // loaddata
  useEffect(()=>{
    const getProducts = async () =>{
      const respose = await fetch(`http://localhost:3001/product?_limit=6`);
      const data = await respose.json();
      setProducts(data);
      setPage(1);
    }
    getProducts();
  },[])

  console.log(page)

  const getproductpage = async (page) => {
    const respose = await fetch(`http://localhost:3001/product?_page=${page}&_limit=6`);
    const data = await respose.json();
    setProducts(data);
}

const onnext = () => {
    if(search.length==0){
      if(products.length==6){
        setPage(page+1)
        getproductpage(page+1)
      }
    }else{
      if(products.length==6){
        setPage(page+1)
        searchProduct(search,page+1);
      }
    }
} 

const onprev = () => {
  if(search.length==0){
    if(page>1){
      setPage(page-1)
      getproductpage(page-1)
    }
  }else{
    if(page>1){
      setPage(page-1)
      searchProduct(search,page-1);
    }
  }
} 


const onsearch = (key,page) => {
  if (key.target.value.trim().length == 0) {
    getproductpage(1);
  }else{
    setSearch(key.target.value)
    searchProduct(key.target.value,page)
  }
}

const searchProduct = async (seach,page) => {
  const { data } = await Api.getSearchandlimit(seach,page)
  setProducts(data);
}

console.log(search)

  //add data
  const onAdd = async (item) =>{
    const data = await Api.addProduct(item);
    getproductpage(1)
  }

  const onchange = async(newdata) =>{
    console.log(newdata);
    let confirm = window.confirm("chắc chắn chưa?");
    if(confirm){
      const change = await Api.updateProduct(newdata);
      getproductpage(1);
      setPage(1)
    }
  }

//delete data
const removeProduct = async(id) =>{
  let confirmremove = window.confirm("Chac chan xoa k?");
  if(confirmremove){
    const data = await Api.deleteProduct(id);
    getproductpage(1)
    setPage(1)
  }
}

  return (
    <div className="App">
      <Routers
      products = {products}
      onAdd= {onAdd}
      onRemove = {removeProduct}
      onSeach = {onsearch}
      onnext = {onnext}
      onprev = {onprev}
      page= {page}
      onchange = {onchange}
      />
    </div>
  );
}

export default App;
