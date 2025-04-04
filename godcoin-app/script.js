// Multilingual Texts
const translations = {
  en: {
    welcome: "Welcome to GODCOIN",
    connectWallet: "Connect Wallet",
    howToTrade: "How to Trade GODCOIN",
    chooseLanguage: "Choose Language",
    buyNow: "Buy GODCOIN",
    installApp: "Install GODCOIN App"
  },
  es: {
    welcome: "Bienvenido a GODCOIN",
    connectWallet: "Conectar Billetera",
    howToTrade: "Cómo Tradear GODCOIN",
    chooseLanguage: "Elige idioma",
    buyNow: "Comprar GODCOIN",
    installApp: "Instalar App de GODCOIN"
  }
};

let currentLang = 'en';

function updateLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Phantom Wallet Connect for Mobile
function connectPhantomMobile() {
  const appUrl = encodeURIComponent(window.location.href);
  const phantomDeepLink = `https://phantom.app/ul/v1/connect?app_url=${appUrl}&redirect_link=${appUrl}`;
  window.location.href = phantomDeepLink;
}

// Load default language
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage(currentLang);
});
