export const HOW_WE_REVIEW_PATH = "/how-we-review";

export const howWeReviewMeta = {
  title: "How We Review Online Casinos",
  description:
    "Learn how CasinoPulse evaluates online casinos using transparent criteria covering safety, payments, bonuses, reputation, and player experience.",
};

export const howWeReviewHero = {
  title: "How We Review Online Casinos",
  subtitle:
    "CasinoPulse evaluates casinos using transparent scoring criteria focused on safety, payments, fairness, and player experience.",
};

export const reviewProcessSteps = [
  {
    step: 1,
    title: "Research",
    description:
      "We gather operator data from official sites, terms pages, support channels, and player feedback across South Asian markets before scoring.",
  },
  {
    step: 2,
    title: "Licensing verification",
    description:
      "We check whether a casino displays verifiable licensing, regulator references, and third-party fairness or security certifications where claimed.",
  },
  {
    step: 3,
    title: "Payment testing",
    description:
      "We evaluate deposit and withdrawal options for Indian, Bangladeshi, and Pakistani players — including UPI, wallets, and crypto rails.",
  },
  {
    step: 4,
    title: "Bonus analysis",
    description:
      "Welcome offers, wagering requirements, max bet rules, game weighting, and expiry terms are reviewed for fairness and transparency.",
  },
  {
    step: 5,
    title: "Complaint investigation",
    description:
      "We track unresolved withdrawal issues, account restrictions, and repeated player complaints before recommending or flagging a brand.",
  },
  {
    step: 6,
    title: "Security review",
    description:
      "We assess SSL usage, account protection options, KYC clarity, and whether the operator explains how player funds are handled.",
  },
  {
    step: 7,
    title: "Editorial scoring",
    description:
      "Findings are weighted using our public scoring model below. Ratings cannot be purchased and are updated when operator terms change.",
  },
] as const;

export const scoringCategories = [
  { name: "Safety & Licensing", weight: 25 },
  { name: "Payments & Withdrawals", weight: 20 },
  { name: "Bonuses & Promotions", weight: 15 },
  { name: "Game Selection", weight: 15 },
  { name: "User Experience", weight: 10 },
  { name: "Support Quality", weight: 10 },
  { name: "Reputation & Complaints", weight: 5 },
] as const;

export const paymentMethodsReviewed = [
  { name: "Crypto (general)", href: "/crypto/usdt-casino" },
  { name: "Bitcoin (BTC)", href: "/crypto/bitcoin-casino" },
  { name: "Ethereum (ETH)", href: "/crypto/ethereum-casino" },
  { name: "USDT", href: "/crypto/usdt-casino" },
  { name: "Paytm", href: "/payment/paytm" },
  { name: "UPI", href: "/india-casino-payments" },
  { name: "bKash", href: "/payment/bkash" },
  { name: "Nagad", href: "/payment/nagad" },
  { name: "Bangladesh payments", href: "/bangladesh-casino-payments" },
  { name: "JazzCash", href: "/india-casino-payments" },
] as const;

export const paymentReviewFactors = [
  "Deposit and withdrawal fees (if disclosed)",
  "Typical payout speed by payment method",
  "Reliability and success rate for South Asian players",
  "Regional availability (India, Bangladesh, Pakistan, Sri Lanka)",
] as const;

export const responsibleGamblingPoints = [
  "Player protection tools such as deposit limits and self-exclusion",
  "Clear responsible gambling messaging on operator sites",
  "Age verification and KYC transparency",
  "Links to independent help resources where operators provide them",
] as const;

export const editorialIndependence =
  "CasinoPulse may receive affiliate commissions when readers visit partner casinos, but editorial ratings are independent and cannot be purchased. Commercial relationships do not determine review scores, blacklist placement, or ranking order.";

export const updatePolicy =
  "Reviews are periodically updated as casino products, licenses, bonuses, and payment methods change. Material updates — such as new complaints, license changes, or payment rail removals — are prioritized for refresh.";

export const howWeReviewFaqs = [
  {
    question: "How does CasinoPulse rate casinos?",
    answer:
      "CasinoPulse rates casinos using a weighted model across seven categories: safety and licensing (25%), payments and withdrawals (20%), bonuses (15%), game selection (15%), user experience (10%), support quality (10%), and reputation or complaints (5%). Each review follows our published research, verification, and editorial scoring process.",
  },
  {
    question: "Can casinos pay for better rankings?",
    answer:
      "No. CasinoPulse does not sell higher ratings or favorable placement. Affiliate commissions may apply when readers sign up through partner links, but scores and editorial conclusions remain independent.",
  },
  {
    question: "How often are reviews updated?",
    answer:
      "Reviews are updated on a rolling basis when bonuses, payment methods, licensing, or complaint patterns change. High-traffic brands and operators with active player issues are reviewed more frequently.",
  },
  {
    question: "Do you test payment methods?",
    answer:
      "Yes. We evaluate payment availability, documented fees, withdrawal timelines, and regional support for methods such as UPI, Paytm, bKash, Nagad, JazzCash, and major cryptocurrencies including Bitcoin, Ethereum, and USDT.",
  },
] as const;
