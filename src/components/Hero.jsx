
import fondoHero from '/public/assets/fondos/fondo-hero.jpg'

const Hero = () => {
    const FondoHeroStyle = {
        backgroundImage: `url(${fondoHero})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="min-h-screen">
            <div className="relative h-screen" style={FondoHeroStyle}>
                <div className="p-6 md:p-10 lg:p-8  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-left">
                    <h1 className="font-heading text-5xl md:text-7xl mb-4 lg:text-8xl font-black">
                        Birdie Golfshop.
                    </h1>
                    <h3 className="italic p-1 font-medium text-md md:text-lg lg:text-xl px-2 pr-full text-black bg-white w-fit md:mt-4 lg:mt-6">
                        Encuentra lo mejor para tu juego.
                    </h3>
                </div>
            </div>
        </div>
    );
}
export default Hero
