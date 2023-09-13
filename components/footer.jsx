export default function Footer() {
    return (
        <>
            <section className="p-4 md:px-8 bg-[#ecece7] justify-center items-center w-full">
                <div className="flex flex-col md:flex-row py-12 flex-1 w-full max-w-[1120px] m-auto">
                    {/* contact info */}
                    <div className='flex flex-col w-full lg:w-2/5'>
                        <picture className='inline-block bg-logoFooter w-[250px] h-[98px] sm:w-[270px] sm:h-[108px] bg-contain bg-no-repeat' /> <br />
                        <a href="tel:+5492235681552" className='inline-flex items-center gap-3 font-normal'>
                            <picture className="inline-block bg-phone w-[1rem] h-[1rem] bg-contain bg-no-repeat" />
                            223 56 81 552
                        </a>
                        <a href="https://wa.me/5492233489143?text=Hola" className='inline-flex items-center gap-3 font-normal'>
                            <picture className="inline-block bg-wa w-[1rem] h-[1rem] bg-contain bg-no-repeat" />
                            223 35 49 036
                        </a>
                        <span className='pt-2 font-semibold'>Bermejo 446, Mar del Plata (7600)</span>
                    </div>

                    {/* horarios */}
                    <div className='flex flex-col w-full pt-8 mt-8 lg:w-3/5 lg:mt-0'>
                        <span className='text-lg font-medium'><span className="pb-1 border-b border-mainpim">Ho</span>rario de Atención</span>
                        <span className='pt-2'>Lunes a Viernes (9 a 13 hs.) </span>
                        <span className=''>Lunes (15 a 19 hs.) </span>
                        <span className=''>Viernes (15 a 19 hs.)</span>
                        <ul className='flex flex-row items-center gap-6 pt-2'>
                            <li>
                                <a className='' href="https://www.facebook.com/profile.php?id=100083433698226" target="_blank" rel="noreferrer">
                                    <picture className="flex bg-f w-[1rem] h-[1rem] bg-contain bg-no-repeat" />
                                </a>
                            </li>
                            <li>
                                <a className='' href="https://www.instagram.com/puertoimagenes/" target="_blank" rel="noreferrer">
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

            <div className="fixed rounded-full p-1 bg-[rgb(75,166,54)] bottom-4 right-2 animate-wiggle lg:bottom-6 lg:right-6 z-10 hover:scale-110">
                <a href="https://wa.me/5492233549036?text=Quisiera%20pedir%20un%20turno" className="text-[#eaeaea]" target="_blank" rel="noreferrer">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="-4 -4 24 24"
                        height="2.25rem"
                        width="2.25rem"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                    </svg>
                </a>
            </div>
        </>
    )
}
