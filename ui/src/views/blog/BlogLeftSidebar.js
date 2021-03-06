import React from 'react';
import BlogPostGrid from '../../components/blog/blog/BlogPostGrid';
import Sidebar from '../../components/blog/blog/Sidebar';

const BlogLeftSidebar = () => (
    <div className="page-wrapper section-space--inner--120">
        <div className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12 order-1 order-lg-2">
                        {/* blog post grid */}
                        <BlogPostGrid />
                        <div className="row ">
                            <div className="col">
                                <ul className="page-pagination section-space--top--30">
                                    <li><a href="/"><i className="fa fa-angle-left" /> Prev</a></li>
                                    <li className="active"><a href="/">01</a></li>
                                    <li><a href="/">02</a></li>
                                    <li><a href="/">03</a></li>
                                    <li><a href="/"><i className="fa fa-angle-right" /> Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 order-2 order-lg-1">
                        {/* blog sidebar */}
                        <Sidebar />

                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default BlogLeftSidebar;