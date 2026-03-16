import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="relative overflow-hidden bg-slate-50">
      <section className="mx-auto grid min-h-[76vh] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:px-8 md:py-20">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-medium tracking-wide text-emerald-700">
            Stöd föräldralösa barn i Somalia
          </p>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Tillsammans ger vi barn en tryggare framtid
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Orphan Care grundades i Sverige 2010 och arbetar långsiktigt med
            utbildning, omsorg och hopp för barn i nöd. Med ditt stöd kan fler
            barn få en säker uppväxt och bättre möjligheter i livet.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/donation"
              className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Ge en gåva
            </a>
            <a
              href="/omoss/om-orphan-care"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white"
            >
              Läs mer om oss
            </a>
          </div>

          <div className="grid max-w-md grid-cols-3 gap-3 pt-2">
            <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
              <p className="text-lg font-semibold text-slate-900">2010</p>
              <p className="text-xs text-slate-500">Grundat</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
              <p className="text-lg font-semibold text-slate-900">300+</p>
              <p className="text-xs text-slate-500">Månadsgivare</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
              <p className="text-lg font-semibold text-slate-900">100%</p>
              <p className="text-xs text-slate-500">Hjärta</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-5 -top-5 h-20 w-20 rounded-2xl bg-emerald-200/60 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <Image
              src="/img2.jpg"
              alt="Barn som får stöd genom Orphan Care"
              width={900}
              height={1100}
              priority
              className="h-[420px] w-full rounded-xl object-cover sm:h-[500px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
