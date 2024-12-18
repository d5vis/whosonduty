import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Who's on Duty",
    short_name: "RAOD",
    description: "LMU RAs on Duty",
    start_url: "/",
    display: "standalone",
    background_color: "#fff8ee",
    theme_color: "#fff8ee",
    icons: [
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
