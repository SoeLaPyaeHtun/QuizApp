import React, { useEffect, useState } from "react";
import useStateContext from "../hooks/useStateContext";
import { END_POINT, createAPIendpoint } from "../api";
import { getFormatTime } from "../helper/timeFormat";

const Question = () => {
  const [qus, setQus] = useState([]);
  const [q , setQ ] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);

  let timer;

  const statrTimer = () => {
    timer = setInterval(() => {
      setTimeTaken(prev => prev +1)
    }, [1000]);
  }
console.log(q)
  useEffect(() => {
    createAPIendpoint(END_POINT.question)
      .fetch()
      .then((res) => {
        console.log(res.data)
        setQus(res.data);
        statrTimer();
       
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {clearInterval(timer)}
  }, []);

 const handleClick = () => {
  if(q != 4){
   setQ(prev => prev + 1)
  }
 }

  return (
    
    <div className="flex flex-col items-center h-screen w-full">
    <section className="text-gray-600 body-font flex flex-col w-3/4 pt-5">
      <div className="container mx-auto flex px-5 py-10 md:flex-col">
      <div className="lg:flex-grow md:w-full flex flex-row justify-between md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-xl text-3xl mb-4 font-medium text-gray-900">
           Question {q + 1} of {qus.length}
          </h1>


          <h1 className="title-font sm:text-xl text-3xl mb-4 font-medium text-gray-900">
          {getFormatTime(timeTaken)}
          </h1>
        </div>
       


        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
  <div className="bg-indigo-600 h-1 rounded-full" style={{'width': (q + 1) * 20 + '%'  }}></div>
</div>



        <div className="lg:flex-grow md:w-full pt-5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {qus[q]?.qnInWord}
          </h1>
        </div>
        <div>
        <div className="py-10"></div>
        <ul>
          {qus[q]?.options?.map((option, index) => (
            <li key={index} className="py-2">
              <a
                href="#_"
                onClick={() => handleClick()}
                className="w-full relative inline-flex items-center justify-start 
                py-5 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"></span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"></span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  {option}
                </span>                                                                                                               
              </a>
            </li>
          ))}
        </ul>

        </div>
        
      </div>
    </section>
    </div>

  
    
  );
};

export default Question;
