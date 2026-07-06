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
      'CasinoPulse ("we", "us", "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.',
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
      'CasinoPulse ("हम") आपकी गोपनीयता का सम्मान करता है। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट पर जाते हैं तो हम आपकी जानकारी कैसे एकत्र, उपयोग, प्रकट और सुरक्षित करते हैं।',
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
      "This Cookie Policy explains how CasinoPulse uses cookies and similar technologies when you visit our website. It should be read together with our Privacy Policy.",
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
      "यह कुकी नीति बताती है कि CasinoPulse आपकी साइट पर जाने पर कुकीज़ और समान तकनीकों का उपयोग कैसे करता है। इसे हमारी गोपनीयता नीति के साथ पढ़ें।",
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

export const ABOUT_PATH = "/about";
export const EDITORIAL_POLICY_PATH = "/editorial-policy";
export const EDITORIAL_TEAM_PATH = "/editorial-team";
export const TERMS_PATH = "/terms";
export const RESPONSIBLE_GAMBLING_PATH = "/responsible-gambling";
export const BLACKLIST_PATH = "/blacklist";

export const aboutMeta = {
  title: "About CasinoPulse",
  description:
    "Learn about CasinoPulse — independent casino reviews, South Asia and crypto casino coverage, editorial standards, and affiliate disclosure.",
};

export const responsibleGamblingMeta = {
  title: "Responsible Gambling",
  description:
    "Responsible gambling guidance from CasinoPulse — 18+ only, risk awareness, limits, self-exclusion, and help resources for players in South Asia.",
};

export const blacklistMeta = {
  title: "Casino Blacklist — Editorial Risk Assessments",
  description:
    "CasinoPulse editorial blacklist of online casinos with reported concerns and risk indicators for South Asian players. Not legal findings — review carefully before playing.",
};

export const responsibleGamblingQuickLinks = [
  {
    title: "Full Responsible Gambling Guide",
    desc: "Read our dedicated page on limits, self-exclusion, and problem gambling warning signs.",
    href: RESPONSIBLE_GAMBLING_PATH,
  },
  {
    title: "Age Restriction",
    desc: "You must be 18+ (or the legal age in your jurisdiction) to use this site.",
    href: RESPONSIBLE_GAMBLING_PATH,
  },
  {
    title: "Legal Disclaimer",
    desc: "Information is editorial only — not legal, medical, or financial advice.",
    href: "/privacy",
  },
  {
    title: "Affiliate Disclosure",
    desc: "We may earn commission from casino links. Reviews and risk assessments remain independent.",
    href: ABOUT_PATH,
  },
] as const;

export const blacklistFaqs = [
  {
    question: "What is the CasinoPulse blacklist?",
    answer:
      "The CasinoPulse blacklist is an editorial list of online casinos that show repeated risk indicators or reported concerns in public player feedback. It is not a legal ruling or regulator blacklist.",
  },
  {
    question: "How does CasinoPulse assess blacklist risk?",
    answer:
      "We apply our published review methodology, track reported concerns such as payout delays or licensing questions, and document risk indicators before recommending players research carefully or avoid a brand.",
  },
  {
    question: "Are blacklist entries proven scams?",
    answer:
      "No. Entries reflect CasinoPulse editorial risk assessments based on reported concerns and risk indicators we monitor. Players should verify operator terms, licensing, and local laws before depositing.",
  },
] as const;

