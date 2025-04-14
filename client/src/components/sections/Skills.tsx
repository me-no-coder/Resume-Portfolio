import { FC, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { motion, useAnimation, useInView } from "framer-motion";
import { RiCodeBoxLine, RiTerminalBoxLine, RiCloudLine, RiRobotLine, RiBarChartBoxAiLine } from "react-icons/ri";
import { portfolioData } from "@/data/portfolio";

const Skills: FC = () => {
  const { skills } = portfolioData;
  const controlsRef = useRef(null);
  const isInView = useInView(controlsRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const renderDevToolIcon = (tool: string, index: number) => {
    switch (index % 5) {
      case 0:
        return <RiCodeBoxLine className="text-2xl text-primary mr-3" />;
      case 1:
        return <RiTerminalBoxLine className="text-2xl text-primary mr-3" />;
      case 2:
        return <RiCloudLine className="text-2xl text-primary mr-3" />;
      case 3:
        return <RiRobotLine className="text-2xl text-primary mr-3" />;
      case 4:
        return <RiBarChartBoxAiLine className="text-2xl text-primary mr-3" />;
      default:
        return <RiCodeBoxLine className="text-2xl text-primary mr-3" />;
    }
  };

  return (
    <section id="skills" ref={controlsRef} className="px-6 py-12 lg:p-16 bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-heading font-bold mb-2 text-primary">Skills</h2>
          <p className="text-muted-foreground mb-12">My technical expertise and proficiencies</p>
        </motion.div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div initial="hidden" animate={controls} variants={fadeIn}>
            <h3 className="text-xl font-heading font-semibold mb-6">Salesforce Stack</h3>
            
            <div className="space-y-6">
              {skills.salesforceStack.map((skill, index) => (
                <div 
                  key={index} 
                  className="group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground/80 group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">{skill.proficiency}%</span>
                  </div>
                  <div className="progress-bar bg-muted/50 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-blue-400 group-hover:from-blue-500 group-hover:to-primary transition-colors duration-500"
                      initial={{ width: "0%" }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                      whileHover={{ scale: 1.03 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div initial="hidden" animate={controls} variants={fadeIn}>
            <h3 className="text-xl font-heading font-semibold mb-6">Development Tools</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.devTools.map((tool, index) => (
                <div 
                  key={index} 
                  className="bg-card p-4 rounded-lg shadow-sm border flex items-center transition-all duration-300 hover:shadow-md hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
                >
                  {renderDevToolIcon(tool, index)}
                  <span className="font-medium text-foreground/80 group-hover:text-foreground">{tool}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-heading font-semibold mb-6">Additional Skills</h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.additionalSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
