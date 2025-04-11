import { Layout } from '@/components/Layout/Layout'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        title: 'Sistema de Gerenciamento',
        description: 'Plataforma completa para gerenciamento de tarefas e projetos com dashboard interativo.',
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        image: '/images/project1.jpg',
        githubLink: 'https://github.com/eduardo/project1',
        demoLink: 'https://project1-demo.vercel.app'
    },
    {
        title: 'E-commerce Moderno',
        description: 'Loja online com carrinho de compras, checkout e integração com pagamentos.',
        technologies: ['Next.js', 'Tailwind CSS', 'Stripe'],
        image: '/images/project2.jpg',
        githubLink: 'https://github.com/eduardo/project2',
        demoLink: 'https://project2-demo.vercel.app'
    },
    {
        title: 'Aplicativo de Notas',
        description: 'Aplicativo para criação e organização de notas com markdown e busca instantânea.',
        technologies: ['React', 'Redux', 'Firebase'],
        image: '/images/project3.jpg',
        githubLink: 'https://github.com/eduardo/project3',
        demoLink: 'https://project3-demo.vercel.app'
    },
]

const Projects = () => {
    return (
        <Layout title="Projetos | Eduardo Andrade">
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Meus Projetos</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                        Aqui estão alguns dos projetos que desenvolvi. Cada um representa um desafio único e uma oportunidade de aprendizado.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                                {/* Placeholder para imagem */}
                                <div className="w-full h-full bg-gray-300"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        <FiGithub className="mr-2" /> Código
                                    </a>
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        <FiExternalLink className="mr-2" /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default Projects