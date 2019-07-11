import React from "react";
import NavBar from '../components/blog/common/NavBar';
import BrandLogoSlider from '../components/blog/common/BrandLogoSlider';
import Footer from '../components/blog/common/Footer';
import MobileMenu from '../components/blog/common/MobileMenu';


const BlogLayout = ({ children}) => (
  <div>
    {/* Navigation bar */}
    <NavBar />


    {/* breadcrumb */}
    {/*====================  breadcrumb area ====================*/}
    <div className="breadcrumb-area breadcrumb-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="page-banner text-center">
              <h1>Blog Details</h1>
              <ul className="page-breadcrumb">
                <li><a href="/">Home</a></li>
                <li><a href={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>Blog</a></li>
                <li>Blog Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*====================  End of breadcrumb area  ====================*/}

    {/*====================  page content ====================*/}
    {children}

    {/*====================  End of page content  ====================*/}

    {/* Brand logo */}
    <BrandLogoSlider background="grey-bg" />

    {/* Footer */}
    <Footer />

    {/* Mobile Menu */}
    <MobileMenu />

  </div>
);

export default BlogLayout;
