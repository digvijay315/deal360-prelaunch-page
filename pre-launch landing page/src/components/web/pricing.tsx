"use client";

import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("plansbuilt");

  return (
    <div className="w-full bg-white text-[var(--color-text)] overflow-hidden mt-10 pt-20 dark:bg-black">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48">

        <div className="flex flex-col justify-center items-center gap-6 text-center w-full">

          {/* Heading */}
          <h1 className="text-[34px] sm:text-5xl lg:text-6xl xl:text-[64px] font-medium leading-[110%] break-words text-[var(--color-text)] dark:text-white">
            <span>{t("heading1")} </span>
            <span className="text-[var(--color-primary)]">{t("headingHighlight")}</span>
            <span> {t("heading2")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl font-normal text-[var(--color-text-secondary)] text-[var(--color-text)] dark:text-white/70 leading-[150%] max-w-full md:max-w-2xl break-words">
            {t("subtitle")}
          </p>

          {/* Early registration */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-medium leading-[110%] text-[var(--color-primary)] break-words">
            {t("earlyRegistrationOpen")}
          </h2>

        </div>
      </div>
    </div>
  );
}