import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { TypeWriter } from './TypeWriter';
import heroBg from '@/assets/hero-bg.png';

const impactStats = [
  { value: '3 yrs', label: 'Production ML' },
  { value: 'RAG', label: 'Retrieval systems' },
  { value: 'Agents', label: 'LangGraph workflows' },
  { value: 'MS', label: 'Engineering Data Science' },
];

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />


      <div className="section-container relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-primary font-medium mb-4 text-lg">Hi, I am</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Jayaprakash <span className="gradient-text">Guntumani</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl"
          >
            <TypeWriter
              words={[
                'AI Engineer',
                'Agentic LLM Applications',
                'RAG Systems & Retrieval',
                'Production ML Infrastructure',
                'Real-Time Inference',
                'LangGraph, FastAPI & PyTorch'
              ]}
              className="text-primary font-semibold"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground mb-8 max-w-xl leading-relaxed"
          >
            Based in Houston, TX.
            <br /><br />
            AI Engineer with experience designing, deploying, and operating production machine learning and LLM systems. I build agentic AI applications, RAG pipelines, fine-tuned language models, and real-time inference services that move from prototype to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mb-8 w-full max-w-xl"
          >
            <p className="mb-4 text-sm font-medium text-primary">
              Open to AI Engineer, LLM Engineer, and ML Engineer roles in the US
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/60 bg-card/50 px-4 py-3 backdrop-blur-sm"
                >
                  <p className="font-display text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 mb-10"
          >
            <a href="https://github.com/Jayaprakash-030" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jayaprakashguntumani03/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="mailto:jayaprakashguntumani@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDown size={18} className="-rotate-90" />
            </a>
            <a href="/JayaprakashYadavGuntumani_Resume.pdf"
              download="JayaprakashYadavGuntumani_Resume.pdf"
              className="btn-secondary flex items-center gap-2"
            >
              Resume
              <Download size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Decorative Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] rotate-6 transform scale-105 blur-sm" />

            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-primary/30 shadow-2xl bg-card/50 backdrop-blur-sm cursor-pointer"
            >
              <img
                src="/profile.png"
                alt="Jayaprakash Yadav Guntumani"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-card border border-primary/30 p-4 rounded-xl shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">Open to Work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