export const aboutPage: Record<"en" | "hi", LegalDocument> = {
  en: {
    title: "About CasinoPulse",
    lastUpdated,
    intro:
      "CasinoPulse is an editorial casino media site focused on South Asia and crypto gambling topics. We publish casino reviews, payment and crypto guides, editorial risk assessments, and player safety resources.",
    sections: [
      {
        title: "What We Cover",
        paragraphs: [
          "Our coverage prioritises Bangladesh, India, Pakistan, Sri Lanka, and global crypto casino audiences. We explain payment methods (UPI, wallets, crypto), review operators for Indian and South Asian players, and document reported concerns when risk indicators appear frequently.",
        ],
      },
      {
        title: "Editorial Independence",
        paragraphs: [
          "CasinoPulse ratings and blacklist placements are editorial decisions based on our published methodology. Commercial relationships do not buy higher scores or favourable placement.",
          "When we link to partner casinos, affiliate commissions may apply, but they do not determine review conclusions or risk assessments.",
        ],
      },
      {
        title: "Affiliate Disclosure",
        paragraphs: [
          "Some outbound links on CasinoPulse are affiliate links. If you register or deposit through those links, we may receive a commission at no extra cost to you.",
          "Affiliate revenue supports site operations. It does not change our editorial scoring model or how we document reported concerns.",
        ],
      },
      {
        title: "What We Do Not Claim",
        paragraphs: [
          "CasinoPulse is not a regulator, law firm, or complaint resolution service. We do not guarantee operator payouts, verify every player report independently, or provide legal advice about gambling in your jurisdiction.",
        ],
      },
      {
        title: "Contact & Updates",
        paragraphs: [
          "Questions about our editorial standards or corrections can be sent through our Contact page. Review and blacklist entries are updated when operator terms, payment options, or reported concern patterns change.",
        ],
      },
      {
        title: "Corrections & Fact-Checking",
        paragraphs: [
          "CasinoPulse prioritises accuracy in payment guides, licensing notes, and risk assessments. When readers report material errors — such as outdated payment rails, incorrect regulator references, or misleading bonus summaries — we investigate and publish corrections on the affected page.",
          "We do not claim to independently verify every operator promotion or payout in real time. Bonus examples on the homepage are illustrative only until line-verified against operator terms pages. See our Editorial Policy for full standards.",
        ],
      },
    ],
  },
  hi: {
    title: "CasinoPulse के बारे में",
    lastUpdated,
    intro:
      "CasinoPulse दक्षिण एशिया और क्रिप्टो जुआ विषयों पर केंद्रित एक संपादकीय कैसीनो मीडिया साइट है।",
    sections: [
      {
        title: "हम क्या कवर करते हैं",
        paragraphs: [
          "हमारा फोकस भारत, बांग्लादेश, पाकिस्तान, श्रीलंका और वैश्विक क्रिप्टो कैसीनो दर्शकों पर है — समीक्षाएं, भुगतान गाइड, और जोखिम मूल्यांकन।",
        ],
      },
      {
        title: "संपादकीय स्वतंत्रता",
        paragraphs: [
          "रेटिंग और ब्लैकलिस्ट प्लेसमेंट हमारी प्रकाशित methodology पर आधारित हैं। व्यावसायिक संबंध बेहतर स्कोर नहीं खरीद सकते।",
        ],
      },
      {
        title: "सहबद्ध प्रकटीकरण",
        paragraphs: [
          "कुछ लिंक सहबद्ध लिंक हो सकते हैं। कमीशन समीक्षा निष्पक्षता को प्रभावित नहीं करता।",
        ],
      },
    ],
  },
};

