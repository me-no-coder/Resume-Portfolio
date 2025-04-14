import { FC, useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { RiMailLine, RiPhoneLine, RiGithubFill, RiLinkedinBoxFill, RiCodeBoxLine, RiToolsLine, RiTrophyLine } from "react-icons/ri";
import { portfolioData } from "@/data/portfolio";
import { isValidEmail, scrollToSection } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact: FC = () => {
  const { contact } = portfolioData;
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (formRef.current) {
      setIsSubmitting(true);
      // FormSubmit will handle the form submission
      formRef.current.action = `https://formsubmit.co/${contact.email}`;
      formRef.current.method = "POST";
      
      // Add hidden fields for FormSubmit configuration
      const hiddenFields = [
        { name: "_subject", value: `Portfolio Contact: ${data.subject}` },
        { name: "_captcha", value: "true" },
        { name: "_template", value: "table" },
        { name: "_next", value: window.location.href },
      ];
      
      // Remove any existing hidden fields
      formRef.current.querySelectorAll('input[type="hidden"]').forEach(el => el.remove());
      
      // Add the configuration fields
      hiddenFields.forEach(field => {
        const input = document.createElement('input');
        input.type = "hidden";
        input.name = field.name;
        input.value = field.value;
        formRef.current?.appendChild(input);
      });
      
      // Submit the form
      setTimeout(() => {
        formRef.current?.submit();
        toast({
          title: "Sending message...",
          description: "You will be redirected to complete the submission.",
          variant: "default",
        });
      }, 500);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="px-6 py-12 lg:p-16 bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-heading font-bold mb-2 text-primary">Contact Me</h2>
          <p className="text-muted-foreground mb-12">Get in touch for opportunities or collaborations</p>
        </motion.div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject of your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message" rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="bg-card p-6 rounded-xl shadow-md border mb-6">
              <h3 className="font-heading font-semibold text-xl mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <RiMailLine className="text-xl" />
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                      {contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <RiPhoneLine className="text-xl" />
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">Phone</p>
                    <a href={`tel:${contact.phone}`} className="text-primary hover:underline">
                      {contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <RiGithubFill className="text-xl" />
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">GitHub</p>
                    <a href={`https://github.com/${contact.github}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {contact.github}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <RiLinkedinBoxFill className="text-xl" />
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">LinkedIn</p>
                    <a href="https://linkedin.com/in/mrenank-rastogi-4454651b5/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {contact.linkedin}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-md border">
              <h3 className="font-heading font-semibold text-xl mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="#experience" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('experience');
                  }}
                  className="flex items-center text-muted-foreground hover:text-primary"
                >
                  <RiGithubFill className="mr-2" /> Experience
                </a>
                <a 
                  href="#projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                  className="flex items-center text-muted-foreground hover:text-primary"
                >
                  <RiCodeBoxLine className="mr-2" /> Projects
                </a>
                <a 
                  href="#skills" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                  className="flex items-center text-muted-foreground hover:text-primary"
                >
                  <RiToolsLine className="mr-2" /> Skills
                </a>
                <a 
                  href="#certifications" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('certifications');
                  }}
                  className="flex items-center text-muted-foreground hover:text-primary"
                >
                  <RiTrophyLine className="mr-2" /> Certifications
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
