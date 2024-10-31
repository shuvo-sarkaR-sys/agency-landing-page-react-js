import React from 'react'

const Scroll = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Smooth scroll effect
        });
      };
  return (
    <div>
        <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 p-2 bg-green-600 text-white rounded-full"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>

    </button>
    </div>
  )
}

export default Scroll
