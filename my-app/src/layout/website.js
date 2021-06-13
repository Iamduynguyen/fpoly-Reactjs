import React from 'react'
import Webaside from '../Components/website/aside'
import Websitebanner from '../Components/website/banner'
import WebsiteHeader from '../Components/website/header'
import Webaticle from '../Components/website/aticle'
import Webblog from '../Components/website/blog'
import Webfooter from '../Components/website/footer'

const WebsitelayoutPage = ({ children }) => {
  return (
    <div>
      <WebsiteHeader />
        <main>
        { children }
        </main>
      <Webfooter />
    </div>
  )
}

export default WebsitelayoutPage
