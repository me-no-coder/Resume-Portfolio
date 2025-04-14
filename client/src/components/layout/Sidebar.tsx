import { FC } from "react";
import { cn, scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { RiBriefcaseLine, RiCodeBoxLine, RiHome4Line, RiToolsLine, RiTrophyLine, RiUser3Line } from "react-icons/ri";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { HiGlobeAlt } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { portfolioData } from "@/data/portfolio";

interface SidebarProps {
  activeSection: string;
}

export const Sidebar: FC<SidebarProps> = ({ activeSection }) => {
  const { socialLinks, resumeUrl } = portfolioData;

  const navItems = [
    { id: "home", label: "Home", icon: <RiHome4Line className="mr-3 text-lg" /> },
    { id: "about", label: "About", icon: <RiUser3Line className="mr-3 text-lg" /> },
    { id: "experience", label: "Experience", icon: <RiBriefcaseLine className="mr-3 text-lg" /> },
    { id: "projects", label: "Projects", icon: <RiCodeBoxLine className="mr-3 text-lg" /> },
    { id: "skills", label: "Skills", icon: <RiToolsLine className="mr-3 text-lg" /> },
    { id: "certifications", label: "Certifications", icon: <RiTrophyLine className="mr-3 text-lg" /> },
    { id: "contact", label: "Contact", icon: <Mail className="mr-3 h-4 w-4" /> },
  ];

  const handleDownloadResume = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <aside className="lg:w-64 lg:fixed lg:h-screen bg-background border-r border-border p-6 z-10">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center text-white font-bold text-lg">
            MR
          </div>
          <div className="ml-3">
            <h1 className="font-heading font-bold text-xl">Mrenank Rastogi</h1>
            <p className="text-sm text-muted-foreground">Salesforce Developer</p>
          </div>
        </div>
        
        <nav className="flex-grow">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={cn(
                    "nav-link font-medium flex items-center",
                    activeSection === item.id 
                      ? "text-primary active" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.icon} {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-auto pt-6">
          <div className="flex space-x-3">
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiGithub className="text-xl" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiLinkedin className="text-xl" />
              </a>
            )}
            {socialLinks.website && (
              <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <HiGlobeAlt className="text-xl" />
              </a>
            )}
            {socialLinks.email && (
              <a href={`mailto:${socialLinks.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                <SiGmail className="text-xl" />
              </a>
            )}
          </div>
          <div className="mt-4">
            <Button 
              onClick={handleDownloadResume}
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
