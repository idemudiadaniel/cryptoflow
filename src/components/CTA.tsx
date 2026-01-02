import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-crypto-blue to-[#12141C] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-crypto-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-crypto-light-purple/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience seamless <span className="text-gradient">fiat-to-crypto</span> access?
          </h2>

          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users already bridging local currency to blockchain
            with DeFiGate — secure, non-custodial, and bank-independent.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="flex items-center justify-center gap-2 rounded-lg bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 py-4 font-medium transition"
            >
              Get Started for Free
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              className="rounded-lg border border-white/20 text-white hover:bg-white/5 px-8 py-4 font-medium transition"
            >
              Schedule Demo
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            No credit card required. Non-custodial by design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
