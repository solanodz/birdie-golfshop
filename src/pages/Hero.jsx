
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button"
import { FaTruckArrowRight } from "react-icons/fa6"
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbArrowsDiff } from "react-icons/tb";
import { Link } from "react-router-dom";

const perks = [
    {
        icon: <FaTruckArrowRight />,
        title: "Envío gratis",
        description: "Envío gratis a todo el país en compras mayores a $200000 o si estas en Tucumán",
    },
    {
        icon: <TbArrowsDiff />,
        title: "Devoluciones",
        description: "Si tu producto no es lo que esperabas, te devolvemos el dinero, nos encargamos de los envíos.",
    },
    {
        icon: <MdOutlineSupportAgent />,
        title: "Asesoramiento 24/7",
        description: "Encontra el producto que necesitas para mejorar tu juego con la ayuda de nuestros expertos.",
    },

]

const Hero = () => {
    return (
        <div className="mt-20 flex flex-col">
            <div>
                <h1 className='max-w-3xl font-montserrat text-5xl font-bold tracking-tight text-center mx-auto'>Encuentra los mejores productos de golf en <span className="text-green-600">Birdie</span></h1>
                <p className="italic text-muted-foreground text-center">Productos importados de primera calidad para mejorar tu juego</p>
                <div className=" flex flex-row gap-4 mt-10 justify-center mx-auto text-center">
                    <Link to={'/productos'} className={buttonVariants({ variant: 'default' })}>Ver productos</Link>
                    <Link to={'/contact'} className={buttonVariants({ variant: 'outline' })} >Contactar</Link>
                </div>
            </div>
            <div className="mt-20 py-10">
                <h2 className="text-3xl font-bold text-center text-green-700">¿Por qué comprar en Birdie?</h2>
                <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 ">
                    {perks.map((perk, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 bg-green-100 border border-green-200 p-6 rounded-md text-green-700">
                            <p className="text-2xl">{perk.icon}</p>
                            <h3 className="text-lg font-bold">{perk.title}</h3>
                            <p className="text-muted-foreground text-center text-sm">{perk.description}</p>
                        </div>
                    ))}
                </MaxWidthWrapper>
            </div>
        </div>
    )
}
export default Hero
