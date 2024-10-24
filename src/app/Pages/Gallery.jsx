import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import { Poppins } from "next/font/google";

const Gallery = () => {
  return (
    <div>
      <Header />
      <div className='p-4'>
        <h1 className='text-2xl font-bold'>Gallery</h1>
        <h2>Our Photo Gallery</h2>
        <div className='flex px-0 py-14 gap-10 align-top flex-wrap'>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto w-5/6">
            <div className="w-26">
              <img
                src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729259459/bcbtu8h5esiow8udjg3p.png"
                width="200"
              />
              <div className="flex gap-3 py-3">
                <img
                  src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689885/vcwz0vcbxgjmkdg0cghz.png"
                  width="20"
                  height="5"
                />
                <p className="text-sm">Some of our structures(3)</p>
              </div>
            </div>
            <div className="w-26">
              <img
                src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729688947/p3qnydngct9vt3byrig0.png"
                width="200"
              />
              <div className="flex gap-3 py-3">
                <img
                  src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689885/vcwz0vcbxgjmkdg0cghz.png"
                  width="20"
                  height="5"
                />
                <p className="text-sm">Hostel(4)</p>
              </div>
            </div>
            <div className="w-26">
              <img
                src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689051/hkpn8gxb2tk6hcer03g4.png"
                width="200"
              />
              <div className="flex gap-3 py-3">
                <img
                  src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689885/vcwz0vcbxgjmkdg0cghz.png"
                  width="20"
                  height="5"
                />
                <p className="text-sm">Cultural Display(13)</p>
              </div>
            </div>
            <div className="w-26">
              <img
                src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689092/ke6xzoqtvqeyjmhki1yf.png"
                width="200"
              />
              <div className="flex gap-3 py-3">
                <img
                  src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689885/vcwz0vcbxgjmkdg0cghz.png"
                  width="20"
                  height="5"
                />
                <p className="text-sm">Library and bookshop(13)</p>
              </div>
            </div>
            <div className="w-26">
              <img
                src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689150/vjkxir6lulgcwcvibjxg.png"
                width="200"
              />
              <div className="flex gap-3 py-3">
                <img
                  src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689885/vcwz0vcbxgjmkdg0cghz.png"
                  width="20"
                  height="5"
                />
                <p className="text-sm">Price Giving Day(27)</p>
              </div>
            </div>
          </div>
        <div className=' mx-16'>
          <h2 className="py-4">Photo Album</h2>
          <div className="flex gap-2 border-b-2 w-56 py-2">
            <img
              src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689885/vcwz0vcbxgjmkdg0cghz.png"
              width="20"
            />
            <p className="text-black text-sm">Some of our structures</p>
            <div className="bg-slate-300 rounded-full w-6 h-6 overflow-hidden px-1 text-center">
              3
            </div>
          </div>
          <div className="flex gap-2 border-b-2 w-56 py-2">
            <img
              src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689885/vcwz0vcbxgjmkdg0cghz.png"
              width="20"
            />
            <p className="text-black text-sm">Some of our structures</p>
            <div className="bg-slate-300 rounded-full w-6 h-6 overflow-hidden px-1 text-center">
              3
            </div>
          </div>
          <div className="flex gap-2 border-b-2 w-56 py-2">
            <img
              src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689885/vcwz0vcbxgjmkdg0cghz.png"
              width="20"
            />
            <p className="text-black text-sm">Some of our structures</p>
            <div className="bg-slate-300 rounded-full w-6 h-6 overflow-hidden px-1 text-center">
              3
            </div>
          </div>
          <div className="flex gap-2 border-b-2 w-56 py-2">
            <img
              src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689885/vcwz0vcbxgjmkdg0cghz.png"
              width="20"
            />
            <p className="text-black text-sm">Some of our structures</p>
            <div className="bg-slate-300 rounded-full w-6 h-6 overflow-hidden px-1 text-center">
              3
            </div>
          </div>
          <div className="flex gap-2 border-b-2 w-56 py-2">
            <img
              src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729689885/vcwz0vcbxgjmkdg0cghz.png"
              width="20"
            />
            <p className="text-black text-sm">Some of our structures</p>
            <div className="bg-slate-300 rounded-full w-6 h-6 overflow-hidden px-1 text-center">
              3
            </div>
          </div>
        </div>
        
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
