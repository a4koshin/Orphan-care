import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <main>
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Kontakt
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Kontaktformulär och kontaktuppgifter
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Här hittar du våra kontaktuppgifter, WhatsApp-nummer och vårt
            kontaktformulär.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Kontakt</h2>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Orphan Care</span>
              </p>
              <p>Organisationsnummer: 802440-9271</p>
              <p>Bolagsform: Ideell förening</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@orphancare.net"
                  className="text-emerald-700 hover:text-emerald-800"
                >
                  info@orphancare.net
                </a>
              </p>
            </div>

            <h3 className="mt-6 text-base font-semibold text-slate-900">
              Mogadishu-kontor
            </h3>
            <div className="mt-3 space-y-4 text-sm leading-relaxed text-slate-700">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">
                  Sh Tahliil Maxamuud Ibraahin, Guddoomiyaha gudiga Muqdisho
                </p>
                <p className="mt-1">Tel nr: +252615337249</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="tel:+252615337249"
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Ring
                  </a>
                  <a
                    href="https://wa.me/252615337249"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">
                  Mahad Abid Ibrahim, Madaxa xaafiiska Muqdisho
                </p>
                <p className="mt-1">Tel nr: 061-5956369</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="tel:0615956369"
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Ring
                  </a>
                  <a
                    href="https://wa.me/252615956369"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-slate-900">
                SALAAM SOMALI BANK
              </p>
              <p className="mt-1 text-sm text-slate-700">Konto nr 30179046</p>
            </div>
          </article>

          <article className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Kontaktformulär
            </h2>
            <form className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Namn
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Ditt namn"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  E-post
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="+252..."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Skriv ditt meddelande..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Skicka
              </button>
            </form>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
