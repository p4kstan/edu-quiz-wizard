
import React from 'react';
import { Shield, FileText, Cookie, Scale } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      icon: <Shield className="w-4 h-4" />,
      label: 'Política de Privacidade',
      href: '#'
    },
    {
      icon: <FileText className="w-4 h-4" />,
      label: 'Termos de Uso',
      href: '#'
    },
    {
      icon: <Cookie className="w-4 h-4" />,
      label: 'Política de Cookies',
      href: '#'
    },
    {
      icon: <Scale className="w-4 h-4" />,
      label: 'LGPD – Lei 13.709/2018',
      href: '#'
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Main Footer Content */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Suporte educacional completo e personalizado
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sua jornada educacional começa aqui. Oferecemos soluções completas 
              para todas as suas necessidades acadêmicas e profissionais.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center justify-center space-x-2 text-sm hover:text-white transition-colors duration-200 p-3 rounded-lg hover:bg-gray-800"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* LGPD Compliance */}
          <div className="border-t border-gray-700 pt-6 mb-6">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <Scale className="w-4 h-4" />
              <span>Conforme a LGPD – Lei 13.709/2018</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 max-w-3xl mx-auto">
              Seus dados pessoais são tratados de acordo com a Lei Geral de Proteção 
              de Dados. Garantimos total segurança e privacidade das suas informações.
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400">
              © {currentYear} Soluções Educacionais. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
