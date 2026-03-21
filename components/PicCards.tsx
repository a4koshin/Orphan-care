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
  alt = "card image",
}: PicCardProps) => {
  return (
    <article className="w-full max-w-sm overflow-hidden bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="relative h-60 w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-3">
        <h2 className="text-xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </article>
  );
};

export default PicCard;