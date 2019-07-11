import React from 'react';
import BlogPostContent from '../../components/blog/blog/BlogPostContent';
import Sidebar from '../../components/blog/blog/Sidebar';

const BlogDetailsLeftSidebar = () => (
    <div className="page-wrapper section-space--inner--120">
        {/*Blog section start*/}
        <div className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12 order-1 order-lg-2">
                        {/* blog post content */}
                        <BlogPostContent />
                    </div>
                    <div className="col-lg-4 col-12 order-2 order-lg-1">
                        {/* blog sidebar */}
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
        {/*Blog section end*/}
    </div>
);


export default BlogDetailsLeftSidebar;