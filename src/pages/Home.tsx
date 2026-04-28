



const Home = () => {
  
return (
  <>
  {/*navbar*/}
    <nav className='flex justify-between items-center px-6 py-4 bg-gradient-to-br from-black to-gray-900  text-gray-100'>
      <h1 className='text-lg font-bold'> CodeDrip </h1>
      <div className='hidden md:flex gap-6'>
        <a href='#' className='hover:text-purple-400 '> Home </a>
        <a href='#' className='hover:text-purple-400'> Features </a>
        <a href='#' className='hover:text-purple-400'> Contact </a>
      </div>
    </nav>
        {/* background of the website */}
     <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white'>
       {/* Hero section  */}
        <section className='px-6 md:px-16 py-10 grid pt-20 pb-10 md:grid-cols-2 md:items-start md:pt-20 gap-10 max-w-6xl mx-auto items-center' >
          {/* LEFT */}
              <div className='space-y-2'>
                <h2 className='text-3xl md:text-5xl font-bold leading-tight'> Let us create your web identity  </h2>
                <p className='mt-4 text-gray-400 max-w-md text-sm md:text-base'> We help startups launch beautiful, fast and scalable web apps </p>

                 <div className='mt-6 flex gap-4'>
                <button className='bg-purple-700 px-4 py-2 text-sm rounded-2xl hover:bg-purple-500 hover:rounded-xl transistion duration-300 shadow-lg shadow-purple-600/30'>Get started</button>
                <button className='border border-gray-500 px-6 py-3 rounded-xl hover:bg-gray-800 transistion duration-300 shadow-lg shadow-purple-600/30'>Learn More</button>
               </div>
             </div>
         
        
        {/* RIGHT */}
          <div className='flex justify-center'>
            <div className='bg-white/10 backdrop-blur-lg px-12 py-10 rounded-2xl w-full max-w-lg shadow-2xl border border-white/10'>
              <h3 className='text-xl font-semibold mb-2'> Dashboard Preview </h3>
              <p className='text-sm text-gray-300 '> your future saas UI preview goes here </p>
            </div>
          </div>
     </section>
     
     {/* Features section  */}
      <section className='py-20 px-6 md:px-16 text-white'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold'> What we offer </h2>
          <p className='text-gray-400 mt-3'> Everything you need to build and scale your product </p>
            <div className='grid md:grid-cols-3 gap-8 mt-12'> 

              {/*Card 1 */}
              <div className='bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 hover:bg-white/10 transistion duration-300'>
                <h3 className='text-xl font-semibold'> Fast Development </h3>
                <p className='text-gray-400 mt-2 text-sm'> We build blazing fast web apps using modern tech </p>
              </div>
              {/*Card 2 */}
                <div className='bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 hover:bg-white/10 transistion duration-300'>
                  <h3 className='text-xl font-semibold'> Responsive Design </h3>
                  <p className='text-grey-400 mt-2 text-sm'> Looks perfect on mobile, tablet, and desktop </p>
                </div>
              {/*Card 3 */}
                <div className='bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 hover:bg-white/10 transistion duration-300'>
                  <h3 className='text-xl font-semibold'> Scalable Systems </h3>
                  <p className='text-grey-400 mt-2 text-sm'> Built to grow with your business needs. </p>
                </div>

            </div>
        </div>
        
       </section>

  
    






    {/*footer section*/}
     <footer className='bg-gradiant-to-b from-transparent via-gray-900/80 to to-black text-white backdrop-blur-md  px-6 md:px-16 py-16 border-t border-white/3 mt-20'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-12'> 
          {/*left brands */}
          <div>
            <h2 className='text-2xl font-bold tracking-wide'>CodeDrip</h2>
             <p className='text-gray-400 text-sm mt-3'> Building modern, scalable web experiences for startups and businesses </p>  
          </div>
          {/* Center - Links */}
        <div>
          <h3 className='text-shadow-mist-300 font-sans text-gray-300'> Quick Links </h3>
          <ul className='mt-3 space-y-2 text-gray-400 text-sm'>
            <li className='hover:text-white cursor-pointer'>Home</li>
            <li className='hover:text-white cursor-pointer'>Features</li>
            <li className='hover:text-white cursor-pointer'>Contacts</li>
          </ul>
        </div>
        {/* Right - cta */}
        <div>
          <h3 className='text-sm font-semibold text-gray-300'>Get in touch</h3>
          <p className='text-gray-400 text-sm mt-3'>Ready to build something great?</p>
          <button className='mt-4 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-500 transistion duration-300 shadow-lg shadow-purple-600/30 hover:scale-105'>Contact me</button>
        </div>
      </div> 
      {/*Bottom */}
      <div className='text-center text-gray-500 text-sm mt-12 border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center'> 
        <p>@ 2026 CodeDrip. All rights reserved.</p>
      </div>
      <p className='mt-2 md:mt-0 text-gray-400'>Build with React and tailwind </p>
    </footer>
    </div>
     </>
  )
}

export default Home