export const responsibleGamblingPage: Record<"en" | "hi", LegalDocument> = {
  en: {
    title: "Responsible Gambling",
    lastUpdated,
    intro:
      "CasinoPulse promotes informed, safer play. Gambling should be entertainment — never a way to solve financial problems. This page summarises practical guidance for adults who choose to gamble.",
    sections: [
      {
        title: "18+ Only",
        paragraphs: [
          "You must be at least 18 years old, or the legal gambling age in your jurisdiction, to use CasinoPulse or visit linked operator sites. Never allow minors to access gambling content or accounts.",
        ],
      },
      {
        title: "Understand the Risks",
        paragraphs: [
          "All gambling involves risk of losing money. Outcomes are unpredictable. Never gamble with rent, savings, loans, or money you cannot afford to lose.",
          "Chasing losses often leads to greater harm. Set a budget before you play and treat any win as a bonus — not expected income.",
        ],
      },
      {
        title: "Set Deposit and Time Limits",
        paragraphs: [
          "Decide how much time and money you will spend before opening a casino account. Use operator deposit limits, session reminders, and cooling-off tools where available.",
          "Stop playing when you reach your limit — even if you are winning.",
        ],
      },
      {
        title: "Self-Exclusion",
        paragraphs: [
          "If you need a break, use self-exclusion tools offered by licensed operators and consider national self-exclusion schemes where they exist.",
          "Self-exclusion can block access to gambling accounts for a chosen period. Support organisations can help you set this up.",
        ],
      },
      {
        title: "Signs of Problem Gambling",
        paragraphs: ["Consider seeking help if you:"],
        list: [
          "Spend more money or time gambling than you planned.",
          "Borrow money or hide gambling from family or friends.",
          "Feel anxious, irritable, or restless when trying to stop.",
          "Gamble to escape stress, debt, or other problems.",
          "Neglect work, study, or relationships because of gambling.",
        ],
      },
      {
        title: "Stop If Gambling Causes Harm",
        paragraphs: [
          "If gambling stops being fun, causes financial stress, or affects your health or relationships, stop playing and seek support.",
          "CasinoPulse does not provide medical or legal advice. Contact independent helplines such as BeGambleAware.org or your national gambling support service.",
        ],
      },
      {
        title: "Our Editorial Role",
        paragraphs: [
          "We document responsible gambling tools in our reviews when operators disclose them. This page is general guidance only — check each operator's terms and local laws before playing.",
        ],
      },
    ],
  },
  hi: {
    title: "जिम्मेदार जुआ",
    lastUpdated,
    intro:
      "CasinoPulse सुरक्षित, सूचित खेल को बढ़ावा देता है। जुआ केवल मनोरंजन होना चाहिए — वित्तीय समाधान नहीं।",
    sections: [
      {
        title: "केवल 18+",
        paragraphs: ["आपकी आयु कानूनी सीमा से अधिक होनी चाहिए। नाबालिगों को जुआ सामग्री तक पहुंच न दें।"],
      },
      {
        title: "जोखिम समझें",
        paragraphs: ["जुआ में पैसा खोने का जोखिम होता है। कभी भी उधार या बचत से न खेलें।"],
      },
      {
        title: "सीमाएं और स्व-बहिष्करण",
        paragraphs: [
          "जमा और समय की सीमा तय करें। आवश्यकता हो तो स्व-बहिष्करण उपकरणों का उपयोग करें।",
        ],
      },
      {
        title: "मदद लें",
        paragraphs: [
          "यदि जुआ हानि पहुंचा रहा है, तो खेलना बंद करें और BeGambleAware.org या राष्ट्रीय हेल्पलाइन से संपर्क करें।",
        ],
      },
    ],
  },
};

export const editorialPolicyMeta = {
  title: "Editorial Policy",
  description:
    "CasinoPulse editorial policy — independence standards, fact-checking, corrections, affiliate disclosure, and how we assess casino reviews and risk lists.",
};

