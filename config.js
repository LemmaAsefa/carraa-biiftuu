// ====================================================================
// CARRAA BIIFTUU -- MASTER CLIENT CONFIGURATION (WHITE-LABEL)
// ====================================================================

const APP_CONFIG = {
  // 1. BRANDING
  BRAND_NAME: "Carraa Biiftuu",
  BRAND_SLOGAN: "Sirna Qulqulluu fi Amansiisaa Carraa Bituu",
  BRAND_ICON: "🌟",

  // 2. PRICING & TICKETS
  TICKET_PRICE: 1000,
  TOTAL_TICKETS: 1000,
  MAX_QTY_PER_ORDER: 10,
  CURRENCY: "ETB",

  // 3. PRIZES
  PRIZES: {
    first: { title: "Badhaasa 1ffaa: Konkolaataa", desc: "Badhaasa qaalii isa ol'aanaa marsaa kanaa." },
    second: { title: "Badhaasa 2ffaa: Mootarsayikilii", desc: "Meeshaa ammayyaa tajaajila addaa." },
    third: { title: "Badhaasa 3ffaa: Smart Phone", desc: "Bilbila ammayyaa fi badhaasa jajjabeessaa." }
  },

  // 4. BANK ACCOUNTS
  ACCOUNTS: {
    Telebirr: { number: "0909506573", name: "Lemma Asefa" },
    CBE: { number: "1000342728743", name: "Lemma Asefa" },
    BOA: { number: "212322628", name: "Lemma Asefa" },
    Awash: { number: "013351316799600", name: "Lemma Asefa" }
  },

  // 5. CONTACT & USSD
  SUPPORT_PHONE: "+251909506573",
  SUPPORT_TELEGRAM: "https://t.me/CarraaBiiftuu",
  TELEBIRR_USSD_NUMBER: "0909506573", // *127*2*0909506573*AMOUNT#

  // 6. BACKEND API URL
  WEB_APP_URL: "https://script.google.com/macros/s/AKfycbxrJMFYrybfQVMW8cWTN7r9uY8NtAKxsRg0BMYZPjwYGd0syqijTVvrG8xHB643oDz6/exec"
};
