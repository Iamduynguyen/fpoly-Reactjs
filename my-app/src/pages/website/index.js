import React from 'react'
import Webaside from '../../Components/website/aside'
import Webaticle from '../../Components/website/aticle'
import Websitebanner from '../../Components/website/banner'
import Webblog from '../../Components/website/blog'
import Webshow from '../../Components/website/show'

const Websiteindexpage = () => {
    return (
        <div>
            <Websitebanner />
            <Webaside />
            <Webshow/>
            <Webblog />
        </div>
    )
}

export default Websiteindexpage
