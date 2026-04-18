"use client"

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

// Image paths
const firstslidebg = "/smartfilterbg1.png";
const firstslideoverlap = "/smartfilteroverlap1.png";

const secondslidebg = "/smartfilterbg2.png";
const secondslideoverlap = "/smartfilteroverlap2.png";

const thirdslidebg = "/smartfilterbg3.png";
const thirdslideoverlap = "/smartfilteroverlap3.png";

const DESKTOP_BULLETS = [
  "Real-time availability signals — eliminate outdated listings",
  "Optimised deal flow — faster path from search to transaction",
  "List and find your next property — all in one ecosystem",
];

const DESKTOP_BULLETS1 = [
  "Set complete intent upfront",
  "Eliminate unnecessary back-and-forth",
  "Enable faster, higher-quality matches",
];

const DESKTOP_BULLETS2 = [
  "Structured Listing Intent",
  "Agent proposal comparison",
  "Controlled exposure",
  "Built for serious sellers and landlords",
];

const MOBILE_BULLETS = [
  "Real-time availability signals — eliminate outdated listings",
  "Optimised deal flow — faster path from search to transaction",
  "List and find your next property — all in one ecosystem",
];

const MOBILE_BULLETS1 = [
  "Structured Listing Intent",
  "Agent proposal comparison",
  "Controlled exposure",
  "Built for serious sellers and landlords",
];

const MOBILE_BULLETS2 = [
  "Track rental income across multiple properties",
  "Monitor tenancy start, expiry, and renewal dates",
  "View portfolio performance in one place",
  "Stay organized across units, tenants, and agents",
];

