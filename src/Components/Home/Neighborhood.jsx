import Image from "next/image";

// Define the cities with their names and image URLs
const cities = [
  { name: "Toronto", imageUrl: "https://i.ibb.co/6B536FH/Rectangle-3907.png" },
  {
    name: "Vancouver",
    imageUrl: "https://i.ibb.co/6B536FH/Rectangle-3907.png",
  },
  { name: "Montreal", imageUrl: "https://i.ibb.co/6B536FH/Rectangle-3907.png" },
  { name: "Calgary", imageUrl: "https://i.ibb.co/6B536FH/Rectangle-3907.png" },
  { name: "Toronto", imageUrl: "https://i.ibb.co/6B536FH/Rectangle-3907.png" },
  {
    name: "Vancouver",
    imageUrl: "https://i.ibb.co/6B536FH/Rectangle-3907.png",
  },
];

export default function Neighborhood() {
  return (
    <div
      id="neighborhood"
      className="bg-primary py-12 sm:py-24 px-4 sm:px-8 lg:px-8 overflow-hidden"
    >
      <section className="max-w-screen-xl mx-auto">
        {/* Header section with title and description */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div data-aos="fade-right">
            <h1 className="text-3xl md:text-[42px]  font-merriweather text-[#88A9C3]">
              Neighborhood
            </h1>
            <p className="text-base md:text-xl text-[#88A9C3CC] font-raleway mt-3">
              Explore vibrant communities, discover hidden gems, and find the
              perfect neighborhood that matches your lifestyle with our expert
              local insights.
            </p>
          </div>
          <div
            className="flex justify-start sm:justify-end lg:justify-end"
            data-aos="fade-left"
          >
            <button className="bg-neutral px-4 md:px-5 py-2 md:py-2.5  rounded-lg text-primary font-medium text-base md:text-xl font-roboto transition-all duration-300 ease-in-out hover:bg-[#2B4257] hover:text-neutral hover:shadow-lg hover:-translate-y-1">
              Explore
            </button>
          </div>
        </header>
        {/* Grid section for displaying city images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cities.map((city, index) => (
            <article key={index} className="relative" data-aos="zoom-in">
              <a
                href="#"
                className="block bg-black rounded-2xl overflow-hidden group"
              >
                <Image
                  alt={city.name}
                  height={472}
                  width={457}
                  src={city.imageUrl}
                  className="w-full h-full object-cover transition-opacity group-hover:opacity-50"
                />
                {/* Overlay with city name */}
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                  <div className="text-center opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-2xl md:text-3xl text-neutral font-raleway font-semibold">
                      {city.name}
                    </p>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
