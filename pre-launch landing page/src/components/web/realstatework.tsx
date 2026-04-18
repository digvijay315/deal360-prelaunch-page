"use client"

import { useTranslations } from "next-intl";

export default function RealstateWork() {
  const t = useTranslations("realstateWork");

  return (
    <section className="w-full bg-white overflow-visible lg:mb-20 lg:mt-20 relative dark:bg-black">
      <div className="mx-auto flex flex-col lg:flex-row lg:min-h-[450px] relative z-10">

        {/* Left: Text Content */}
        <div className="flex items-center w-full lg:w-[52%] px-6 sm:px-10 lg:pl-[10%] lg:pr-6 py-16 lg:py-0 shrink-0">
          <div className="flex flex-col gap-10 lg:gap-[72px]">
            <h1 className="font-semibold text-[34px] sm:font-medium sm:text-5xl lg:text-[64px] leading-[110%]">
              <span className="text-[#4B4B4B] dark:text-white">{t("heading.part1")} </span>
              <span className="text-[var(--color-primary)]  2xl:whitespace-nowrap">
                {t("heading.highlight")}
              </span>
              <span className="text-[#4B4B4B]">{t("heading.part3")}</span>
            </h1>
            <p className="font-poppins font-normal text-base sm:text-lg lg:text-[20px] leading-[150%] text-color-text max-w-[827px] text-[var(--color-text)] dark:text-white/70">
              {t("body")}
            </p>
          </div>
        </div>

        {/* Right: Laptop Image */}
        <div className="hidden lg:flex w-full lg:w-[48%] items-center justify-center lg:justify-start overflow-visible relative flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ac7bf8cd0620392dd739da3e01adcc3ad1c4c470?width=2884"
            alt={t("body")}
            className="w-full max-w-[700px] sm:max-w-[700px] lg:max-w-none h-auto object-contain lg:-mt-32 lg:-mb-32"
          />
        </div>

        {/* Mobile / Tablet Image */}
        <div className="lg:hidden w-full items-center justify-center overflow-visible relative flex-shrink-0">
          <img
            src="./laptop.png"
            alt={t("body")}
            className="w-full max-w-[700px] sm:max-w-[700px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}