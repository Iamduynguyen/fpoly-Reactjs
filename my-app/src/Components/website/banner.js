import React from 'react'

const Websitebanner = () => {
  return (
    <section className="hero-slider style1">
      <div className="home-slider">
        {/* Single Slider */}
        <div className="single-slider" style={{ backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-atmospheric-high-end-watch-big-light-texture-black-background-image_163094.jpg")' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-12">
                <div className="welcome-text">
                  <div className="hero-text">
                    <h4>We are always ready to help you</h4>
                    <h1 color='yellow'>Time is gold</h1>
                    <div className="p-text">
                      {/* <p>Nunc tincidunt venenatis elit. Etiam venenatis quam vel maximus bibendum Pellentesque elementum dapibus diam tristique</p> */}
                    </div>
                    {/* <div className="button">
                          <a href="contact.html" className="bizwheel-btn theme-1 effect">Work with us</a>
                          <a href="portfolio.html" className="bizwheel-btn theme-2 effect">View Our Portfolio</a>
                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Single Slider */}
        {/* Single Slider */}
        <div className="single-slider" style={{ backgroundImage: 'url()' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-12">
                <div className="welcome-text">
                  <div className="hero-text">
                    <div className="p-text">
                    </div>
                    <div className="button">
                      <a href="blog.html" className="bizwheel-btn theme-1 effect">Read our blog</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Single Slider */}
        {/* Single Slider */}
        <div className="single-slider" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGN6CXrLBsJymf-qYu7Yahom0oBI2muRbYtgiBIuv-kQDLQjiDlFMvR_ODgzONgwEWmjs&usqp=CAU")' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-12">
                <div className="welcome-text">
                  <div className="hero-text">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Single Slider */}
      </div>
    </section>
  )
}

export default Websitebanner
