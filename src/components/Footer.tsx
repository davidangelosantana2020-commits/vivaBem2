import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE } from "../constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container border-t border-outline-variant/20 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif italic text-primary">
              Viva Bem e Melhor
            </Link>
            <p className="text-sm font-light text-on-surface-variant leading-relaxed">
              Pequenos cuidados diários para uma vida mais leve. Nossa missão é apoiar sua jornada de bem-estar com praticidade e leveza.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/proposta" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Proposta</Link>
              </li>
              <li>
                <Link to="/beneficios" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Benefícios</Link>
              </li>
              <li>
                <Link to="/produtos" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Produtos</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Sobre</Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/privacidade" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Privacidade</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Cookies</Link>
              </li>
              <li>
                <Link to="/termos" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Termos de Uso</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm font-light text-on-surface-variant hover:text-primary transition-colors">Isenção de Responsabilidade</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm font-light text-on-surface-variant">
                <Mail size={16} className="text-secondary" />
                <span>{CONTACT_EMAIL}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm font-light text-on-surface-variant">
                <Phone size={16} className="text-secondary" />
                <span>{CONTACT_PHONE}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60">
            © {currentYear} Viva Bem e Melhor. Todos os direitos reservados.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/40 italic">
            Beleza e bem-estar em cada detalhe.
          </p>
        </div>
      </div>
    </footer>
  );
}
