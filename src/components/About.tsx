import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Code2, Trophy, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'Agentic AI Systems',
    description: 'Building LangGraph workflows with tool calling, structured outputs, validation, and recovery routing.',
  },
  {
    icon: TrendingUp,
    title: 'RAG & Retrieval',
    description: 'Designing role-aware retrieval, hybrid search, hierarchical chunking, citations, and RAGAS evaluation.',
  },
  {
    icon: Zap,
    title: 'Low-Latency Inference',
    description: 'Deploying PyTorch models through ONNX Runtime, FastAPI, Docker, and production backend services.',
  },
  {
    icon: Code2,
    title: 'ML Infrastructure',
    description: 'Owning APIs, monitoring, CI/CD, model tracking, and cloud deployments across GCP, AWS, and Azure workflows.',
  },
  {
    icon: Trophy,
    title: 'LLM Evaluation',
    description: 'Using provenance, confidence scoring, critic validation, MLflow, LangSmith, and deterministic fallbacks.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Partnering with engineering and product teams to turn AI prototypes into reliable product capabilities.',
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
            Building production AI systems that move beyond demos and notebooks
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
                I’m an <span className="text-foreground font-medium">AI Engineer</span> with 3 years of experience designing, deploying, and operating production ML systems across healthcare and energy. My strongest work is in <span className="text-primary font-medium">agentic LLM applications</span>, RAG pipelines, real-time inference, backend APIs, and ML infrastructure.
              </p>
              <p>
                I focus on end-to-end AI delivery: model and retrieval design, evaluation, API development, deployment, observability, and failure-safe production behavior. I completed my MS in Engineering Data Science at the University of Houston and am targeting AI Engineer, LLM Engineer, and ML Engineer roles in the US.
              </p>
              <p>
                The work I want to do next sits at the intersection of LLM product engineering and ML systems: agents that use tools reliably, retrieval systems that are evaluated rigorously, and inference services that hold up in production.
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
