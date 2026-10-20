"use client"

import WavingPortfolioLanding from "@/components/ui/waving-portfolio-landing"

export default function Demo() {
  return (
    <WavingPortfolioLanding
      avatarSrc="/avatar.png"
      name="Aqila"
      year="H071251039"
      roles={["Information Systems", "AI & Vision 2026"]}
      signature="AQ/ILA"
      greeting="Hi, I'm Aqila!"
      title="Aqila Sandewang Portfolio"
    />
  )
}
