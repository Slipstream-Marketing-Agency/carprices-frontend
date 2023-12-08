import React from 'react'
import Link from 'next/link'

function index({heading,btnTitle,blogData}) {
    
  return (
    <div className="news-section pb-90">
        <div className="container  ">
            <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
            <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-4">
                <div className="section-title1">
                 <span>Best Trending</span> 
                 <h2>Trending Cars News</h2> 
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
            <div class="view-btn-area mt-5">
 {/* custom button begins */}
<div class="buttons">
  <button class="blob-btn">
    {btnTitle}
    <span class="blob-btn__inner">
      <span class="blob-btn__blobs">
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
      </span>
    </span>
  </button>
  <br/>

</div>
{/* custom button ends */}
        </div>
        </div>
        
  
    </div>
  )
}

export default index