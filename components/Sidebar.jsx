// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile Menu Toggle */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="lg:hidden fixed top-6 left-6 z-50 p-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           {isOpen ? (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           ) : (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           )}
//         </svg>
//       </button>

//       {/* Sidebar Container */}
//       <div
//         className={`
//         fixed lg:sticky top-0 left-0 h-screen w-full lg:w-[400px] xl:w-[500px] 
//         bg-[#0a0a0a] lg:bg-transparent z-40 transform transition-transform duration-300
//         ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//         lg:flex lg:items-center lg:justify-center lg:p-8
//       `}
//       >
//         <div className="h-full lg:h-auto w-full max-w-md mx-auto p-6 lg:p-8 flex flex-col justify-center">
//           {/* Card Container */}
//           <div className="bg-[#0f0f0f] rounded-3xl border border-[#1f1f1f] p-8 lg:p-10 shadow-2xl">
//             {/* Top Bar */}
//             <div className="flex justify-between items-center mb-8">
//               <div className="flex gap-1">
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//               </div>
//               <button className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-colors">
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Profile Image */}
//             <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/30 to-blue-900/30 p-1">
//               <div className="relative w-full aspect-square overflow-hidden rounded-xl">
//                 <Image
//                   src="/profile.jpg"
//                   alt="Ryan Bernard"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Name and Title */}
//             <h1 className="text-3xl font-bold text-white mb-1 text-center">
//               Ryan Bernard
//             </h1>
//             <p className="text-gray-400 text-sm uppercase tracking-wider mb-6 text-center">
//               Machine Learning Engineer
//             </p>

//             {/* Social Links */}
//             <div className="flex justify-center gap-3 mb-8">
//               <a
//                 href="#"
//                 className="p-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="p-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="p-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//               </a>
//             </div>

//             {/* Download CV Button */}
//             <button className="w-full py-4 bg-[#9ef01a] hover:bg-[#8dd916] text-black font-semibold rounded-full transition-all transform hover:scale-105">
//               Download CV
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <>
//       {/* Mobile Menu Toggle */}
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="lg:hidden fixed top-6 left-6 z-50 p-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           {isOpen ? (
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           ) : (
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           )}
//         </svg>
//       </button>

//       {/* Sidebar Container */}
//       <div className={`
//         fixed lg:sticky top-0 left-0 h-screen w-full lg:w-[400px] xl:w-[500px] 
//         bg-[#0a0a0a] lg:bg-transparent z-40 transform transition-transform duration-300
//         ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//         lg:flex lg:items-center lg:justify-center lg:p-8
//       `}>
//         <div className="h-full lg:h-auto w-full max-w-md mx-auto p-6 lg:p-8 flex flex-col justify-center">
//           {/* Card Container */}
//           <div className="bg-[#0f0f0f] rounded-3xl border border-[#1f1f1f] p-8 lg:p-10 shadow-2xl">
//             {/* Top Bar */}
//             <div className="flex justify-between items-center mb-8">
//               <div className="flex gap-1">
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//                 <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
//               </div>
//               {/* <button className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-colors">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//                 </svg>
//               </button> */}
//             </div>

//             {/* Profile Image */}
//             <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/30 to-blue-900/30 p-1">
//               <div className="relative w-full aspect-square overflow-hidden rounded-xl">
//                 <Image 
//                   src="/personalphoto.jpeg" 
//                   alt="Nihat Taghizade"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Name and Title */}
//             <h1 className="text-3xl font-bold text-white mb-1 text-center">Nihat Taghizade</h1>
//             <p className="text-gray-400 text-sm uppercase tracking-wider mb-6 text-center">
//               Software AI Engineer
//             </p>

//             {/* Social Links */}
//             <div className="flex justify-center gap-3 mb-8">
//               <a href="https://www.linkedin.com/in/nihat-taghizade-890a8b300/" className="p-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                 </svg>
//               </a>
//               <a href="https://github.com/Nihattaghizade" className="p-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                 </svg>
//               </a>
//               {/* <a href="#" className="p-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                 </svg>
//               </a> */}
//             </div>

//             {/* Download CV Button */}
//             <button className="w-full py-4 bg-[#9ef01a] hover:bg-[#8dd916] text-black font-semibold rounded-full transition-all transform hover:scale-105">
//               Download CV
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create an anchor element
    const link = document.createElement('a')
    
    // Set the path to your CV file in the public folder
    link.href = '/Nihat_Taghizade_CV.pdf'
    
    // Set the download attribute with the desired filename
    link.download = 'Nihat_Taghizade_CV.pdf'
    
    // Append to body (required for Firefox)
    document.body.appendChild(link)
    
    // Trigger the download
    link.click()
    
    // Clean up - remove the element
    document.body.removeChild(link)
  }

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 p-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar Container */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-screen w-full lg:w-[400px] xl:w-[500px] 
        bg-[#0a0a0a] lg:bg-transparent z-40 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:flex lg:items-center lg:justify-center lg:p-8
      `}>
        <div className="h-full lg:h-auto w-full max-w-md mx-auto p-6 lg:p-8 flex flex-col justify-center">
          {/* Card Container */}
          <div className="bg-[#0f0f0f] rounded-3xl border border-[#1f1f1f] p-8 lg:p-10 shadow-2xl">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-1">
                <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
                <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
                <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
                <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
                <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
                <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
                <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
                <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
                <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
                <span className="block w-6 h-0.5 bg-[#9ef01a]"></span>
              </div>
            </div>

            {/* Profile Image */}
            <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/30 to-blue-900/30 p-1">
              <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                <Image 
                  src="/personalphoto.jpeg" 
                  alt="Nihat Taghizade"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Name and Title */}
            <h1 className="text-3xl font-bold text-white mb-1 text-center">Nihat Taghizade</h1>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6 text-center">
              Software AI Engineer
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-3 mb-8">
              <a 
                href="https://www.linkedin.com/in/nihat-taghizade-890a8b300/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/Nihattaghizade" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            {/* Download CV Button */}
            <button 
              onClick={handleDownloadCV}
              className="w-full py-4 bg-[#9ef01a] hover:bg-[#8dd916] text-black font-semibold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
