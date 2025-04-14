import { FC } from "react";
import { BsTelephone } from "react-icons/bs";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { HiGlobeAlt } from "react-icons/hi";
import { portfolioData } from "@/data/portfolio";

export const Footer: FC = () => {
  const { socialLinks } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 bg-card dark:bg-gray-900 border-t">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center text-primary-foreground font-bold text-sm">
                MR
              </div>
              <div className="ml-3">
                <h3 className="font-heading font-bold text-xl text-foreground">Mrenank Rastogi</h3>
                <p className="text-sm text-muted-foreground">Salesforce Developer</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-5">
            {socialLinks.github && (
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <SiGithub className="text-xl" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <SiLinkedin className="text-xl" />
              </a>
            )}
            {socialLinks.website && (
              <a 
                href={socialLinks.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
                aria-label="Personal Website"
              >
                <HiGlobeAlt className="text-xl" />
              </a>
            )}
            {socialLinks.email && (
              <a 
                href={`mailto:${socialLinks.email}`} 
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
                aria-label="Email Contact"
              >
                <SiGmail className="text-xl" />
              </a>
            )}
            {socialLinks.phone && (
              <a 
                href={`tel:${socialLinks.phone}`} 
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
                aria-label="Phone Contact"
              >
                <BsTelephone className="text-xl" />
              </a>
            )}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} Mrenank Rastogi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
