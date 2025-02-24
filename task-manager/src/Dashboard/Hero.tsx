// import React from 'react'
import { VscBell } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";

export default function Hero() {
  const name = "Guest"
  return (
    <>
      <section>
        <div className='flex items-center gap-4'>
        <div className="flex flex-col ml-5">
        <div className='flex bg-yellow-100 rounded-2xl overflow-hidden mt-5 '>
          <div className='flex flex-col justify-center items-center px-8'>
            <h3 className='capitalize font-semibold text-2xl'>hello {name} !</h3>
            <p>it's good to see you again.</p>
          </div>
          <div className='bg-[url("/src/assets/hero.png")] bg-cover bg-center h-32 w-72 rounded-2xl'>

          </div>
        </div>
        <div className="flex items-center gap-4 mt-5">
          <div className="bg-gray-500 py-3 px-5 rounded-xl w-40">
            <h3 className="font-bold text-2xl">11</h3>
            <p className="font-regular text-md capitalize">hours worked</p>
          </div>
          <div className="bg-gray-500 py-3 px-5 rounded-xl w-40">
            <h3 className="font-semibold text-2xl">$2.4k</h3>
            <p className="font-regular text-md capitalize">money paid</p>
          </div>
          <div className="bg-gray-500 py-3 px-5 rounded-xl w-40">
            <h3 className="font-semibold text-2xl">36</h3>
            <p className="font-regular text-md capitalize">task done</p>
          </div>
        </div>
        <div>
          <h4>your statistics</h4>
          <h5>worked hours</h5>
          <p>my courses</p>
          <div>
            <p>weekly</p>
            <div>
              <input type="radio" name="" id="" />
              <p>this week </p>
              <input type="radio" name="" id="" />
              <p>last week </p>
            </div>
          </div>
          <div>
            line chart
          </div>
        </div>
        </div>
        
        <div className="flex flex-col">
        <div className="flex flex-col">
          <div className='flex  items-center '>
            <input type="text" className="rounded-lg border-black border-2 h-8 px-2 w-60" />
            <VscBell />
            <img src="/src/assets/hero.png" alt="hero" className='w-8 h-8 rounded-sm' />
          </div>
          <div className="flex gap-5 px-5 py-3 bg-gray-600 rounded-2xl mt-3 justify-between items-center">
          <div className="flex flex-col">
          <h2 className="text-lg font-semibold capitalize">
              create task
            </h2>
            <p>
              create a new task.
            </p>
          </div>
            <div>
            <FaPlus className="bg-white text-3xl p-2 rounded-md" />
            </div>
          </div>
        </div>
        <div>
          todays date
          <p>delete</p>
          <div>
            left right
          </div>
          <div>
            calender
          </div>
        </div>
        <div>
          <div>
            <h3>daily standup call</h3>
            <p>discuss team tasks for the day</p>
            <div>
              9:00am
              <input type="checkbox" name="" id="" />
            </div>
          </div>
          <div>
            <h3>brand identity meeting</h3>
            <p>discuss the brand identity guidlines for the print media</p>
            <div>
              11:00am
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>
    </>
  )
}
