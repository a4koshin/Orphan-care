import Image from "next/image";
import Link from "next/link";
import fs from "node:fs/promises";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"]);
const IMAGES_PER_PAGE = 8;
const EXCLUDED_IMAGES = new Set([
  "paypal.png",
  "paypallogo.svg",
  "poverty.png",
  "school.png",
  "logo.png",
  "swish.png",
  "swishlogo.jpeg",
  "thelogo.png",
  "who.png",
]);

const getGalleryImages = async () => {
  const publicDir = path.join(process.cwd(), "public");
  const files = await fs.readdir(publicDir);

  return files
    .filter((file) => !EXCLUDED_IMAGES.has(file.toLowerCase()))
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => ({
      src: `/${file}`,
      name: path.parse(file).name.replace(/[-_]/g, " "),
    }));
};

type PicturesPageProps = {
  searchParams?: Promise<{ page?: string | string[] }> | { page?: string | string[] };
};

const PicturesPage = async ({ searchParams }: PicturesPageProps) => {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const galleryImages = await getGalleryImages();
  const totalPages = Math.max(1, Math.ceil(galleryImages.length / IMAGES_PER_PAGE));
  const rawPage = Array.isArray(resolvedSearchParams?.page)
    ? resolvedSearchParams?.page[0]
    : resolvedSearchParams?.page;
  const parsedPage = Number.parseInt(rawPage ?? "1", 10);
  const currentPage = Number.isFinite(parsedPage) ? Math.min(Math.max(parsedPage, 1), totalPages) : 1;
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const paginatedImages = galleryImages.slice(startIndex, endIndex);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const getPageHref = (pageNumber: number) => (pageNumber === 1 ? "/bilder" : `/bilder?page=${pageNumber}`);

  return (
    <main>
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Bilder
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Bilder från vårt arbete
            <span className="mt-2 block text-emerald-600">
              Och barnens vardag
            </span>
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

      <section className="px-4 pb-14 pt-2 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Bildgalleri</h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Ett urval av ögonblick från våra aktiviteter, skolor och gemenskap.
              </p>
            </div>
            <p className="inline-flex w-fit items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              {galleryImages.length} bilder
            </p>
          </div>

          {galleryImages.length > 0 && (
            <p className="mb-5 text-sm text-slate-600">
              Visar {startIndex + 1}-{Math.min(endIndex, galleryImages.length)} av {galleryImages.length}
            </p>
          )}

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {paginatedImages.map((image, index) => {
              const isLarge = index % 7 === 0 || index % 11 === 0;

              return (
                <figure
                  key={image.src}
                  className={[
                    "group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm",
                    "transition duration-300 hover:-translate-y-0.5 hover:shadow-lg",
                    isLarge ? "col-span-2 row-span-2" : "",
                  ].join(" ")}
                >
                  <Image
                    src={image.src}
                    alt={image.name}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-3 pt-8 text-xs font-medium text-white/95 opacity-0 transition group-hover:opacity-100 sm:text-sm">
                    {image.name}
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {galleryImages.length === 0 && (
            <p className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
              Inga bilder hittades i public-mappen.
            </p>
          )}

          {totalPages > 1 && (
            <nav className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Paginering">
              <Link
                href={getPageHref(currentPage - 1)}
                className={[
                  "rounded-xl border px-4 py-2 text-sm font-medium transition",
                  currentPage === 1
                    ? "pointer-events-none border-slate-200 text-slate-300"
                    : "border-slate-300 text-slate-700 hover:border-emerald-400 hover:text-emerald-700",
                ].join(" ")}
                aria-disabled={currentPage === 1}
              >
                Föregående
              </Link>

              {pageNumbers.map((pageNumber) => (
                <Link
                  key={pageNumber}
                  href={getPageHref(pageNumber)}
                  className={[
                    "rounded-xl border px-3.5 py-2 text-sm font-semibold transition",
                    pageNumber === currentPage
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-slate-300 text-slate-700 hover:border-emerald-400 hover:text-emerald-700",
                  ].join(" ")}
                  aria-current={pageNumber === currentPage ? "page" : undefined}
                >
                  {pageNumber}
                </Link>
              ))}

              <Link
                href={getPageHref(currentPage + 1)}
                className={[
                  "rounded-xl border px-4 py-2 text-sm font-medium transition",
                  currentPage === totalPages
                    ? "pointer-events-none border-slate-200 text-slate-300"
                    : "border-slate-300 text-slate-700 hover:border-emerald-400 hover:text-emerald-700",
                ].join(" ")}
                aria-disabled={currentPage === totalPages}
              >
                Nästa
              </Link>
            </nav>
          )}
        </div>
      </section>
    </main>
  );
};

export default PicturesPage;
