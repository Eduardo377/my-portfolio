import { Layout } from '@/components/Layout/Layout'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const About = () => {
    const skills = [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    ]

    const experiences = [
        {
            role: 'Desenvolvedor Front-End',
            company: 'Empresa X',
            period: '2021 - Presente',
            description: 'Desenvolvimento de aplicações web com React e TypeScript.'
        },
        {
            role: 'Desenvolvedor Júnior',
            company: 'Empresa Y',
            period: '2019 - 2021',
            description: 'Implementação de interfaces e integração com APIs.'
        }
    ]

    return (
        <Layout title="Sobre | Eduardo Andrade">
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Sobre Mim</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                                Olá! Sou Eduardo Andrade, desenvolvedor Front-End com 5 anos de experiência criando
                                interfaces modernas e responsivas.
                            </p>
                            <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                                Minha paixão por tecnologia começou cedo e me levou a me especializar em
                                desenvolvimento web, com foco em criar experiências de usuário excepcionais.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Além do código, adoro compartilhar conhecimento através de artigos e tutoriais.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-64 h-64 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-indigo-500">
                                {/* Placeholder para imagem */}
                                <div className="w-full h-full bg-gray-300"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Habilidades Técnicas</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
                            >
                                <div className="text-3xl mb-2">{skill.icon}</div>
                                <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Experiência Profissional</h2>
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                    <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                                </div>
                                <h4 className="text-lg text-indigo-600 dark:text-indigo-400 mb-3">{exp.company}</h4>
                                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </Layout>
    )
}

export default About