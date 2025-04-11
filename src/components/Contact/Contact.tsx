import { Layout } from '@/components/Layout/Layout'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Substitua por sua integração real com Formspree ou outro serviço
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Layout title="Contato | Eduardo Andrade">
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Entre em Contato</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                        Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para me enviar uma mensagem!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-300">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300">
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                            </button>

                            {submitStatus === 'success' && (
                                <p className="text-green-600 dark:text-green-400">Mensagem enviada com sucesso!</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-600 dark:text-red-400">Ocorreu um erro ao enviar a mensagem. Tente novamente.</p>
                            )}
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Outras Formas de Contato</h3>

                            <div className="space-y-4">
                                <a
                                    href="mailto:contato@eduardoandrade.dev"
                                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    <FiMail className="mr-3 text-xl" />
                                    contato@eduardoandrade.dev
                                </a>

                                <a
                                    href="https://linkedin.com/in/eduardoandrade"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    <FiLinkedin className="mr-3 text-xl" />
                                    linkedin.com/in/eduardoandrade
                                </a>

                                <a
                                    href="https://github.com/eduardoandrade"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    <FiGithub className="mr-3 text-xl" />
                                    github.com/eduardoandrade
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Disponibilidade</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Atualmente estou disponível para oportunidades de trabalho remoto ou freelance.
                                Respondo a todos os contatos dentro de 24-48 horas.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    )
}

export default Contact