import Image from "next/image";
import { Eye, Gem, Target } from "lucide-react";
import React from "react";

const AboutPage = () => {
  return (
    <main>
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
            Skapar hopp, omsorg och möjligheter
            <span className="mt-2 block text-emerald-600">För varje barn</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Orphan Care är en välgörenhetsorganisation som arbetar för att
            stödja föräldralösa och utsatta barn genom utbildning, daglig
            omsorg och långsiktig vägledning. Med hjälp av givare och
            volontärer skapar vi trygga miljöer där barn kan växa upp med
            värdighet, självförtroende och en ljusare framtid.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Historia
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Vilka vi är
            </h2>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Orphan Care är en välgörenhetsorganisation som är partipolitiskt
              oberoende och personliga intresse. Organisationen grundades av en
              grupp aktiva somalier 2010 i Sverige som brinner för att hjälpa
              främst föräldralösa barn i Somalia.
            </p>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Organisationen har idag cirka 300 månadsgivare. Orphan Care anser
              att utbildning är oerhört viktigt att förbättra livet för
              föräldralösa barn och barn i nöd. Att utbilda barn är ett av dem
              bästa sättet att erbjuda dem en bättre framtid.
            </p>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <Image
                  src="/who.png"
                  alt="Orphan Cares team och uppdrag"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Historik */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/50 p-6  sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-stretch">
            <div className="w-full">
              <div className="relative h-full min-h-[260px] overflow-hidden rounded-2xl border border-emerald-200 bg-white sm:min-h-[320px] lg:min-h-[520px]">
                <Image
                  src="/poverty.png"
                  alt="Historisk bild av utmaningar och fattigdom"
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:border-l lg:border-emerald-100 lg:pl-8">
              <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Om oss
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Historik
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 sm:text-[17px]">
                <p>
                  Det mångåriga inbördeskriget har orsakat enormt lidande och
                  förstörelse. Konflikten har också förstärkt motsättningarna
                  mellan olika delar av befolkningen men vi vill gärna bygga
                  broar mellan konflikt infekterade område. Periodvis har en
                  stor del av Somalias befolkning varit på flykt, utomlands
                  eller inom landet. De kvarvarande flyktingarna har ofta
                  minimal tillgång till utbildning, hälsovård… med mera.
                </p>

                <p>
                  Fattigdom är en sjukdom. Ohälsan följer fattigdomen, med
                  påtaglig undernäring och dålig hygien. Här kan vi inte berätta
                  alla dessa massiva utmaningar som vi står inför.
                </p>

                <p>
                  Med hjälp av afrikanska unionens styrkor Somalia har idag en
                  svag regering som kämpar för sitt överlevnad, läget är långt
                  ifrån stabilitet i det krigshärjade Somalia som redan
                  genomlidit många år av inbördeskrig och andra makternas
                  inblandning och intresse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Syfte
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Uppdrag och vision
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-7 sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-xl text-white">
                <Target className="h-6 w-6" strokeWidth={2.25} />
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-slate-900">
                Vårt uppdrag
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                är att samla in pengar för att finansiera föräldralösa barns
                behov. Att stödja partners och projekt som svarar mot
                orphancares ändamål och värderingar. Att arbeta med
                kunskapsöverföring om barns behov till dem som har ansvar för
                och fattar beslut om de föräldralösa barnen.
              </p>
            </article>

            <article className="rounded-3xl border border-sky-200 bg-sky-50/60 p-7 sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-xl text-white">
                <Eye className="h-6 w-6" strokeWidth={2.25} />
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-slate-900">
                Vår vision
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                är att alla barn ska växa upp i en trygg miljö. Ingen ska behöva
                tillbringa inhuman barndom eller vara utan skola. Alla vuxna med
                ansvar för föräldralösa barn bidrar aktivt.
              </p>
            </article>
          </div>

          <div className="mt-6 md:mt-8">
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-7 sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-xl text-white">
                <Gem className="h-6 w-6" strokeWidth={2.25} />
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-slate-900">
                Våra värderingar
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                varje barn behöver kärlek och nära relationer för att kunna bli
                en kapabel vuxen. Barn måste ges en god uppväxt och en god
                utbildning.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
