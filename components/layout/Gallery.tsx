import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/gallery/gal1.jpg", alt: "Description for gallery image 1" }, 
    { src: "/gallery/gal2.jpg", alt: "Description for gallery image 2" },
    { src: "/gallery/gal3.jpg", alt: "Description for gallery image 3" },
    { src: "/gallery/gal4.webp", alt: "Description for gallery image 4" },
    { src: "/gallery/gal5.webp", alt: "Description for gallery image 5" },
    { src: "/gallery/gal6.webp", alt: "Description for gallery image 6" },
  ];

  return (
    <section id="galleria" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4"> 
        <h1 className="text-[#a89076] text-shadow-lg/12 lg:text-6xl text-4xl font-bold text-center lg:mb-10 mb-5 uppercase">
          Galleria
        </h1>
        <div className="lg:w-24 w-18 bg-[#a89076] h-1 mx-auto lg:mb-12 mb-8"></div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt} 
                className="w-full lg:h-96 h-40 object-cover"
                loading="lazy" 
                width={500}
                height={500}
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}