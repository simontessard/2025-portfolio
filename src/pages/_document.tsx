import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
      <Html lang="en">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
          <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
          <Head/>
          <body className="antialiased">
            <Main/>
            <NextScript/>
          </body>
      </Html>
  );
}
