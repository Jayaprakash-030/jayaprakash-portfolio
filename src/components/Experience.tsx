import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, ChevronDown, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Machine Learning Engineer Intern',
    company: 'Tesla Solutions Inc.',
    image: '/teslasolutions.png',
    period: 'Sep 2025 - May 2026',
    location: 'Houston, TX · On-site',
    description:
      'Engineering real-time ML inference, backend integration, and production monitoring for well-state prediction in oil and gas operations.',
    achievements: [
      'Engineered a real-time production ML inference pipeline in C#/.NET with temporal feature engineering and ONNX Runtime model serving.',
      'Raised multi-well operational state prediction accuracy from 85% to 95% by training a PyTorch LSTM and deploying it through ONNX Runtime.',
      'Increased RAMPING-state recall from 71% to 96% by engineering lag, rolling statistics, and choke rate-of-change features.',
      'Implemented structured .NET logging, Grafana prediction dashboards, inference failure monitoring, and Azure DevOps CI pipelines.',
    ],
    technologies: [
      'PyTorch',
      'LSTM',
      'Time-Series Modeling',
      'Feature Engineering',
      'ONNX Runtime',
      'C#/.NET',
      'Grafana',
      'Azure DevOps',
    ],
  },
  {
    title: 'Associate Data Scientist',
    company: 'Optum Global Solutions (UHG)',
    image: '/optum.png',
    period: 'May 2022 - Jul 2024',
    location: 'Hyderabad, India',
    description:
      'Built scalable healthcare ML monitoring, backend data services, and production data processing workflows over large datasets.',
    achievements: [
      'Developed a FastAPI backend with scheduled, Dockerized batch services to migrate thousands of Power BI subscription and bursting reports at scale.',
      'Designed a database-backed tracking layer that recorded per-batch migration status and surfaced recurring report failures.',
      'Reduced infrastructure costs by $200K annually by migrating data processing to the PySpark Pandas API and processing 5TB+ datasets 40% faster.',
      'Built automated data drift monitoring pipelines and Grafana dashboards to detect distribution shifts across 20+ production ML models.',
    ],
    technologies: [
      'PySpark',
      'FastAPI',
      'Docker',
      'Python',
      'Power BI',
      'Grafana',
      'SQL',
      'Model Monitoring',
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From healthcare to energy, here’s my experience building scalable ML and GenAI systems.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[34px] md:left-[46px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-full shadow-[0_0_12px_rgba(var(--primary-rgb),0.25)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCards.includes(index);

              return (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 md:pl-28"
                >
                  <div className="absolute left-[27px] md:left-[39px] top-0 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-10 shadow-[0_0_12px_rgba(var(--primary-rgb),0.5)] animate-pulse-glow" />

                  {/* Horizontal Connector Line */}
                  <div className="absolute left-[43px] md:left-[55px] top-6 w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full opacity-60" />

                  <motion.div
                    className={`glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 ${isExpanded ? 'border-primary/40 bg-secondary/40' : ''
                      }`}
                    whileHover={{ scale: 1.005 }}
                    layout
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 md:gap-6 mb-6">
                        {/* Logo Container */}
                        <div className="shrink-0">
                          <div className="w-20 h-16 md:w-24 md:h-18 rounded-xl bg-transparent flex items-center justify-center">
                            {exp.image ? (
                              <img
                                src={exp.image}
                                alt={exp.company}
                                className="w-full h-full object-contain p-0"
                              />
                            ) : null}
                          </div>
                        </div>

                        {/* Title & Company */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-base font-semibold text-primary mb-2">
                            {exp.company}
                          </h4>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={14} className="text-primary" /> {exp.period}
                            </span>
                            {exp.location && (
                              <span className="flex items-center gap-1.5">
                                <MapPin size={14} className="text-primary" /> {exp.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                      >
                        {isExpanded ? 'Show Less' : 'Key Achievements & Skills'}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                            }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0 space-y-6 border-t border-border/50 mt-2">
                            {/* Achievements */}
                            <div className="pt-6">
                              <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                <span className="w-2 h-2 rounded-full bg-primary" /> Key Achievements
                              </h5>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                <span className="w-2 h-2 rounded-full bg-primary" /> Technologies Used
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
