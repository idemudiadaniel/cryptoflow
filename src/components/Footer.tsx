import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              DeFi<span className="text-crypto-purple">Gate</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              A decentralized financial gateway connecting local currency to
              blockchain networks through secure, non-custodial infrastructure.
            </p>
            <div className="flex space-x-4">
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-medium mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Fiat On-Ramp</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Fiat Off-Ramp</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Wallet Integration</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Multi-Chain Bridge</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Developer API</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Documentation</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Developer Guides</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Security</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Compliance</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">About DeFiGate</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Careers</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Press & Media</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Legal & Privacy</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} DeFiGate. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
