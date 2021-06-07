import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Adminlayout from './layout/admin'
import Loginpage from './layout/login'
import WebsitelayoutPage from './layout/website'
import AdminproductPage from './pages/admin/product'
import AdminproductAddpage from './pages/admin/product/add'
import AdminproductEditpage from './pages/admin/product/edit'
import Adminproductseach from './pages/admin/product/seach'

const Routers = (props) => {
    return (
        <Router>
            <Switch>
                <Route path='/admin'>
                    <Adminlayout>
                        <Switch>
                            <Route exact path='/admin/product'>
                                <AdminproductPage {...props} />
                            </Route>
                            <Route exact path='/admin/product/add'>
                                <AdminproductAddpage {...props} />
                            </Route>
                            <Route exact path='/admin/product/:id'>
                                <AdminproductEditpage {...props} />
                            </Route>

                        </Switch>
                    </Adminlayout>
                </Route>
                <Route path="/">
                    <WebsitelayoutPage>

                    </WebsitelayoutPage>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers
