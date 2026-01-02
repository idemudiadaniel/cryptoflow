import React from 'react';
import { Activity, Lock, Zap, Compass, Shield, Globe } from 'lucide-react';

export const features = [
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Seamless Fiat-to-Crypto",
    description: "Deposit local currency and instantly convert it to cryptocurrency without relying on a traditional bank."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Bank-Level Security",
    description: "Your funds are protected with 256-bit encryption, multi-factor authentication, and regular security audits."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Transfers",
    description: "Send or receive crypto across supported blockchains quickly and securely."
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Multi-Blockchain Support",
    description: "Bridge your assets to Ethereum, BSC, Polygon, and other supported networks with ease."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Access",
    description: "DeFiGate is accessible from over 140 countries, enabling users worldwide to move between fiat and crypto."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Non-Custodial Wallets",
    description: "You retain full control of your private keys; DeFiGate never holds custody of your funds."
  }
];
