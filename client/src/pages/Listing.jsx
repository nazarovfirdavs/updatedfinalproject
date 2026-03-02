// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
// import { useSelector } from "react-redux";
// import { Navigation } from "swiper/modules";
// import "swiper/css/bundle";
// import {
//   FaBath,
//   FaBed,
//   FaChair,
//   FaMapMarkedAlt,
//   FaMapMarkerAlt,
//   FaParking,
//   FaCar,
//   FaShare,
// } from "react-icons/fa";
// import {IoIosColorPalette} from 'react-icons/io'
// import {FcElectroDevices} from 'react-icons/fc'
// import {BsFillFuelPumpFill} from 'react-icons/bs'
// import { BiUser } from "react-icons/bi";
// import { BsClipboardData } from "react-icons/bs";
// import Contact from "../components/Contact";

// // https://sabe.io/blog/javascript-format-numbers-commas#:~:text=The%20best%20way%20to%20format,format%20the%20number%20with%20commas.

// export default function Listing() {
//   SwiperCore.use([Navigation]);
//   const [listing, setListing] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const [contact, setContact] = useState(false);
//   const params = useParams();
//   const { currentUser } = useSelector((state) => state.user);

//   useEffect(() => {
//     const fetchListing = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/listing/get/${params.listingId}`);
//         const data = await res.json();
//         if (data.success === false) {
//           setError(true);
//           setLoading(false);
//           return;
//         }
//         setListing(data);
//         setLoading(false);
//         setError(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchListing();
//   }, [params.listingId]);

//   return (
//     <main className="bg-slate-300">
//       {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
//       {error && (
//         <p className="text-center my-7 text-2xl">Something went wrong!</p>
//       )}
//       {listing && !loading && !error && (
//         <div>
//           <Swiper navigation>
//             {listing.imageUrls.map((url) => (
//               <SwiperSlide key={url}>
//                 <div
//                   className="W-[400PX] h-[600px]"
//                   style={{
//                     background: `url(${url}) center no-repeat`,
//                     backgroundSize: "cover",
//                   }}
//                 ></div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
//             <FaShare
//               className="text-slate-500"
//               onClick={() => {
//                 navigator.clipboard.writeText(window.location.href);
//                 setCopied(true);
//                 setTimeout(() => {
//                   setCopied(false);
//                 }, 2000);
//               }}
//             />
//           </div>
//           {copied && (
//             <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-green-500 p-2 text-white">
//               Link copied!
//             </p>
//           )}
//           <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
//             <p className="text-5xl font-semibold">
//               {listing.name} - ${" "}
//               {listing.offer
//                 ? listing.discountPrice.toLocaleString("en-US")
//                 : listing.regularPrice.toLocaleString("en-US")}
//               {listing.type === "rent" && " / month"}
//             </p>
//             <p className="flex items-center mt-6 gap-2 text-slate-600  text-lg">
//               <FaCar className="text-green-700" />
//               {listing.marka}
//             </p>
//             <p className="flex items-center mt-6 gap-2 text-slate-600  text-lg">
//               <IoIosColorPalette className="text-green-700" />
//               {listing.color}
//             </p>
//             <p className="flex items-center mt-6 gap-2 text-slate-600  text-lg">
//               <FaMapMarkerAlt className="text-green-700" />
//               {listing.address}
//             </p>
//             <div className="flex gap-4">
//               <p className="bg-yellow-300 w-full max-w-[200px] text-black text-center p-1 rounded-md">
//                 {listing.type === "rent" ? "For Rent" : "For Sale"}
//               </p>
//               {listing.offer && (
//                 <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
//                   ${+listing.regularPrice - +listing.discountPrice} OFF
//                 </p>
//               )}
//             </div>
//             <p className="text-slate-800">
//               <span className="font-semibold text-black">Description - </span>
//               {listing.description}
//             </p>
//             <ul className="text-green-900 font-semibold text-lg flex flex-wrap items-center gap-4 sm:gap-6">
//               <li className="flex items-center gap-1 whitespace-nowrap ">
//                 <BiUser className="text-lg" />
//                 {listing.owner > 1
//                   ? `${listing.owner} owners `
//                   : `${listing.owner} owner `}
//               </li>
//               <li className="flex items-center gap-1 whitespace-nowrap ">
//                 <BsClipboardData className="text-lg" />
//                 {listing.year > 1
//                   ? `${listing.year} year `
//                   : `${listing.year} year `}
//               </li>
//               <li className="flex items-center gap-1 whitespace-nowrap ">
//                 <BsFillFuelPumpFill className="text-lg" />
//                 {listing.fuel ? "Fuel engine" : "No fuel engine"}
//               </li>
//               <li className="flex items-center gap-1 whitespace-nowrap ">
//                 <FcElectroDevices className="text-lg" />
//                 {listing.electro ? "Electro engine" : "No electro engine"}
//               </li>
//             </ul>
//             {currentUser && listing.userRef !== currentUser._id && !contact && (
//               <button
//                 onClick={() => setContact(true)}
//                 className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3"
//               >
//                 Contact to owner
//               </button>
//             )}
//             {contact && <Contact listing={listing} />}
//           </div>
//         </div>
//       )}
//       <p>Firdavs'market</p>
//     </main>
//   );
// }