function CheckIconDesktop() {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-full border border-[#4B4B4B] bg-transparent"
      style={{ width: 48, height: 48, boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)" }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="#4B4B4B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CheckIconDesktopwhite() {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-full border border-[#FFF] bg-transparent"
      style={{ width: 48, height: 48, boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CheckIconMobile() {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-full border border-[#4B4B4B] bg-transparent"
      style={{
        width: 27,
        height: 27,
        boxShadow: "0 0 6.697px 0 rgba(0,0,0,0.10)",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1612 3.34839L5.02253 9.48704L2.23223 6.69674"
          stroke="#4B4B4B"
          strokeWidth="1.67418"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ArrowIconPrev() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 24L12 16L20 8"
        stroke="#4B4B4B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIconNext() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 24L20 16L12 8"
        stroke="#4B4B4B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SlideProps = {
  slideTitle: string;
  slideDescription: string;
  slideDeal360Text?: string;
  bulletsDesktop: string[];
  bulletsMobile: string[];
  desktopGradient: string;
  mobileGradient: string;
  desktopKeyImage: string;
  desktopPhoneImage: string;
  mobilePhoneImage: string;
  mobileBgImage: string;
  isThirdSlide?: boolean;
};

function Slide({
  slideTitle,
  slideDescription,
  slideDeal360Text,
  bulletsDesktop,
  bulletsMobile,
  desktopGradient,
  mobileGradient,
  desktopKeyImage,
  desktopPhoneImage,
  mobilePhoneImage,
  mobileBgImage,
  isThirdSlide,
}: SlideProps) {

  const locale = useLocale();
  const isArabic = locale === "ar";
  const textColor = desktopKeyImage === "/smartfilterbg3.png" ? "#4B4B4B" : "white";


  return (


    <>
      {/* ===================== DESKTOP ===================== */}
      <div className="hidden md:flex relative w-full h-[700px] py-4 font-[Poppins]">

        {/* ── Left gradient column ── */}
        <div
          className="flex flex-col justify-center relative z-30 mt-10 mb-10 w-full lg:w-[56%] py-[60px] lg:py-[80px]"
          style={{ 
            background: desktopGradient, 
            padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 100px)",
          }}
        >
          <div className="lg:pr-[80px] xl:pr-[120px]">

            {/* Title */}
            <h2
              className="font-medium mb-6 lg:mb-8 max-w-[700px] leading-[110%] text-[clamp(24px,3.5vw,64px)]"
              style={{ color: textColor }}
            >
              {slideTitle}
              <br />

              {desktopKeyImage === "/smartfilterbg2.png" && (
                <span className="text-[#4B4B4B]"> {isArabic ? "التحكم" : "Control."}</span>
              )}
            </h2>




            {/* Subtitle */}
            {desktopKeyImage === "/smartfilterbg3.png" && (
              <p
                className="font-medium mb-4 max-w-[661px] leading-[150%] text-[clamp(14px,1.05vw,20px)]"
                style={{ color: textColor }}
              >
                {locale === "ar"
                  ? "التحكم الكامل في المحفظة"
                  : "Total Portfolio Control"}
              </p>
            )}

            {/* Body */}
            <p
              className={`font-normal mb-4 leading-[150%] text-[clamp(14px,1.05vw,20px)] ${desktopKeyImage === "/smartfilterbg2.png"
                ? "max-w-[495.57px]"
                : "max-w-[711px]"
                }`}
              style={{ color: textColor }}
            >
              {slideDescription}
            </p>

            {/* Optional */}
            {slideDeal360Text && (
              <p
                className="font-normal mb-10 max-w-[661px] leading-[150%] text-[clamp(14px,1.05vw,20px)]"
                style={{ color: textColor }}
              >
                {slideDeal360Text}
              </p>
            )}

            {/* Section label */}
            {desktopKeyImage === "/smartfilterbg3.png" && (
              <p
                className="font-medium mb-4 max-w-[661px] leading-[150%] text-[clamp(14px,1.05vw,20px)]"
                style={{ color: textColor }}
              >
                {isArabic
                  ? "مع مدير العقارات يمكنك:"
                  : "With Property Manager you can:"}
              </p>
            )}

            {/* Bullets */}
            <div className="flex flex-col gap-3 lg:gap-4">
              {bulletsDesktop.map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  {desktopKeyImage === "/smartfilterbg3.png" ? (
                    <CheckIconDesktop />
                  ) : (
                    <CheckIconDesktopwhite />
                  )}
                  <span
                    className="font-medium text-[clamp(13px,1.05vw,20px)]"
                    style={{ color: textColor }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            {desktopKeyImage === "/smartfilterbg3.png" && (
              <p
                className="font-medium mt-4 max-w-[661px] leading-[150%] text-[clamp(14px,1.05vw,20px)]"
                style={{ color: textColor }}
              >
                {isArabic
                  ? "مصمم للمستثمرين الذين يبحثون عن الوضوح — لا عن جداول البيانات."
                  : "Built for investors who want clarity — not spreadsheets."}
              </p>
            )}
          </div>
        </div>

        {/* ── Right image column ── */}
        <div className="relative flex-1 h-[700px]">

          {/* Background */}
          <img
            src={desktopKeyImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center z-0 rounded-tl-[50px]"
          />

          {/* Phone */}
          <img
            src={desktopPhoneImage}
            alt="App mockup"
            className="absolute object-contain z-40 top-[15%] h-[90%] transition-all duration-300"
            style={{
              left: locale === "ar" ? "auto" : (desktopPhoneImage === secondslideoverlap ? "-45%" : "-30%"),
              right: locale === "ar" ? (desktopPhoneImage === secondslideoverlap ? "-45%" : "-30%") : "auto",
              maxWidth: "140%",
            }}
          />
        </div>
      </div>

      {/* ===================== MOBILE ===================== */}
      <div className="md:hidden w-full font-[Poppins] pb-4">

        {/* Top */}
        <div className="relative w-full min-h-[520px] pb-[20px]">
          <div
            className="absolute inset-0 h-full"
            style={{ background: mobileGradient }}
          >
            <img
              src={mobileBgImage}
              alt=""
              className="absolute object-cover w-[139.5%] h-[105.3%] top-[calc(-5.3%-1.5px)] rounded-r-2xl"
            />
          </div>

          {/* Content */}
          <div className="relative z-30 pt-6 px-6 sm:pt-8 sm:px-8 font-[Poppins]">

            <h2
              className="
      font-semibold
      text-[#4B4B4B]
      text-[34px]
      leading-[42.5px]
      w-[329.64px]
      h-[90.5px]
      
    "
            >
              {slideTitle}
              <br />

              {desktopKeyImage === "/smartfilterbg2.png" && (
                <span className="text-[#4B4B4B]">Control.</span>
              )}
            </h2>

            {/* Subtitle */}
            {desktopKeyImage === "/smartfilterbg3.png" && (
              <p
                className="font-medium mb-4 max-w-[661px] leading-[150%] text-[clamp(14px,1.05vw,20px)]"
                style={{ color: textColor }}
              >
                Total Portfolio Control
              </p>
            )}

            <p
              className={`
    font-medium mb-10 sm:mb-14
    text-[clamp(13px,3.5vw,14px)]
    leading-[1.7]
    text-[#4B4B4B]
    ${desktopKeyImage === "/smartfilterbg2.png" ? "max-w-full" : "max-w-[195px]"}
  `}
            >
              {slideDescription}
            </p>

            {slideDeal360Text && (
              <p className="font-medium text-[clamp(13px,3.5vw,14px)] leading-[1.7] text-[#4B4B4B] max-w-[195px]">
                {slideDeal360Text}
              </p>
            )}

            {/* Footer */}
            {desktopKeyImage === "/smartfilterbg3.png" && (
              <p
                className="font-medium mt-4 max-w-[178.652px] leading-[150%] text-[clamp(14px,1.05vw,20px)] mb-4"
                style={{ color: textColor }}
              >
                Built for investors who want clarity — not spreadsheets.
              </p>
            )}

            {/* Section label */}
            {desktopKeyImage === "/smartfilterbg3.png" && (
              <p
                className="font-medium mb-4 max-w-[156.652px] leading-[150%] text-[clamp(14px,1.05vw,20px)]"
                style={{ color: textColor }}
              >
                With Property Manager you can:
              </p>
            )}

          </div>

          {/* Phone */}
          <img
            src={mobilePhoneImage}
            alt="App screenshot"
            className={`absolute object-contain -right-10 top-[35%] h-[65%] max-h-[345px]   ${desktopKeyImage === "/smartfilterbg2.png" ? "mt-6" : "mt-0"
              }`}
          />
        </div>

        {/* Bottom */}
        <div
          className="relative z-30 px-6 sm:px-8 py-8"
          style={{ background: mobileGradient }}
        >
          <div className="flex flex-col gap-6 sm:gap-8">
            {bulletsMobile.map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckIconMobile />
                <span className="font-medium mt-0.5 text-[clamp(12px,3.5vw,14px)] text-[#4B4B4B]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const SLIDES_DATA = [
  {
    slideTitle: "Sharper filters. Smarter matches.",
    slideDescription:
      "Results are refined using intent, availability, and verification — so you're not just seeing more listings, you're seeing the right ones.",
    slideDeal360Text:
      "Built around live market signals and real user intent, every interaction is designed to move you closer to a decision.",
    bulletsMobile: MOBILE_BULLETS,
    bulletsDesktop: DESKTOP_BULLETS,
    desktopGradient: "linear-gradient(90deg, #F88379 0%, #FFA79F 100%), #F88379",
    mobileGradient: "linear-gradient(90deg, #F88379 0%, #FFA79F 100%), #F88379",
    desktopKeyImage: firstslidebg,
    desktopPhoneImage: firstslideoverlap,
    mobilePhoneImage: firstslideoverlap,
    mobileBgImage: firstslidebg,
    isThirdSlide: false,
  },
  {
    slideTitle: "Sell or Rent with Control.",
    slideDescription:
      "Owners declare Listing Intent before going live and connect with agents aligned to genuine demand — without broadcasting their property everywhere.",
    slideDeal360Text: "",
    bulletsMobile: MOBILE_BULLETS1,
    bulletsDesktop: DESKTOP_BULLETS1,
    desktopGradient: "linear-gradient(90deg, #F88379 0%, #FFA79F 100%), #F88379",
    mobileGradient: "linear-gradient(90deg, #F88379 0%, #FFA79F 100%), #F88379",
    desktopKeyImage: secondslidebg,
    desktopPhoneImage: secondslideoverlap,
    mobilePhoneImage: secondslideoverlap,
    mobileBgImage: secondslidebg,
    isThirdSlide: false,
  },
  {
    slideTitle: "Property Manager",
    slideDescription:
      "Track rental income, tenancy dates, and overall portfolio performance in one structured dashboard — built for landlords and investors managing multiple properties.",
    slideDeal360Text: "",
    bulletsMobile: MOBILE_BULLETS2,
    bulletsDesktop: DESKTOP_BULLETS2,
    desktopGradient: "linear-gradient(90deg, #7FFFD4 0%, #A5FFE1 100%), #7FFFD4",
    mobileGradient: "linear-gradient(90deg, #7FFFD4 0%, #A5FFE1 100%), #7FFFD4",
    desktopKeyImage: thirdslidebg,
    desktopPhoneImage: thirdslideoverlap,
    mobilePhoneImage: thirdslideoverlap,
    mobileBgImage: thirdslidebg,
    isThirdSlide: true,
  },
];

export default function SmarterFilters() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
    }, 2000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const slide = SLIDES_DATA[currentSlide];

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000); // Resume auto-play after 8s
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000); // Resume auto-play after 8s
  };



  const t = useTranslations("smartFilter");




  // Get current slide translations
  const slideTitle = t(`slides.${currentSlide}.slideTitle`);
  const slideDescription = t(`slides.${currentSlide}.slideDescription`);
  const slideDeal360Text = t(`slides.${currentSlide}.slideDeal360Text`);

  // Bullets as an array
  const bullets = [
    t(`slides.${currentSlide}.bullets.bullet1`),
    t(`slides.${currentSlide}.bullets.bullet2`),
    t(`slides.${currentSlide}.bullets.bullet3`),
    t(`slides.${currentSlide}.bullets.bullet4`) // optional, filter undefined
  ].filter(Boolean);

  return (
    <div className="w-full bg-[#EDEEF0] md:mt-20 md:mb-30 mt-10 relative dark:bg-black font-sans">
      {/* Slide container with smooth transition */}
      <div className="transition-opacity duration-500">
        <div className="relative flex items-center justify-center">
          {/* Previous Arrow - Desktop */}
          <button
            onClick={handlePrevClick}
            className="hidden md:flex absolute left-6 z-50 p-2 hover:opacity-70 transition-opacity"
            aria-label="Previous slide"
          >
            <ArrowIconPrev />
          </button>

          {/* Slide Content */}
          <Slide
            slideTitle={slideTitle}
            slideDescription={slideDescription}
            slideDeal360Text={slideDeal360Text}
            bulletsDesktop={bullets}
            bulletsMobile={bullets}
            desktopGradient={slide.desktopGradient}
            mobileGradient={slide.mobileGradient}
            desktopKeyImage={slide.desktopKeyImage}
            desktopPhoneImage={slide.desktopPhoneImage}
            mobilePhoneImage={slide.mobilePhoneImage}
            mobileBgImage={slide.mobileBgImage}
          />

          {/* Next Arrow - Desktop */}
          <button
            onClick={handleNextClick}
            className="hidden md:flex absolute right-6 z-50 p-2 hover:opacity-70 transition-opacity"
            aria-label="Next slide"
          >
            <ArrowIconNext />
          </button>
        </div>
      </div>

      {/* Mobile Arrow Navigation */}
      {/* <div className="md:hidden flex justify-between items-center px-4 py-4">
        <button
          onClick={handlePrevClick}
          className="p-2 hover:opacity-70 transition-opacity"
          aria-label="Previous slide"
        >
          <ArrowIconPrev />
        </button>

       
        <div className="flex justify-center gap-2">
          {SLIDES_DATA.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-gray-800 w-2 h-2"
                  : "bg-gray-400 w-2 h-2"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNextClick}
          className="p-2 hover:opacity-70 transition-opacity"
          aria-label="Next slide"
        >
          <ArrowIconNext />
        </button>
      </div> */}
    </div>
  );
}
