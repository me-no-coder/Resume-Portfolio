import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";
import { portfolioData } from "@/data/portfolio";

const Projects: FC = () => {
  const { projects } = portfolioData;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="px-6 py-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-heading font-bold mb-2 text-primary">Projects</h2>
          <p className="text-muted-foreground mb-12">Highlight of my key development projects</p>
        </motion.div>
        
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl shadow-md border overflow-hidden"
              variants={fadeIn}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <button className="text-primary font-medium hover:underline inline-flex items-center" disabled>
                  View Details <RiArrowRightLine className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
