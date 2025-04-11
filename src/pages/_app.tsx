import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout/Layout"
import { SkillsSection } from '@/components/Skills/SkillsSection'
// import { ExperiencePreview } from '@/components/Experience/ExperiencePreview'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Component {...pageProps} />;
  }

  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}