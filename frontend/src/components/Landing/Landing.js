
import { useState } from "react";
import anim from "./animation.json"
import Lottie from "lottie-react"
import "./Landing.css"
import { useNavigate } from 'react-router-dom';
function Landing() {
  const navigate = useNavigate();
  const handleSubmit=()=>
  {
    navigate('/login');
  }
  

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <>
      <div className="bg-black">
        
          
            
        <nav className="bg-black ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
              
              <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Notifier</span>
          </a>
          <div class="flex md:order-2">
              <button onClick={handleSubmit} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
              <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 borderrounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md: md:dark:">
             <li>
                <a href="#about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#contact" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>


       
        <section className=" " id="home">
  <div class="flex items-center ..."> // added items-center class
    <div className=" p-5 w-full lg:w-1/2">
      <h2 class="mb-4 text-6xl tracking-tight font-extrabold text-yellow dark:text-yellow">Unleash Your</h2>
      <h2 class="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">Inner Self</h2>
      <p class="mb-5 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl">Got somethinng to say?<br/> Let us know.</p>
      <button onClick={handleSubmit} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join Now</button>
    </div>
  
    <div className="w-full lg:w-1/2 flex ">
      <Lottie style={{ maxWidth: '100%', height: 'auto', width: '100%', maxWidth: '500px', maxHeight: '500px' }} animationData={anim} loop={true} />
    </div>
  </div> 
</section>
<section className=" " id="about">
  <div className=""> // added items-center class
  <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">About</h2>
    
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <p class="mb-8 lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">Notifier - an app designed to provide users with notifications about personal development resources such as self-help books, podcasts and movies. In addition to this, Notifier also offers support for those going through tough times such as a breakup or depression....

For those dealing with depression or going through a breakup, Notifier offers support in the form of tasks and motivational quotes to help you overcome these challenges. Our team of experts is dedicated to providing you with the support you need to get through difficult times.

With Notifier, you can rest assured that you will always have access to the latest personal development resources and support to help you achieve your goals and overcome any obstacles in your path.</p>
      
  </div>
  
    
  </div> 
</section>





       
        
  
        
  
        <section id="contact">
        
        <section class="bg-white dark:bg-black">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white bg-blue-500 rounded-md focus:ring-blue-500">Send message</button>
      </form>
  </div>
</section>
        </section>
        
<footer class=" ">
    
    <div class="px-4 text-center py-6 ">
        <h class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 Notifier™. All Rights Reserved.
        </h>
        
      </div>
    
</footer>

      </div>
    </>
    
  );
}

export default Landing;
