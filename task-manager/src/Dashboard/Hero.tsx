// import React from 'react'
import { VscBell } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";

export default function Hero() {
  const name = "Guest"
  return (
    <>
      <section>
        <div className='flex items-center'>
        <div className='flex bg-yellow-100 rounded-2xl overflow-hidden mt-5 ml-5'>
          <div className='flex flex-col justify-center items-center px-8'>
            <h3 className='capitalize font-semibold text-2xl'>hello {name} !</h3>
            <p>it's good to see you again.</p>
          </div>
          <div className='bg-[url("/src/assets/hero.png")] bg-cover bg-center h-32 w-72 rounded-2xl'>

          </div>
        </div>
        <div>
          <div>
            <h3>11</h3>
            <p>hours worked</p>
          </div>
          <div>
            <h3>$2.4k</h3>
            <p>money paid</p>
          </div>
          <div>
            <h3>36</h3>
            <p>task done</p>
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
        <div>
          <div className='flex justify-between items-center'>
            <input type="text" />
            <VscBell />
            <img src="/src/assets/hero.png" alt="hero" className='w-8 h-8 rounded-sm' />
          </div>
          <div>
            <h2>
              create task
            </h2>
            <p>
              create a new task.
            </p>
            <div>
            <FaPlus />
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
      </section>
    </>
  )
}
