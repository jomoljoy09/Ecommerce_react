// import React, { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
// import { Link, useParams } from "react-router-dom";
// import Marquee from "react-fast-marquee";
// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/action";

// import { Footer, Navbar } from "../components";

// const Product = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState([]);
//   const [similarProducts, setSimilarProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [loading2, setLoading2] = useState(false);

//   const dispatch = useDispatch();

//   const addProduct = (product) => {
//     dispatch(addCart(product));
//   };

//   useEffect(() => {
//     const getProduct = async () => {
//       console.log("hellooo");
//       setLoading(true);
//       setLoading2(true);
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const data = await response.json();
//       setProduct(data);
//       setLoading(false);
//       const response2 = await fetch(
//         `https://fakestoreapi.com/products/category/${data.category}`
//       );
//       console.log("jomol",response2);
//       const data2 = await response2.json();
//       setSimilarProducts(data2);
//       setLoading2(false);
//     };
//     getProduct();
//   }, [id]);

//   const Loading = () => {
//     return (
//       <>
//         <div className="container my-5 py-2">
//           <div className="row">
//             <div className="col-md-6 py-3">
//               <Skeleton height={400} width={400} />
//             </div>
//             <div className="col-md-6 py-5">
//               <Skeleton height={30} width={250} />
//               <Skeleton height={90} />
//               <Skeleton height={40} width={70} />
//               <Skeleton height={50} width={110} />
//               <Skeleton height={120} />
//               <Skeleton height={40} width={110} inline={true} />
//               <Skeleton className="mx-3" height={40} width={110} />
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };

//   const ShowProduct = () => {
//     return (
//       <>
//         <div className="container my-5 py-2">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 py-3">
//               <img
//                 className="img-fluid"
//                 src={product.image}
//                 alt={product.title}
//                 width="400px"
//                 height="400px"
//               />
//             </div>
//             <div className="col-md-6 col-md-6 py-5">
//               <h4 className="text-uppercase text-muted">{product.category}</h4>
//               <h1 className="display-5">{product.title}</h1>
//               <p className="lead">
//                 {product.rating && product.rating.rate}{" "}
//                 <i className="fa fa-star"></i>
//               </p>
//               <h3 className="display-6  my-4">{product.price}</h3>
//               <p className="lead">{product.description}</p>
//               <button
//                 className="btn btn-outline-dark"
//                 onClick={() => addProduct(product)}
//               >
//                 Add to Cart
//               </button>
//               <Link to="/cart" className="btn btn-dark mx-3">
//                 Go to Cart
//               </Link>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };

//   const Loading2 = () => {
//     return (
//       <>
//         <div className="my-4 py-4">
//           <div className="d-flex">
//             <div className="mx-4">
//               <Skeleton height={400} width={250} />
//             </div>
//             <div className="mx-4">
//               <Skeleton height={400} width={250} />
//             </div>
//             <div className="mx-4">
//               <Skeleton height={400} width={250} />
//             </div>
//             <div className="mx-4">
//               <Skeleton height={400} width={250} />
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };

