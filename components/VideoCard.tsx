import React from "react";

type VideoCardProps = {
  title: string;
  description: string;
  videoUrl: string; // normal YouTube link
};

const getEmbedUrl = (url: string) => {
  try {
    // Handle normal YouTube links
    const videoId = url.includes("watch?v=")
      ? url.split("watch?v=")[1].split("&")[0]
      : url.split("/").pop();

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return url;
  }
};

const VideoCard = ({ title, description, videoUrl }: VideoCardProps) => {
  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <article className="h-full w-full overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-video w-full">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
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

export default VideoCard;
