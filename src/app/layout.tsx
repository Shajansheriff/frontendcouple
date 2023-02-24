import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
