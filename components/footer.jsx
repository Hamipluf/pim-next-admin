export default function Footer() {
  return (
    <>
      <section className="p-4 md:px-8 bg-[#ecece7] justify-center items-center w-full">
        <div className="flex flex-col md:flex-row py-12 flex-1 w-full max-w-[1120px] m-auto">
          {/* contact info */}
          <div className="flex flex-col w-full lg:w-2/5">
            <picture className="inline-block bg-logoFooter w-[250px] h-[98px] sm:w-[270px] sm:h-[108px] bg-contain bg-no-repeat" />{" "}
            <br />
            <a
              href="tel:+5492235681552"
              className="inline-flex items-center gap-3 font-normal"
            >
              <picture className="inline-block bg-phone w-[1rem] h-[1rem] bg-contain bg-no-repeat" />
              223 56 81 552
            </a>
            <a
              href="https://wa.me/5492233489143?text=Hola"
              className="inline-flex items-center gap-3 font-normal"
            >
              <picture className="inline-block bg-wa w-[1rem] h-[1rem] bg-contain bg-no-repeat" />
              223 35 49 036
            </a>
            <span className="pt-2 font-semibold">
              Bermejo 446, Mar del Plata (7600)
            </span>
          </div>

          {/* horarios */}
          <div className="flex flex-col w-full pt-8 mt-8 lg:w-3/5 lg:mt-0">
            <span className="text-lg font-medium">
              <span className="pb-1 border-b border-mainpim">Ho</span>rario de
              Atención
            </span>
            <span className="pt-2">Lunes a Viernes (9 a 13 hs.) </span>
            <span className="">Lunes (15 a 19 hs.) </span>
            <span className="">Viernes (15 a 19 hs.)</span>
            <ul className="flex flex-row items-center gap-6 pt-2">
              <li>
                <a
                  className=""
                  href="https://www.facebook.com/profile.php?id=100083433698226"
                  target="_blank"
                  rel="noreferrer"
                >
                  <picture className="flex bg-f w-[1rem] h-[1rem] bg-contain bg-no-repeat" />
                </a>
              </li>
              <li>
                <a
                  className=""
                  href="https://www.instagram.com/puertoimagenes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <picture className="flex bg-i w-[1.25rem] h-[1.25rem] leading-2 bg-contain bg-no-repeat mt-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="flex flex-1 md:px-8 border border-[#eaeaea] justify-center items-center">
        <div className="w-full p-8 text-center">
          2022 Imágenes Puerto - Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}
