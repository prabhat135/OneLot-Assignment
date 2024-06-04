import React from "react";
import Testimonals from "./Testimonals";
import Social from "./Social";
import Faq from "./Faq";
import Footer from "./Footer";

export default function Hero() {
  return (
    <div className="bg-white items-center text-center pt-40">
      <p className="sm:text-5xl text-3xl sm:mb-8 mb-4 font-extrabold px-4 sm:px-20 xl:px-20 2xl:px-72 text-black">
        Grow your dealership with working capital loans and
        <br />
        digital tools from OneLot
      </p>
      <p className="text-gray-500 font-normal px-4 sm:px-20 2xl:px-20 sm:w-2/3 2xl:w-1/2 mx-auto sm:text-xl">
        We enable dealers to buy more cars through our working capital loan
        solutions and sell cars more efficiently through our Dealership
        Management System with its inventory management, marketing solutions and
        market insights
      </p>
      <button
        type="button"
        class="focus:outline-none text-white bg-[#57009C] hover:bg-[#57009C] focus:ring-4  font-normal rounded-lg text-md px-5 py-2.5 mb-2 mt-4"
      >
        Inquire Now
      </button>
      <div className="flex justify-center items-center mt-5 p-5">
        <img src="home_hero_image.webp" alt="" className="" />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center mt-6 bg-slate-50">
        <p className="text-gray-500">Regulated by</p>
        <img src="sec.webp" alt="" />
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 px-4 sm:px-20 2xl:px-40 mt-10 py-5 border-t border-b">
        <div class="mb-3 sm:pr-20 sm:pt-10">
          <div class="2xl:pl-32 2xl:pr-8">
            <p class="text-black text-3xl sm:text-4xl font-extrabold">
              Everything you need to grow your business
            </p>
            <p class="text-gray-500 sm:text-xl mt-4 sm:mt-10 text-balance">
              OneLot is your trusted lending and financing partner, exclusively
              tailored for used car dealership. We also offer digital tools for
              streamlined operations and growth of your dealership.
            </p>
            <p>
              <a href="/" className="text-[#57009C]">
                Learn more <span>&rarr;</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-around">
          <div className="flex items-center justify-center gap-1">
            <img src="dollar-icon.svg" alt="" />
            <ul className="text-balance">
              <li className="text-xl font-bold">Dealer Inventory Loans</li>
            </ul>
          </div>
          <ul className="text-balance">
            <li className="text-[#01F1F1] mb-4 text-balance">
              Accelerate your growth with tailored loan solutions
            </li>
            <li className="text-gray-500 text-balance">
              Get comprehensive car financing solutions, unlock the potential of
              your dealership and take it to new heights.
            </li>
          </ul>

          <div className="mt-5 flex gap-1 items-center justify-center">
            <img src="announcements-icon.webp" alt="" />
            <p className="text-xl font-bold text-balance">
              Dealer Inventory Loans
            </p>
          </div>
          <p className="text-[#57009C] text-balance">
            Accelerate your growth with tailored loan solutions
          </p>
          <p className="text-gray-500 text-balance">
            Get comprehensive car financing solutions, unlock the potential of
            your dealership and take it to new heights.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 flex flex-col sm:flex-row gap-10 pl-8 pb-5">
        <img src="carfinancing.png" alt="" className="shadow-md mt-10" />
        <div className="mt-10 p-5">
          <ul className="text-left">
            <li className="text-3xl sm:text-4xl font-bold">Car Financing</li>
            <li className="text-xl mt-4 font-semibold text-balance">
              Dealer Loans
            </li>
          </ul>
          <p className="text-gray-500 text-balance text-left mt-2">
            OneLot’s working capital loans allows car dealer to buy more cars
            and capitalize on car purchase opportunities you would otherwise
            have missed. We transfer the money to your account within 6 hours.
          </p>
          <hr className="mt-6" />

          <div className="flex mt-6 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-2 flex-shrink-0"
              style={{ color: "#c3b6d1" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p className="text-left">
              Interest as low as 1.5% per month with daily calculation of
              interest
            </p>
          </div>
          <div className="flex mt-6 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-2 flex-shrink-0"
              style={{ color: "#c3b6d1" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p className="text-balance">
              Financing up to 70% of the vehicle purchase
            </p>
          </div>
          <div className="flex mt-6 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-2 flex-shrink-0"
              style={{ color: "#c3b6d1" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p className="text-left">
              Financing period up to 90 days with flexible repayment schedule at
              any point
            </p>
          </div>

          <hr className="mt-6 mb-6" />
          <p className="text-gray-500 text-balance text-left">
            Use OneLot's financing solution today, grow the number of cars in
            your lot and increase your profits
            </p>
          
          <p className="text-left mt-5"><button
            type="button"
            class="text-white bg-[#57009C] hover:bg-[#57009C] focus:ring-4 focus:outline-none focus:-[#57009C] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            View Loans
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          </p>
        </div>
      </div>
      <div className="bg-slate-50 flex flex-col sm:flex-row gap-10 pl-8 pr-2 mb-5">
        <div className="mt-10 p-8">
          <ul className="text-left">
            <li className="text-3xl sm:text-4xl font-bold">Dealership Management System</li>
            {/* <li className="text-xl mt-4 font-semibold text-balance">
              Dealer Loans
            </li> */}
          </ul>
          <p className="text-gray-500 text-balance text-left mt-2">
          OneLot’s digital platform has been build with the single goal to help used car dealers to operate their business more efficiently.
          </p>
          <hr className="mt-6" />

          <div className="flex mt-6 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-2 flex-shrink-0"
              style={{ color: "#c3b6d1" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p className="p-1 text-left">
            <span className="font-bold text-balance">Inventory Management:</span> Track all details about your cars and sales in one place - from car details to buyers. All you need to now in one place
            </p>
          </div>
          <div className="flex mt-6 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-2 flex-shrink-0"
              style={{ color: "#c3b6d1" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p className="p-1 text-left">
            <span className="font-bold text-balance">Marketing Tools:</span> Promote your cars across all the different platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages and Instagram with a single click of a button 
            </p>
          </div>
          <div className="flex mt-6 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-2 flex-shrink-0"
              style={{ color: "#c3b6d1" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p className="p-1 text-left">
            <span className="font-bold text-balance">Marketing Insights (Coming Soon):</span> Get insights on prices and volumes for all cars in the market. We provide you all the date by combining data from various sources with a single click of a button. 
            </p>
          </div>

          <hr className="mt-6 mb-6" />
          <p className="text-gray-500 text-balance text-left">
          Sign-up OneLot's dealer platform today, and your cars easier.
            </p>
          
          <p className="text-left mt-5"><button
            type="button"
            class="text-white bg-[#57009C] hover:bg-[#57009C] focus:ring-4 focus:outline-none focus:-[#57009C] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Explore Now
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          </p>
        </div>
        <img src="dmscontent.png" alt="" className="shadow-md mt-10 pl-6" />
      </div>



<div className="flex flex-col justify-center items-center">
<p className="text-4xl font-extrabold mt-16 mb-5">Why OneLot?</p>
<div className="flex flex-col sm:flex-row gap-5 justify-center mt-5 p-10">
              
              <div className="flex flex-col gap-5 justify-center items-center shadow-md p-5">
                <img src="trust.webp" alt="" className=" h-10 w-10"/>
                <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">Trust</p>
                <p class="text-sm text-gray-500 text-center px-4 overflow-hidden">Regulated by Securities and Exchange Commission (SEC) Philippines</p>
              </div>
              
              <div className="flex flex-col gap-5 justify-center items-center shadow-md p-5">
                <img src="high_amount.webp" alt="" className="h-10 w-10"/>
                <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">High Amount</p>
                <p class="text-sm text-gray-500 text-center px-4 overflow-hidden">Get the highest loan amounts compared to other banks and lenders</p>
              </div>

              <div className="flex flex-col gap-5 justify-center items-center shadow-md p-5">
                <img src="fast.webp" alt="" className="h-10 w-10"/>
                <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">Fast</p>
                <p class="text-sm text-gray-500 text-center px-4 overflow-hidden">Get the money within a few hours on the same day</p>
              </div>
              <div className="flex flex-col gap-5 justify-center items-center shadow-md p-5">
                <img src="flexible.webp" alt="" className="h-10 w-10"/>
                <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">Flexible</p>
                <p class="text-sm text-gray-500 text-center px-4 overflow-hidden">Loans are tailored to your needs</p>
              </div>
              <div className="flex flex-col gap-5 justify-center items-center shadow-md p-5">
                <img src="easy.webp" alt="" className="h-10 w-10"/>
                <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">Easy</p>
                <p class="text-sm text-gray-500 text-center px-4 overflow-hidden">Run through an easy process and get your first loans within days</p>
              </div>

            </div>
</div>
            



<Testimonals/>


<Social/>
<Faq/>
<Footer/>

    </div>
  );
}
