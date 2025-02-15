import React from 'react'
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
        </div>
      </section>
    </>
  )
}
