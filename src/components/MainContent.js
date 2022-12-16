import React from 'react'

function MainContent() {
  return (
    <div className="flex p-12 mx-20 ">
    {/* Date-far-left */}
    <div className="first-section w-1/5 p-2 pr-0 mb-4">
        <div className="date text-xs p-1.5" style={{borderBottom:"3px solid pink"}}>
            <p>23 December - 5 January </p>
        </div>
        <div className="empty-div"></div>
    </div>

    {/* midsection */}
    <div className="sec-section mr-12 w-1/5 font-serif" style={{borderLeft:"3px solid pink",}}>
        <div className="items-center p-6">
            <p className="text-xl">J.O Metaverse</p>
            <p className='text-3xl text-pink-600'>Mindfullness</p>
        </div>
    </div>
    {/* the text bit of it */}
    <div className='make-blog-count w-3/5 items-center p-12'>
    <p>
        <span className='text-3xl font-serif text-pink-600'>T</span>
        he only online education guaranteed to go supercharge you 100 miles into the future on one charge. 
        This interactive sessions  shown here is an ideal  for both ladies and men alike and cuts across
        all cities and countries around the world. Its artistic and impressive not sparing the
        superb <span  className='text-base font-serif text-pink-400'>Dr.Lawrences</span> interactive abilities and high energy will make this 
        the most attractive
        PSY courses to ever be offered to the public.</p>
         <div className='bg-[#ffffff] w-auto h-7  rounded-md m-2'>
         <p className='bg-[#f2eded86] h-8  p-4 m-5 items-center text-xs  text-pink-400 
          rounded-none '><code>What Follows next is from wikipedia</code> </p>
        </div>
        <p>
        A massive open online course (MOOC /muːk/) 
        or an open online course is an online course aimed at unlimited participation
         and open access via the Web.[1] In addition to traditional course materials, 
         such as filmed lectures, readings, and problem sets, many MOOCs provide 
         interactive courses with user forums or social media discussions to 
         support community interactions among students, professors, and teaching
          assistants (TAs), as well as immediate feedback to quick quizzes 
          and assignments. MOOCs are a widely researched development in 
          distance education,[2] first introduced in 2008,[3] that 
          emerged as a popular mode of learning in 2012, a year called
           the "Year of the MOOC
        </p>
    </div>
        
    </div>
  )
}

export default MainContent