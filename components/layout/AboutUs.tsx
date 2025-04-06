import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="acerca-de-nosotros" className="bg-white py-18">
      <h1 className="text-[#a89076] text-shadow-lg/12 lg:text-6xl text-4xl font-bold text-center lg:mb-10 mb-5 uppercase">
        Acerca de Nosotros
      </h1>
      <div className="lg:w-24 w-18 bg-[#a89076]  text-shadow h-1 flex lg:flex-row flex-col justify-between mx-auto lg:mb-24 mb-12"></div>
      <div className="flex flex-col md:flex-row items-center mx-auto max-w-[90rem] px-4">
        <Image
          src="/about-us/acerca-de-nosotros.webp"
          loading="lazy"
          alt="Acerca de Nosotros"
          className="h-auto lg:w-[64rem] w-[25rem] rounded-full lg:mr-8 mr-0 lg:mb-0 mb-8"
          width={500}
          height={500}
        />
        <div className="w-3/5 text-center">
          <h1 className="text-black text-2xl lg:text-4xl font-bold mb-4">
            Quiénes Somos: Nuestra Fe y Propósito
          </h1>
          <p className="text-gray-500 lg:text-lg text-sm mb-4">
            Predicar el Evangelio conforme al sentido original establecido por
            Dios en su Palabra (Nehemías 8:8), equipando a otros para proclamar
            que Jesucristo es la única respuesta.
          </p>
          <p className="text-gray-500 lg:text-lg text-sm mb-4">
            Lograr la reconciliación del hombre con Dios para su restauración
            personal y familiar, llevándolos a una vida plena en Cristo.
          </p>
          <p className="text-gray-500 lg:text-lg text-sm">
            Se fundamenta en la Biblia como la Palabra inspirada e infalible de
            Dios. Creemos en el Dios Trino (Padre, Hijo y Espíritu Santo), en la
            deidad y obra redentora de Jesucristo (su nacimiento virginal, vida,
            muerte, resurrección y segunda venida), y en la salvación por fe y
            arrepentimiento. Practicamos el bautismo en agua y la Santa Cena.
          </p>
        </div>
      </div>
    </section>
  );
}