import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { useSelector } from "react-redux";

import {
  FaCar,
  FaMapMarkerAlt,
  FaShare,
} from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FcElectroDevices } from "react-icons/fc";
import { BiUser } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";

import Contact from "../components/Contact";

export default function Listing() {
  SwiperCore.use([Navigation]);

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);

  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  if (loading)
    return <p className="text-center mt-10 text-2xl">Loading...</p>;

  if (error)
    return <p className="text-center mt-10 text-2xl">Something went wrong!</p>;

  if (!listing) return null;

  return (
    <main className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* IMAGE SLIDER */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[500px] w-full"
                  style={{
                    background: `url(${url}) center`,
                    backgroundSize: "cover",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* SHARE BUTTON */}
        <div className="flex justify-end mt-4">
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-200"
          >
            <FaShare /> Share
          </button>
        </div>

        {copied && (
          <p className="text-green-600 text-right mt-2">
            Link copied!
          </p>
        )}

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-6">

            <h1 className="text-4xl font-bold">
              {listing.name}
            </h1>

            <div className="flex items-center gap-3 text-gray-600">
              <FaMapMarkerAlt />
              {listing.address}
            </div>

            <div className="flex gap-4">
              <span className="bg-yellow-400 px-4 py-1 rounded-md font-semibold">
                {listing.type === "rent" ? "For Rent" : "For Sale"}
              </span>
              {listing.offer && (
                <span className="bg-green-700 text-white px-4 py-1 rounded-md">
                  ${+listing.regularPrice - +listing.discountPrice} OFF
                </span>
              )}
            </div>

            <p className="text-gray-700">
              <span className="font-semibold text-black">
                Description:
              </span>{" "}
              {listing.description}
            </p>

            {/* CAR DETAILS */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-gray-700">

              <div className="flex items-center gap-2">
                <FaCar /> {listing.marka}
              </div>

              <div className="flex items-center gap-2">
                <IoIosColorPalette /> {listing.color}
              </div>

              <div className="flex items-center gap-2">
                <BiUser /> {listing.owner} owner
              </div>

              <div className="flex items-center gap-2">
                <BsClipboardData /> {listing.year}
              </div>

              <div className="flex items-center gap-2">
                <BsFillFuelPumpFill />
                {listing.fuel ? "Fuel engine" : "No fuel engine"}
              </div>

              <div className="flex items-center gap-2">
                <FcElectroDevices />
                {listing.electro ? "Electro engine" : "No electro engine"}
              </div>

            </div>

          </div>

          {/* RIGHT SIDE PRICE CARD */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">

            <h2 className="text-3xl font-bold mb-4">
              $
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type === "rent" && " / month"}
            </h2>

            {currentUser && listing.userRef !== currentUser._id && !contact && (
              <button
                onClick={() => setContact(true)}
                className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3"
              >
                Contact to owner
              </button>
            )}
           {contact && <Contact listing={listing} />}

          </div>

        </div>
      </div>
    </main>
  );
}