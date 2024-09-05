"use client";

import Image from "next/image";
import { useState } from "react";
import FavoriteIcon from "../Icons/Favorite";

export default function ThumbnailImg({
  img,
}: {
  img: { url: string; alt?: string };
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-40 w-56 ">
      {isHovered && <Favorite />}
      <Image
        src={img.url}
        alt={img.alt ?? "Product image"}
        fill
        className="rounded-lg object-cover"
      />
    </div>
  );
}

function Favorite() {
  return (
    <div className="absolute top-2 right-2">
      <FavoriteIcon />
    </div>
  );
}
