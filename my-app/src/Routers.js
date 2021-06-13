import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Adminlayout from './layout/admin'
import WebsitelayoutPage from './layout/website'
import AdminDiamondwatch from './pages/admin/DiamondWatch/app'
import AdminproductAddpage from './pages/admin/FashionWatch/add'
import AdminFashionwatch from './pages/admin/FashionWatch/appFashion'
import AdminproductEditpage from './pages/admin/FashionWatch/edit'
import Websiteindexpage from './pages/website'
import Webblogpage from './pages/website/blog'
import Webservicepage from './pages/website/service'
import Webproductinfor from './pages/website/service/infor'
import Websupport from './pages/website/support'

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path='/admin'>
                    <Adminlayout>
                        <Switch>
                            <Route exact path='/admin/Fashion'>
                                <AdminFashionwatch />
                            </Route>
                            <Route exact path='/admin/Fashion/add'>
                                <AdminproductAddpage />
                            </Route>
                            <Route exact path='/admin/Fashion/:id'>
                                <AdminproductEditpage />
                            </Route>
                            <Route exact path='/admin/diamond'>
                                <AdminDiamondwatch/>
                            </Route>
                        </Switch>
                    </Adminlayout>
                </Route>
                <Route path="/">
                    <WebsitelayoutPage>
                        <Switch>
                            <Route exact path= '/index'>
                                <Websiteindexpage/>
                            </Route>
                            <Route exact path= '/service'>
                                <Webservicepage/>
                            </Route>
                            <Route exact path= '/support'>
                                <Websupport/>
                            </Route>
                            <Route exact path= '/blog'>
                                <Webblogpage/>
                            </Route>
                            <Route exact path= '/service/infor/:id'>
                                <Webproductinfor/>
                            </Route>
                        </Switch>
                    </WebsitelayoutPage>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers
