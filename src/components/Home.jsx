import { useState, useEffect, useRef } from 'react';
import { homeImages as images } from '../constents';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageRefs = useRef([]);
  const listRefs = useRef([]);
  const buttonRef = useRef(null);

  // Image Slider Effect
  useEffect(() => {
    const interval = setInterval(() => {
      const nextImage = (currentImage + 1) % images.length;
      gsap.to(imageRefs.current[currentImage], { opacity: 0, duration: 1 });
      gsap.to(imageRefs.current[nextImage], { opacity: 1, duration: 1 });
      setCurrentImage(nextImage);
    }, 1500); // Change image every 1.5 seconds

    return () => clearInterval(interval);
  }, [currentImage]);

  // List Animation with ScrollTrigger
  useEffect(() => {
    listRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -200 }, // Slide from left
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: listRefs.current[listRefs.current.length - 1],
          start: 'top 60%',
        },
      }
    );
  }, []);

  return (
    <div className="w-full text-center">
      {/* Image Slider Section */}
      <div className="w-full sm:w-4/5 md:w-full rounded-2xl h-60 sm:h-80 md:h-96 overflow-hidden relative mx-auto sm:mx-0 sm:justify-start flex">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider Image ${index}`}
            className="w-full h-full object-cover absolute top-0 left-0"
            style={{ opacity: index === 0 ? 1 : 0 }}
            ref={(el) => (imageRefs.current[index] = el)}
          />
        ))}
      </div>

      {/* "How to Use" Section */}
      <div className="py-12 px-4 sm:px-8 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">
          How to Use the Application
        </h1>
        <ul className="text-base sm:text-lg space-y-4 sm:space-y-6 text-left">
          <li ref={(el) => (listRefs.current[0] = el)}>
            1. Visit the <strong>Courses</strong> section to begin.
          </li>
          <li ref={(el) => (listRefs.current[1] = el)}>
            2. Click on the course you're interested in.
          </li>
          <li ref={(el) => (listRefs.current[2] = el)}>
            3. A pop-up will appear for <strong>Mid-Term</strong> and{' '}
            <strong>Final-Term</strong> preparation.
          </li>
          <li ref={(el) => (listRefs.current[3] = el)}>
            4. Select the preparation type and the number of MCQs.
          </li>
          <li ref={(el) => (listRefs.current[4] = el)}>
            5. Start practicing and improve your knowledge.
          </li>
        </ul>

        {/* Button - Visit Courses */}
        <div className="mt-8 sm:mt-10">
          <Link
            to="/courseslist"
            ref={buttonRef}
            className="bg-blue-500 hover:bg-blue-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-lg sm:text-xl font-semibold transition"
          >
            Visit Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
