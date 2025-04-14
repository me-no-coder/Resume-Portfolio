import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { RiCheckLine } from "react-icons/ri";
import { portfolioData } from "@/data/portfolio";

const Experience: FC = () => {
  const { experience } = portfolioData;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="px-6 py-12 lg:p-16 bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-heading font-bold mb-2 text-primary">Experience</h2>
          <p className="text-muted-foreground mb-12">My professional journey and key achievements</p>
        </motion.div>
        
        <div className="timeline-container pl-16 relative">
          {experience.map((job, index) => (
            <motion.div 
              key={index} 
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="timeline-dot top-0"></div>
              <div className="bg-card p-6 rounded-xl shadow-md border">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-heading font-semibold text-primary">{job.title}</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {job.company}
                    </Badge>
                    <span className="ml-3 text-sm text-muted-foreground">{job.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <RiCheckLine className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <p>{responsibility}</p>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
