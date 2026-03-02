// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import SwiperCore from 'swiper';
// import 'swiper/css/bundle';
// import ListingItem from '../components/ListingItem';

// export default function Home() {
//   const [offerListings, setOfferListings] = useState([]);
//   const [saleListings, setSaleListings] = useState([]);
//   const [rentListings, setRentListings] = useState([]);
//   SwiperCore.use([Navigation]);
//   console.log(offerListings);
//   useEffect(() => {
//     const fetchOfferListings = async () => {
//       try {
//         const res = await fetch('/api/listing/get?offer=true&limit=4');
//         const data = await res.json();
//         setOfferListings(data);
//         fetchRentListings();
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     const fetchRentListings = async () => {
//       try {
//         const res = await fetch('/api/listing/get?type=rent&limit=4');
//         const data = await res.json();
//         setRentListings(data);
//         fetchSaleListings();
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const fetchSaleListings = async () => {
//       try {
//         const res = await fetch('/api/listing/get?type=sale&limit=4');
//         const data = await res.json();
//         setSaleListings(data);
//       } catch (error) {
//         log(error);
//       }
//     };
//     fetchOfferListings();
//   }, []);
//   return (
//     <div className='bg-slate-300'>
//       {/* top */}
//       <div className='flex flex-col gap-6 p-28 px-3 w-full mx-auto'>
//         <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl text-center'>
//           The <span className='text-slate-500'>best </span>
//           {/* <br /> */}
//           or nothing
//         </h1>
//         <img className= '' src="https://d.newsweek.com/en/full/1928679/best-large-car.webp?w=1600&h=900&q=88&f=da9281a1bcf689bcf9b654a6f832bcc3" alt="" />

//         <Link
//           to={'/search'}
//           className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
//         >
//           Let's get started...
//         </Link>
//       </div>

//       {/* swiper */}
//       <Swiper navigation>
//         {saleListings &&
//           saleListings.length > 0 &&
//           saleListings.map((listing) => (
//             <SwiperSlide>
//               <div
//                 style={{
//                   background: `url(${listing.imageUrls[0]}) center no-repeat`,
//                   backgroundSize: 'cover',
//                 }}
//                 className='h-[700px]'
//                 key={listing._id}
//               ></div>
//             </SwiperSlide>
//           ))}
//       </Swiper>

//       <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10 bg-slate-300'>
//         {offerListings && offerListings.length > 0 && (
//           <div className=''>
//             <div className='my-3'>
//               <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
//               <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
//             </div>
//             <div className='flex flex-wrap gap-4'>
//               {offerListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//         {rentListings && rentListings.length > 0 && (
//           <div className=' -mt-6'>
//             <div className='my-3'>
//               <h2 className='text-2xl font-semibold text-slate-600'>Recent cars for rent</h2>
//               <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more cars for rent</Link>
//             </div>
//             <div className='flex flex-wrap gap-4'>
//               {rentListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//         {saleListings && saleListings.length > 0 && (
//           <div className=''>
//             <div className='my-3'>
//               <h2 className='text-2xl font-semibold text-slate-600'>Recent cars for sale</h2>
//               <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more cars for sale</Link>
//             </div>
//             <div className='flex flex-wrap gap-4'>
//               {saleListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//  <p>firdavs'market</p>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ListingItem from "../components/ListingItem";

export default function Home() {
  const navigate = useNavigate();

  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  // Search form state
  const [searchData, setSearchData] = useState({
    searchTerm: "",
    type: "all",
    fuel: false,
    electro: false,
    offer: false,
    sort: "createdAt",
    order: "desc",
  });

  /* ================= FETCH DATA ================= */

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=6");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (err) {
        console.log(err);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=6");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=6");
        const data = await res.json();
        setSaleListings(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOfferListings();
  }, []);

  /* ================= SEARCH ================= */

  const handleSearchChange = (e) => {
    const { id, value, checked, type } = e.target;

    setSearchData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    params.set("searchTerm", searchData.searchTerm);
    params.set("type", searchData.type);
    params.set("fuel", searchData.fuel);
    params.set("electro", searchData.electro);
    params.set("offer", searchData.offer);
    params.set("sort", searchData.sort);
    params.set("order", searchData.order);

    navigate(`/search?${params.toString()}`);
  };

  /* ================= UI ================= */

  return (
    <div className="bg-slate-100">
      {/* ================= HERO ================= */}

      <section
        className="relative h-[650px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://d.newsweek.com/en/full/1928679/best-large-car.webp?w=1600')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            The best or nothing
          </h1>

          {/* ================= SEARCH ================= */}

          <form
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-4 text-gray-700"
          >
            {/* Search */}
            <input
              type="text"
              id="searchTerm"
              placeholder="Search cars..."
              value={searchData.searchTerm}
              onChange={handleSearchChange}
              className="flex-1 border rounded-lg px-4 py-2 outline-none"
            />

            {/* Type */}
            <select
              id="type"
              value={searchData.type}
              onChange={handleSearchChange}
              className="border rounded-lg px-3 py-2"
            >
              <option value="all">Rent & Sale</option>
              <option value="rent">Rent</option>
              <option value="sale">Sale</option>
            </select>

            {/* Sort */}
            <select
              id="sort"
              value={searchData.sort}
              onChange={handleSearchChange}
              className="border rounded-lg px-3 py-2"
            >
              <option value="createdAt">Latest</option>
              <option value="regularPrice">Price</option>
            </select>

            {/* Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>

          {/* Filters */}
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <label className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="fuel"
                checked={searchData.fuel}
                onChange={handleSearchChange}
              />
              Fuel
            </label>

            <label className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="electro"
                checked={searchData.electro}
                onChange={handleSearchChange}
              />
              Electro
            </label>

            <label className="flex gap-1 items-center">
              <input
                type="checkbox"
                id="offer"
                checked={searchData.offer}
                onChange={handleSearchChange}
              />
              Offer
            </label>
          </div>
        </div>
      </section>

      {/* ================= SLIDER ================= */}

      <section className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-slate-700 mb-6">
          Featured Cars
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {saleListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <ListingItem listing={listing} />
            </SwiperSlide>
          ))}
            
        </Swiper>
      </section>

      {/* ================= LISTS ================= */}

      <div className='max-w-7xl mx-auto px-4 py-16 space-y-20'>
       {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=' -mt-6'>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent cars for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more cars for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent cars for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more cars for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ================= BANNER ================= */}

      <section
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex flex-col justify-center max-w-6xl mx-auto px-6 text-white">
          <h2 className="text-3xl font-bold mb-3">
            We Make Finding The Right Car Simple
          </h2>

          <p className="mb-5 text-gray-200">
            Find your dream car easily with us
          </p>

          <Link
            to="/about"
            className="bg-white text-black px-6 py-2 rounded-lg w-fit font-semibold"
          >
            Explore Now
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Firdavs Market
            </h3>
            <p className="text-sm">
              Best platform for buying, selling and renting cars.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
              <a href="./about" >About </a> </li> 
              <li> <a href="./about">Careers</a></li> 
              <li> <a target="_blank" href="https://www.instagram.com/firdavsnazarov391/">Blog</a></li> 
              <li> <a target="_blank" href="https://www.linkedin.com/in/firdavs-nazarov-47b854264/">Contact</a></li> 
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>Help Center</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Download App</h4>

            <div className="space-y-3">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                className="h-10"
                alt=""
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                className="h-10"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Firdavs Market
        </div>
      </footer>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function Header({ title, link }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-slate-700">{title}</h2>

      <Link to={link} className="text-sm text-blue-600 hover:underline">
        Show more
      </Link>
    </div>
  );
}

function Grid({ listings }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <div
          key={listing._id}
          className="bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <ListingItem listing={listing} />
        </div>
      ))}
    </div>
  );
}
