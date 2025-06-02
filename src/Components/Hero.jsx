import { useEffect, useRef } from "react";

// Custom Hook: Shrinks the video on scroll
export const useShrinkOnScroll = (videoRef) => {
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      const scrollY = window.scrollY;
      const minScale = 0.9; // Minimum scale factor
      const maxScroll = 500; // Maximum scroll distance to apply the effect
      const scale = Math.max(minScale, 1 - scrollY / maxScroll);

      videoRef.current.style.transform = `scale(${scale})`;
      videoRef.current.style.transition = "transform 0.2s";
      videoRef.current.style.transformOrigin = "top center";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [videoRef]);
};

// Hero Component
export const Hero = () => {
  const videoRef = useRef(null);
  useShrinkOnScroll(videoRef);

  return (
    <div className="pt-16 relative bg-white" data-aos="fade-up">
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        autoPlay
        muted
        loop
        controls={false}
        className="w-full h-auto  mx-auto"
      >
        <source src="images/iphone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
