import React from "react";
import { Download, Wallet, Globe } from "lucide-react";

export const steps = [
  {
    number: "01",
    icon: <Download className="h-6 w-6" />,
    title: "Create Your Account",
    description: "Sign up quickly with our streamlined onboarding. No complicated forms or lengthy verification."
  },
  {
    number: "02",
    icon: <Wallet className="h-6 w-6" />,
    title: "Deposit Funds",
    description: "Easily deposit your local currency (e.g., NGN) or cryptocurrency into your non-custodial DeFiGate wallet."
  },
  {
    number: "03",
    icon: <Globe className="h-6 w-6" />,
    title: "Move Crypto Anywhere",
    description: "Send or receive crypto across supported blockchains instantly and securely, or convert back to local currency when needed."
  }
];
