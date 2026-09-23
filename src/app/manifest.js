export default function manifest() {
  return {
    name: "IMAI - Churea Producciones",
    short_name: "IMAI",
    description:
      "Fotografía y cine de IMAI - Churea Producciones en La Paz, Baja California Sur.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f3",
    theme_color: "#176b6b",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
