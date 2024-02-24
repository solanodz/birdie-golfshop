import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Textarea } from "../components/ui/textarea";
import logo from "../assets/pajaritosolo.png"
import emailjs from '@emailjs/browser'
import { useRef } from "react";
import { toast } from 'sonner';



const Contacto = () => {

    const form = useRef()
    const { register } = useForm();

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm('service_v1ecto3', 'template_w64ph7n', form.current, {
                publicKey: 'tDxz1UdJiUIrLlWmZ',
            })
            .then(
                () => {
                    toast.success('email enviado con éxito.')
                },
                (error) => {
                    console.log(error)
                    toast.error('Ocurrió un error al enviar el email. Intente nuevamente')
                },
            );
        e.target.reset()
    }

    return (
        <MaxWidthWrapper>

            <div className="flex-grow my-8 mx-auto items-center justify-center text-center max-w-3xl">
                <img src={logo} alt="logo Birdie" className='w-20 mx-auto my-3' />

                <h2 className='text-4xl font-montserrat font-bold'>Contacto</h2>
                <p className="text-muted-foreground">Envíanos tu consulta y te responderemos lo antes posible.</p>
                <form
                    className='flex my-6 flex-col gap-2'
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <Input name="user_name" type="text" placeholder='Ingresa tu nombre completo' {...register("user_name")} />
                    <Input name="email" type="email" placeholder='Ingresa tu e-mail' {...register("email")} />
                    <Textarea name="message" type="message" placeholder='Escribe tu consulta o mensaje...' {...register("message")} />
                    <Button type='submit'>Enviar</Button>
                </form>
            </div>
        </MaxWidthWrapper>
    )
}

export default Contacto
