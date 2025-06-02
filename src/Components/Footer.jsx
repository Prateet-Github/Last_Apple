export const Footer = () => {
  return (
    <footer
      className="w-full bg-white text-gray-700 py-20 px-4 md:px-8"
      data-aos="fade-up"
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm mb-4">© 2025 Apple Inc. All rights reserved.</p>
        <p className="text-xs mb-4 space-x-2">
          <span>Privacy Policy</span> | <span>Terms of Use</span> |{" "}
          <span>Sales and Refunds</span> | <span>Legal</span> |{" "}
          <span>Site Map</span>
        </p>
        <p className="text-xs">Made by <span className="font-medium">Prateet</span></p>
      </div>
    </footer>
  );
};