import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        We believe that the right pair of shoes can transform your day, your style, and your confidence. Our mission is to provide our customers with a wide variety of high-quality shoes that combine comfort, durability, and the latest trends in footwear.
From stylish sneakers to elegant formal shoes, from durable boots to cozy slippers, we offer an extensive collection to suit every occasion and lifestyle. Our curated selection features renowned brands, cutting-edge designs, and top-notch materials, ensuring that each pair of shoes we offer meets our high standards.
We are committed to providing an exceptional shopping experience, with easy navigation, secure transactions, and fast delivery right to your doorstep.
Our team is passionate about footwear and customer satisfaction. We understand that shoes are not just about fashion — they're about comfort, quality, and making a statement. That's why we continuously strive to bring you the best and most diverse options at competitive prices.
Step into the perfect pair today and walk with confidence!</p>

<h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Nike</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Adidas</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://mma.prnewswire.com/media/965354/Reebok_Vector_Classic_Logo.jpg?p=facebook" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Reebok</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://tse4.mm.bing.net/th?id=OIP.lIppg5xpU_NR-cG1OHom_AHaEK&pid=Api&P=0&h=180" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Puma</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage