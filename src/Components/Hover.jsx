import React, { useEffect, useRef } from 'react';

function FadeInSection({ children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="fade-in-section opacity-0 translate-y-5 transition-opacity duration-700 ease-out"
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="space-y-10 p-10 ">
      <FadeInSection>
        <h2 className="text-3xl font-bold">Section 1</h2>
        <p>This section fades in on scroll.</p>
      </FadeInSection>
      <FadeInSection>
        <h2 className="text-3xl font-bold">Section 2</h2>
        <p>This is another section that fades in on scroll.</p>
      </FadeInSection>
      {/* Add more sections as needed */}
    </div>
  );
}

export default App;
