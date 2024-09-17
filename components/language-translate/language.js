"use client";
import Script from "next/script";
import React from "react";

const languages = [
  { label: "Romana", value: "ro", src: "https://flagcdn.com/h60/ro.png" },
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  // Add additional languages as needed
];
const includedLanguages = languages.map((lang) => lang.value).join(",");

function googleTranslateElementInit() {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "auto",
      includedLanguages,
    },
    "google_translate_element"
  );
}

export function GoogleTranslate({ prefLangCookie, moreSyle }) {
  const [langCookie, setLangCookie] = React.useState(
    decodeURIComponent(prefLangCookie)
  );

  React.useEffect(() => {
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const onChange = (newLangValue) => {
    const lang = "/ro/" + newLangValue;
    setLangCookie(lang);
    const element = document.querySelector(".goog-te-combo");
    element.value = newLangValue;
    element.dispatchEvent(new Event("change"));
  };

  return (
    <div>
      <style jsx global>{`
        /* Hide Google Translate toolbar */
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }

        body {
          top: 0px !important;
        }

        /* Hide Google Translate popup icon */
        .goog-te-gadget-icon {
          display: none !important;
        }

        /* Hide Google Translate footer */
        .goog-logo-link {
          display: none !important;
        }

        .goog-te-combo {
          margin: 0;
        }
      `}</style>
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", width: "1px", height: "1px" }}
      ></div>
      <LanguageSelector
        moreSyle={moreSyle}
        onChange={onChange}
        value={langCookie}
      />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}

function LanguageSelector({ onChange, value, moreSyle }) {
  const langCookie = value.split("/")[2];
  const arrowStrokeColor = moreSyle ? "white" : "black";

  return (
    <select
      className={`bg-transparent border-none text-[var(--second-color)] text-[12px] pr-5 h-full outline-none focus:ring-0 ${moreSyle}`}
      onChange={(e) => onChange(e.target.value)}
      value={langCookie}
      style={{
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        paddingRight: "1.5rem",
        backgroundImage: `url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${encodeURIComponent(
          arrowStrokeColor
        )}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"/></svg>')`, // Custom arrow
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px center",
      }}
    >
      {languages.map((it) => (
        <option translate="no" value={it.value} key={it.value}>
          {it.label}
        </option>
      ))}
    </select>
  );
}