//   const ShowSimilarProduct = () => {
//     return (
//       <>
//         <div className="py-4 my-4">
//           <div className="d-flex">
//             {similarProducts.map((item) => {
//               return (
//                 <div key={item.id} className="card mx-4 text-center">
//                   <img
//                     className="card-img-top p-3"
//                     src={item.image}
//                     alt="Card"
//                     height={300}
//                     width={300}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">
//                       {item.title.substring(0, 15)}...
//                     </h5>
//                   </div>
//                   {/* <ul className="list-group list-group-flush">
//                     <li className="list-group-item lead">${product.price}</li>
//                   </ul> */}
//                   <div className="card-body">
//                     <Link
//                       to={"/product/" + item.id}
//                       className="btn btn-dark m-1"
//                     >
//                       Buy Now
//                     </Link>
//                     <button
//                       className="btn btn-dark m-1"
//                       onClick={() => addProduct(item)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </>
//     );
//   };
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
//         <div className="row my-5 py-5">
//           <div className="d-none d-md-block">
//           <h2 className="">You may also Like</h2>
//             <Marquee
//               pauseOnHover={true}
//               pauseOnClick={true}
//               speed={50}
//             >
//               {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
//             </Marquee>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Product;

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Set initial state to null for better clarity
  const [similarProducts, setSimilarProducts] = useState([]); // Hardcoded similar products
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [error, setError] = useState(null); // To handle errors

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  // Hardcoded product array (Simulating your API response data)
  const hardcodedProducts = [
    {
      id: 1,
      title: "Nike, Just Do It",
      price: 1200,
      description: "Nike shoes are designed for efficient sports performance as well as for aesthetics. Nike also produces apparel for sports activities, as well as other activities including dance and yoga. It features different collections for its apparel, including Livestrong, Nike Pro, Nike Free and SPARQ.",
      category: "men's clothing",
      image: "https://wallpapercave.com/wp/ph5uLUo.jpg",
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {
      id: 2,
      title: "Nike, Just Do It",
      price: 1150,
      description: "Nike shoes are designed for efficient sports performance as well as for aesthetics. Nike also produces apparel for sports activities, as well as other activities including dance and yoga. It features different collections for its apparel, including Livestrong, Nike Pro, Nike Free and SPARQ.",
      category: "men's clothing",
      image: "https://assets.adidas.com/images/w_940,f_auto,q_auto/3b2c10e0605a4ab4b2cbae2b003ef3fc_9366/GW6511_05_standard.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 10,
      title: "VALRUN SHOES",
      price: 2499,
      description: "These sneakers are the ultimate multitasker. Rooted in running but flush with street-ready style, they're built for whatever your day brings. Non- marking rubber outsole is engineered in such a way that it support flexing motion of foot while walking & running. It has great stability on ground and offer anti-skid resistance.",
      category: "women's clothing",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/078d9a99950849b5be84af0a008fdeb8_9366/VALRUN_SHOES_Black_GB2346_01_standard.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 11,
      title: "CLOUD TEC SHOES",
      price: 2299,
      description: "Get ready for a run through the park or a walk to the coffee shop in these versatile adidas running shoes. They feel good from the minute you step in, thanks to the cushy midsole. The textile upper feels comfy and breathable, and the rubber outsole gives you plenty of grip for a confident stride.",
      category: "women's clothing",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/773d128111f64c1bb6609a17009bad19_9366/CLOUD_TEC_SHOES_Blue_IU6260_01_standard.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 12,
      title: "BASE-STRIKE SHOES",
      price: 3599,
      description: "Get the support you need with synthetic uppers that wrap your foot with an engineered fit for targeted support ormesh uppers with strategic zones of reinforcement that support lateral as well as linear movement. Available in a spectrum of colors, you’ll be sure to find adidas men’s running shoes that fit your vibe. Go classic with running shoes or make a statement with louder colors that show your unique personality.",
      category: "women's clothing",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/73bdb0382ca04963ac9a60ea68a916d8_9366/BASE-STRIKE_SHOES_Grey_IU6412_01_standard.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 13,
      title: "ZAPCORE M",
      price: 2600,
      description: "Get the support you need with synthetic uppers that wrap your foot with an engineered fit for targeted support ormesh uppers with strategic zones of reinforcement that support lateral as well as linear movement. Available in a spectrum of colors, you’ll be sure to find adidas men’s running shoes that fit your vibe. Go classic with running shoes or make a statement with louder colors that show your unique personality.",
      category: "women's clothing",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3fbbc2db2a74aa098b6ba4d223961d5_9366/Zapcore_M_Black_JJ5396_04_standard_hover.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 14,
      title: "LIGHTRUN LIT M",
      price: 5999,
      description: "Whether you're out exploring the city or just kicking back, these LightRun Lit shoes keep you comfortable and decked out in iconic '90s style. An update of a legendary adidas runner, this pair fuses the boldness of the era with modern technology. The mesh upper and synthetic overlays are accented by pops of colour for an energetic look. Underfoot, Adiplus cushioning and an EVA unitsole support your every step.",
      category: "women's clothing",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bffcf99a7e1e4add8e7da7750041de0a_9366/Lightrun_Lit_M_Green_JJ5413_01_00_standard.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 20,
      title: "Smashic Unisex Sneakers",
      price: 2559,
      description: "The PUMA formstrip adds a touch of style, while the Softfoam sockliner ensures maximum comfort. The rubber outsole provides superior traction, making these sneakers perfect for any casual or athletic occasion.",
      category: "electronics",
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/394371/01/sv01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 21,
      title: "PUMA Questblitz Mid Men's Running Shoes",
      price: 4549,
      description: "Experience the PUMA spirit and make your runs legendary with these dynamic midboot kicks. Featuring a textile upper with perforations for breathability and rubber outsole, they deliver optimal performance and comfort for every stride. The lug outsole ensures grip and stability, making your runs unforgettable.",
      category: "electronics",
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/311124/02/sv03/fnd/IND/fmt/png/PUMA-Questblitz-Mid-Men's-Running-Shoes",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 22,
      title: "KING ULTIMATE FG/AG Unisex Football Boots",
      price: 7999,
      description: "Let everyone know: there’s a new KING in town. This football boot lives up to its name with the combination of non-animal-based K-BETTER™ upper material and GRIPCONTROL 3D structure on the medial side for enhanced ball control. A new KING doesn’t come along every day, but there will always be a new KING. The rightful heir is here.",
      category: "electronics",
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107809/03/sv01/fnd/IND/fmt/png/KING-ULTIMATE-FG/AG-Unisex-Football-Boots",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 23,
      title: "KING ULTIMATE Pelé FG/AG Unisex Football Boots",
      price: 9999,
      description: "With this edition of the KING ULTIMATE we are paying tribute to one of the greatest players of all time: Pelé. Iconic design elements from the past have been combined with innovative materials that work better – for the player and for the planet. Like the all-new K-BETTER upper material, made with recycled content while also improving the signature touch, comfort, and stretch resistance. The new lightweight outsole features an external heel counter, integrated stability spine, and conical studs, so you have as much control over your movement as you do over the ball.",
      category: "electronics",
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107825/01/sv03/fnd/IND/fmt/png/KING-ULTIMATE-Pel%C3%A9-FG/AG-Unisex-Football-Boots",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 24,
      title: "Smashic Unisex Sneakers",
      price: 2559,
      description: "The PUMA formstrip adds a touch of style, while the Softfoam sockliner ensures maximum comfort. The rubber outsole provides superior traction, making these sneakers perfect for any casual or athletic occasion.",
      category: "electronics",
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/394371/01/sv01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 30,
      title: "Reebok Mens Stride Runner M Running Shoe",
      price: 1250,
      description: "Light weighted and very flexible. It has Breathable Mesh and attractive styling. A lightweight and flexible shoe comprising of a mesh upper for breathability. Full EVA outsole that balances heel cushioning with responsiveness. Best for a daily running session.",
      category: "jewelery",
      image: "https://m.media-amazon.com/images/I/51MuYbbzjgL._SY695_.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 31,
      title: "Reebok Mens Comfort Infused Running Shoe",
      price: 2659,
      description: "Light weighted and very flexible. It has Breathable Mesh and attractive styling. A lightweight and flexible shoe comprising of a mesh upper for breathability. Full EVA outsole that balances heel cushioning with responsiveness. Best for a daily running session.",
      category: "jewelery",
      image: "https://m.media-amazon.com/images/I/81sofRDihHL._SY695_.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    // Add more products here if needed
  ];

  // Hardcoded similar products based on categories
  const hardcodedSimilarProducts = [
    {
      id: 1,
      title: "Nike, Just Do It",
      price: 1200,
      description: "Nike shoes are designed for efficient sports performance as well as for aesthetics. Nike also produces apparel for sports activities, as well as other activities including dance and yoga. It features different collections for its apparel, including Livestrong, Nike Pro, Nike Free and SPARQ.",
      category: "men's clothing",
      image: "https://wallpapercave.com/wp/ph5uLUo.jpg",
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {
      id: 2,
      title: "Nike, Just Do It",
      price: 1150,
      description: "Nike shoes are designed for efficient sports performance as well as for aesthetics. Nike also produces apparel for sports activities, as well as other activities including dance and yoga. It features different collections for its apparel, including Livestrong, Nike Pro, Nike Free and SPARQ.",
      category: "men's clothing",
      image: "https://assets.adidas.com/images/w_940,f_auto,q_auto/3b2c10e0605a4ab4b2cbae2b003ef3fc_9366/GW6511_05_standard.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 10,
      title: "VALRUN SHOES",
      price: 2499,
      description: "These sneakers are the ultimate multitasker. Rooted in running but flush with street-ready style, they're built for whatever your day brings. Non- marking rubber outsole is engineered in such a way that it support flexing motion of foot while walking & running. It has great stability on ground and offer anti-skid resistance.",
      category: "women's clothing",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/078d9a99950849b5be84af0a008fdeb8_9366/VALRUN_SHOES_Black_GB2346_01_standard.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 11,
      title: "CLOUD TEC SHOES",
      price: 2299,
      description: "Get ready for a run through the park or a walk to the coffee shop in these versatile adidas running shoes. They feel good from the minute you step in, thanks to the cushy midsole. The textile upper feels comfy and breathable, and the rubber outsole gives you plenty of grip for a confident stride.",
      category: "women's clothing",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/773d128111f64c1bb6609a17009bad19_9366/CLOUD_TEC_SHOES_Blue_IU6260_01_standard.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 12,
      title: "BASE-STRIKE SHOES",
      price: 3599,
      description: "Get the support you need with synthetic uppers that wrap your foot with an engineered fit for targeted support ormesh uppers with strategic zones of reinforcement that support lateral as well as linear movement. Available in a spectrum of colors, you’ll be sure to find adidas men’s running shoes that fit your vibe. Go classic with running shoes or make a statement with louder colors that show your unique personality.",
      category: "women's clothing",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/73bdb0382ca04963ac9a60ea68a916d8_9366/BASE-STRIKE_SHOES_Grey_IU6412_01_standard.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 13,
      title: "ZAPCORE M",
      price: 2600,
      description: "Get the support you need with synthetic uppers that wrap your foot with an engineered fit for targeted support ormesh uppers with strategic zones of reinforcement that support lateral as well as linear movement. Available in a spectrum of colors, you’ll be sure to find adidas men’s running shoes that fit your vibe. Go classic with running shoes or make a statement with louder colors that show your unique personality.",
      category: "women's clothing",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3fbbc2db2a74aa098b6ba4d223961d5_9366/Zapcore_M_Black_JJ5396_04_standard_hover.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 14,
      title: "LIGHTRUN LIT M",
      price: 5999,
      description: "Whether you're out exploring the city or just kicking back, these LightRun Lit shoes keep you comfortable and decked out in iconic '90s style. An update of a legendary adidas runner, this pair fuses the boldness of the era with modern technology. The mesh upper and synthetic overlays are accented by pops of colour for an energetic look. Underfoot, Adiplus cushioning and an EVA unitsole support your every step.",
      category: "women's clothing",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bffcf99a7e1e4add8e7da7750041de0a_9366/Lightrun_Lit_M_Green_JJ5413_01_00_standard.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 20,
      title: "Smashic Unisex Sneakers",
      price: 2559,
      description: "The PUMA formstrip adds a touch of style, while the Softfoam sockliner ensures maximum comfort. The rubber outsole provides superior traction, making these sneakers perfect for any casual or athletic occasion.",
      category: "electronics",
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/394371/01/sv01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 21,
      title: "PUMA Questblitz Mid Men's Running Shoes",
      price: 4549,
      description: "Experience the PUMA spirit and make your runs legendary with these dynamic midboot kicks. Featuring a textile upper with perforations for breathability and rubber outsole, they deliver optimal performance and comfort for every stride. The lug outsole ensures grip and stability, making your runs unforgettable.",
      category: "electronics",
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/311124/02/sv03/fnd/IND/fmt/png/PUMA-Questblitz-Mid-Men's-Running-Shoes",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 22,
      title: "KING ULTIMATE FG/AG Unisex Football Boots",
      price: 7999,
      description: "Let everyone know: there’s a new KING in town. This football boot lives up to its name with the combination of non-animal-based K-BETTER™ upper material and GRIPCONTROL 3D structure on the medial side for enhanced ball control. A new KING doesn’t come along every day, but there will always be a new KING. The rightful heir is here.",
      category: "electronics",
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107809/03/sv01/fnd/IND/fmt/png/KING-ULTIMATE-FG/AG-Unisex-Football-Boots",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 23,
      title: "KING ULTIMATE Pelé FG/AG Unisex Football Boots",
      price: 9999,
      description: "With this edition of the KING ULTIMATE we are paying tribute to one of the greatest players of all time: Pelé. Iconic design elements from the past have been combined with innovative materials that work better – for the player and for the planet. Like the all-new K-BETTER upper material, made with recycled content while also improving the signature touch, comfort, and stretch resistance. The new lightweight outsole features an external heel counter, integrated stability spine, and conical studs, so you have as much control over your movement as you do over the ball.",
      category: "electronics",
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107825/01/sv03/fnd/IND/fmt/png/KING-ULTIMATE-Pel%C3%A9-FG/AG-Unisex-Football-Boots",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 24,
      title: "Smashic Unisex Sneakers",
      price: 2559,
      description: "The PUMA formstrip adds a touch of style, while the Softfoam sockliner ensures maximum comfort. The rubber outsole provides superior traction, making these sneakers perfect for any casual or athletic occasion.",
      category: "electronics",
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/394371/01/sv01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 30,
      title: "Reebok Mens Stride Runner M Running Shoe",
      price: 1250,
      description: "Light weighted and very flexible. It has Breathable Mesh and attractive styling. A lightweight and flexible shoe comprising of a mesh upper for breathability. Full EVA outsole that balances heel cushioning with responsiveness. Best for a daily running session.",
      category: "jewelery",
      image: "https://m.media-amazon.com/images/I/51MuYbbzjgL._SY695_.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 31,
      title: "Reebok Mens Comfort Infused Running Shoe",
      price: 2659,
      description: "Light weighted and very flexible. It has Breathable Mesh and attractive styling. A lightweight and flexible shoe comprising of a mesh upper for breathability. Full EVA outsole that balances heel cushioning with responsiveness. Best for a daily running session.",
      category: "jewelery",
      image: "https://m.media-amazon.com/images/I/81sofRDihHL._SY695_.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
  ];

  // Function to get product based on the id
  const getProduct = () => {
    setLoading(true);
    setLoading2(true);

    try {
      // Find the product by id from hardcoded products
      const foundProduct = hardcodedProducts.find((product) => product.id === parseInt(id));
      
      if (!foundProduct) {
        throw new Error("Product not found");
      }

      setProduct(foundProduct);

      const similar = hardcodedSimilarProducts.filter(
        (item) => item.id !== foundProduct.id
      );
      setSimilarProducts(similar);
      // Set similar products based on the product's category
      // const similar = hardcodedSimilarProducts.filter(
      //   (item) => item.category === foundProduct.category
      // );
      // setSimilarProducts(similar);
    } catch (error) {
      setError(error.message); // Set error message in case of failure
      setProduct(null); // If product not found, set null
      setSimilarProducts([]); // Reset similar products
    } finally {
      setLoading(false);
      setLoading2(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const Loading = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 py-3">
          <Skeleton height={400} width={400} />
        </div>
        <div className="col-md-6 py-5">
          <Skeleton height={30} width={250} />
          <Skeleton height={90} />
          <Skeleton height={40} width={70} />
          <Skeleton height={50} width={110} />
          <Skeleton height={120} />
          <Skeleton height={40} width={110} inline={true} />
          <Skeleton className="mx-3" height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            width="400px"
            height="400px"
          />
        </div>
        <div className="col-md-6 py-5">
          {/* <h4 className="text-uppercase text-muted">{product.category}</h4> */}
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            {product.rating && product.rating.rate} <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 my-4">{product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark mx-3">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );

  const Loading2 = () => (
    <div className="my-4 py-4">
      <div className="d-flex">
        <div className="mx-4">
          <Skeleton height={400} width={250} />
        </div>
        <div className="mx-4">
          <Skeleton height={400} width={250} />
        </div>
        <div className="mx-4">
          <Skeleton height={400} width={250} />
        </div>
        <div className="mx-4">
          <Skeleton height={400} width={250} />
        </div>
      </div>
    </div>
  );

  const ShowSimilarProduct = () => (
    <div className="py-4 my-4">
      <div className="d-flex">
        {similarProducts.map((item) => (
          <div key={item.id} className="card mx-4 text-center">
            <img
              className="card-img-top p-3"
              src={item.image}
              alt="Card"
              height={300}
              width={300}
            />
            <div className="card-body">
              <h5 className="card-title">{item.title.substring(0, 15)}...</h5>
            </div>
            <div className="card-body">
              <Link to={"/product/" + item.id} className="btn btn-dark m-1">
                Buy Now
              </Link>
              <button
                className="btn btn-dark m-1"
                onClick={() => addProduct(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        {error && (
          <div className="alert alert-danger mt-3">
            <strong>Error!</strong> {error}
          </div>
        )}
        <div className="row my-5 py-5">
          <h2 className="mb-4">You may also like</h2>
          <Marquee pauseOnHover={true} speed={50}>
            {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
          </Marquee>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
