import React from 'react'
import logo from '../images/logo.png'

const WebsitelayoutPage = () => {
    return (
        <div>
        <header className="header">
          {/* Topbar */}
          <div className="topbar">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  {/* Top Contact */}
                  <div className="top-contact">
                    <div className="single-contact"><i className="fa fa-phone" />Phone: 0961535596</div> 
                    <div className="single-contact"><i className="fa fa-envelope-open" />Email: nguyenducduynahoan@gmail.com</div>	
                    <div className="single-contact"><i className="fa fa-clock-o" />Opening: 08AM - 09PM</div> 
                  </div>
                  {/* End Top Contact */}
                </div>	
                <div className="col-lg-4 col-12">
                  <div className="topbar-right">
                    {/* Social Icons */}
                    <ul className="social-icons">
                      <li><a href="https://www.facebook.com/nguyenducduynahoan/"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                      <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                    </ul>															
                    <div className="button">
                      <a href="http://localhost:3000/admin/product" className="bizwheel-btn">Admin</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Topbar */}
          {/* Middle Header */}
          <div className="middle-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="middle-inner">
                    <div className="row">
                      <div className="col-lg-2 col-md-3 col-12">
                        {/* Logo */}
                        <div className="logo">
                          {/* Image Logo */}
                          <div className="img-logo">
                            <a href="index.html">
                              <img src={logo} width='200' alt="#" />
                            </a>
                          </div>
                        </div>								
                        <div className="mobile-nav" />
                      </div>
                      <div className="col-lg-10 col-md-9 col-12">
                        <div className="menu-area">
                          {/* Main Menu */}
                          <nav className="navbar navbar-expand-lg">
                            <div className="navbar-collapse">	
                              <div className="nav-inner">	
                                <div className="menu-home-menu-container">
                                  {/* Naviagiton */}
                                  <ul id="nav" className="nav main-menu menu navbar-nav">
                                    <li><a href="index.html">Trang chủ</a></li>
                                    <li><a href="services.html">Dịch vụ</a></li>
                                    <li><a href="portfolio.html">Hình ảnh</a></li>
                                    <li className="icon-active"><a href="#">Diễn đàn</a>
                                      <ul className="sub-menu">
                                        <li><a href="blog.html">Blog Grid</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                      </ul>
                                    </li>
                                    <li className="icon-active"><a href="#">Hỗ trợ</a>
                                      <ul className="sub-menu">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="404.html">404</a></li>
                                      </ul>
                                    </li>
                                    <li><a href="contact.html">Liên hệ</a></li>
                                  </ul>
                                  {/*/ End Naviagiton */}
                                </div>
                              </div>
                            </div>
                          </nav>
                          {/*/ End Main Menu */}	
                          {/* Right Bar */}
                          <div className="right-bar">
                            {/* Search Bar */}
                            <ul className="right-nav">
                              <li className="top-search"><a href="#0"><i className="fa fa-search" /></a></li>
                              <li className="bar"><a className="fa fa-bars" /></li>
                            </ul>
                            {/*/ End Search Bar */}
                            {/* Search Form */}
                            <div className="search-top">
                              <form action="#" className="search-form" method="get">
                                <input type="text" name="s" defaultValue placeholder="Search here" />
                                <button type="submit" id="searchsubmit"><i className="fa fa-search" /></button>
                              </form>
                            </div>
                            {/*/ End Search Form */}
                          </div>	
                          {/*/ End Right Bar */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Middle Header */}
          {/* Sidebar Popup */}
          <div className="sidebar-popup">
            <div className="cross">
              <a className="btn"><i className="fa fa-close" /></a>
            </div>
            <div className="single-content">
              <h4>About Bizwheel</h4>
              <p>The main component of a healthy environment for self esteem is that it needs be nurturing. It should provide unconditional warmth.</p>
              {/* Social Icons */}
              <ul className="social">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              </ul>
            </div>
            <div className="single-content">
              <h4>Important Links</h4>   
              <ul className="links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Pricing Plan</a></li>
                <li><a href="#">Blog &amp; News</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>	
          </div>
          {/*/ Sidebar Popup */}	
        </header>
        {/*/ End Header */}
        {/* Hero Slider */}
        <section className="hero-slider style1">
          <div className="home-slider">
            {/* Single Slider */}
            <div className="single-slider" style={{backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-atmospheric-high-end-watch-big-light-texture-black-background-image_163094.jpg")'}}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-8 col-12">
                    <div className="welcome-text"> 
                      <div className="hero-text"> 
                        <h4>We are always ready to help you</h4>
                        <h1 color= 'yellow'>Time is gold</h1>
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
            <div className="single-slider" style={{backgroundImage: 'url(""http://picsum.photos/1700/800"")'}}>
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
            <div className="single-slider" style={{backgroundImage: 'url("http://picsum.photos/1700/800")'}}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-8 col-12">
                    <div className="welcome-text"> 
                      <div className="hero-text"> 
                        <h4>Our experties are waiting for you</h4>
                        <h1>Best Way to Represent your Next Business </h1>
                        <div className="p-text">
                          <p>Nunc tincidunt venenatis elit. Etiam venenatis quam vel maximus bibendum Pellentesque elementum dapibus diam tristique</p>
                        </div>
                        <div className="button">
                          <a href="team.html" className="bizwheel-btn theme-2 effect">Our Leaders</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ End Single Slider */}
          </div>
        </section>
        {/*/ End Hero Slider */}
        {/* Features Area */}
        <section className="features-area section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Feature */}
                <div className="single-feature">
                  <div className="icon-head"><i className="fa fa-podcast" /></div>
                  <h4><a href="service-single.html">Creative Design</a></h4>
                  <p>Aenean aliquet rutrum enimn scelerisque. Nam dictumanpo, antequis laoreet ullamcorper, velitsd odio scelerisque tod</p>
                  <div className="button">
                    <a href="service-single.html" className="bizwheel-btn"><i className="fa fa-arrow-circle-o-right" />Learn More</a>
                  </div>
                </div>
                {/*/ End Single Feature */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Feature */}
                <div className="single-feature">
                  <div className="icon-head"><i className="fa fa-podcast" /></div>
                  <h4><a href="service-single.html">Quality Service</a></h4>
                  <p>Aenean aliquet rutrum enimn scelerisque. Nam dictumanpo, antequis laoreet ullamcorper, velitsd odio scelerisque tod</p>
                  <div className="button">
                    <a href="service-single.html" className="bizwheel-btn"><i className="fa fa-arrow-circle-o-right" />Learn More</a>
                  </div>
                </div>
                {/*/ End Single Feature */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Feature */}
                <div className="single-feature active">
                  <div className="icon-head"><i className="fa fa-podcast" /></div>
                  <h4><a href="service-single.html">On-time Delivery</a></h4>
                  <p>Aenean aliquet rutrum enimn scelerisque. Nam dictumanpo, antequis laoreet ullamcorper, velitsd odio scelerisque tod</p>
                  <div className="button">
                    <a href="service-single.html" className="bizwheel-btn"><i className="fa fa-arrow-circle-o-right" />Learn More</a>
                  </div>
                </div>
                {/*/ End Single Feature */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Feature */}
                <div className="single-feature">
                  <div className="icon-head"><i className="fa fa-podcast" /></div>
                  <h4><a href="service-single.html">24/7 Live support</a></h4>
                  <p>Aenean aliquet rutrum enimn scelerisque. Nam dictumanpo, antequis laoreet ullamcorper, velitsd odio scelerisque tod</p>
                  <div className="button">
                    <a href="service-single.html" className="bizwheel-btn"><i className="fa fa-arrow-circle-o-right" />Learn More</a>
                  </div>
                </div>
                {/*/ End Single Feature */}
              </div>
            </div>
          </div>
        </section>
        {/*/ End Features Area */}
        {/* Call To Action */}
        <section className="call-action overlay" style={{backgroundImage: 'url("http://picsum.photos/1500/300")'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-12">
                <div className="call-inner">
                  <h2>Sang trọng, lịch lãm thể hiện đẳng cấp</h2>
                  <p>Elegance, elegance shows class</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ End Call to action */}
        {/* Services */}
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
                    <h4><a href="service-business.html">Business Strategy</a></h4>
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
                    <h4><a href="service-develop.html">Web Development</a></h4>
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
                    <h4><a href="service-market.html">Market Research</a></h4>
                    {/* <p>Cras venenatis, purus sit amet tempus mattis, justo nisi facilisis metus, in tempus ipsum ipsum eu ipsum. Class aptent taciti</p> */}
                    <a className="btn" href="service-market.html"><i className="fa fa-arrow-circle-o-right" />View Service</a>
                  </div>
                </div>
                {/*/ End Single Service */}
              </div>
            </div>
          </div>
        </section>
        {/*/ End Services */}
        {/* Portfolio */}
       
        {/*/ End Portfolio */}
        {/* Testimonials */}
        <section className="testimonials section-space" style={{backgroundImage: 'url("https://c.pxhere.com/photos/a7/13/alarm_clock_blurred_background_clock_close_up_daylight_glass_hours_instrument-1538181.jpg!d")'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-9 col-12">
                <div className="section-title default text-left">
                  <div className="section-top">
                    <h1><b>Our Satisfied Clients</b></h1>
                  </div>
                  <div className="section-bottom">
                    <div className="text"><p>some of our great clients and their review</p></div>
                  </div>
                </div>
                <div className="testimonial-inner">
                  <div className="testimonial-slider">
                    {/* Single Testimonial */}
                    <div className="single-slider">
                      <ul className="star-list">
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                      </ul>
                      <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <strong>industry's standard</strong> dummy text ever sinsimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                      {/* Client Info */}
                      <div className="t-info">
                        <div className="t-left">
                          <div className="client-head"><img src="http://picsum.photos/70/70" alt="#" /></div>
                          <h2>Julias Dien <span>CEO / Creative IT</span></h2>
                        </div>
                        <div className="t-right">
                          <div className="quote"><i className="fa fa-quote-right" /></div>
                        </div>
                      </div>
                    </div>
                    {/* / End Single Testimonial */}
                    {/* Single Testimonial */}
                    <div className="single-slider">
                      <ul className="star-list">
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                      </ul>
                      <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <strong>industry's standard</strong> dummy text ever sinsimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                      {/* Client Info */}
                      <div className="t-info">
                        <div className="t-left">
                          <div className="client-head"><img src="http://picsum.photos/70/70" alt="#" /></div>
                          <h2>Buman Panama <span>Founder, Jolace Group</span></h2>
                        </div>
                        <div className="t-right">
                          <div className="quote"><i className="fa fa-quote-right" /></div>
                        </div>
                      </div>
                    </div>
                    {/* / End Single Testimonial */}
                    {/* Single Testimonial */}
                    <div className="single-slider">
                      <ul className="star-list">
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                      </ul>
                      <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <strong>industry's standard</strong> dummy text ever sinsimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>	
                      {/* Client Info */}
                      <div className="t-info">
                        <div className="t-left">
                          <div className="client-head"><img src="http://picsum.photos/70/70" alt="#" /></div>
                          <h2>Donald Bonam <span>Developer, Soft IT</span></h2>
                        </div>
                        <div className="t-right">
                          <div className="quote"><i className="fa fa-quote-right" /></div>
                        </div>
                      </div>
                    </div>
                    {/* / End Single Testimonial */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ End Testimonials */}
        {/* Latest Blog */}

        {/*/ End Latest Blog */}
        {/* Client Area */}

        {/*/ End Client Area */}
        {/* Footer */}
        <footer className="footer">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  {/* Footer About */}		
                  <div className="single-widget footer-about widget">	
                    <div className="logo">
                      <div className="img-logo">
                        <a className="logo" href="index.html">
                          <img className="img-responsive" width = '150' src={logo} alt="logo" />
                        </a>
                      </div>
                    </div>
                    <div className="footer-widget-about-description">
                      <p>Beatae vitae dicta su explicabo nemo enim ipsam voluptatem quia voluptas sitBeatae vitae sitBeatae vitae dicta suntania..</p>
                    </div>	
                    <div className="social">
                      {/* Social Icons */}
                      <ul className="social-icons">
                        <li><a className="facebook" href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                        <li><a className="twitter" href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                        <li><a className="linkedin" href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                        <li><a className="pinterest" href="#" target="_blank"><i className="fa fa-pinterest-p" /></a></li>
                        <li><a className="instagram" href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="button"><a href="#" className="bizwheel-btn">About Us</a></div>
                  </div>		
                  {/*/ End Footer About */}		
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  {/* Footer Links */}		
                  <div className="single-widget f-link widget">
                    <h3 className="widget-title">Company</h3>
                    <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Our Services</a></li>
                      <li><a href="#">Portfolio</a></li>
                      <li><a href="#">Pricing Plan</a></li>
                      <li><a href="#">Contact us</a></li>
                    </ul>
                  </div>			
                  {/*/ End Footer Links */}			
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  {/* Footer News */}
                  <div className="single-widget footer-news widget">	
                    <h3 className="widget-title">Blog Page</h3>
                    {/* Single News */}
                    <div className="single-f-news">
                      <div className="post-thumb"><a href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a></div>
                      <div className="content">
                        <p className="post-meta"><time className="post-date"><i className="fa fa-clock-o" />April 15, 2020</time></p>
                        <h4 className="title"><a href="blog-sngle.html">We Provide you Best &amp; Creative Consulting Service</a></h4>
                      </div>
                    </div>
                    {/*/ End Single News */}
                    {/* Single News */}
                    <div className="single-f-news">
                      <div className="post-thumb"><a href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a></div>
                      <div className="content">
                        <p className="post-meta"><time className="post-date"><i className="fa fa-clock-o" />April 10, 2020</time></p>
                        <h4 className="title"><a href="blog-sngle.html">We Provide you Best &amp; Creative Consulting Service</a></h4>
                      </div>
                    </div>
                    {/*/ End Single News */}
                  </div>			
                  {/*/ End Footer News */}			
                </div>
                <div className="col-lg-3 col-md-6 col-12">	
                  {/* Footer Contact */}		
                  <div className="single-widget footer_contact widget">	
                    <h3 className="widget-title">Contact</h3>
                    <p>Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem</p>
                    <ul className="address-widget-list">
                      <li className="footer-mobile-number"><i className="fa fa-phone" />+(600) 125-4985-214</li>
                      <li className="footer-mobile-number"><i className="fa fa-envelope" />info@yoursite.com</li>
                      <li className="footer-mobile-number"><i className="fa fa-map-marker" />House Building Uttara</li>
                    </ul>
                  </div>		
                  {/*/ End Footer Contact */}						
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                  {/* Footer Newsletter */}
                  <div className="footer-newsletter">
                    <form action="#" method="post" className="newsletter-area">
                      <input type="email" placeholder="Your email address" />
                      <button type="submit">Sign Up</button>
                    </form>
                  </div>
                  {/*/ End Footer Newsletter */}
                </div>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="copyright-content">
                    {/* Copyright Text */}
                    <p>© Copyright <a href="#">Bizwheel</a>. Design &amp; Development By <a target="_blank" href="#">ThemeLamp</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}

export default WebsitelayoutPage
