
import Reveal from './Reveal';
import fondoHero from '/public/assets/fondos/fondo-hero.jpg'
import logoBlanco from '/public/assets/logos/blanco.png'

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
                <div className="p-6 md:p-10 lg:p-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-left">
                    <Reveal>
                        <img src={logoBlanco} alt="" />
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
export default Hero
