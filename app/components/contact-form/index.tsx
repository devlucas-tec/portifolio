'use client'

import { useForm } from 'react-hook-form'
import { Button } from '../button'
import { SectionTitle } from '../section-title'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/app/lib/animations'

const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type contactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: contactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso')
      reset()
    } catch {
      toast.error('Falha ao enviar mensagem. Tente novamente.')
    }
  }

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"
    >
      <div className="w-full max-w-[420px] mx-auto ">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="text-center items-center"
        />

        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
         
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800/50 border-2 border-transparent rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-500 transition-all"
            {...register('name')}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-gray-800/50 border-2 border-transparent rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-500 transition-all"
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none h-[138px] w-full bg-gray-800/50 border-2 border-transparent rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-500 transition-all"
            {...register('message')}
            maxLength={500}
          />

          <Button
            className="h-max mx-auto mt-6 shadow-button"
            disabled={isSubmitting}
          >
            Enviar mensagem
          </Button>
        </motion.form>
      </div>
    </section>
  )
}