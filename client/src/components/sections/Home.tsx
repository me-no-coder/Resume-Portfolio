import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiAwardLine, RiCodeLine, RiTrophyLine } from "react-icons/ri";
import { portfolioData } from "@/data/portfolio";
import { scrollToSection } from "@/lib/utils";

const Home: FC = () => {
  const { name, title, summary, stats } = portfolioData;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 }
    })
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <RiCodeLine className="text-2xl" />;
      case 'award':
        return <RiAwardLine className="text-2xl" />;
      case 'trophy':
        return <RiTrophyLine className="text-2xl" />;
      default:
        return <RiCodeLine className="text-2xl" />;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-6 py-12 lg:p-16 bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              <span className="block text-muted-foreground">Hello, I'm</span>
              <span className="text-4xl lg:text-5xl text-primary">{name}</span>
            </h2>
            <h3 className="text-xl lg:text-2xl text-muted-foreground font-medium mb-6">{title}</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('experience')}
              >
                View My Work <RiArrowRightLine className="ml-2" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeInUp}
          >
            <img 
              src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Salesforce cloud technology" 
              className="w-full max-w-md rounded-2xl shadow-lg" 
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeInUp}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-md border">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {getIconComponent(stat.icon)}
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-semibold">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
