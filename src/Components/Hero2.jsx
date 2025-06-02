export const Hero2 = () => {
  const pics = [
    { src: "images/1.jpg", text: "Apple Intelligence" },
    { src: "images/2.jpg", text: "Cutting Edge Cameras" },
    { src: "images/3.jpg", text: "Chip and Battery Life" },
    { src: "images/4.jpg", text: "Innovation", color: "black" },
    { src: "images/5.jpg", text: "Environment", color: "black" },
    { src: "images/6.jpg", text: "Privacy" },
    { src: "images/7.jpg", text: "Customise your iPhone" },
    { src: "images/8.jpg", text: "Peace of Mind" },
  ];

  return (
    <div
      className="relative py-10 sm:py-16 md:py-20 bg-gray-100"
      data-aos="fade-up"
    >
      <div className="px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold">Get to know iPhone</h1>
      </div>

      <div
        className="flex ml-6 overflow-x-auto scroll-smooth py-5 snap-x snap-mandatory space-x-6 mt-12 px-4 scrollbar-hide"
        data-aos="fade-up"
      >
        {pics.map((pic) => (
          <div
            key={pic.text}
            className="relative snap-start flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] h-auto transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <img
              src={pic.src}
              alt={pic.text}
              className="max-h-[650px] h-auto w-full object-cover rounded-2xl"
            />
            <div
              className={`absolute top-4 left-4 text-lg md:text-xl font-semibold px-3 py-1 rounded-md backdrop-blur-sm ${
                pic.color === "black" ? "text-black bg-white/70" : "text-white bg-black/40"
              }`}
            >
              {pic.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};