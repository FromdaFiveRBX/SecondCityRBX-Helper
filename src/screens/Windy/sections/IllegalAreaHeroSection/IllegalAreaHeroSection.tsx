import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";

const secondaryCtaClass =
  "inline-flex h-auto shrink-0 items-center gap-2 rounded-lg border border-[#161b22] bg-[#080b10b8] px-7 py-4 [font-family:'Inter',Helvetica] text-[15px] font-bold leading-normal tracking-[0] text-[#f5f7fa] backdrop-blur-[5px] backdrop-brightness-[100%] transition-colors hover:bg-[#080b10]/90 [-webkit-backdrop-filter:blur(5px)_brightness(100%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8c7d9]/40";

function IconViewAllWeapons() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g clipPath="url(#hero_clip_view_weapons)">
        <path
          d="M9 16.5V8.99999M15.2025 13.7025L16.5 15M15.75 7.87349V5.99999C15.7495 5.46464 15.4636 4.97016 15 4.70249L9.75 1.70249C9.2859 1.43454 8.7141 1.43454 8.25 1.70249L3 4.70249C2.53637 4.97016 2.25055 5.46464 2.25 5.99999V12C2.25082 12.5351 2.53661 13.0292 3 13.2967L8.25 16.2967C8.71397 16.5649 9.28576 16.5652 9.75 16.2975L10.485 15.8782"
          stroke="#F5F7FA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.4675 5.25001L9 9.00001L15.5325 5.25001M5.625 3.20251L12.3727 7.06351"
          stroke="#F5F7FA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12.375C12 13.4098 12.8402 14.25 13.875 14.25C14.9098 14.25 15.75 13.4098 15.75 12.375C15.75 11.3402 14.9098 10.5 13.875 10.5C12.8402 10.5 12 11.3402 12 12.375V12.375"
          stroke="#F5F7FA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="hero_clip_view_weapons">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function IconOpenSupplyDrop() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M15 5.25L9 2.25L3 5.25M15 5.25V12.75L9 15.75M15 5.25L9 8.25M3 5.25V12.75L9 15.75M3 5.25L9 8.25M9 8.25V15.75"
        stroke="#F5F7FA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconViewSkillInformation() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M3 4.5H15M3 9H15M3 13.5H9"
        stroke="#F5F7FA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconFaction() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M9 1.5L2.25 4.5V8.25C2.25 12.42 5.13 16.26 9 17.25C12.87 16.26 15.75 12.42 15.75 8.25V4.5L9 1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 9L8.25 10.5L11.25 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconIllegalCivilian() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M9 2.25C5.82 2.25 3.25 4.82 3.25 8V9.75C3.25 10.58 3.92 11.25 4.75 11.25H13.25C14.08 11.25 14.75 10.58 14.75 9.75V8C14.75 4.82 12.18 2.25 9 2.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 15.75C3.75 13.26 5.76 11.25 8.25 11.25H9.75C12.24 11.25 14.25 13.26 14.25 15.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const IllegalAreaHeroSection = (): JSX.Element => {
  const [selectedRole, setSelectedRole] = useState<"faction" | "civilian">("faction");

  return (
    <div className="relative w-full overflow-hidden bg-[#05070a] text-[#f5f7fa] py-12 px-8 [font-family:'Inter',Helvetica]">
      {/* Upper Content Section */}
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Second City <span className="text-xs uppercase tracking-widest text-[#b8c7d9]/60">RBX2</span> Illegal Area
          </h1>
          <p className="max-w-xl text-[15px] font-medium leading-relaxed text-[#b8c7d9]/80">
            Browse supply drops, skill information, and all firearms and drugs Second City RBX has to offer.
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-3">
          <button className={secondaryCtaClass}>
            <IconOpenSupplyDrop />
            <span>Open supply drop</span>
          </button>
          
          <button className={secondaryCtaClass}>
            <IconViewAllWeapons />
            <span>View all weapons</span>
          </button>
          
          <button className={secondaryCtaClass}>
            <IconViewSkillInformation />
            <span>View skill information</span>
          </button>

          <button className={secondaryCtaClass}>
            <IconViewSkillInformation />
            <span>View attributes</span>
          </button>
        </div>

        {/* --- SELECT ROLE TOGGLE SWITCH --- */}
        <div className="flex flex-col items-center justify-center pt-8 pb-4">
          <span className="mb-3 text-xs font-bold tracking-[0.15em] text-[#b8c7d9]/60 uppercase">
            SELECT ROLE
          </span>
          <div className="inline-flex rounded-full border border-[#161b22] bg-[#080b10]/90 p-1.5 backdrop-blur-md">
            <button
              onClick={() => setSelectedRole("faction")}
              className={`inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-[14px] font-bold transition-all duration-200 ${
                selectedRole === "faction"
                  ? "bg-[#c8d6e5] text-[#080b10] shadow-md"
                  : "text-[#f5f7fa]/70 hover:text-[#f5f7fa]"
              }`}
            >
              <IconFaction />
              <span>FACTION</span>
            </button>

            <button
              onClick={() => setSelectedRole("civilian")}
              className={`inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-[14px] font-bold transition-all duration-200 ${
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
  );
};
