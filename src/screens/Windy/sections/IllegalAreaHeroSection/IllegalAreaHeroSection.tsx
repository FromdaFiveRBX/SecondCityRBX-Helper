import React from "react";
import { Badge } from "../../../../components/ui/badge";

// ... Keep existing icons & secondaryCtaClass definition ...

interface IllegalAreaHeroSectionProps {
  selectedRole: "faction" | "civilian";
  onRoleChange: (role: "faction" | "civilian") => void;
}

// Place the icon placeholders right here:
const IconOpenSupplyDrop = () => <span>📦</span>;
const IconViewAllWeapons = () => <span>🔫</span>;
const IconViewSkillInformation = () => <span>⚡</span>;
const IconFaction = () => <span>🛡️</span>;
const IconIllegalCivilian = () => <span>👤</span>;

export const IllegalAreaHeroSection = ({
  selectedRole,
  onRoleChange,
}: IllegalAreaHeroSectionProps): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[843px] w-full">
        {/* Background Layers */}
        <div className="absolute inset-0 opacity-[0.42]">
          <div className="absolute inset-0 [background:url(./illegal-area-background.png)_50%_50%_/_cover]" />
          <img
            className="absolute left-1/2 top-0 hidden h-[843px] w-[878px] -translate-x-[27%] object-cover lg:block"
            alt="Background overlay middle"
            src="rectangleNew001.png"
          />
          <img
            className="absolute right-0 top-0 hidden h-[702px] w-[560px] object-cover xl:block"
            alt="Background overlay right"
            src="rectangleNew002.png"
          />
          <img
            className="absolute left-0 top-0 h-full max-w-[338px] object-cover"
            alt="Background left"
            src="rectangleNew002.png"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,7,0.53)_0%,rgba(5,6,7,0.3)_40%,rgba(5,6,7,0.47)_100%)] opacity-50" />
        <div className="absolute inset-0 opacity-[0.18] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.06)_3%,rgba(255,255,255,0)_3%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,10,0.22)_0%,rgba(5,7,10,0.58)_58%,rgba(5,7,10,0.75)_100%)]" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[843px] w-full max-w-[1440px] flex-col justify-between px-4 pb-12 pt-20 sm:px-6 md:px-8 md:pb-16 md:pt-24">
          <header className="flex w-full max-w-[860px] flex-col items-start">
            <Badge className="h-auto rounded-xl border-none bg-transparent px-3.5 py-2 [font-family:'Inter',Helvetica] text-xs font-bold tracking-[0.48px] text-[#f5f7fa] hover:bg-transparent">
              <span className="mr-2 inline-flex shrink-0 items-center">
                <img className="block" alt="Second City icon" src="secondcity.svg" />
              </span>
            </Badge>
            <div className="max-w-[860px] pt-5">
              <h1 className="[font-family:'Inter',Helvetica] text-[40px] font-black leading-[1.02] tracking-[-2.4px] text-[#f5f7fa] sm:text-[52px] md:text-7xl md:tracking-[-3.60px]">
                Second City <span className="text-xs uppercase tracking-widest text-[#b8c7d9]/60">RBX</span> Illegal Area
              </h1>
            </div>
            <div className="max-w-[660px] pt-[17px] md:pr-[34.92px]">
              <p className="[font-family:'Inter',Helvetica] text-base font-normal leading-[27.2px] tracking-[0] text-[#9aa6b2]">
                Browse supply drops, skill information, and all firearms and drugs Second City RBX has to offer.
              </p>
            </div>
            <nav aria-label="Illegal area hero actions" className="pt-7">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#supply-drop"
                  className="inline-flex rounded-lg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8c7d9]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050607]"
                  aria-label="Open supply drop — go to random wheel"
                >
                  <IconOpenSupplyDrop />
                </a>
                <a href="#weapon-catalog" className={secondaryCtaClass}>
                  <IconViewAllWeapons />
                  <span className="flex items-center justify-center text-center">View all weapons</span>
                </a>
                <a href="#skill-information" className={secondaryCtaClass}>
                  <span className="text-[#f5f7fa]">
                    <IconViewSkillInformation />
                  </span>
                  <span className="flex items-center justify-center text-center">View skill information</span>
                </a>
                <a href="#windy-attributes" className={secondaryCtaClass}>
                  <span className="text-[#f5f7fa]">
                    <IconViewSkillInformation />
                  </span>
                  <span className="flex items-center justify-center text-center">View attributes</span>
                </a>
              </div>
            </nav>
          </header>

          {/* Role Toggle Switch */}
          <div className="z-10 mt-12 flex flex-col items-center justify-center text-center">
            <span className="mb-3 text-xs font-bold tracking-[0.15em] text-[#b8c7d9]/60 uppercase">
              SELECT ROLE
            </span>
            <div
              className="inline-flex rounded-full border border-[#161b22] bg-[#080b10]/90 p-1.5 backdrop-blur-md"
              role="group"
              aria-label="Select player role"
            >
              <button
                type="button"
                onClick={() => onRoleChange("faction")}
                aria-pressed={selectedRole === "faction"}
                className={`inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-[14px] font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8c7d9]/50 ${
                  selectedRole === "faction"
                    ? "bg-[#c8d6e5] text-[#080b10] shadow-md"
                    : "text-[#f5f7fa]/70 hover:text-[#f5f7fa]"
                }`}
              >
                <IconFaction />
                <span>FACTION</span>
              </button>

              <button
                type="button"
                onClick={() => onRoleChange("civilian")}
                aria-pressed={selectedRole === "civilian"}
                className={`inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-[14px] font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8c7d9]/50 ${
                  selectedRole === "civilian"
                    ? "bg-[#c8d6e5] text-[#080b10] shadow-md"
                    : "text-[#f5f7fa]/70 hover:text-[#f5f7fa]"
                }`}
              >
                <IconIllegalCivilian />
                <span>ILLEGAL CIVILIAN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
