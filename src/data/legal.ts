export interface LegalSection {
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

const lastUpdated = "May 24, 2026";

export const privacyPolicy: Record<"en" | "hi", LegalDocument> = {
  en: {
    title: "Privacy Policy",
    lastUpdated,
    intro:
      'CasinoPulse India ("we", "us", "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.',
    sections: [
      {
        title: "1. Information We Collect",
        paragraphs: ["We may collect the following types of information:"],
        list: [
          "Personal data you provide voluntarily (e.g. name, email address when contacting us).",
          "Usage data such as pages visited, time spent, browser type, device type, and referring URLs.",
          "Technical data including IP address, cookies, and similar tracking technologies.",
          "Information submitted through forms on our contact page.",
        ],
      },
      {
        title: "2. How We Use Your Information",
        paragraphs: ["We use collected information to:"],
        list: [
          "Operate, maintain, and improve our website.",
          "Respond to your inquiries and provide customer support.",
          "Send administrative information and updates you have requested.",
          "Analyze usage trends and measure site performance.",
          "Comply with legal obligations and protect our rights.",
        ],
      },
      {
        title: "3. Legal Basis for Processing (GDPR)",
        paragraphs: [
          "Where applicable under the General Data Protection Regulation (GDPR), we process personal data based on your consent, our legitimate interests in operating the website, performance of a contract, or compliance with legal obligations.",
        ],
      },
      {
        title: "4. Sharing of Information",
        paragraphs: [
          "We do not sell your personal information. We may share data with trusted third-party service providers who assist us in hosting, analytics, email delivery, or security — only to the extent necessary and under appropriate confidentiality obligations.",
          "We may also disclose information if required by law, court order, or to protect the rights, property, or safety of our users or others.",
        ],
      },
      {
        title: "5. Third-Party Links",
        paragraphs: [
          "Our website contains links to third-party casino operators and external websites. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing any personal information.",
        ],
      },
      {
        title: "6. Data Retention",
        paragraphs: [
          "We retain personal information only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.",
        ],
      },
      {
        title: "7. Your Rights",
        paragraphs: ["Depending on your location, you may have the right to:"],
        list: [
          "Access, correct, or delete your personal data.",
          "Withdraw consent where processing is based on consent.",
          "Object to or restrict certain processing.",
          "Request data portability.",
          "Lodge a complaint with a supervisory authority.",
        ],
      },
      {
        title: "8. Security",
        paragraphs: [
          "We implement reasonable administrative, technical, and organizational measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
        ],
      },
      {
        title: "9. Children's Privacy",
        paragraphs: [
          "Our services are intended for users aged 18 and over only. We do not knowingly collect personal information from anyone under 18. If you believe we have collected such information, please contact us immediately.",
        ],
      },
      {
        title: "10. International Transfers",
        paragraphs: [
          "Your information may be processed in countries other than your own. By using our website, you consent to the transfer of information to countries that may have different data protection laws than your jurisdiction.",
        ],
      },
      {
        title: "11. Changes to This Policy",
        paragraphs: [
          'We may update this Privacy Policy from time to time. The "Last updated" date at the top will reflect changes. Continued use of the site after changes constitutes acceptance of the updated policy.',
        ],
      },
      {
        title: "12. Contact Us",
        paragraphs: [
          "If you have questions about this Privacy Policy or wish to exercise your rights, please contact us through our Contact page.",
        ],
      },
    ],
  },
  hi: {
    title: "गोपनीयता नीति",
    lastUpdated: "24 मई, 2026",
    intro:
      'CasinoPulse India ("हम") आपकी गोपनीयता का सम्मान करता है। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट पर जाते हैं तो हम आपकी जानकारी कैसे एकत्र, उपयोग, प्रकट और सुरक्षित करते हैं।',
    sections: [
      {
        title: "1. हम जो जानकारी एकत्र करते हैं",
        paragraphs: ["हम निम्न प्रकार की जानकारी एकत्र कर सकते हैं:"],
        list: [
          "आप स्वेच्छा से प्रदान करने वाले व्यक्तिगत डेटा (जैसे संपर्क फॉर्म पर नाम, ईमेल)।",
          "उपयोग डेटा जैसे देखे गए पृष्ठ, समय, ब्राउज़र प्रकार, और रेफरिंग URL।",
          "तकनीकी डेटा जिसमें IP पता, कुकीज़ और समान ट्रैकिंग शामिल है।",
          "संपर्क पृष्ठ के माध्यम से जमा की गई जानकारी।",
        ],
      },
      {
        title: "2. हम आपकी जानकारी का उपयोग कैसे करते हैं",
        paragraphs: ["हम एकत्रित जानकारी का उपयोग करते हैं:"],
        list: [
          "वेबसाइट संचालित, बनाए रखने और सुधारने के लिए।",
          "आपकी पूछताछ का जवाब देने और सहायता प्रदान करने के लिए।",
          "वैकल्पिक प्रशासनिक जानकारी भेजने के लिए।",
          "उपयोग रुझानों का विश्लेषण करने के लिए।",
          "कानूनी दायित्वों का पालन करने के लिए।",
        ],
      },
      {
        title: "3. प्रसंस्करण का कानूनी आधार (GDPR)",
        paragraphs: [
          "जहां लागू हो, GDPR के तहत हम सहमति, वैध हित, अनुबंध प्रदर्शन, या कानूनी दायित्वों के आधार पर डेटा संसाधित करते हैं।",
        ],
      },
      {
        title: "4. जानकारी साझा करना",
        paragraphs: [
          "हम आपकी व्यक्तिगत जानकारी नहीं बेचते। हम विश्वसनीय तृतीय-पक्ष प्रदाताओं के साथ डेटा साझा कर सकते हैं जो होस्टिंग, विश्लेषण, या सुरक्षा में सहायता करते हैं।",
          "कानून द्वारा आवश्यक होने पर हम जानकारी प्रकट कर सकते हैं।",
        ],
      },
      {
        title: "5. तृतीय-पक्ष लिंक",
        paragraphs: [
          "हमारी साइट में बाहरी कैसीनो ऑपरेटरों के लिंक हैं। हम उनकी गोपनीयता प्रथाओं के लिए जिम्मेदार नहीं हैं।",
        ],
      },
      {
        title: "6. डेटा प्रतिधारण",
        paragraphs: [
          "हम व्यक्तिगत जानकारी केवल उतने समय तक रखते हैं जितना इस नीति के उद्देश्यों के लिए आवश्यक है।",
        ],
      },
      {
        title: "7. आपके अधिकार",
        paragraphs: ["आपके स्थान के आधार पर, आपको अधिकार हो सकता है:"],
        list: [
          "अपने डेटा तक पहुंच, सुधार, या हटाने का।",
          "सहमति वापस लेने का।",
          "कुछ प्रसंस्करण पर आपत्ति करने का।",
          "डेटा पोर्टेबिलिटी का अनुरोध करने का।",
          "निगरानी प्राधिकरण के पास शिकायत दर्ज करने का।",
        ],
      },
      {
        title: "8. सुरक्षा",
        paragraphs: [
          "हम आपकी जानकारी की सुरक्षा के लिए उचित उपाय करते हैं, लेकिन इंटरनेट पर कोई भी प्रसारण 100% सुरक्षित नहीं है।",
        ],
      },
      {
        title: "9. बच्चों की गोपनीयता",
        paragraphs: [
          "हमारी सेवाएं केवल 18 वर्ष और उससे अधिक उम्र के उपयोगकर्ताओं के लिए हैं। हम जानबूझकर 18 से कम उम्र के किसी से डेटा एकत्र नहीं करते।",
        ],
      },
      {
        title: "10. अंतर्राष्ट्रीय स्थानांतरण",
        paragraphs: [
          "आपकी जानकारी आपके देश के अलावा अन्य देशों में संसाधित हो सकती है। साइट का उपयोग करके आप इस स्थानांतरण से सहमत हैं।",
        ],
      },
      {
        title: "11. इस नीति में परिवर्तन",
        paragraphs: [
          "हम समय-समय पर इस नीति को अपडेट कर सकते हैं। शीर्ष पर की गई तारीख परिवर्तन दर्शाती है।",
        ],
      },
      {
        title: "12. संपर्क करें",
        paragraphs: [
          "इस गोपनीयता नीति के बारे में प्रश्नों के लिए हमारे संपर्क पृष्ठ के माध्यम से हमसे संपर्क करें।",
        ],
      },
    ],
  },
};

export const cookiePolicy: Record<"en" | "hi", LegalDocument> = {
  en: {
    title: "Cookie Policy",
    lastUpdated,
    intro:
      "This Cookie Policy explains how CasinoPulse India uses cookies and similar technologies when you visit our website. It should be read together with our Privacy Policy.",
    sections: [
      {
        title: "1. What Are Cookies?",
        paragraphs: [
          "Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences, understand how you use the site, and improve your experience.",
        ],
      },
      {
        title: "2. Types of Cookies We Use",
        paragraphs: ["We may use the following categories of cookies:"],
        list: [
          "Strictly necessary cookies — required for the website to function (e.g. security, load balancing, cookie consent preferences).",
          "Functional cookies — remember your choices such as language preference, theme (light/dark mode), and locale settings.",
          "Analytics cookies — help us understand how visitors interact with our site (pages viewed, traffic sources, session duration).",
          "Marketing/affiliate cookies — may be set when you click outbound links to partner casinos to track referrals, where permitted by law.",
        ],
      },
      {
        title: "3. How We Use Cookies",
        paragraphs: ["We use cookies to:"],
        list: [
          "Keep you signed in to preferences stored locally (theme, language).",
          "Measure website traffic and improve content.",
          "Remember your cookie consent choice.",
          "Support affiliate and referral link functionality.",
        ],
      },
      {
        title: "4. Third-Party Cookies",
        paragraphs: [
          "Some cookies are placed by third-party services we use, such as analytics providers or embedded content. Third parties may use cookies according to their own policies. We do not control these cookies.",
          "When you leave our site via links to external casino operators, those sites may set their own cookies. Please review their cookie policies.",
        ],
      },
      {
        title: "5. Local Storage",
        paragraphs: [
          "In addition to cookies, we may use browser local storage to save your theme (light/dark) and language (English/Hindi) preferences. This data stays on your device and is not sent to our servers unless part of another service.",
        ],
      },
      {
        title: "6. Managing Cookies",
        paragraphs: [
          "You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Note that disabling certain cookies may affect site functionality.",
          "You can also use our cookie banner to accept or decline non-essential cookies where offered.",
        ],
      },
      {
        title: "7. Cookie Consent",
        paragraphs: [
          "Where required by law (including the EU ePrivacy Directive and UK PECR), we ask for your consent before placing non-essential cookies. You may withdraw consent at any time by clearing cookies and revisiting the site, or by adjusting your browser settings.",
        ],
      },
      {
        title: "8. Updates to This Policy",
        paragraphs: [
          "We may update this Cookie Policy periodically. Please check this page for the latest version.",
        ],
      },
      {
        title: "9. Contact Us",
        paragraphs: [
          "For questions about our use of cookies, please contact us via our Contact page.",
        ],
      },
    ],
  },
  hi: {
    title: "कुकी नीति",
    lastUpdated: "24 मई, 2026",
    intro:
      "यह कुकी नीति बताती है कि CasinoPulse India आपकी साइट पर जाने पर कुकीज़ और समान तकनीकों का उपयोग कैसे करता है। इसे हमारी गोपनीयता नीति के साथ पढ़ें।",
    sections: [
      {
        title: "1. कुकीज़ क्या हैं?",
        paragraphs: [
          "कुकीज़ छोटी टेक्स्ट फाइलें हैं जो वेबसाइट पर जाने पर आपके डिवाइस पर रखी जाती हैं। वे आपकी प्राथमिकताएं याद रखने और साइट के उपयोग को समझने में मदद करती हैं।",
        ],
      },
      {
        title: "2. हम जिन कुकीज़ का उपयोग करते हैं",
        paragraphs: ["हम निम्न श्रेणियों की कुकीज़ उपयोग कर सकते हैं:"],
        list: [
          "अनिवार्य कुकीज़ — साइट के काम करने के लिए आवश्यक।",
          "कार्यात्मक कुकीज़ — भाषा, थीम (लाइट/डार्क), और लोकेल प्राथमिकताएं याद रखती हैं।",
          "विश्लेषण कुकीज़ — विज़िटर साइट के साथ कैसे इंटरैक्ट करते हैं, यह समझने में मदद करती हैं।",
          "मार्केटिंग/एफिलिएट कुकीज़ — पार्टनर कैसीनो लिंक पर क्लिक करने पर रेफरल ट्रैक करने के लिए, जहां कानून अनुमति दे।",
        ],
      },
      {
        title: "3. हम कुकीज़ का उपयोग कैसे करते हैं",
        paragraphs: ["हम कुकीज़ का उपयोग करते हैं:"],
        list: [
          "स्थानीय रूप से सहेजी प्राथमिकताएं बनाए रखने के लिए (थीम, भाषा)।",
          "वेबसाइट ट्रैफ़िक मापने और सामग्री सुधारने के लिए।",
          "आपकी कुकी सहमति याद रखने के लिए।",
          "एफिलिएट और रेफरल लिंक कार्यक्षमता के लिए।",
        ],
      },
      {
        title: "4. तृतीय-पक्ष कुकीज़",
        paragraphs: [
          "कुछ कुकीज़ तृतीय-पक्ष सेवाओं द्वारा रखी जाती हैं। जब आप बाहरी कैसीनो साइटों पर जाते हैं, वे अपनी कुकीज़ सेट कर सकते हैं।",
        ],
      },
      {
        title: "5. लोकल स्टोरेज",
        paragraphs: [
          "कुकीज़ के अलावा, हम थीम और भाषा प्राथमिकताएं सहेजने के लिए ब्राउज़र लोकल स्टोरेज उपयोग कर सकते हैं।",
        ],
      },
      {
        title: "6. कुकीज़ प्रबंधित करना",
        paragraphs: [
          "आप ब्राउज़र सेटिंग्स के माध्यम से कुकीज़ नियंत्रित कर सकते हैं। कुछ कुकीज़ अक्षम करने से साइट की कार्यक्षमता प्रभावित हो सकती है।",
          "आप हमारे कुकी बैनर के माध्यम से गैर-आवश्यक कुकीज़ स्वीकार या अस्वीकार कर सकते हैं।",
        ],
      },
      {
        title: "7. कुकी सहमति",
        paragraphs: [
          "जहां कानून आवश्यक हो, गैर-आवश्यक कुकीज़ से पहले हम आपकी सहमति मांगते हैं। आप किसी भी समय सहमति वापस ले सकते हैं।",
        ],
      },
      {
        title: "8. इस नीति में अपडेट",
        paragraphs: [
          "हम समय-समय पर इस कुकी नीति को अपडेट कर सकते हैं। नवीनतम संस्करण के लिए इस पृष्ठ की जांच करें।",
        ],
      },
      {
        title: "9. संपर्क करें",
        paragraphs: [
          "कुकीज़ के उपयोग के बारे में प्रश्नों के लिए संपर्क पृष्ठ के माध्यम से हमसे संपर्क करें।",
        ],
      },
    ],
  },
};
