import React from 'react'
import Link from 'next/link'

function index({heading,btnTitle,blogData}) {
    
  return (
    <div className="news-section pt-4  bgColor">
        <div className="container containerBorder pb-3 whiteColorBg">
            <div className="row mt-4 mb-30 wow fadeInUp" data-wow-delay="200ms">
            <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-4">
                <div className="section-title1">
                {/* <span>News &amp; Article</span> */}
                {/* <h2>The Latest News Car &amp; Bids</h2> */}
                <h2>{heading}</h2>
                </div>
            </div>
            </div>
            <div className="row g-4 justify-content-center">
          {blogData.map((blog,index)=>(
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="news-card">
            <div className="news-img">
                <Link legacyBehavior href="/blog-details"><a><img src="assets/img/home1/news-01.png" alt="" /></a></Link>
                <div className="date">
                <Link legacyBehavior href="/blog-standard"><a>{blog.tag}</a></Link>
                </div>
            </div>
            <div className="content">
                <h6><Link legacyBehavior href="/blog-details"><a>{blog.title}</a></Link>
                </h6>
                <div className="news-btm">
                <div className="author-area">
                    <div className="author-img">
                    <img src="assets/img/home1/author-01.png" alt="" />
                    </div>
                    <div className="author-content">
                    <h6>{blog.author}</h6>
                    <Link legacyBehavior href="/blog-standard"><a>Posted on - {blog.date}</a></Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
         </div>
  ))  }
            {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="news-card">
                <div className="news-img">
                    <Link legacyBehavior href="/blog-details"><a><img src="assets/img/home1/news-02.png" alt="" /></a></Link>
                    <div className="date">
                    <Link legacyBehavior href="/blog-standard"><a>Car Advice</a></Link>
                    </div>
                </div>
                <div className="content">
                    <h6><Link legacyBehavior href="/blog-details"><a>The Best Car Brands for Performance and Reliability.</a></Link>
                    </h6>
                    <div className="news-btm">
                    <div className="author-area">
                        <div className="author-img">
                        <img src="assets/img/home1/author-02.png" alt="" />
                        </div>
                        <div className="author-content">
                        <h6>Daniel Scoot</h6>
                        <Link legacyBehavior href="/blog-standard"><a>Posted on - 03 April, 2023</a></Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                <div className="news-card">
                <div className="news-img">
                    <Link legacyBehavior href="/blog-details"><a><img src="assets/img/home1/news-03.png" alt="" /></a></Link>
                    <div className="date">
                    <Link legacyBehavior href="/blog-standard"><a>Driving Advice</a></Link>
                    </div>
                </div>
                <div className="content">
                    <h6><Link legacyBehavior href="/blog-details"><a>The Environmental Impact of Cars and How to Minimize It.</a></Link>
                    </h6>
                    <div className="news-btm">
                    <div className="author-area">
                        <div className="author-img">
                        <img src="assets/img/home1/author-03.png" alt="" />
                        </div>
                        <div className="author-content">
                        <h6>Mulish Kary</h6>
                        <Link legacyBehavior href="/blog-standard"><a>Posted on - 03 April, 2023</a></Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div> */}
            </div>
            <div class="view-btn-area mt-2">
        <button type="button" class="primary-btn1 text-white d-flex align-items-center gap-0 " ><span className='btn-txt'>{btnTitle}</span>
        </button>
        </div>
        </div>
        
  
    </div>
  )
}

export default index