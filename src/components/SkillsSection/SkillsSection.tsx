import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiGraphql, SiFigma } from 'react-icons/si'

export const SkillsSection = () => {
    const skills = [
        { name: 'React', icon: <FaReact className="text-blue-500" />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 85 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" />, level: 80 },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 75 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 85 },
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, level: 80 },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" />, level: 70 },
        { name: 'Figma', icon: <SiFigma className="text-purple-500" />, level: 65 },
    ]

    return (
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Habilidades Técnicas</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Tecnologias e ferramentas que utilizo no meu dia a dia para criar soluções incríveis.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-4">{skill.icon}</div>
                                <h3 className="font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                                <div
                                    className="bg-indigo-600 h-2.5 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}