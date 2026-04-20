
"use client"

import dynamic from "next/dynamic";
// import { AgentsSection } from '@/components/web/AgentsSection'
// import Brokerage from '@/components/web/Brokerage'
// import { HeroSection } from '@/components/web/HeroSection'
// import { IncentivesSection } from '@/components/web/IncentivesSection'
// import PropertyIntent from '@/components/web/IntentSection'
// import Joindeal from '@/components/web/Joindeal'
// import OwnersInControl from '@/components/web/OwnersInControl'
// import NotAPortalSection from '@/components/web/NotAPortalSection'
// import { PortalSection } from '@/components/web/PortalSection'
// import { PricingSection } from '@/components/web/PricingSection'
// import PropertyManager from '@/components/web/PropertyManager'
// import ConnectionVerification from '@/components/web/ConnectionVerification'
// import { VerificationSection } from '@/components/web/VerificationSection'
// import SubHeroSection from '@/components/web/SuBHeroSection'



// import SmarterFilters from '@/components/web/SmarterFilters'

const SmarterFilters = dynamic(() => import("@/components/web/SmarterFilters"), {
  ssr: false,
});


import WhatsComing from '@/components/web/WhatsComing'
// import HeroSection from '@/components/web/HeroSection'

const HeroSection = dynamic(() => import("@/components/web/HeroSection"), {
  ssr: false,
});
// import StartWithRequirements from '@/components/web/startwith_requirments'

const StartWithRequirements = dynamic(() => import("@/components/web/startwith_requirments"), {
  ssr: false,
});
import ForAgents from '@/components/web/for_agents'
import ForBrockerage from '@/components/web/for_brokerage'
import RealstateWork from '@/components/web/realstatework'
import EarlyAccessProgram from '@/components/web/early_access_program'
import Pricing from '@/components/web/pricing'
import PricingGlowWrapper from '@/components/web/price'
import ConnectionVerification from '@/components/web/ConnectionVerification'
import Rewards from '@/components/web/rewards'
import RewardsCard from '@/components/web/rewards_card'

export default function Home() {
  return (
    <div className="bg-[#EDEEF0] overflow-x-hidden dark:bg-black font-[Poppins]">

      {/* Requirements / Hero */}
      <section id="hero">
        {/* <HeroSection /> */}
        <HeroSection />
      </section>

      {/* <WhatsComing />

      <StartWithRequirements />

      <ConnectionVerification />

      <section id="agent">
        <ForAgents />
      </section>

      <section id="brokerage">
        <ForBrockerage />
      </section>

      <SmarterFilters />

      <RealstateWork />

      <EarlyAccessProgram />

      <section id="plan">
      <Pricing />
      </section>

      <PricingGlowWrapper />

      <Rewards />

      <RewardsCard /> */}


      {/* Buying Intent */}
      {/* <section id="buying-intent">
        <PropertyIntent />
      </section> */}

      {/* <VerificationSection /> */}

      {/* Agent */}
      {/* <section id="agent">
        <AgentsSection />
      </section> */}

      {/* Brokerages */}
      {/* <section id="brokerages">
        <Brokerage />
      </section>
      <SmarterFilters/>
      <OwnersInControl/>
      <PropertyManager/>
      <NotAPortalSection/> */}
      {/* Investor */}
      {/* <section id="investor">
        <PortfolioSection />
      </section> */}

      {/* <Joindeal />
      <section id="plans">
        <PricingSection />
      </section>
      <IncentivesSection /> */}
    </div>
  )
}
