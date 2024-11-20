import React from 'react'
import './Style.css'
const NestIndex = () => {
    return (
        <div style={{ fontFamily: "sans-serif" }}>
            {/* topbar starts */}
            <div className='border-1 border-secondary d-flex flex-column'>
                <div style={{ fontSize: "12px" }} className="text-nowrap container-fluid border border-1 border-dark d-flex flex-row">
                    <ul class="list-unstyled d-flex flex-row border-0 m-0">
                        <li class="list-group-item px-3 py-1" >
                            <a href="#" className='text-decoration-none text-secondary'>
                                About Us
                            </a>
                        </li>
                        <span className='text-secondary p-1'>|</span>
                        <li class="list-group-item px-3 py-1">
                            <a href="#" className='text-decoration-none text-secondary'>
                                My Account
                            </a>
                        </li>
                        <span className='text-secondary p-1'>|</span>
                        <li class="list-group-item px-3 py-1">
                            <a href="#" className='text-decoration-none text-secondary'>
                                WishList
                            </a>
                        </li>
                        <span className='text-secondary p-1'>|</span>
                        <li class="list-group-item px-3 py-1">
                            <a href="#" className='text-decoration-none text-secondary'>
                                Order Tracking
                            </a>
                        </li>
                    </ul>
                    <div className='border-0 p-1 px-5'>
                        <div className='text-success text-capitalize'>Super Value Deal - Save more with coupons</div>
                    </div>
                    <ul class="list-unstyled d-flex flex-row border-0 m-0">
                        <li class="list-group-item px-3 py-1" >
                            <a href="#" className='text-decoration-none text-secondary'>
                                Need help call us:+ <span className='text-success'>88017XXXXX</span>
                            </a>
                        </li>
                        <span className='text-secondary p-1'>|</span>
                        <li class="list-group-item ">
                            <div class="dropdown px-1">
                                <button style={{ fontSize: "12px" }} class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                                </button>
                                <ul style={{ fontSize: "12px" }} class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">English</a></li>
                                    <li><a class="dropdown-item" href="#">Hindi</a></li>
                                </ul>
                            </div>
                        </li>
                        <span className='text-secondary p-1'>|</span>
                        <li class="list-group-item ">
                            <div class="dropdown px-1">
                                <button style={{ fontSize: "12px" }} class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    USD
                                </button>
                                <ul class="dropdown-menu" style={{ fontSize: "12px" }} aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#">USD</a></li>
                                    <li><a class="dropdown-item" href="#">INR</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr className='border border-1 border-secondary px-1 py-0 mt-0' />
                <div className='d-flex flex-row justify-content-around align-items-center py-2'>
                    <div className='d-flex flex-column me-2 justify-content-start align-items-baseline gap-4'>
                        <img src="/media/logo.png" alt="Logo-Image" />
                        <div className='d-flex flex-row border border-3 ms-2 border-success p-2 py-1'>
                            <input type="search" className='border-0' placeholder='Search Products...' style={{ color: "grey", width: "230px" }} />
                            <button className='btn btn-success' style={{ borderRadius: "0px" }}>Search</button>
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-5 justify-content-start align-items-start'>

                        <button type="button" class="text-nowrap btn btn-hover-bounce border-1 border border-success text-success">
                            Become a Vendor<i class="ps-2 bi bi-arrow-right"></i>
                        </button>
                        <div className='w-50 d-flex gap-4 flex-row justify-content-center align-items-center'>
                            <a href="#" className='d-flex flex-row gap-2 text-decoration-none text-dark'>
                                <i className="fs-5 bi bi-arrow-repeat"></i>
                                <span className='fs-5'>Compare</span>
                            </a>
                            <a href="#" className='d-flex flex-row gap-2 text-decoration-none text-dark'>
                                <i class="bi bi-heart"></i>
                                <span className='fs-5'>WishList</span>
                            </a>
                            <a href="#" className='d-flex flex-row gap-2 text-decoration-none text-dark'>
                                <i class="bi bi-cart3"></i>
                                <span className='fs-5'>Cart</span>
                            </a>
                            <a href="#" className='d-flex flex-row gap-2 text-decoration-none text-dark'>
                                <i class="bi fs-5 bi-person"></i>
                                <span className='fs-5'>Account</span>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className='border border-1 border-secondary px-1' />
            </div>
            {/* topbar ends */}

            {/* navbar starts */}
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav gap-3 fs-6 text-nowrap me-auto mb-2 mb-lg-0">
                            <div class="dropdown">
                                <button class="btn px-3 btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-box pe-2"></i><b>Browse Categories</b>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <div className="d-flex flex-row flex-nowrap">
                                        <div className="d-flex flex-column gap-2 px-1 ps-3 py-2">
                                            <a className="dropdown-item text-dark shadow-sm border border-1 border-secondary px-2 py-1" href="#">Baking Material</a>
                                            <a className="dropdown-item text-dark shadow-sm border border-1 border-secondary px-2 py-1" href="#">Clothing & Beauty</a>
                                            <a className="dropdown-item text-dark shadow-sm border border-1 border-secondary px-2 py-1" href="#">Fresh Fruit</a>
                                            <a className="dropdown-item text-dark shadow-sm border border-1 border-secondary px-2 py-1" href="#">Milks & Dairies</a>
                                            <a className="dropdown-item text-dark shadow-sm border border-1 border-secondary px-2 py-1" href="#">Vegetables</a>
                                        </div>
                                        <div className="d-flex flex-column gap-2 px-1 pe-3 py-2">
                                            <a className="dropdown-item text-dark shadow-sm border border-1 border-secondary px-2 py-1" href="#">Bread & Juice</a>
                                            <a className="dropdown-item text-dark shadow-sm border border-1 border-secondary px-2 py-1" href="#">Dals of the Day</a>
                                            <a className="dropdown-item text-dark shadow-sm border border-1 border-secondary px-2 py-1" href="#">Fresh Seafood</a>
                                            <a className="dropdown-item text-dark shadow-sm border border-1 border-secondary px-2 py-1" href="#">Uncategorized</a>
                                            <a className="dropdown-item text-dark shadow-sm border border-1 border-secondary px-2 py-1" href="#">Wines & Drinks</a>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <li className="nav-item ps-md-5 ms-md-4">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="red" class="bi bi-fire" viewBox="0 0 16 16">
                                        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                    </svg>
                                    Hot Details
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" aria-current="page" href="#">Shop</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Vendors
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Dashboard</a></li>
                                    <li><a className="dropdown-item" href="#">Store Details</a></li>
                                    <li><a className="dropdown-item" href="#">My Store</a></li>
                                    <li><a className="dropdown-item" href="#">Store Listing</a></li>
                                    <li><a className="dropdown-item" href="#">My Orders</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mega Menu
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-dark" aria-current="page" href="#">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" aria-current="page" href="#">Contact</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            {/* navbar ends */}

            <hr />
            <div id="carouselWithSearch" className="carousel slide" data-bs-ride="carousel">
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselWithSearch"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselWithSearch"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselWithSearch"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                {/* Carousel Items */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="/media/banner-5-min.png"
                            className="d-block w-100"
                            alt="Slide 1"
                            height="400px"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/media/banner-7-min.png"
                            className="d-block w-100"
                            alt="Slide 2"
                            height="400px"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/media/banner-8-min.png"
                            className="d-block w-100"
                            alt="Slide 3"
                            height="400px"
                        />
                    </div>
                </div>

                {/* Search Field Overlay */}
                <div className="carousel-caption d-flex flex-column align-items-start justify-content-center">
                    <h1 className="text-info mb-3">Fresh Vegetables Big Discount</h1>
                    <h1 className="text-primary mb-3">Signup for Daily NewsLetter</h1>
                    <form className="d-flex w-50 border border-primary border-2 p-1">
                        <input
                            type="email"
                            className="form-control me-2"
                            placeholder="Enter your Email ID"
                            aria-label="Search"
                        />
                        <button className="btn btn-primary" type="submit">
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselWithSearch"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselWithSearch"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <hr />
            {/* card carousel  */}
            <section className="py-5 m-0">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-3 m-0">
                            <h3 className="mb-3">Featured Catrgories </h3>
                        </div>
                        <div className="col-9 text-right m-0">
                            <a className="btn btn-secondary mb-3 me-1" style={{ backgroundColor: "#ccc", border: "0px", borderRadius: "50%", color: "black" }} href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <i className="bi bi-arrow-left" />
                            </a>
                            <a className="btn btn-primary mb-3 " style={{ backgroundColor: "#ccc", border: "0px", borderRadius: "50%", color: "black" }} href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <i className="bi bi-arrow-right" />
                            </a>
                        </div>
                        <div className="col-12 m-0 p-2 w-100">
                            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-2 mb-3">
                                                <div className="card px-2 py-1 text-dark" style={{ backgroundColor: "lightcoral" }}>
                                                    <img
                                                        className="img-fluid"
                                                        style={{
                                                            objectFit: "contain",
                                                            maxHeight: "80px",
                                                            width: "100%",
                                                        }}
                                                        alt="100%x280"
                                                        src="/media/cat-13.png"
                                                    />
                                                    <div className="card-body">
                                                        <h4 className="card-title fs-6">Cake & Milk</h4>
                                                        <p className="card-text fs-6">11 Items</p>
                                                    </div>
                                                </div>
                                            </div><div className="col-md-2 mb-3">
                                                <div className="card px-2 py-1 text-dark" style={{ backgroundColor: "#acc2d5" }}>
                                                    <img
                                                        className="img-fluid"
                                                        style={{
                                                            objectFit: "contain",
                                                            maxHeight: "80px",
                                                            width: "100%",
                                                        }}
                                                        alt="100%x280"
                                                        src="/media/cat-12.png"
                                                    />
                                                    <div className="card-body">
                                                        <h4 className="card-title fs-6">Organic Kiwi</h4>
                                                        <p className="card-text fs-6">21 Items</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 mb-3">
                                                <div className="card px-2 py-1 text-dark" style={{ backgroundColor: "#ffdbf0" }}>
                                                    <img
                                                        className="img-fluid"
                                                        style={{
                                                            objectFit: "contain",
                                                            maxHeight: "80px",
                                                            width: "100%",
                                                        }}
                                                        alt="100%x280"
                                                        src="/media/cat-11.png"
                                                    />
                                                    <div className="card-body">
                                                        <h4 className="card-title fs-6">Peach</h4>
                                                        <p className="card-text fs-6">3 Items</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 mb-3">
                                                <div className="card px-2 py-1 text-dark" style={{ backgroundColor: "lightyellow" }}>
                                                    <img
                                                        className="img-fluid"
                                                        style={{
                                                            objectFit: "contain",
                                                            maxHeight: "80px",
                                                            width: "100%",
                                                        }}
                                                        alt="100%x280"
                                                        src="/media/cat-9.png"
                                                    />
                                                    <div className="card-body">
                                                        <h4 className="card-title fs-6">Apples</h4>
                                                        <p className="card-text fs-6">9 Items</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 mb-3">
                                                <div className="card px-2 py-1 text-dark" style={{ backgroundColor: "#acc2d5" }}>
                                                    <img
                                                        className="img-fluid"
                                                        style={{
                                                            objectFit: "contain",
                                                            maxHeight: "80px",
                                                            width: "100%",
                                                        }}
                                                        alt="100%x280"
                                                        src="/media/cat-3.png"
                                                    />
                                                    <div className="card-body">
                                                        <h4 className="card-title fs-6">Snacks</h4>
                                                        <p className="card-text fs-6">12 Items</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 mb-3">
                                                <div className="card px-2 py-1 text-dark" style={{ backgroundColor: "pink" }}>
                                                    <img
                                                        className="img-fluid"
                                                        style={{
                                                            objectFit: "contain",
                                                            maxHeight: "80px",
                                                            width: "100%",
                                                        }}
                                                        alt="100%x280"
                                                        src="/media/cat-1.png"
                                                    />
                                                    <div className="card-body">
                                                        <h4 className="card-title fs-6">Vegetables</h4>
                                                        <p className="card-text fs-6">11 Items</p>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-2 mb-3">
                                                <div className="card px-2 py-1 text-dark" style={{ backgroundColor: "#acc2d5" }}>
                                                    <img
                                                        className="img-fluid"
                                                        style={{
                                                            objectFit: "contain",
                                                            maxHeight: "80px",
                                                            width: "100%",
                                                        }}
                                                        alt="100%x280"
                                                        src="/media/cat-2.png"
                                                    />
                                                    <div className="card-body">
                                                        <h4 className="card-title fs-6">Strawberry</h4>
                                                        <p className="card-text fs-6">21 Items</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 mb-3">
                                                <div className="card px-2 py-1 text-dark" style={{ backgroundColor: "#ffdbf0" }}>
                                                    <img
                                                        className="img-fluid"
                                                        style={{
                                                            objectFit: "contain",
                                                            maxHeight: "80px",
                                                            width: "100%",
                                                        }}
                                                        alt="100%x280"
                                                        src="/media/cat-4.png"
                                                    />
                                                    <div className="card-body">
                                                        <h4 className="card-title fs-6">Black Plum</h4>
                                                        <p className="card-text fs-6">3 Items</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 mb-3">
                                                <div className="card px-2 py-1 text-dark" style={{ backgroundColor: "lightyellow" }}>
                                                    <img
                                                        className="img-fluid"
                                                        style={{
                                                            objectFit: "contain",
                                                            maxHeight: "80px",
                                                            width: "100%",
                                                        }}
                                                        alt="100%x280"
                                                        src="/media/cat-5.png"
                                                    />
                                                    <div className="card-body">
                                                        <h4 className="card-title text-nowrap fs-6">Custard Apple</h4>
                                                        <p className="card-text fs-6">9 Items</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 mb-3">
                                                <div className="card px-2 py-1 text-dark" style={{ backgroundColor: "#acc2ec" }}>
                                                    <img
                                                        className="img-fluid"
                                                        style={{
                                                            objectFit: "contain",
                                                            maxHeight: "80px",
                                                            width: "100%",
                                                        }}
                                                        alt="100%x280"
                                                        src="/media/cat-14.png"
                                                    />
                                                    <div className="card-body">
                                                        <h4 className="card-title fs-6">Coffee & Tea</h4>
                                                        <p className="card-text fs-6">25 Items</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 mb-3">
                                                <div className="card px-2 py-1 text-dark" style={{ backgroundColor: "pink" }}>
                                                    <img
                                                        className="img-fluid"
                                                        style={{
                                                            objectFit: "contain",
                                                            maxHeight: "80px",
                                                            width: "100%",
                                                        }}
                                                        alt="100%x280"
                                                        src="/media/cat-15.png"
                                                    />
                                                    <div className="card-body">
                                                        <h4 className="card-title text-nowrap fs-6">Headphones</h4>
                                                        <p className="card-text fs-6">2 Items</p>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* card carousel ends */}
            <div className='d-flex w-100 flex-row'>
                {/* <div className='' style={{ backgroundImage: url }}></div> */}
                <div></div>
                <div></div>
            </div>

            <footer className="bg-light text-dark text-center py-3">
                <div className="container">
                    <div className="row">
                        {/* Footer Links */}
                        <div className="col-md-3 mb-3">
                            <img src="media/logo.png" width="200px" alt="" />
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-danger text-decoration-none">Home</a></li>
                                <li><a href="#" className="text-danger text-decoration-none">About</a></li>
                                <li><a href="#" className="text-danger text-decoration-none">Services</a></li>
                                <li><a href="#" className="text-danger text-decoration-none">Contact</a></li>
                            </ul>
                        </div>
                        {/* Footer Contact Info */}
                        <div className="col-md-2 mb-3">
                            <h5 className="text-capilatalize"><b>Company</b></h5>
                            <ul className="list-unstyled">
                                <li><span>Email: </span><a href="mailto:info@example.com" className="text-info text-decoration-none">info@example.com</a></li>
                                <li>Phone: +123 456 7890</li>
                                <li>Address: 123 Street Name, City</li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-3">
                            <h5 className="text-capilatalize"><b>Account</b></h5>
                            <ul className="list-unstyled">
                                <li><span>Email: </span><a href="mailto:info@example.com" className="text-info text-decoration-none">info@example.com</a></li>
                                <li>Phone: +123 456 7890</li>
                                <li>Address: 123 Street Name, City</li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-3">
                            <h5 className="text-capilatalize"><b>Popular</b></h5>
                            <ul className="list-unstyled">
                                <li><span>Email: </span><a href="mailto:info@example.com" className="text-info text-decoration-none">info@example.com</a></li>
                                <li>Phone: +123 456 7890</li>
                                <li>Address: 123 Street Name, City</li>
                            </ul>
                        </div>
                        {/* Footer Social Links */}
                        <div className="col-md-3 mb-3">
                            <h5 className="text-uppercase">Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-dark text-decoration-none">Facebook</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Twitter</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">Instagram</a></li>
                                <li><a href="#" className="text-dark text-decoration-none">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Copyright */}
                    <div className="row">
                        <div className="col-12">
                            <p className="mb-0">© 2024 Your Company. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>

    )
}

export default NestIndex
