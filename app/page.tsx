"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { heroImg } from "@/lib/heroImages";
import { picData } from "@/lib/picData";
import PicCard from "@/components/PicCards";
import { videoData } from "@/lib/vidData";
import VideoCard from "@/components/VideoCard";

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
      <section className="relative h-screen w-full overflow-hidden">
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

        <div className="relative z-10 flex h-full w-full items-center justify-center px-4 text-center sm:px-6 lg:px-8">
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Om Orphan Care
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Tillsammans bygger vi hopp och framtid
          </h2>
        </div>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="mx-auto w-full max-w-3xl space-y-5 md:order-1">
            <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Om oss
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Vilka vi är och varför vi finns
            </h2>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Orphan Care är en välgörenhetsorganisation som är partipolitiskt
              oberoende och personliga intresse. Organisationen grundades av en
              grupp aktiva somalier 2010 i Sverige som brinner för att hjälpa
              främst föräldralösa barn i Somalia.
              <br />
              <br />
              Organisationen har idag cirka 300 månadsgivare.
              <br />
              Orphan Care anser att utbildning är oerhört viktigt att förbättra
              livet för föräldralösa barn och barn i nöd. Att utbilda barn är
              ett av dem bästa sättet att erbjuda dem en bättre framtid.
            </p>
          </div>
          <div className="md:order-2">
            <Image
              src="/who.png"
              alt="Orphan Care verksamhet"
              width={700}
              height={500}
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Utbildning
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Utbildning som förändrar liv
          </h2>
        </div>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="md:order-1">
            <Image
              src="/school.png"
              alt="Barn i skolmiljö"
              width={700}
              height={500}
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
          <div className="mx-auto w-full max-w-3xl space-y-5 md:order-2">
            <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Utbildning
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Skolgång för framtiden
            </h2>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Utbildning är ett verktyg för att bryta den onda cirkeln av
              fattigdom och ge kommande generationer och hjälpa hela familjer
              från extrem fattigdom.
              <br />
              Vi stödjer barns utbildning genom att ge skol stöd kontinuerligt
              diskuterar deras framsteg med lärare.
              <br />
              <br />
              Hittills ger Orphan Care skolgång till 135 föräldralösa, både
              flickor och pojkar. Men det finns många fler som behöver hjälp.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 mt-12">
          <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Nyheter & Event
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Bilder från vår verksamhet
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {picData.map((card) => (
            <PicCard
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.img}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl">
                ❤
              </div>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-slate-900">
                Donate to Orphan Care
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                Support us in our mission to provide education, care, and hope
                for orphaned children.
              </p>

              <div className="mt-7">
                <div className="flex items-center">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                    <Image
                      src="/pic1.jpg"
                      alt="Supporter 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="-ml-2.5 relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                    <Image
                      src="/pic2.jpg"
                      alt="Supporter 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="-ml-2.5 relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                    <Image
                      src="/pic3.jpg"
                      alt="Supporter 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="mt-2 text-xs font-medium text-slate-700">
                  Join our 300+ supporters
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 lg:pl-8">
              <a
                href="/donation"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-sky-100 px-6 py-3 text-base font-semibold text-slate-800 transition hover:bg-sky-200 sm:w-auto"
                aria-label="Donate with PayPal"
              >
                <span className="relative h-6 w-6 overflow-hidden rounded-full bg-white">
                  <Image
                    src="/paypallogo.svg"
                    alt="PayPal logo"
                    fill
                    className="object-contain p-0.5"
                  />
                </span>
                Paypal
              </a>
              <a
                href="/donation"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-cyan-100 px-6 py-3 text-base font-semibold text-slate-800 transition hover:bg-cyan-200 sm:w-auto"
                aria-label="Donate with Swish"
              >
                <span className="relative h-6 w-6 overflow-hidden rounded-full bg-white">
                  <Image
                    src="/swishlogo.jpeg"
                    alt="Swish logo"
                    fill
                    className="object-contain p-0.5"
                  />
                </span>
                Swish
              </a>
              <a
                href="/donation"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-100 px-6 py-3 text-base font-semibold text-slate-800 transition hover:bg-amber-200 sm:w-auto"
                aria-label="Donate directly"
              >
                <span className="text-base">☕</span>
                Donate Now
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 mt-12">
          <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Video
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Se vårt arbete i videoformat
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoData.map((vid) => (
            <VideoCard
              key={vid.id}
              title={vid.title}
              description={vid.description}
              videoUrl={vid.videoUrl}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-emerald-600 px-6 py-12 text-center text-white sm:px-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-100">
            Stöd vårt arbete
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            Ge ett barn en bättre framtid idag
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-emerald-50 sm:text-base">
            Din gåva hjälper oss att ge fler föräldralösa barn utbildning,
            trygghet och långsiktigt stöd.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/donation"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Donera nu
            </a>
            <a
              href="/omoss/om-orphan-care"
              className="rounded-lg border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Läs mer
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
