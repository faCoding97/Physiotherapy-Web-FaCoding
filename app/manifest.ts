import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Moss & Bay Physiotherapy",
    short_name: "Moss & Bay Physio",
    description: "Premium physiotherapy and rehabilitation in Mossel Bay and Dana Bay.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F7F2",
    theme_color: "#18345C",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