export const editorialPolicyPage: Record<"en" | "hi", LegalDocument> = {
  en: {
    title: "Editorial Policy",
    lastUpdated,
    intro:
      "This Editorial Policy explains how CasinoPulse researches, writes, updates, and corrects casino reviews, payment guides, news explainers, and editorial risk assessments. Our goal is useful, honest information for South Asian and crypto casino audiences — not operator marketing.",
    sections: [
      {
        title: "Editorial Independence",
        paragraphs: [
          "Ratings, blacklist placements, and review conclusions are editorial decisions based on our published methodology. Operators cannot pay for higher scores, favourable wording, or removal from risk lists.",
          "Affiliate commissions may apply when readers use outbound links. Commercial relationships do not determine scores, ranking order, or whether we document reported concerns.",
        ],
      },
      {
        title: "Research Standards",
        paragraphs: [
          "We gather information from operator websites, terms pages, help centres, licensing footers, and publicly reported player feedback. We prioritise primary sources over forum rumours.",
          "When automated fetches fail (geo-blocks, bot protection, or SPA-only pages), we document the limitation rather than inventing bonus values or payout timelines.",
        ],
      },
      {
        title: "Fact-Checking & Updates",
        paragraphs: [
          "High-traffic reviews and payment guides are refreshed when payment menus, licensing footers, or complaint patterns change materially.",
          "Bonus examples on the homepage remain illustrative until independently verified with source URLs, terms URLs, and review timestamps. We do not mark offers as verified without that evidence.",
        ],
      },
      {
        title: "Corrections",
        paragraphs: [
          "If you believe a page contains a material factual error, contact us with the page URL, the incorrect statement, and supporting evidence. We aim to acknowledge correction requests within a reasonable timeframe and update affected pages when verified.",
          "Minor wording improvements that do not change factual meaning may be edited without a formal correction notice.",
        ],
      },
      {
        title: "What We Do Not Publish",
        paragraphs: [
          "We do not publish guaranteed-win language, fake licensing claims, unverified no-deposit offers, or endorsements that imply regulatory approval in jurisdictions where play is restricted.",
          "News briefs marked as non-indexed are short orientation notes — not full investigative reports.",
        ],
      },
      {
        title: "Related Policies",
        paragraphs: [
          "See also: How We Review Online Casinos, About CasinoPulse, Responsible Gambling, Privacy Policy, and Terms of Use.",
        ],
      },
    ],
  },
  hi: {
    title: "संपादकीय नीति",
    lastUpdated,
    intro:
      "यह नीति बताती है कि CasinoPulse समीक्षाएं, गाइड और जोखिम मूल्यांकन कैसे लिखता और अपडेट करता है।",
    sections: [
      {
        title: "संपादकीय स्वतंत्रता",
        paragraphs: [
          "रेटिंग और ब्लैकलिस्ट निर्णय methodology पर आधारित हैं। ऑपरेटर बेहतर स्कोर नहीं खरीद सकते।",
        ],
      },
      {
        title: "तथ्य-जांच और सुधार",
        paragraphs: [
          "भौतिक त्रुटियों की रिपोर्ट पर हम पृष्ठ अपडेट करते हैं। बोनस उदाहरण सत्यापित होने तक केवल चित्रणात्मक हैं।",
        ],
      },
    ],
  },
};

export const termsMeta = {
  title: "Terms of Use",
  description:
    "Terms of Use for CasinoPulse — site usage rules, disclaimers, affiliate links, age restrictions, and limitation of liability.",
};

export const termsOfUsePage: Record<"en" | "hi", LegalDocument> = {
  en: {
    title: "Terms of Use",
    lastUpdated,
    intro:
      'By accessing CasinoPulse ("the Site"), you agree to these Terms of Use. If you do not agree, please do not use the Site.',
    sections: [
      {
        title: "1. Informational Purpose Only",
        paragraphs: [
          "CasinoPulse publishes editorial casino reviews, guides, news explainers, and risk assessments for informational purposes. Content is not legal, financial, medical, or gambling advice.",
          "You are solely responsible for verifying operator terms, licensing, payment availability, and local laws before gambling.",
        ],
      },
      {
        title: "2. Age Restriction",
        paragraphs: [
          "The Site is intended for adults aged 18 or older, or the legal gambling age in your jurisdiction, whichever is higher. Do not use the Site if you are underage.",
        ],
      },
      {
        title: "3. Affiliate Links",
        paragraphs: [
          "Some links to third-party casino operators are affiliate links. We may earn a commission if you register or deposit through those links, at no extra cost to you. Affiliate relationships do not change our editorial scoring.",
        ],
      },
      {
        title: "4. Third-Party Operators",
        paragraphs: [
          "We do not operate casinos, process payments, or resolve player disputes. Your relationship with any linked operator is governed by that operator's terms and policies.",
        ],
      },
      {
        title: "5. Accuracy & Availability",
        paragraphs: [
          "We strive for accuracy but do not warrant that content is complete, current, or error-free. Operator bonuses, payment methods, and licensing can change without notice.",
        ],
      },
      {
        title: "6. Limitation of Liability",
        paragraphs: [
          "To the fullest extent permitted by law, CasinoPulse is not liable for losses arising from gambling, reliance on Site content, third-party operator actions, or technical interruptions.",
        ],
      },
      {
        title: "7. Intellectual Property",
        paragraphs: [
          "Site content, branding, and layout are protected by applicable intellectual property laws. You may not scrape, republish, or commercially reuse substantial portions without permission.",
        ],
      },
      {
        title: "8. Changes",
        paragraphs: [
          'We may update these Terms from time to time. Continued use after changes constitutes acceptance. The "Last updated" date reflects the latest revision.',
        ],
      },
      {
        title: "9. Contact",
        paragraphs: ["Questions about these Terms may be sent through our Contact page."],
      },
    ],
  },
  hi: {
    title: "उपयोग की शर्तें",
    lastUpdated,
    intro: "CasinoPulse का उपयोग करके आप इन शर्तों से सहमत होते हैं।",
    sections: [
      {
        title: "1. केवल सूचनात्मक",
        paragraphs: ["सामग्री कानूनी या वित्तीय सलाह नहीं है। जुआ से पहले स्थानीय नियम सत्यापित करें।"],
      },
      {
        title: "2. केवल 18+",
        paragraphs: ["साइट केवल वयस्कों के लिए है।"],
      },
    ],
  },
};

