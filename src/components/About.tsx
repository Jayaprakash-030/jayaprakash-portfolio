import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Code2, Trophy, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'GenAI & RAG Systems',
    description: 'Designing RAG pipelines, fine-tuning, and agentic workflows for real-world deployment.',
  },
  {
    icon: TrendingUp,
    title: 'Time-Series Forecasting',
    description: 'Building multivariate models for forecasting, classification, and anomaly detection.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Reducing latency and scaling inference with ONNX, feature engineering, and pipeline tuning.',
  },
  {
    icon: Code2,
    title: 'Production ML',
    description: 'Shipping ML systems with FastAPI, MLflow, Docker, and cloud-native workflows.',
  },
  {
    icon: Trophy,
    title: 'Applied Research',
    description: 'Turning experiments into measurable improvements in accuracy and reliability.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Partnering across teams to deliver deployable, business-ready AI systems.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building production-ready AI systems that scale beyond notebooks
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m an <span className="text-foreground font-medium">AI/ML Engineer</span> with 3+ years of experience building production ML and LLM-based systems across healthcare and energy. I specialize in <span className="text-primary font-medium">time-series forecasting</span>, <span className="text-primary font-medium">RAG pipelines</span>, fine-tuning, and agentic workflows using Python, PyTorch, LangChain, and FastAPI.
              </p>
              <p>
                My focus is turning research into deployable systems—optimizing latency, improving accuracy, and scaling inference with tools like ONNX, MLflow, and cloud platforms (GCP/AWS). I’m currently pursuing an MS in Engineering Data Science at the University of Houston and actively looking for AI Engineer or Data Scientist roles in the US.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
