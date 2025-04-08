import Image from "next/image";

const galleryImages = [
  { src: "/burger.jpg", alt: "Burger" },
  { src: "/dosa.jpeg", alt: "Dosa" },
  { src: "/coldrink.jpeg", alt: "Coldrink" },
  { src: "/jalebi.jpeg", alt: "jalebi" },
  { src: "/noodles.jpg", alt: "Noodles" },
  { src: "/pizza.jpg", alt: "Cheesy Pizza" },
  { src: "/gulabjamun.webp", alt: "Gulabjamun" },
  { src: "/rasmalai.jpg", alt: "Kesar Rasmalai" },
  { src: "/roti roll.jpeg", alt: "Roti Roll" },
];

export default function GallerySection() {
  return (
    <section
      className="bg-[#dac57a]/60 px-6 py-16 text-center"
      aria-labelledby="gallery-heading"
    >
      <h4
        id="gallery-heading"
        className="text-red-700 font-medium uppercase border-b-2 border-red-700 inline-block mb-2"
      >
        Explore Our Gallery
      </h4>
      <h2 className="text-2xl md:text-3xl text-red-700 font-bold mb-10">
        Taste the Story: A Visual Journey Through Our Dishes!
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {galleryImages.map(({ src, alt }, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg shadow-lg group aspect-[4/3]"
          >
            <Image
              src={src}
              alt={alt}
              fill
              quality={70}
              loading="lazy"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
            />
          </div>
        ))}
      </div>

      {/* Button + Symbol */}
      <div className="mt-10">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition"
        >
          Visit Instagram
        </a>
        <div className="mt-4 text-red-700 text-2xl">
          <span className="inline-block rotate-180">❦</span>
        </div>
      </div>
    </section>
  );
}
