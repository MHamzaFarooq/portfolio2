import localFont from "next/font/local";

export const matter = localFont({
  src: [
    {
      path: "./Matter-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-matter",
});

export const retail = localFont({
  src: [
    {
      path: "./Retail-Variable.OTF",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-retail",
});
