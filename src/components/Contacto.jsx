import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data)
    }

    return (
        <div className=' items-center pt-40 flex flex-col'>
            <h1 className='text-3xl font-bold mb-4'>Contacto</h1>
            <form className='flex flex-col' onSubmit={handleSubmit(enviar)}>
                <input className='w-80 border-2 border-black rounded-md my-1 p-1' type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
                <input className='w-80 border-2 border-black rounded-md my-1 p-1' type="email" placeholder='Ingresa tu e-mail' {...register("email")} />
                <input className='w-80 border-2 border-black rounded-md my-1 p-1' type="phone" placeholder='Ingresa tu teléfono' {...register("number")} />
                <button className='w-fit px-4 py-1 bg-verdeOscuro rounded-md ml-auto font-medium text-white' type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Contacto
