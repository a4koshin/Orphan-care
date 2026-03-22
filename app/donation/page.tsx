import React from "react";
import Image from "next/image";

const DonationPage = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Om Oss
        </p>

        <h1 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
          Bringing Hope, Care, and Opportunity
          <span className="mt-2 block text-emerald-600">For Every Child</span>
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Orphan Care is a charity organization dedicated to supporting
          orphaned and vulnerable children through education, daily care, and
          long-term guidance. With the help of donors and volunteers, we work
          to create safe environments where children can grow with dignity,
          confidence, and a brighter future.
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="flex h-14 items-center justify-center">
              <Image
                src="/paypallogo.svg"
                alt="PayPal logo"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-900">PayPal</h2>
            <p className="mt-2 text-sm text-slate-600">
              Donera snabbt och säkert via PayPal.
            </p>
          </article>

          <article className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="flex h-14 items-center justify-center">
              <Image
                src="/swishlogo.jpeg"
                alt="Swish logo"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-900">Swish</h2>
            <p className="mt-2 text-sm text-slate-600">
              Stöd vårt arbete genom en enkel Swish-donation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default DonationPage;
