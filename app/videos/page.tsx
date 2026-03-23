"use client";
import React, { useMemo, useState } from "react";
import VideoCard from "@/components/VideoCard";
import { videorData } from "@/lib/vidoer";

const ITEMS_PER_PAGE = 6;

const VideosPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(videorData.length / ITEMS_PER_PAGE);

  const currentVideos = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return videorData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <main>
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Videor
          </p>

          <h1 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Se berättelser från vårt arbete
            <span className="mt-2 block text-emerald-600">i rörlig bild</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Här samlar vi videor som visar våra insatser, aktiviteter och
            resultat för föräldralösa barn i Somalia. Titta på klippen för att
            följa vårt arbete över tid.
          </p>
        </div>
      </section>

      {/* Main Content Videos */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 mt-12">
          <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Videor
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Våra senaste videor
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentVideos.map((vid) => (
            <VideoCard
              key={vid.id}
              title={vid.title}
              description={vid.description}
              videoUrl={vid.videoUrl}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Föregående
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-emerald-600 text-white"
                      : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {page}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Nästa
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default VideosPage;
