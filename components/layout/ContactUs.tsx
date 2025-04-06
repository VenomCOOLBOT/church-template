import Image from "next/image";
import ContactForm from "../ContactForm";

export default function ContactUs() {
  return (
    <section id="contacto" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-[#a89076] text-shadow-lg/12 lg:text-6xl text-4xl font-bold text-center lg:mb-10 mb-5 uppercase">
          Contacto
        </h1>
        <div className="lg:w-24 w-18 bg-[#a89076] h-1 mx-auto lg:mb-12 mb-8"></div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col">
            <div className="p-5 space-y-5">
              <h4 className="text-center text-3xl font-bold">
                ¿Quiere saber más o necesita oración?
              </h4>
              <ContactForm />
            </div>
          </div>

          <div className="bg-black rounded-3xl lg:h-[30rem] lg:w-full w-full h-80 justify-center items-center flex flex-col px-4">
            <div className="flex flex-col text-center items-center justify-center">
              <h1 className="lg:text-4xl text-2xl text-white">
                Casa de Oración
              </h1>
              <h2 className="lg:text-5xl text-4xl text-white font-greatVibes mt-2">
                South San Diego
              </h2>
              <p className="lg:text-3xl text-xl text-white mt-3">
                5111 Central Avenue Bonita, CA 91902{" "}
                {/* Corrected Zip Code based on typical CA format */}
              </p>
            </div>
            <div className="flex items-center justify-between text-white container mx-auto mt-12 lg:px-16 px-5">
              <Image
                src="/logo.svg"
                className="lg:w-56 w-40 h-auto"
                alt={"Casa de Oracion"}
                width={500}
                height={500}
              />
              <div>
                <p className="lg:text-2xl text-sm">Sábado: 6PM</p>
                <p className="lg:text-2xl text-sm">Lunes: 7PM</p>
              </div>
            </div>
          </div>
          
        </div>

      </div>
      
    </section>
  );
}