export const editorialTeamMeta = {
  title: "Editorial Team",
  description:
    "Meet the CasinoPulse editorial team — how we assign reviews, maintain methodology standards, and handle corrections for South Asia casino coverage.",
};

export const editorialTeamPage: Record<"en" | "hi", LegalDocument> = {
  en: {
    title: "Editorial Team",
    lastUpdated,
    intro:
      "CasinoPulse is produced by a small editorial research team focused on South Asia and crypto casino topics. We publish under the collective byline CasinoPulse Editorial unless a specific author is credited.",
    sections: [
      {
        title: "How We Work",
        paragraphs: [
          "Reviews and guides are assigned based on reader demand, payment-topic gaps, and operators with frequent South Asian player questions. Each pillar review follows our weighted scoring model and includes licensing caveats, payment notes, and responsible gambling reminders.",
        ],
      },
      {
        title: "Roles",
        paragraphs: ["Our editorial workflow typically includes:"],
        list: [
          "Research — operator terms, licensing footers, payment menus, and complaint themes.",
          "Payments & crypto editing — UPI, wallet, and on-chain deposit context for South Asia.",
          "Risk & blacklist review — documented reported concerns, not unverified rumours.",
          "SEO & indexation hygiene — thin pages noindexed; verified structure for indexable guides.",
        ],
      },
      {
        title: "Corrections & Reader Contact",
        paragraphs: [
          "Report factual errors or outdated payment information through the Contact page. Include URLs and evidence where possible.",
          "We do not provide personalised gambling advice, legal opinions, or dispute mediation with operators.",
        ],
      },
      {
        title: "Independence Reminder",
        paragraphs: [
          "Affiliate links may fund site operations but do not buy review scores. See Editorial Policy and How We Review for full standards.",
          "Read our collective author profile at /author/casinopulse-editorial-team for editorial process, fact-checking, and content update standards.",
        ],
      },
    ],
  },
  hi: {
    title: "संपादकीय टीम",
    lastUpdated,
    intro: "CasinoPulse एक छोटी संपादकीय टीम द्वारा दक्षिण एशिया और क्रिप्टो कैसीनो विषयों पर प्रकाशित होता है।",
    sections: [
      {
        title: "हम कैसे काम करते हैं",
        paragraphs: [
          "समीक्षाएं methodology और पाठक प्राथमिकताओं के अनुसार तैयार की जाती हैं। त्रुटि रिपोर्ट संपर्क पृष्ठ के माध्यम से भेजें।",
        ],
      },
    ],
  },
};
