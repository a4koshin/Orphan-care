"use client";

import React from "react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { newsletterData } from "@/lib/newsletterData";

const NewsPage = () => {
  const [selectedId, setSelectedId] = useState<number>(newsletterData[0]?.id ?? 0);

  const featuredArticle = useMemo(
    () => newsletterData.find((article) => article.id === selectedId) ?? newsletterData[0],
    [selectedId],
  );

  const relatedArticles = useMemo(
    () => newsletterData.filter((article) => article.id !== featuredArticle?.id).slice(0, 6),
    [featuredArticle],
  );

  if (!featuredArticle) {
    return null;
  }

  return (
    <main>
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Nyheter
          </p>

          <h1 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Senaste nyheter och uppdateringar
            <span className="mt-2 block text-emerald-600">Från Orphan Care</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Orphan Care är en välgörenhetsorganisation som arbetar för att
            stödja föräldralösa och utsatta barn genom utbildning, daglig omsorg
            och långsiktig vägledning. Med hjälp av givare och volontärer skapar
            vi trygga miljöer där barn kan växa upp med värdighet,
            självförtroende och en ljusare framtid.
          </p>
        </div>
      </section>

      <section className="px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.9fr_1fr]">
          <article className="overflow-hidden border border-slate-200 p-4 sm:p-6">
            <div className="relative h-[280px] overflow-hidden rounded-xl sm:h-[380px] lg:h-[520px]">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {featuredArticle.section}
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                {featuredArticle.excerpt}
              </p>
              {/* <p className="mt-3 text-lg leading-relaxed text-slate-700">
                Orphan Care fortsätter att utveckla långsiktiga insatser inom
                utbildning, omsorg och gemenskapsbyggande för barn och unga.
              </p> */}
            </div>
          </article>

          <aside className="border border-slate-200 p-4 sm:p-5">
            <h3 className="text-3xl font-bold text-slate-900">Relaterade nyheter</h3>
            <div className="mt-5 space-y-4">
              {relatedArticles.map((article) => (
                <button
                  type="button"
                  key={article.id}
                  onClick={() => setSelectedId(article.id)}
                  className="flex w-full gap-3 rounded-lg p-2 text-left transition hover:bg-slate-50"
                >
                  <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="line-clamp-2 text-xl font-semibold leading-tight text-slate-900">
                      {article.title}
                    </p>
                    <p className="mt-1 text-base text-slate-500">{article.section}</p>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
