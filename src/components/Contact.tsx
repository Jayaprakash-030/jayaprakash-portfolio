import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, MapPin, Linkedin, Github, Phone } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CONTACT_EMAIL = 'jayaprakashguntumani@gmail.com';

const buildMailtoLink = ({
  fromName,
  fromEmail,
  subject,
  message,
}: {
  fromName: string;
  fromEmail: string;
  subject: string;
  message: string;
}) => {
  const emailSubject = subject || 'Portfolio inquiry';
  const emailBody = [
    message,
    '',
    '---',
    `Name: ${fromName}`,
    `Email: ${fromEmail}`,
  ].join('\n');

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
};

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fromName = String(formData.get('from_name') || '').trim();
    const fromEmail = String(formData.get('from_email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const mailtoLink = buildMailtoLink({ fromName, fromEmail, subject, message });

    setSubmitStatus({
      message: `Your email app opened with a draft addressed to ${CONTACT_EMAIL}. Please review and send it there.`,
    });
    toast({
      title: "Email draft opened",
      description: `Please send the prefilled email to ${CONTACT_EMAIL}.`,
    });
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 bg-radial-gradient opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in AI Engineer roles, production LLM systems, RAG applications, or applied ML platforms? I’d love to connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-semibold mb-6">Get in Touch</h3>

            <div className="space-y-6">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-4 glass-card p-4 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">{CONTACT_EMAIL}</p>
                </div>
              </a>

              <a
                href="tel:+17135516420"
                className="flex items-center gap-4 glass-card p-4 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium group-hover:text-primary transition-colors">+1 (713) 551-6420</p>
                </div>
              </a>

              <div className="flex items-center gap-4 glass-card p-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Houston, TX</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-4">Connect on social media</p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/jayaprakashguntumani03/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Jayaprakash-030" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Github size={20} />
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="social-icon">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  <Send size={18} />
                  Open Email Draft
                </button>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Portfolio inquiry')}`}
                  className="btn-secondary w-full text-sm"
                >
                  <Mail size={18} />
                  Email Directly
                </a>
                {submitStatus && (
                  <p
                    className="text-sm leading-relaxed text-primary"
                    role="status"
                  >
                    {submitStatus.message}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
