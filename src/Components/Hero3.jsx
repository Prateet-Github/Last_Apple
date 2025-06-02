export const Hero3 = () => {
  const iphones = [
    { src: "images/16pro.png", label: "iPhone 16 Pro" },
    { src: "images/15.png", label: "iPhone 15 Plus" },
    { src: "images/16e.png", label: "iPhone 16e" },
    { src: "images/16.png", label: "iPhone 16" },
    { src: "images/16pro.png", label: "iPhone 16 Pro Max" },
  ];

  return (
    <div className="py-24 px-6 md:px-20 bg-white relative" data-aos="fade-up">
      <h1 className="text-4xl md:text-6xl font-bold mb-12">
        Explore the line-up
      </h1>

      <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
        <div className="flex py-4 space-x-10 min-w-full">
          {iphones.map((iphone) => (
            <div
              key={iphone.label}
              className="flex flex-col items-center snap-start min-w-[250px] hover:scale-105 transition-transform duration-300"
            >
              <div className="h-[300px] flex items-center justify-center">
                <img
                  src={iphone.src}
                  alt={iphone.label}
                  className="w-48 h-auto object-contain p-4"
                />
              </div>
              <p className="text-center text-lg font-medium">{iphone.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};