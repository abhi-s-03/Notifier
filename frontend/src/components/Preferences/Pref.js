import { useState } from 'react';
import  { ages, contents, modes, times } from './Buttons'
function Pref() {
    
   
      const [selectedOption1, setSelectedOption1] = useState("");
      const [selectedOption2, setSelectedOption2] = useState("");
      const [selectedOption3, setSelectedOption3] = useState("");
      const [selectedOption4, setSelectedOption4] = useState("");
    
      const handleOptionSelect1 = (option) => {
        setSelectedOption1(option.id);
        console.log(`Selected option 1: ${option.label}`);
      };
    
      const handleOptionSelect2 = (option) => {
        setSelectedOption2(option.id);
        console.log(`Selected option 2: ${option.label}`);
      };
    
      const handleOptionSelect3 = (option) => {
        setSelectedOption3(option.id);
        console.log(`Selected option 3: ${option.label}`);
      };
    
      const handleOptionSelect4 = (option) => {
        setSelectedOption4(option.id);
        console.log(`Selected option 4: ${option.label}`);
      };
    
      const modeOptions = modes;
    
      const ageRangeOptions = ages;
    
      const timeOptions = times;
    
      const contentOptions = contents;
    
      
  
  return (
    <div className=' bg-black h-screen'>
    
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Notifier</span>
        </a>
        <div class="flex items-center md:order-2">
            <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/logo.svg" alt="user photo"/>
            </button>
                 
            
        </div>
        
        </div>
        </nav>
    <div className='p-4'>
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Preferences</h2>
    <div>
    <h3 className="mb-4 text-1xl tracking-tight font-abold text-gray-900 dark:text-white">What is your age range?</h3>
    <ul className="flex gap-2">
    {ageRangeOptions.map((option) => (
        <li key={option.id}>
        <input
            type="radio"
            id={option.id}
            name="ageRange"
            value={option.id}
            checked={selectedOption1 === option.id}
            className="hidden peer"
            onChange={() => handleOptionSelect1(option)}
            required
        />
        <label
            htmlFor={option.id}
            className="inline-flex items-center justify-between p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <div className="flex flex-col">
                <h className="w-full text-lg font-semibold">{option.label}</h>
                <h className="text-sm w-full">{option.description}</h>
            </div>
            <svg
            aria-hidden="true"
            className="w-6 h-6 ml-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
            ></path>
            </svg>
        </label>
        </li>
        
    ))}
    </ul>


    <h3 className="mb-4 text-1xl tracking-tight font-abold text-gray-900 dark:text-white">What is your time range?</h3>
    <ul className="flex gap-2">
    {timeOptions.map((option) => (
        <li key={option.id}>
        <input
            type="radio"
            id={option.id}
            name="timeRange"
            value={option.id}
            checked={selectedOption2 === option.id}
            className="hidden peer"
            onChange={() => handleOptionSelect2(option)}
            required
        />
        <label
            htmlFor={option.id}
            className="inline-flex items-center justify-between p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <div className="flex flex-col">
                <h className="w-full text-lg font-semibold">{option.label}</h>
                <h className="text-sm w-full">{option.description}</h>
            </div>
            <svg
            aria-hidden="true"
            className="w-6 h-6 ml-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
            ></path>
            </svg>
        </label>
        </li>
        
    ))}
    </ul>

    <h3 className="mb-4 text-1xl tracking-tight font-abold text-gray-900 dark:text-white">What Mode?</h3>
    <ul className="flex gap-2">
    {modeOptions.map((option) => (
        <li key={option.id}>
        <input
            type="radio"
            id={option.id}
            name="modeOption"
            value={option.id}
            checked={selectedOption3 === option.id}
            className="hidden peer"
            onChange={() => handleOptionSelect3(option)}
            required
        />
        <label
            htmlFor={option.id}
            className="inline-flex items-center justify-between p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <div className="flex flex-col">
                <h className="w-full text-lg font-semibold">{option.label}</h>
                <h className="text-sm w-full">{option.description}</h>
            
            </div>
            <svg
            aria-hidden="true"
            className="w-6 h-6 ml-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
            ></path>
            </svg>
        </label>
        </li>
        
    ))}
    </ul>

    <h3 className="mb-4 text-1xl tracking-tight font-abold text-gray-900 dark:text-white">What Content?</h3>
    <ul className="flex gap-2">
    {contentOptions.map((option) => (
        <li key={option.id}>
        <input
            type="radio"
            id={option.id}
            name="contentType"
            value={option.id}
            checked={selectedOption4 === option.id}
            className="hidden peer"
            onChange={() => handleOptionSelect4(option)}
            required
        />
        <label
            htmlFor={option.id}
            className="inline-flex items-center justify-between p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <div className="flex flex-col">
                <h className="w-full text-lg font-semibold">{option.label}</h>
                <h className="text-sm w-full">{option.description}</h>
            </div>
            <svg
            aria-hidden="true"
            className="w-6 h-6 ml-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
            ></path>
            </svg>
        </label>
        </li>
        
    ))}
    </ul>


      
    
</div>
<button className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Set Preferences</button>
</div>

</div>
  );
}
export default Pref;