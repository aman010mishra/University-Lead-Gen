import { University } from "@shared/schema";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  university: University;
}

export default function Footer({ university }: FooterProps) {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              {university.shortName}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {university.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-secondary hover-elevate active-elevate-2 flex items-center justify-center transition-colors"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-secondary hover-elevate active-elevate-2 flex items-center justify-center transition-colors"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-secondary hover-elevate active-elevate-2 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-secondary hover-elevate active-elevate-2 flex items-center justify-center transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Courses", "Admissions", "Placements", "Campus Life", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-${link.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Programs</h3>
            <ul className="space-y-3">
              {university.courses.slice(0, 6).map((course) => (
                <li key={course.id}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-course-${course.id}`}
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {university.contact.address}, {university.contact.city}, {university.contact.state}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <a
                  href={`tel:${university.contact.phone}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-phone"
                >
                  {university.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <a
                  href={`mailto:${university.contact.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-email"
                >
                  {university.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {university.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
