"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { heroImg } from "@/lib/heroImages";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!heroImg.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImg.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);



  return (
    <main>
      <section className="relative min-h-[82vh] overflow-hidden">
        {heroImg.map((img, index) => (
          <Image
            key={img.id}
            src={img.image}
            alt="Orphan Care hero image"
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6 text-white">
            <p className="inline-flex rounded-full border border-white/40 bg-white/20 px-4 py-1 text-xs font-medium tracking-wide">
              Välkommen till Orphan Care
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-5xl">
              Bygger en ljusare framtid för föräldralösa barn
            </h1>
            <p className="text-base leading-relaxed text-white/90 sm:text-lg">
              Through quality education, compassionate care, and continuous
              support, we empower orphaned children to rise above life’s
              challenges.
            </p>
            <div className="flex justify-center items-center flex-wrap gap-3">
              <a
                href="/donation"
                className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Donera nu
              </a>
              <a
                href="/omoss/om-orphan-care"
                className="rounded-lg border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Läs mer
              </a>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {heroImg.map((img, index) => (
              <button
                key={img.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-white" : "w-2.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
