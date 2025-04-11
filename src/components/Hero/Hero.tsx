"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export function Hero() {
    return (
        <section className={styles.hero}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={styles.content}
            >
                <h1>
                    Olá, eu sou <span className={styles.highlight}>Eduardo Andrade</span>
                </h1>
                <p>Desenvolvedor Front-End apaixonado por tecnologia, UI e inovação.</p>

                <div className={styles.buttons}>
                    <a href="#projects" className={styles.cta}>
                        Ver projetos
                    </a>
                    <a href="#contact" className={styles.secondary}>
                        Entrar em contato
                    </a>
                </div>
            </motion.div>
        </section>
    );
}