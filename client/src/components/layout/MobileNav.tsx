import { scrollToSection } from "@/lib/utils";
import { RiHome4Line, RiUser3Line, RiBriefcaseLine, RiToolsLine, RiMailLine } from "react-icons/ri";

interface MobileNavProps {
  activeSection: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeSection }) => {
  const navItems = [
    { id: "home", label: "Home", icon: <RiHome4Line className="text-xl" /> },
    { id: "about", label: "About", icon: <RiUser3Line className="text-xl" /> },
    { id: "experience", label: "Work", icon: <RiBriefcaseLine className="text-xl" /> },
    { id: "skills", label: "Skills", icon: <RiToolsLine className="text-xl" /> },
    { id: "contact", label: "Contact", icon: <RiMailLine className="text-xl" /> },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-10">
      <div className="flex justify-around px-2 py-3">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
            className={`flex flex-col items-center ${
              activeSection === item.id ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
