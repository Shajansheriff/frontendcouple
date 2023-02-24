import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="assets/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="assets/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="assets/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="assets/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="assets/favicon/safari-pinned-tab.svg"
        color="#6366f1"
      />
      <link rel="shortcut icon" href="assets/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#080032" />
      <meta
        name="msapplication-config"
        content="assets/favicon/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />
      <Script id="darkmode">{`
      let mode = window.localStorage.getItem("mode"),
        root = document.getElementsByTagName("html")[0];
      if (mode !== null && mode === "dark") {
        root.classList.add("dark-mode");
      } else {
        root.classList.remove("dark-mode");
      }
    `}</Script>

      <body>
        {children}
        <Script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" />
        <Script src="/assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" />
        <Script src="/assets/vendor/lightgallery/lightgallery.min.js" />
        <Script src="/assets/vendor/lightgallery/plugins/fullscreen/lg-fullscreen.min.js" />
        <Script src="/assets/vendor/lightgallery/plugins/zoom/lg-zoom.min.js" />
        <Script src="/assets/js/theme.min.js" />
      </body>
    </html>
  );
}
