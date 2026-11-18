import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ravi Arts Enterprises - Printing & Signage Solutions",
    short_name: "Ravi Arts",
    description:
      "Premier printing, flex banners, LED glow sign boards, and 3D acrylic letters in Kasna, Greater Noida, Delhi NCR, UP & Near Me.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#07172d",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
