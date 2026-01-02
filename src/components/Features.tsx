import {
  Activity,
  Lock,
  Zap,
  Compass,
  Shield,
  Link2
} from 'lucide-react';

const features = [
  {
    icon: <Activity className="h-6 w-6" />,
    title: 'Fiat ↔ Crypto Gateway',
    description:
      'Seamlessly convert local currency such as NGN into cryptocurrency and back, without relying on traditional banks.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Instant On-Ramp & Off-Ramp',
    description:
      'Fast processing for deposits and withdrawals, enabling real-time movement between fiat and blockchain networks.',
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: 'Multi-Blockchain Support',
    description:
      'Send and receive assets across multiple chains including Ethereum, BSC, Polygon, and more from one gateway.',
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Non-Custodial by Design',
    description:
      'Users retain full control of their wallets and private keys. DeFiGate never holds or controls user funds.',
  },
  {
    icon: <Link2 className="h-6 w-6" />,
    title: 'Seamless Wallet Integration',
    description:
      'Connect modern wallets powered by Privy for a smooth and secure onboarding experience.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Compliance-Ready Infrastructure',
    description:
      'Built with regulatory considerations in mind, enabling compliant fiat access without compromising decentralization.',
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-crypto-blue to-[#12141C]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Built for Real-World DeFi Access
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            DeFiGate bridges everyday money and decentralized finance with a
            secure, non-custodial, and blockchain-agnostic gateway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-crypto-purple/5 group"
            >
              <div className="bg-crypto-purple/20 rounded-lg w-12 h-12 flex items-center justify-center mb-5 text-crypto-purple group-hover:bg-crypto-purple/30 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
