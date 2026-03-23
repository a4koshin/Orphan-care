import Image from "next/image";
import React from "react";

type PicCardProps = {
  title: string;
  description: string;
  image: string;
  alt?: string;
};

const PicCard = ({
  title,
  description,
  image,
  alt = "kortbild",
}: PicCardProps) => {
  return (
    <article className="h-full w-full overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 w-full sm:h-56">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-3 px-5 py-5 sm:px-6 sm:py-6">
        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">{title}</h2>

        <p className="text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </article>
  );
};

export default PicCard;
