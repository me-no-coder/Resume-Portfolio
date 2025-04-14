import { FC } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RiExternalLinkLine, RiCustomerService2Line, RiBarChartBoxAiLine, RiCodeBoxLine, RiDownloadLine, RiVerifiedBadgeFill } from "react-icons/ri";
import { portfolioData } from "@/data/portfolio";

const Certifications: FC = () => {
  const { certifications, trailhead } = portfolioData;

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

  const getCertificateIcon = (iconType: string) => {
    switch (iconType) {
      case 'customer-service':
        return <RiCustomerService2Line className="text-4xl text-primary" />;
      case 'ai':
        return <RiBarChartBoxAiLine className="text-4xl text-primary" />;
      case 'code':
        return <RiCodeBoxLine className="text-4xl text-primary" />;
      default:
        return <RiCodeBoxLine className="text-4xl text-primary" />;
    }
  };

  return (
    <section id="certifications" className="px-6 py-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-heading font-bold mb-2 text-primary">Certifications</h2>
          <p className="text-muted-foreground mb-12">My Salesforce credentials and achievements</p>
        </motion.div>
        
        <motion.div 
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="certificate-badge bg-card p-6 rounded-xl shadow-md border flex flex-col items-center"
              variants={fadeIn}
            >
              <div className="w-24 h-24 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                {getCertificateIcon(cert.icon)}
              </div>
              <h3 className="font-heading font-semibold text-lg text-center mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground text-center mb-1">{cert.date}</p>
              <p className="text-xs text-muted-foreground text-center mb-3">
                Credential ID: {cert.credentialId}
              </p>
              <div className="flex flex-col w-full gap-2 mb-3">
                <div className="w-full bg-green-600/20 text-green-600 text-sm font-medium text-center py-1 rounded-full flex items-center justify-center">
                  <RiVerifiedBadgeFill className="mr-1" /> Credential Verified
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(`/certificates/${cert.certificateFile}`, '_blank')}
                >
                  <RiDownloadLine className="mr-1" /> View Certificate
                </Button>
                <Button 
                  variant="link" 
                  size="sm" 
                  className="text-xs text-muted-foreground"
                  onClick={() => window.open("https://sforce.co/verifycerts", '_blank')}
                >
                  <RiExternalLinkLine className="mr-1" /> Verify at Salesforce
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 bg-gradient-to-r from-primary to-blue-400 p-8 rounded-xl text-primary-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-heading font-bold mb-2">Trailhead Expeditioner</h3>
              <p className="text-primary-foreground/80 mb-4">Continuous learning and skill development</p>
              <div className="flex items-center space-x-6">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">{trailhead.badges}</span>
                  <span className="text-sm text-primary-foreground/80">Badges Earned</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">{trailhead.points}</span>
                  <span className="text-sm text-primary-foreground/80">Points</span>
                </div>
              </div>
            </div>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open("https://trailblazer.me", "_blank")}
            >
              View Trailhead Profile <RiExternalLinkLine className="ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
