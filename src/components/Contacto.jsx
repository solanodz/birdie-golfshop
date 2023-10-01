import { useForm } from "react-hook-form";
import logoBlanco from '/public/assets/logos/blanco.png'
import fondoHero from '/public/assets/fondos/fondo-hero.jpg'
import Reveal from "./Reveal";
const Contacto = () => {
    const FondoHeroStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${fondoHero})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data)
    }

    return (
        <div style={FondoHeroStyle} className='flex flex-row h-screen justify-around items-center pt-0'>

            <div className="w-1/2">
                <Reveal>
                    <img src={logoBlanco} alt="" />
                </Reveal>
            </div>
            <Reveal>
                <div className="items-center text-center border border-grisOscuro mx-auto bg-black bg-opacity-40 p-16 rounded-2xl shadow-2xl shadow-black flex flex-col">
                    <h1 className='text-4xl text-white font-regular mb-12'>Contacto</h1>
                    <form className='flex flex-col  w-max' onSubmit={handleSubmit(enviar)}>
                        <input className='font-light w-80 border text-gris bg-transparente border-grisOscuro placeholder:italic placeholder:text-grisOscuro rounded-md my-1 px-2 py-1' type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
                        <input className='font-light w-80 border text-gris bg-transparente border-grisOscuro placeholder:italic placeholder:text-grisOscuro rounded-md my-1 px-2 py-1' type="email" placeholder='Ingresa tu e-mail' {...register("email")} />
                        <input className='font-light w-80 border text-gris bg-transparente border-grisOscuro placeholder:italic placeholder:text-grisOscuro rounded-md my-1 px-2 py-1' type="phone" placeholder='Ingresa tu teléfono' {...register("number")} />
                        <button className='w-fit mx-auto px-4 py-2 border-2 border-verdeOscuro bg-verdeOscuro hover:bg-transparente hover:text-verdeOscuro duration-200 rounded-md mt-6 font-medium text-white' type='submit'>Enviar</button>
                    </form>
                </div>
            </Reveal>
        </div>
    )
}

export default Contacto
