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
        <div style={FondoHeroStyle} className='flex md:flex-row flex-col-reverse h-screen justify-between items-center pt-0'>

            <div className="w-1/3 mx-auto sm:mx-auto">
                <Reveal>
                    <img src={logoBlanco} alt="" />
                </Reveal>
            </div>
            <Reveal>
                <div className=" text-center border border-grisOscuro mx-auto bg-white px-6 sm:px-24 mt-28 sm:mt-24 h-screen pr-screen shadow-2xl shadow-black flex flex-col">
                    <h1 className='text-4xl pt-12 text-black font-regular mb-12'>Contacto</h1>
                    <form className='flex flex-col  w-max' onSubmit={handleSubmit(enviar)}>
                        <input className='font-light text-sm w-64 sm:w-80 border text-black bg-transparente border-grisOscuro placeholder:italic placeholder:text-grisOscuro rounded-md my-1 px-2 py-1.5' type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
                        <input className='font-light text-sm w-64 sm:w-80 border text-black bg-transparente border-grisOscuro placeholder:italic placeholder:text-grisOscuro rounded-md my-1 px-2 py-1.5' type="email" placeholder='Ingresa tu e-mail' {...register("email")} />
                        <input className='font-light text-sm w-64 sm:w-80 border text-black bg-transparente border-grisOscuro placeholder:italic placeholder:text-grisOscuro rounded-md my-1 px-2 py-1.5' type="phone" placeholder='Ingresa tu teléfono' {...register("number")} />
                        <button className='w-fit mx-auto px-4 py-2 border-2 border-verdeOscuro bg-verdeOscuro hover:bg-transparente hover:text-verdeOscuro duration-200 rounded-md mt-6 font-medium text-white' type='submit'>Enviar</button>
                    </form>
                </div>
            </Reveal>
        </div>
    )
}

export default Contacto
