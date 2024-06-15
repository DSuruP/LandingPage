import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white text-black py-8 px-4 md:px-8 lg:px-10 ">
      <div>
        <div className="flex flex-wrap justify-between  my-3">
          <p className="text-4xl font-bold font-sans mr-8 p-6">Zomato</p>
          <div className="mx-8 my-2 flex flex-wrap">
            <select className="mr-4 border p-1">
              <option value="INDIA">INDIA</option>
            </select>
            <select className="mr-4 border p-1">
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-between  border-b flex-wrap gap-y-6 pb-3">
        <div className=" mx-3 overflow-hidden">
          <p className="font-semibold text-2xl pb-10 ">About Zomato</p>
          <ul className="list-none">
            <li className="mb-2">Who We Are</li>
            <li className="mb-2">Blog</li>
            <li className="mb-2">Work with us</li>
            <li className="mb-2">Investor Retention</li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <div className=" mx-3 overflow-hidden">
          <p className="font-semibold text-2xl pb-10 ">Zomatoverse</p>
          <ul className="list-none">
            <li className="mb-2">Who We Are</li>
            <li className="mb-2">Blog</li>
            <li className="mb-2">Work with us</li>
            <li className="mb-2">Investor Retention</li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <div className=" mx-3 overflow-hidden">
          <p className="font-semibold text-2xl pb-10 "> FOR RESTAURANTS</p>
          <ul className="list-none">
            <li className="mb-2">Zomato</li>
            <li className="mb-2">Blinket</li>
            <li className="mb-2">Feeding India</li>
            <li className="mb-2">Hyper pure</li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <div className=" mx-3 overflow-hidden">
          <p className="font-semibold text-2xl pb-10 ">LEARN MORE</p>
          <ul className="list-none">
            <li className="mb-2">Partner with us</li>
            <li className="mb-2">Apps for you</li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <div className=" mx-3 overflow-hidden">
          <p className="font-semibold text-2xl pb-10 ">Social links</p>
          <ul className="list-none">
            <div className="align-around ">
              <i className=" m-2 text-xl bold fab fa-linkedin"></i>
              <i className=" m-2 text-xl bold fab fa-instagram"></i>
              <i className=" m-2 text-xl bold fab fa-youtube"></i>
              <i className=" m-2 text-xl bold fab fa-twitter"></i>
              <i className=" m-2 text-xl bold fab fa-facebook"></i>
            </div>
            <div>
              <img
                src="https://thumbs.dreamstime.com/b/app-store-155321571.jpg"
                className="w-[190px] mt-[-10px]"
                alt=""
              />
            </div>
            {/* Add more items as needed */}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2 font-thin ">
        <p>
          &copy; {new Date().getFullYear()} By continuing past this page, you
          agree to our Terms of Service, Cookie Policy, Privacy Policy and
          Content Policies. All trademarks are properties of their respective
          owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer