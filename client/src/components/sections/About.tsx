import { FC } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RiUserAddLine, RiGraduationCapLine, RiBookOpenLine, RiAwardFill } from "react-icons/ri";
import { portfolioData } from "@/data/portfolio";
import { scrollToSection } from "@/lib/utils";

const About: FC = () => {
  const { about } = portfolioData;
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="px-6 py-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-heading font-bold mb-2 text-primary">About Me</h2>
          <p className="text-muted-foreground mb-12">Learn more about my background and expertise</p>
        </motion.div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Software development team" 
              className="w-full rounded-xl shadow-lg" 
            />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h3 className="text-xl font-heading font-semibold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {about.professionalSummary}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-heading font-semibold mb-2">Education</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {about.education.map((edu, index) => (
                    <li key={index} className="flex items-start">
                      {index === 0 ? (
                        <RiGraduationCapLine className="mr-2 mt-1 text-primary" />
                      ) : (
                        <RiBookOpenLine className="mr-2 mt-1 text-primary" />
                      )}
                      <div>
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-sm">{edu.institution}</p>
                        <p className="text-sm">{edu.grade} ({edu.year})</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-heading font-semibold mb-2">Awards</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {about.awards.slice(0, 2).map((award, index) => (
                    <li key={index} className="flex items-start">
                      <RiAwardFill className="mr-2 mt-1 text-green-600" />
                      <div>
                        <p className="font-medium">{award.name}</p>
                        <p className="text-sm">{award.issuer}</p>
                        <p className="text-sm">{award.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')}
            >
              <RiUserAddLine className="mr-2" /> Let's Connect
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
