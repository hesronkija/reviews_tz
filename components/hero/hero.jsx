"use client";
import React, { useEffect, useRef, useState } from "react";
import { Btn, Card } from "@/components";
import { topPlaces } from "@/constants";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { gsap } from "gsap";
import Link from "next/link";

const Hero = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardRefs = useRef([]);

  const goToPreviousCard = () => {
    const prevIndex =
      currentCardIndex === 0 ? topPlaces.length - 1 : currentCardIndex - 1;
    animateCardChange(currentCardIndex, prevIndex);
    setCurrentCardIndex(prevIndex);
  };

  const goToNextCard = () => {
    const nextIndex =
      currentCardIndex === topPlaces.length - 1 ? 0 : currentCardIndex + 1;
    animateCardChange(currentCardIndex, nextIndex);
    setCurrentCardIndex(nextIndex);
  };

  const animateCardChange = (currentIndex, nextIndex) => {
    const currentCard = cardRefs.current[currentIndex];
    const nextCard = cardRefs.current[nextIndex];

    gsap
      .timeline()
      .set(nextCard, { display: "block", opacity: 0.5, x: 0 })
      .to(nextCard, { duration: 0.5, opacity: 1, x: 0, ease: "power1.out" });
  };

  useEffect(() => {
    cardRefs.current.forEach((ref, index) => {
      if (index !== currentCardIndex) {
        gsap.set(ref, { display: "none" });
      }
    });
  }, [currentCardIndex]);

  return (
    <section className="flex flex-col items-center gap-16 text-lg text-orange-300">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-semibold tracking-wide">
          Share Your Experience in Tanzania
        </h1>
        <p className="font-light italic">
          Help us improve by sharing your honest feedback on Tanzania’s top
          destinations.
        </p>
        <Link href="/SubmitReview">
          <Btn>Submit Your Review</Btn>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold tracking-wide">
          Explore Popular Destinations
        </h1>
        <p className="font-light italic">
          Discover the top places in Tanzania where you can leave your feedback.
        </p>
        <div className="flex py-4">
          <button onClick={goToPreviousCard}>
            <MdArrowBackIosNew
              size={40}
              className="text-orange-400 transition-transform duration-300 hover:scale-125"
            />
          </button>
          <ul className="relative">
            {topPlaces.map((place, index) => (
              <li
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`mx-4 inline-block ${
                  index !== currentCardIndex ? "hidden" : ""
                }`}
              >
                <Card
                  title={place.title}
                  description={place.description}
                  image={place.image}
                />
              </li>
            ))}
          </ul>
          <button onClick={goToNextCard}>
            <MdArrowForwardIos
              size={40}
              className="text-orange-400 transition-transform duration-300 hover:scale-125"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
