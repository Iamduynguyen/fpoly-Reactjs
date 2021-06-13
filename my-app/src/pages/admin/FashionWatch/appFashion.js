import React from 'react'
import { useState, useEffect } from 'react';
import AdminproductPage from '.';
import Api from '../../../Api/fashionApi'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminproductAddpage from './add';
import AdminproductEditpage from './edit';

const AdminFashionwatch = () => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState([]);
  const [search, setSearch] = useState('');
  const [index, setindex] = useState([]);
  // loaddata
  useEffect(() => {
    const getProducts = async () => {
      getproductpage(1);
      setPage(1);
    }
    getProducts();
  }, [])


  const getproductpage = async (page) => {
    const {data} = await Api.getpage(page);
    setProducts(data);
    setPage(page);
  }

  const onnext = () => {
    if (search.length == 0) {
      if (products.length == 6) {
        setPage(page + 1)
        getproductpage(page + 1)
      }
    } else {
      if (products.length == 6) {
        setPage(page + 1)
        searchProduct(search, page + 1);
      }
    }
  }

  const oncheckandsort = (index) => {
    console.log(index)
    if (index == 0) {
      getproductpage(1);
    }
    if (index == 1) {
      propriceASC(page);
    }
    if (index == 2) {
      propriceDECS(page)
    }
    if (index == 3) {
      proquantitynone(page)
    }
    if (index == 4) {
      proquantityreal(page)
    }
    setindex(index)
  }

  const onprev = () => {
    if (search.length == 0) {
      if(index==0){
        if (page > 1) {
          setPage(page - 1)
          getproductpage(page - 1)
        }
      }
      if(index==1){
        if (page > 1) {
          setPage(page - 1)
          propriceASC(page - 1)
        }
      }
      if(index==2){
        if (page > 1) {
          setPage(page - 1)
          propriceDECS(page - 1)
        }
      }
      if(index==3){
        if (page > 1) {
          setPage(page - 1)
          proquantitynone(page - 1)
        }
      }
      if(index==4){
        if (page > 1) {
          setPage(page - 1)
          proquantityreal(page - 1)
        }
      }
    } else {
      if (page > 1) {
        setPage(page - 1)
        searchProduct(search, page - 1);
      }
    }
  }


  const onsearch = (key, page) => {
    if (key.target.value.trim().length == 0) {
      getproductpage(1);
    } else {
      setSearch(key.target.value)
      searchProduct(key.target.value, page)
    }
  }

  const searchProduct = async (seach, page) => {
    const { data } = await Api.getSearchandlimit(seach, page)
    setProducts(data);
  }

  const propriceASC = async (page) => {
    const { data } = await Api.getpagesorttang(page)
    setProducts(data);
  }
  const propriceDECS = async (page) => {
    const { data } = await Api.getpagesortgiam(page)
    setProducts(data);
  }

  const proquantitynone = async (page) => {
    const { data } = await Api.gethanghet(page)
    setProducts(data);
  }
  const proquantityreal = async (page) => {
    const { data } = await Api.gethangcon(page)
    setProducts(data);
  }

  //add data
  const onAdd = async (item) => {
    const data = await Api.addProduct(item);
    getproductpage(1)
  }

  const onchange = async (newdata) => {
    console.log(newdata);
    let confirm = window.confirm("chắc chắn chưa?");
    if (confirm) {
      const change = await Api.updateProduct(newdata);
      getproductpage(1);
      setPage(1)
    }
  }

  //delete data
  const removeProduct = async (id) => {
    let confirmremove = window.confirm("Chac chan xoa k?");
    if (confirmremove) {
      const data = await Api.deleteProduct(id);
      getproductpage(1)
      setPage(1)
    }
  }
  return (
    <Router>
      <Switch>
        <Route exact path='/admin/Fashion'>
          <AdminproductPage
            products={products}
            onAdd={onAdd}
            onRemove={removeProduct}
            onSeach={onsearch}
            onnext={onnext}
            onprev={onprev}
            page={page}
            onchange={onchange}
            oncheckandsort={oncheckandsort}
          />
        </Route>
        <Route exact path='/admin/Fashion/add'>
          <AdminproductAddpage />
        </Route>
        <Route exact path='/admin/Fashion/:id'>
          <AdminproductEditpage onchange = {onchange}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default AdminFashionwatch
