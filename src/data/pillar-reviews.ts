type ReviewFaq = { question: string; answer: string };

type PillarProfile = {
  slug: string;
  name: string;
  rating: number;
  bonusLine: string;
  withdrawalLine: string;
  licenseNote: string;
  bestFor: string;
  avoidFor: string;
  payments: string;
  crypto: string;
  withdrawals: string;
  kyc: string;
  bonusCaution: string;
  mobile: string;
  support: string;
  southAsia: string;
  gamesDetail: string;
  alternatives: string;
  faqs: ReviewFaq[];
  pros: string[];
  cons: string[];
  risks: string[];
  extraContext: string;
  excerptEn: string;
  excerptHi: string;
};

const profiles: PillarProfile[] = [
  {
    slug: "review-stake",
    name: "Stake",
    rating: 4.3,
    bonusLine: "Competitive welcome offers — terms vary by region",
    withdrawalLine: "Generally reported as reliable — speed varies by method",
    licenseNote:
      "Stake commonly operates under offshore licensing (often cited as Curaçao eGaming). Players should verify the licence number, registered operator entity, and terms on the official site before depositing. Licensing does not guarantee payout speed or dispute resolution in every market.",
    bestFor:
      "Players who already use cryptocurrency, prefer fast on-chain deposits, and want a large slot and instant-game library. Stake also appears suitable for experienced crypto users comfortable reading bonus rules and network fee details.",
    avoidFor:
      "Players who require UPI, Paytm, or local bank rails as primary payment methods. Stake may not suit users in jurisdictions where online casino play is restricted — check local rules before signing up.",
    payments:
      "Stake is crypto-first. Bitcoin, Ethereum, Litecoin, and stablecoins such as USDT are commonly supported depending on chain and region. Fiat on-ramps may appear through third parties; fees and availability can change. See our [USDT casino guide](/crypto/usdt-casino) and [Paytm payments overview](/payment/paytm) if you need local alternatives.",
    crypto:
      "Crypto support is central to Stake. Confirm supported networks (ERC-20 vs TRC-20 for USDT, for example) before sending funds. Start with a small test deposit, verify the wallet address character-by-character, and never send via an unsupported chain.",
    withdrawals:
      "Crypto withdrawals are typically processed after any KYC checks the operator requests. Timing may vary with blockchain congestion, internal review queues, and verification status. Stake does not guarantee instant cashouts — players should verify current limits on the cashier page.",
    kyc:
      "KYC may be triggered at registration, before first withdrawal, or after larger transactions. Have ID and proof-of-address ready if requested. Repeated document requests are a common player complaint industry-wide — keep copies of everything you submit.",
    bonusCaution:
      "Welcome packages and rakeback-style offers can look generous but often carry wagering, max-bet, and game-weighting rules. Read the promotion page at sign-up; terms can change by region and product (casino vs sports). Never assume a headline percentage equals withdrawable cash.",
    mobile:
      "Stake’s web experience is widely used on mobile browsers. Test lobby speed on mobile data, cashier flows, and live chat access before depositing larger amounts. App availability varies — confirm you are on the official domain.",
    support:
      "Support is typically available via live chat and help centre articles. Response quality may vary by time zone and issue type. For payment disputes, document transaction hashes, screenshots, and ticket IDs.",
    southAsia:
      "Indian, Bangladeshi, and Pakistani players often choose Stake for crypto when local banking blocks gambling merchants. That does not make play legal in every state or province — [check local rules](/responsible-gambling). Compare options on our [casino comparison hub](/compare) before committing.",
    pros: [
      "Strong crypto cashier focus with multiple coin options",
      "Large game library including slots and provably fair titles",
      "Modern interface that works well on mobile browsers",
      "Frequent promotions for active crypto users (terms apply)",
    ],
    cons: [
      "Limited traditional India-focused payment rails",
      "Offshore licensing requires extra player due diligence",
      "Bonus terms can be complex for casual players",
      "Support timelines may vary during peak periods",
    ],
    risks: [
      "Using wrong blockchain network when depositing USDT or BTC",
      "Claiming bonuses without reading wagering and max-bet rules",
      "Assuming crypto anonymity removes all verification steps",
    ],
    extraContext:
      "Stake's sportsbook and casino wallets may interact on one account depending on region. Sports losing streaks sometimes push players toward casino chase play — set a cross-product loss limit before the first wager.\n\n**Provably fair titles:** Some Stake original games advertise provably fair mechanics. That refers to cryptographic verification of game outcomes — not a guarantee of profit or legal approval in your country. Still read house edge and session limits.\n\n**VIP programmes:** High-volume players may see personalised limits or faster support — benefits vary and are not contractual. Do not increase deposits solely to chase tier status.",
    gamesDetail:
      "Stake typically lists thousands of slots from providers such as Pragmatic Play, Hacksaw Gaming, and NoLimit City, plus Stake Originals (dice, limbo, plinko-style games) and a sportsbook in supported regions. Live dealer lobbies may include blackjack, roulette, and baccarat depending on your mirror. Provider filters change — open the lobby after login rather than trusting outdated lists.",
    alternatives:
      "If Stake's crypto-only cashier does not fit your workflow, compare [BC.Game](/blogs/review-bc-game) for gamified crypto rewards, [Roobet](/blogs/review-roobet) for fast mini-games, or [LeoVegas](/blogs/review-leovegas) if you need fiat-first mobile UX where legally available. Use our [comparison hub](/compare) and [USDT guide](/crypto/usdt-casino) before switching brands.",
    faqs: [
      {
        question: "Is Stake legal for Indian players?",
        answer:
          "Online casino legality varies by Indian state and by whether you access the site from India or abroad. CasinoPulse does not provide legal advice. Stake is an offshore operator — verify local rules and read our responsible gambling resources before depositing.",
      },
      {
        question: "Does Stake accept UPI or Paytm?",
        answer:
          "Stake is primarily crypto-first. UPI and Paytm are not standard Stake deposit rails in most setups. Indian players often use crypto or compare fiat-friendly brands in our India payments guide.",
      },
      {
        question: "How long do Stake crypto withdrawals take?",
        answer:
          "Timing may vary with KYC status, internal review, and blockchain congestion. Stake does not guarantee instant cashouts — test with a small withdrawal after verification.",
      },
      {
        question: "What should I verify before depositing at Stake?",
        answer:
          "Confirm the official domain, supported coin networks, bonus wagering rules, and KYC triggers. Never send crypto to addresses shared in unofficial Telegram groups.",
      },
    ],
    excerptEn:
      "Editorial Stake review for South Asia players — crypto support, withdrawal notes, licensing context, and risk cautions. Terms may vary by region.",
    excerptHi:
      "Stake संपादकीय समीक्षा — क्रिप्टो समर्थन, निकासी नोट्स और जोखिम संदर्भ। शर्तें क्षेत्र के अनुसार बदल सकती हैं।",
  },
  {
    slug: "review-bc-game",
    name: "BC.Game",
    rating: 4.4,
    bonusLine: "Competitive welcome offers — terms vary by region",
    withdrawalLine: "Generally reported as reliable — speed varies by method",
    licenseNote:
      "BC.Game is widely described as an offshore crypto casino with Curaçao-style licensing. Verify the operator name, licence link, and restricted-country list on site. Players should not treat licensing badges as proof of payout guarantees.",
    bestFor:
      "Crypto-native players who want gamified rewards, a broad slot catalogue, and frequent promotional events. BC.Game appears suitable for users already comfortable with wallet deposits and on-chain confirmations.",
    avoidFor:
      "Players seeking regulated local banking, Hindi phone support as a default, or guaranteed fiat withdrawals to Indian bank accounts. Also avoid if you dislike complex VIP and task-based bonus systems.",
    payments:
      "Deposits are primarily cryptocurrency-based with many supported coins and tokens. Availability changes — confirm the cashier before transferring. For payment context in South Asia, read our [India casino payments hub](/india-casino-payments) and [USDT guide](/crypto/usdt-casino).",
    crypto:
      "BC.Game markets deep crypto integration including multiple chains and tokens. Always match network type to the deposit address shown. Use two-factor authentication on your account and email where offered.",
    withdrawals:
      "Withdrawal timing may vary based on KYC status, internal review, and blockchain conditions. Some players report fast crypto cashouts; others note verification delays — your experience may differ. Test with a small withdrawal first.",
    kyc:
      "Expect identity verification before larger withdrawals or if the risk team flags activity. Submit clear document photos and consistent names across payment methods. KYC policies can change — screenshot the requirements when you register.",
    bonusCaution:
      "BC.Game runs layered welcome packages, rakeback, and task rewards. Each layer can carry separate wagering rules. Promotions that look like free money often require substantial handle — calculate expected playthrough before opting in.",
    mobile:
      "The site is commonly used on mobile web. Check game load times, chat widget placement, and whether your preferred wallet app switches smoothly during deposits.",
    support:
      "Live chat and community channels are typical support paths. Keep records of bonus opt-ins and support ticket numbers if disputes arise.",
    southAsia:
      "BC.Game is frequently discussed among Bangladesh and India crypto casino communities because bank rails are unreliable for gambling. That popularity does not remove legal or tax questions — see [responsible gambling resources](/responsible-gambling). Review methodology: [how we review](/how-we-review).",
    pros: [
      "Wide crypto coin support and active promotion calendar",
      "Gamified loyalty features for regular players",
      "Large slot and arcade-style game selection",
      "Mobile-friendly site architecture",
    ],
    cons: [
      "Complex bonus stack can confuse new players",
      "Offshore operator — limited local recourse",
      "Verification may slow first withdrawal",
      "Not ideal for UPI-first deposit workflows",
    ],
    risks: [
      "Over-depositing to unlock tiered bonuses",
      "Misreading task-based wagering requirements",
      "Phishing sites impersonating BC.Game — verify URL",
    ],
    gamesDetail:
      "BC.Game aggregates a large slot catalogue, BC Originals, live casino tables, and sports betting in supported regions. You may see providers such as Evolution, Pragmatic Play, and Hacksaw depending on mirror and account status. Task-based missions sometimes promote specific games — treat them as optional side activities, not requirements.",
    alternatives:
      "Players wanting a simpler crypto lobby may prefer [Stake](/blogs/review-stake). Those focused on crash-style speed should read [Roobet](/blogs/review-roobet). Fiat-first users abroad may compare [Bet365](/blogs/review-bet365) or [LeoVegas](/blogs/review-leovegas) where legally served. See [blacklist](/blacklist) entries before trying unknown mirrors.",
    faqs: [
      {
        question: "Is BC.Game safe for Bangladeshi crypto users?",
        answer:
          "Safety depends on your risk tolerance, KYC readiness, and whether you verify the official domain. BC.Game is offshore — we document payment and bonus risks but do not guarantee payouts. Compare our methodology scores and start with small test deposits.",
      },
      {
        question: "Why are BC.Game bonuses confusing?",
        answer:
          "BC.Game layers welcome packages, rakeback, and task rewards with separate rules. Read each promotion independently and calculate wagering before opting in.",
      },
      {
        question: "Which networks does BC.Game support for USDT?",
        answer:
          "Supported chains can change. Open the cashier, copy the deposit address, and match the exact network (TRC-20, ERC-20, etc.) before sending funds.",
      },
      {
        question: "How does BC.Game compare to Stake?",
        answer:
          "Both are crypto-first with large game libraries. BC.Game emphasises gamified missions; Stake emphasises originals and sports crossover. Compare cashiers, KYC friction, and bonus complexity on each review.",
      },
    ],
    extraContext:
      "BC.Game’s task-based rewards can encourage frequent logins. Treat missions as optional — completing them is never required to enjoy the core casino product. If missions push you above your planned session length, disable notifications and stick to a fixed bankroll. Seasonal tournaments may require opt-in — screenshot rules before joining. If a mission conflicts with responsible limits you set, skip it entirely.\n\n**Withdrawal caution:** First crypto cashouts often trigger manual review even when marketing suggests instant processing. If your balance is large relative to deposit history, expect additional questions about source of funds. Avoid splitting withdrawals across many small requests in one day — some risk systems flag that pattern.\n\n**South Asia note:** Players in India and Bangladesh who deposit via P2P USDT should keep exchange receipts. If KYC is requested mid-withdrawal, missing payment trail documentation can delay approval for weeks.",
    excerptEn:
      "Editorial BC.Game review for South Asia players — crypto payments, KYC expectations, withdrawal caution, and bonus terms notes. Verify operator terms before depositing.",
    excerptHi:
      "BC.Game संपादकीय समीक्षा — क्रिप्टो भुगतान, KYC और निकासी नोट्स। जमा करने से पहले ऑपरेटर शर्तें सत्यापित करें।",
  },
  {
    slug: "review-roobet",
    name: "Roobet",
    rating: 4.5,
    bonusLine: "Competitive welcome offers — terms vary by region",
    withdrawalLine: "Generally reported as reliable — speed varies by method",
    licenseNote:
      "Roobet operates as an offshore crypto casino brand. Licensing details should be confirmed directly on the operator site. Players should verify corporate ownership disclosures and whether the brand accepts users from their country.",
    bestFor:
      "Players interested in crypto deposits, crash-style games, and a streamlined casino lobby. Roobet may appear suitable for younger crypto users who prioritise speed and simple UX — still subject to 18+ rules everywhere.",
    avoidFor:
      "Conservative players who want traditional licensing transparency, extensive responsible-gambling tooling, or local fiat banking. Also reconsider if you are prone to fast-paced game loops without strict limits.",
    payments:
      "Roobet focuses on cryptocurrency deposits. Supported assets and minimums can change — check the cashier. If crypto is new to you, start with our [Bitcoin casino guide](/crypto/bitcoin-casino) and compare brands on [/compare](/compare).",
    crypto:
      "Bitcoin and other major coins are typically supported. Network fees are paid to miners, not Roobet — factor fees into small deposits. Never share seed phrases or allow “support staff” to remote-control your wallet.",
    withdrawals:
      "Crypto withdrawal speeds depend on verification, internal processing, and chain congestion. Roobet does not publish universal SLAs — timing may vary week to week. Withdraw winnings promptly after testing with a small amount.",
    kyc:
      "KYC may be minimal at signup but requested before larger cashouts or if fraud systems trigger. Have government ID ready. Policies differ by account history and region.",
    bonusCaution:
      "Roobet promotes rakeback and seasonal campaigns. Short-term cashback can still carry playthrough on other promotions. Read whether rewards apply to casino, sports, or original games separately.",
    mobile:
      "Roobet is heavily used on mobile. Test crash and slot titles on your connection type. Set session timers — fast games can encourage longer play than planned.",
    support:
      "Support is usually chat-based. For payment issues, provide blockchain transaction IDs immediately.",
    southAsia:
      "Roobet appears in South Asian crypto casino discussions but is not a locally licensed operator. Indian and Bangladeshi players should understand cross-border gambling risk and use [responsible gambling limits](/responsible-gambling). See editorial risk lists on [/blacklist](/blacklist) for contrast with flagged brands.",
    pros: [
      "Simple crypto-first onboarding flow",
      "Popular crash and instant-win titles",
      "Clean mobile experience",
      "Rakeback-style rewards for volume players",
    ],
    cons: [
      "Limited fiat payment options for South Asia",
      "Fast games require strict personal limits",
      "Offshore dispute resolution can be difficult",
      "Bonus marketing can overshadow terms",
    ],
    risks: [
      "Chasing losses on high-frequency games",
      "Depositing without verifying official domain",
      "Ignoring KYC until a large balance is stuck",
    ],
    gamesDetail:
      "Roobet is known for crash games, Roobet originals, slots from mainstream studios, and a sportsbook tab in supported regions. High-frequency games can encourage longer sessions than planned — set timers. House edges on proprietary games differ from branded slots; read in-game info panels.",
    alternatives:
      "For broader crypto slot catalogues, see [BC.Game](/blogs/review-bc-game) or [Stake](/blogs/review-stake). If you need regulated fiat tooling, [Bet365](/blogs/review-bet365) may fit diaspora players on approved mirrors — confirm legality first. Our [responsible gambling guide](/responsible-gambling) applies regardless of brand.",
    faqs: [
      {
        question: "Are Roobet crash games fair?",
        answer:
          "Roobet markets provably fair mechanics on some originals, but fairness verification does not remove house edge or loss risk. Treat fast games as high-variance entertainment with strict limits.",
      },
      {
        question: "Does Roobet require KYC?",
        answer:
          "KYC may be light at signup but requested before larger withdrawals or if risk systems flag activity. Have government ID ready and submit only through the official portal.",
      },
      {
        question: "Is Roobet available in India?",
        answer:
          "Availability and legality vary. Access from restricted jurisdictions can violate terms and freeze balances. Verify country rules — VPN circumvention is risky.",
      },
      {
        question: "What are safer habits on Roobet?",
        answer:
          "Set deposit and loss limits, avoid chasing crash multipliers, verify the official URL, and withdraw test amounts early after KYC.",
      },
    ],
    extraContext:
      "Roobet’s brand visibility on streaming platforms does not replace due diligence. Streamers may use sponsored codes with terms you never see on screen. Always read the promotion page yourself and compare house edges on original games versus mainstream slots.\n\n**KYC expectations:** Roobet may allow small deposits with minimal verification, then request full ID before releasing larger withdrawals. Do not treat early play as proof that cashouts will stay friction-free — policies can tighten after wins accumulate. Submit documents promptly through the official portal only.\n\n**Who should avoid it (extra):** If you struggle with impulse control on fast-loop games, Roobet’s crash and mini-game lobby can accelerate losses compared with slower slot sessions. Consider operators with stronger deposit-limit defaults or skip entirely.",
    excerptEn:
      "Editorial Roobet review — crypto payments, KYC notes, crash-game risk context, and South Asia relevance. Terms may change; verify on the official site.",
    excerptHi:
      "Roobet संपादकीय समीक्षा — क्रिप्टो भुगतान, KYC नोट्स और जोखिम संदर्भ। शर्तें बदल सकती हैं।",
  },
  {
    slug: "review-bet365",
    name: "Bet365",
    rating: 4.6,
    bonusLine: "Competitive welcome offers — terms vary by region",
    withdrawalLine: "Generally reported as reliable — speed varies by method",
    licenseNote:
      "Bet365 is a long-established operator often associated with UK Gambling Commission and Malta Gaming Authority licences in markets where it holds them. Always open the footer licence section for your jurisdiction — available products and regulators differ by country mirror.",
    bestFor:
      "Players who want an integrated sportsbook and casino, live dealer tables, and a brand with long market presence. Bet365 may appear suitable for users who value structured responsible-gambling tools and clearer corporate disclosure than many crypto-only sites.",
    avoidFor:
      "Players in regions where Bet365 does not accept customers, crypto-only users who refuse fiat KYC, or bonus hunters who dislike strict promotion eligibility rules.",
    payments:
      "Payment menus vary sharply by country. Cards, e-wallets, bank transfer, and sometimes local methods appear on approved mirrors — not all options work for Indian residents on every domain. Confirm deposit methods after login; see [India payments guide](/india-casino-payments).",
    crypto:
      "Bet365 is not a crypto-first brand. Some regions may offer alternative rails, but South Asian crypto users often look elsewhere (e.g. [USDT casinos](/crypto/usdt-casino)). Do not assume BTC deposits unless shown in your cashier.",
    withdrawals:
      "Withdrawals typically require completed KYC and use of the same method where possible. Timing may vary from same-day e-wallets to several banking days. Bet365 publishes help articles on cashout rules — read them before your first deposit.",
    kyc:
      "Expect thorough verification for a mainstream licensed operator. Source-of-funds questions can appear for larger withdrawals. Keep ID, address proof, and payment method ownership consistent.",
    bonusCaution:
      "Bet365 bonuses are tightly regulated in many markets. Offers change by region; some countries restrict welcome promotions entirely. Always read expiry, wagering, and eligible game lists on the official promotion page.",
    mobile:
      "Bet365 invests heavily in mobile web and apps where legally available. Live streaming and in-play betting can increase session length — use deposit limits.",
    support:
      "Help centres, live chat, and phone support exist in supported languages depending on region. Document case IDs for withdrawal queries.",
    southAsia:
      "Indian diaspora players sometimes access Bet365 mirrors abroad; availability inside India is legally sensitive and can change. Bangladesh and Pakistan users face similar restrictions — [check local rules](/responsible-gambling). Our review follows [published methodology](/how-we-review), not marketing claims.",
    pros: [
      "Established brand with clearer licensing in regulated markets",
      "Strong sportsbook plus casino crossover",
      "Mature responsible-gambling toolset where offered",
      "Extensive live dealer and streaming options",
    ],
    cons: [
      "Not crypto-native — limited appeal for USDT-first users",
      "Regional product gaps and geo-blocks",
      "Bonuses may be unavailable or modest in some countries",
      "KYC can feel heavy for casual players",
    ],
    risks: [
      "Signing up on unofficial clone domains",
      "Assuming cricket markets imply legal local play",
      "Mixing sports and casino bankrolls without limits",
    ],
    extraContext:
      "Bet365's strength is breadth — sports, in-play, casino, and poker may share one wallet on some mirrors. That convenience can blur spend categories. Consider separate mental budgets for sports bets and casino spins, even if the balance is combined.\n\n**Mirror discipline:** Always register through the licensed domain shown for your country. Clone sites collect deposits without honouring withdrawals — bookmark the official URL.\n\n**In-play risk:** Live betting during cricket or football can increase impulse wagers. Use deposit limits before kickoff.",
    gamesDetail:
      "Bet365 casino lobbies typically include slots, table games, live dealer studios, and poker where licensed. Sportsbook markets often dominate the product — cricket, football, and tennis are common. Casino game weighting in bonuses may exclude live tables; read promotion terms on your mirror.",
    alternatives:
      "Crypto-first South Asian players often compare [Stake](/blogs/review-stake) or [BC.Game](/blogs/review-bc-game). Mobile casino specialists may prefer [LeoVegas](/blogs/review-leovegas) where served. For payment context see [India casino payments](/india-casino-payments).",
    faqs: [
      {
        question: "Can Indian residents legally use Bet365?",
        answer:
          "Rules vary by state and access path. CasinoPulse does not provide legal advice. Bet365 product availability inside India has been historically restricted — diaspora players abroad may see different mirrors. Verify locally before depositing.",
      },
      {
        question: "Does Bet365 accept Bitcoin deposits?",
        answer:
          "Bet365 is not crypto-native. Unless your cashier explicitly lists crypto, assume fiat rails only. See our Bitcoin casino guide for crypto-first alternatives.",
      },
      {
        question: "Why is Bet365 KYC strict?",
        answer:
          "Licensed operators face AML obligations. Expect ID, address proof, and possible source-of-funds questions on larger withdrawals.",
      },
      {
        question: "Are Bet365 welcome bonuses available everywhere?",
        answer:
          "No. Some jurisdictions restrict or ban casino welcome offers. Read the promotion page after login — headline ads may not apply to your account.",
      },
    ],
    excerptEn:
      "Editorial Bet365 review — licensing notes by jurisdiction, payment and KYC expectations, and risk context for South Asian players abroad. Terms may vary.",
    excerptHi:
      "Bet365 संपादकीय समीक्षा — लाइसेंसिंग, भुगतान और KYC नोट्स। शर्तें अधिकार क्षेत्र के अनुसार बदल सकती हैं।",
  },
  {
    slug: "review-leovegas",
    name: "LeoVegas",
    rating: 4.7,
    bonusLine: "Competitive welcome offers — terms vary by region",
    withdrawalLine: "Generally reported as reliable — speed varies by method",
    licenseNote:
      "LeoVegas Group brands typically reference Malta Gaming Authority and other European regulators on authorised sites. Verify the exact licence footer on the mirror you use — LeoVegas has operated multiple regional entities over time.",
    bestFor:
      "Mobile-first casino players who want polished live dealer lobbies, branded slots, and a UX focused on smartphones. LeoVegas may appear suitable for players who prioritise app-like web performance over crypto anonymity.",
    avoidFor:
      "Crypto-only players, users in blocked countries, or anyone unwilling to complete standard European-operator KYC.",
    payments:
      "Methods depend on licensed entity and country. Cards, e-wallets, and bank transfer are common in served markets; Indian UPI is not universally advertised — confirm locally. Compare fiat-friendly options via [/compare](/compare) and [Paytm context](/payment/paytm).",
    crypto:
      "LeoVegas is traditionally fiat-focused. Do not expect Bitcoin rails unless explicitly listed for your account. Crypto users should review [BC.Game](/blogs/review-bc-game) or [Stake](/blogs/review-stake) comparisons instead.",
    withdrawals:
      "LeoVegas markets fast withdrawals in regulated markets, but timing may vary with KYC backlog and payment partner cut-offs. First cashout often takes longest while verification completes.",
    kyc:
      "Standard ID and address verification is expected. LeoVegas has faced regulatory fines historically for AML failures — expect stricter checks in some regions. Cooperate early to avoid withdrawal holds.",
    bonusCaution:
      "Free-spin bundles and deposit matches carry wagering and max-win caps. Game weighting often favours slots over live tables. Read promotion T&Cs on the LeoVegas mirror you register with.",
    mobile:
      "LeoVegas built its reputation on mobile casino UX. Test portrait-mode live tables, search, and cashier steps on your device before depositing.",
    support:
      "Live chat and email support are standard. LeoVegas also publishes responsible-gambling links in regulated markets — use them.",
    southAsia:
      "LeoVegas marketing reaches South Asian audiences abroad, but direct service in India/Bangladesh/Pakistan is limited or restricted. Diaspora players should confirm legal status and tax obligations. Read [responsible gambling guidance](/responsible-gambling) and our [editorial blacklist](/blacklist) for high-risk alternatives to avoid.",
    pros: [
      "Excellent mobile casino interface",
      "Strong live dealer partnerships",
      "Transparent corporate history in EU markets",
      "Structured safer-gambling tools on licensed sites",
    ],
    cons: [
      "Geo-restrictions for many South Asian registrations",
      "Not ideal for crypto-first workflows",
      "Bonuses can exclude live games",
      "KYC friction on first withdrawal",
    ],
    risks: [
      "Using VPNs to bypass country blocks (account closure risk)",
      "Assuming mobile polish equals local legal approval",
      "Ignoring bonus max-withdrawal clauses",
    ],
    gamesDetail:
      "LeoVegas highlights mobile slots, branded Megaways titles, and live dealer tables from partners such as Evolution and Pragmatic Play Live where licensed. Search and filter tools are tuned for phone screens. Live blackjack and roulette can extend sessions — use reality checks when offered.",
    alternatives:
      "Sports-heavy users may prefer [Bet365](/blogs/review-bet365) on approved mirrors. Crypto depositors should read [Stake](/blogs/review-stake) or [USDT casinos](/crypto/usdt-casino). Compare payment fit on [/compare](/compare) before registering.",
    faqs: [
      {
        question: "Why is LeoVegas popular on mobile?",
        answer:
          "LeoVegas invested early in responsive casino UX — fast lobby loads, portrait live tables, and app-like navigation. Mobile polish does not imply legal approval in every country.",
      },
      {
        question: "Does LeoVegas offer UPI for Indian players?",
        answer:
          "UPI availability is not consistent across LeoVegas entities. Confirm deposit methods after login — do not assume Indian rails because of marketing reach.",
      },
      {
        question: "Can I use a VPN with LeoVegas?",
        answer:
          "VPN use to bypass geo-blocks often violates terms and can lead to account closure and balance holds. Play only where the operator legally accepts your jurisdiction.",
      },
      {
        question: "How do LeoVegas free spins work?",
        answer:
          "Free-spin packages usually carry wagering, expiry, and max-win caps. Live games may contribute zero — read the promotion T&Cs on your licensed mirror.",
      },
    ],
    extraContext:
      "LeoVegas has invested in safer-gambling messaging in EU markets — tool availability still depends on the licence attached to your account. Open account settings on day one and enable deposit limits even if you consider yourself a casual player. Live dealer tables can extend sessions — use reality checks where offered. If your mirror lacks Hindi support, confirm you understand English T&Cs before accepting bonuses.\n\n**Payment limitations:** UPI and Paytm are not consistently listed for South Asian registrations — do not assume local rails work because LeoVegas markets mobile UX globally. Confirm deposit methods after login; withdrawal routes may differ from deposit routes.\n\n**Bonus terms caution:** Free-spin bundles often cap maximum withdrawable winnings separately from deposit-match offers. Live dealer play may contribute zero toward wagering — read game weighting before accepting any package.",
    excerptEn:
      "Editorial LeoVegas review — mobile UX, fiat payment notes, South Asia geo-restrictions, and bonus terms caution. Terms may vary by licensed mirror.",
    excerptHi:
      "LeoVegas संपादकीय समीक्षा — मोबाइल UX, भुगतान नोट्स और दक्षिण एशिया प्रतिबंध। शर्तें मिरर के अनुसार बदल सकती हैं।",
  },
  {
    slug: "review-rollbit",
    name: "Rollbit",
    rating: 4.4,
    bonusLine: "Promotional packages and rakeback — terms vary by region",
    withdrawalLine: "Crypto withdrawals commonly reported — timing varies with KYC and chain congestion",
    licenseNote:
      "Rollbit operates as an offshore crypto casino and sportsbook brand. Licensing and corporate disclosures should be verified on the official site footer. Players should not treat streaming sponsorships or influencer codes as independent safety audits.",
    bestFor:
      "Crypto-comfortable players who want a combined casino, sports, and NFT-adjacent product experience with fast web UX. Rollbit may suit users who already hold BTC or USDT and want proprietary games alongside mainstream slots.",
    avoidFor:
      "Players who need UPI, Paytm, or Indian bank withdrawals as primary rails. Also reconsider if you dislike high-variance proprietary games without strict session limits.",
    payments:
      "Rollbit is crypto-first. Bitcoin, Ethereum, and stablecoins such as USDT may be supported depending on chain and account region — confirm in the cashier. For Indian players blocked on fiat, compare our [UPI guide](/payment/upi) and [India payments hub](/india-casino-payments) before assuming crypto is your only path.",
    crypto:
      "Crypto is central to Rollbit. Match deposit networks exactly (TRC-20 vs ERC-20 for USDT). Enable 2FA, bookmark the official domain, and avoid Telegram 'support' asking for seed phrases. Read [Bitcoin](/crypto/bitcoin-casino) and [USDT](/crypto/usdt-casino) guides for chain hygiene.",
    withdrawals:
      "Crypto cashouts typically follow internal review plus blockchain confirmation. First withdrawals may trigger KYC. Rollbit does not guarantee universal SLAs — timing may vary with risk checks and network fees. Test with a small amount after verification.",
    kyc:
      "KYC may be requested before larger withdrawals or if compliance systems flag activity. Submit documents only through the official portal. Keep wallet transaction hashes for support tickets.",
    bonusCaution:
      "Rollbit promotes rakeback, races, and seasonal events. Each promotion can carry separate eligibility and wagering concepts. Headline rewards are not withdrawable cash until terms are met — read the promotion page at sign-up.",
    mobile:
      "Rollbit is widely used on mobile browsers. Test proprietary games and sports bet slips on your connection. Fast game loops benefit from deposit and loss limits set before play.",
    support:
      "Support is typically chat-based. For crypto issues, provide TXIDs, timestamps, and wallet addresses immediately.",
    southAsia:
      "Rollbit appears in South Asian crypto casino discussions when UPI rails fail. That does not make play legal in every jurisdiction — see [responsible gambling](/responsible-gambling). Compare [Stake](/blogs/review-stake) and [BC.Game](/blogs/review-bc-game) before depositing.",
    pros: [
      "Strong crypto-native cashier and modern interface",
      "Casino, sports, and proprietary games in one account",
      "Active promotional calendar for volume players",
      "Mobile-friendly web experience",
    ],
    cons: [
      "Limited fiat options for Indian banking workflows",
      "Proprietary games can encourage fast session loops",
      "Offshore licensing requires extra due diligence",
      "Bonus structures can be complex",
    ],
    risks: [
      "Sending crypto on the wrong network",
      "Chasing losses on high-frequency Rollbit originals",
      "Using unofficial mirror links from social media",
    ],
    gamesDetail:
      "Rollbit typically lists proprietary originals, slots from major providers, live dealer tables, and sports markets where licensed. Game weighting for bonuses may exclude certain categories — read promotion terms. Sports and casino wallets may interact depending on region.",
    alternatives:
      "Compare [Stake](/blogs/review-stake) for a similar crypto-first lobby, [Cloudbet](/blogs/review-cloudbet) for Bitcoin-focused sports crossover, or [BC.Game](/blogs/review-bc-game) for gamified missions. Use [/compare](/compare) and [/how-we-review](/how-we-review) before switching.",
    faqs: [
      {
        question: "Does Rollbit accept UPI or Paytm?",
        answer:
          "Rollbit is primarily crypto-first. UPI and Paytm are not standard deposit rails in most setups. Indian players often use USDT or BTC after verifying supported networks in the cashier.",
      },
      {
        question: "Is Rollbit good for sports betting?",
        answer:
          "Rollbit offers sports markets in supported regions, but product depth varies by mirror and account. Compare odds, limits, and cashout rules on the official site — we do not run live odds checks.",
      },
      {
        question: "How do Rollbit withdrawals work?",
        answer:
          "Withdrawals are typically crypto-based after any KYC review. Timing may vary with internal checks and blockchain congestion. Test with a small cashout early.",
      },
      {
        question: "What are safer habits on Rollbit?",
        answer:
          "Verify the official URL, set deposit limits, read bonus terms, and avoid increasing stakes to chase leaderboard races.",
      },
    ],
    extraContext:
      "Rollbit's visibility in crypto communities does not replace reading current terms. NFT or token-linked promotions may add complexity — only opt in if you understand settlement rules.\n\n**Bankroll discipline:** Combined sports and casino wallets make it easy to cross-subsidise losses. Track categories separately even if the balance is unified.\n\n**Network fees:** Small BTC deposits can be uneconomical during high fee periods — consider layer-2 or alternative coins if the cashier supports them.",
    excerptEn:
      "Editorial Rollbit review — crypto payments, games overview, KYC notes, and South Asia context. Terms may vary; verify on the official site.",
    excerptHi:
      "Rollbit संपादकीय समीक्षा — क्रिप्टो भुगतान, गेम्स और KYC नोट्स। शर्तें बदल सकती हैं।",
  },
  {
    slug: "review-cloudbet",
    name: "Cloudbet",
    rating: 4.5,
    bonusLine: "Bitcoin-focused welcome offers — terms vary by region",
    withdrawalLine: "Bitcoin withdrawals widely reported — speed varies with KYC and chain conditions",
    licenseNote:
      "Cloudbet is a long-running Bitcoin casino and sportsbook brand often associated with Curaçao-style offshore licensing. Verify licence links and restricted-country lists on the site you use. Longevity does not guarantee future payout performance.",
    bestFor:
      "Players who want a Bitcoin-first operator with sportsbook crossover and established market presence. Cloudbet may appear suitable for crypto users prioritising BTC deposits over wallet UPI flows.",
    avoidFor:
      "Players who require Indian UPI/Paytm deposits or guaranteed local fiat withdrawals. Also avoid if you need Hindi-first support as a default.",
    payments:
      "Cloudbet centres on cryptocurrency, especially Bitcoin. Some regions may see additional rails — confirm after login. Indian players comparing fiat should read [IMPS](/payment/imps) and [UPI](/payment/upi) guides, then decide if crypto is appropriate.",
    crypto:
      "Bitcoin is Cloudbet's historical focus; other coins may appear in the cashier. Use correct addresses, start with test deposits, and read [Bitcoin casino guide](/crypto/bitcoin-casino). USDT users should compare [USDT guide](/crypto/usdt-casino) and network fees.",
    withdrawals:
      "BTC withdrawals follow operator review and blockchain confirmation. KYC may apply. Cloudbet does not promise fixed timelines — player reports range from fast to delayed during verification backlogs.",
    kyc:
      "Expect identity verification for meaningful withdrawals. Cloudbet has operated for years — compliance checks may be stricter than newer crypto casinos. Keep consistent names across documents.",
    bonusCaution:
      "Bitcoin welcome offers and sports combo promos carry wagering and expiry rules. Sports and casino bonuses may not share the same terms — read each promotion independently.",
    mobile:
      "Cloudbet supports mobile web for sports and casino. Live betting during events can extend sessions — enable limits where offered.",
    support:
      "Help centre and chat are typical channels. For BTC tracing, provide TXIDs and screenshot the cashier history.",
    southAsia:
      "Cloudbet is discussed among South Asian crypto bettors when local rails block gambling. Legal status remains jurisdiction-specific — [responsible gambling](/responsible-gambling). Compare [Rollbit](/blogs/review-rollbit) and [Stake](/blogs/review-stake) for alternative crypto lobbies.",
    pros: [
      "Established Bitcoin casino and sportsbook brand",
      "BTC-focused cashier familiar to crypto users",
      "Broad sports markets where served",
      "Long operational track record relative to new clones",
    ],
    cons: [
      "Not UPI-first for Indian workflows",
      "Offshore dispute paths can be slow",
      "Bonus terms vary by product (sports vs casino)",
      "KYC may feel heavy for casual crypto users",
    ],
    risks: [
      "Assuming BTC price stability protects bankroll value",
      "Ignoring bonus game weighting on sports vs slots",
      "Registering via phishing domains impersonating Cloudbet",
    ],
    gamesDetail:
      "Cloudbet lists slots, live dealer, provably fair titles, and extensive sportsbook markets. Cricket and football may be prominent depending on season and licence. Casino promotions may exclude sports bets — check weighting tables.",
    alternatives:
      "Try [Stake](/blogs/review-stake) or [Rollbit](/blogs/review-rollbit) for alternative crypto UX, or [Bet365](/blogs/review-bet365) for fiat-heavy sports where legally served. See [/compare](/compare).",
    faqs: [
      {
        question: "Is Cloudbet only for Bitcoin?",
        answer:
          "Bitcoin is the core brand focus, but other cryptocurrencies may appear in the cashier. Confirm supported coins after login.",
      },
      {
        question: "Does Cloudbet work for Indian cricket betting?",
        answer:
          "Markets may be available on mirrors that accept your jurisdiction, but legal access varies. CasinoPulse does not provide legal advice — verify locally.",
      },
      {
        question: "How fast are Cloudbet BTC withdrawals?",
        answer:
          "Timing may vary with KYC, internal review, and Bitcoin network congestion. Test with a small withdrawal after verification.",
      },
      {
        question: "Cloudbet vs Rollbit — which for crypto?",
        answer:
          "Both are crypto-first. Cloudbet emphasises BTC sports heritage; Rollbit emphasises proprietary games and races. Compare cashiers, KYC friction, and game libraries on each review.",
      },
    ],
    extraContext:
      "Bitcoin-denominated balances fluctuate with BTC price — a winning session can still feel smaller if BTC drops afterward. Some players mentally convert to INR; track both crypto and fiat reference values.\n\n**Sports vs casino bankroll:** Cloudbet's sportsbook can dominate UX. Set separate limits for in-play betting and casino spins.\n\n**Mirror hygiene:** Long-lived brands attract clone sites — verify SSL and official social links.",
    excerptEn:
      "Editorial Cloudbet review — Bitcoin payments, sportsbook notes, KYC expectations, and alternatives for South Asian crypto players.",
    excerptHi:
      "Cloudbet संपादकीय समीक्षा — बिटकॉइन भुगतान, स्पोर्ट्सबुक और KYC नोट्स।",
  },
  {
    slug: "review-betway",
    name: "Betway",
    rating: 4.5,
    bonusLine: "Regional welcome offers — terms and availability vary sharply by market",
    withdrawalLine: "Fiat withdrawals may be available on served mirrors — timing varies with KYC",
    licenseNote:
      "Betway is associated with multiple regulated entities (including MGA and UKGC licences on certain domains). The exact regulator depends on the mirror you access. Always read the footer licence section for your country — do not assume one global licence covers all players.",
    bestFor:
      "Players who want a mainstream sportsbook with attached casino products, clearer corporate disclosure on regulated mirrors, and familiar fiat payment menus where legally served.",
    avoidFor:
      "Crypto-only users, players in countries where Betway geo-blocks registration, and bonus hunters in regions that ban welcome promotions.",
    payments:
      "Payment menus depend on licence and country. Cards, e-wallets, and bank transfer may appear on approved domains; Indian UPI is not consistently advertised — confirm locally. See [India casino payments](/india-casino-payments), [UPI](/payment/upi), and [IMPS](/payment/imps) for South Asian context.",
    crypto:
      "Betway is not crypto-native. Unless your cashier lists crypto, assume fiat rails. Crypto users should compare [Stake](/blogs/review-stake) or [Cloudbet](/blogs/review-cloudbet).",
    withdrawals:
      "Withdrawals typically require KYC and may return to the deposit method where possible. Timing may vary from same-day e-wallets to several banking days. Read help articles on your mirror before depositing.",
    kyc:
      "Expect standard ID and address verification on regulated Betway entities. Source-of-funds questions can appear for larger withdrawals.",
    bonusCaution:
      "Betway sports and casino promotions differ by region; some countries restrict welcome offers. Wagering, expiry, and game weighting apply — read the promotion page after login, not billboard ads.",
    mobile:
      "Betway invests in mobile sports and casino UX on served markets. In-play betting can increase session length — use deposit limits.",
    support:
      "Help centres, chat, and phone support may be available depending on licence. Keep case IDs for withdrawal queries.",
    southAsia:
      "Betway marketing reaches South Asian audiences, but direct service inside India is legally sensitive and may be restricted. Diaspora players abroad may see different mirrors. Read [responsible gambling](/responsible-gambling) and compare [LeoVegas](/blogs/review-leovegas) or [Bet365](/blogs/review-bet365).",
    pros: [
      "Recognisable global sportsbook brand",
      "Structured safer-gambling tooling on regulated mirrors",
      "Casino plus sports crossover for served markets",
      "Clearer licensing disclosure on major domains",
    ],
    cons: [
      "Geo-restrictions for many South Asian sign-ups",
      "Not ideal for crypto-first workflows",
      "Bonuses may be limited or unavailable in some regions",
      "KYC can delay first withdrawal",
    ],
    risks: [
      "Registering on unofficial clone sites",
      "Assuming sports availability implies legal local play",
      "Mixing sports and casino spend without budgets",
    ],
    gamesDetail:
      "Betway casino lobbies include slots, table games, and live dealer where licensed. Sports markets (football, cricket, tennis) often dominate the product. Casino bonus weighting may exclude live tables — read terms.",
    alternatives:
      "Compare [Bet365](/blogs/review-bet365) for similar sports depth, [LeoVegas](/blogs/review-leovegas) for mobile casino focus, or [BC.Game](/blogs/review-bc-game) for crypto. Use [/compare](/compare) and [/india-casino-payments](/india-casino-payments).",
    faqs: [
      {
        question: "Does Betway accept UPI in India?",
        answer:
          "UPI availability is not consistent across Betway entities. Confirm deposit methods after login on the mirror that accepts your jurisdiction.",
      },
      {
        question: "Is Betway better for sports or casino?",
        answer:
          "Betway historically leads with sportsbook UX; casino is a strong secondary product. Choose based on which product you will use most — bonus terms differ.",
      },
      {
        question: "Can I use Betway with Bitcoin?",
        answer:
          "Unless explicitly listed in your cashier, assume fiat-only. See our Bitcoin casino guide for crypto-first operators.",
      },
      {
        question: "Betway vs LeoVegas for mobile casino?",
        answer:
          "LeoVegas emphasises mobile casino polish; Betway emphasises sports crossover. Compare payment menus and geo-access on each review.",
      },
    ],
    extraContext:
      "Betway's multi-entity structure confuses players — footer licence text is the authoritative source for your account, not forum rumours.\n\n**Sports/casino wallet:** Combined balances can hide category losses. Track sports and casino separately.\n\n**Promotion eligibility:** Betway may hide casino welcome offers in regions with stricter advertising rules — absence of a banner does not mean no promotions exist; check the promotions tab after login.",
    excerptEn:
      "Editorial Betway review — sportsbook and casino notes, fiat payment context, geo-restrictions, and South Asia relevance.",
    excerptHi:
      "Betway संपादकीय समीक्षा — स्पोर्ट्सबुक, भुगतान और भू-प्रतिबंध नोट्स।",
  },
];

function buildPillarReviewEn(profile: PillarProfile): string {
  const pros = profile.pros.map((p) => `- ${p}`).join("\n");
  const cons = profile.cons.map((c) => `- ${c}`).join("\n");
  const risks = profile.risks.map((r) => `- ${r}`).join("\n");

  return `# ${profile.name} Review 2026 — Editorial Verdict for South Asian Players

## Short Verdict
${profile.name} scores **${profile.rating}/5** in the CasinoPulse weighted model (safety, payments, bonuses, games, UX, support, reputation). It may appear suitable for players who match the profile below — but scores are editorial estimates, not guarantees. Verify every detail on the official operator site before depositing. Terms, payment rails, and licensing can change without notice.

## Who It Is Best For
${profile.bestFor}

If you are new to online casinos, start with small deposits, read promotion rules line-by-line, and compare at least two operators using our [comparison hub](/compare) before committing larger bankrolls.

## Who Should Avoid It
${profile.avoidFor}

Players under 18 must not register. If you are recovering from problem gambling, skip new operator sign-ups and use [responsible gambling support resources](/responsible-gambling) first.

## Licensing & Regulation Notes
${profile.licenseNote}

CasinoPulse does not verify licences directly with regulators on every review cycle. Treat footer licence links as a starting point: click through, note the licence number, and search the regulator register when available. Offshore licensing often means disputes are handled outside South Asian consumer courts.

## Payment Methods
${profile.payments}

Before any deposit, screenshot the cashier page showing method name, fees, and minimum amounts. Avoid sending money to personal UPI IDs or Telegram agents claiming to represent ${profile.name} — those are common fraud patterns in South Asia.

## Crypto Support
${profile.crypto}

If you prefer stablecoins, read our [USDT casino guide](/crypto/usdt-casino) for chain-selection tips. Crypto removes some banking friction but does not remove legal or tax obligations in India, Bangladesh, or Pakistan.

## Withdrawal Expectations
${profile.withdrawals}

Our data summary: ${profile.withdrawalLine}. Player reports online vary widely — timing may differ for VIP tiers, first-time cashouts, or weekends. Never treat marketing copy about “instant” payouts as contractual promises.

## KYC Expectations
${profile.kyc}

Submit documents only through the official verification portal. Phishing emails requesting KYC are common — check sender domains carefully. If verification stalls for weeks, document every support interaction.

## Bonus Caution
${profile.bonusCaution}

Current promotional summary in our database: ${profile.bonusLine}. Wagering multiples, excluded games, and max bet during bonus play can void winnings. Opt out of promotions if you prefer simpler cash play.

## Mobile Usability
${profile.mobile}

Rotate your phone through portrait and landscape on live tables, search for your favourite providers, and confirm whether chat support is reachable from the game window.

## Customer Support Notes
${profile.support}

For payment tracing, prepare transaction IDs, timestamps, and wallet addresses. Escalate politely with screenshots; aggressive chargebacks without following operator process rarely help.

## Games & Software Providers
${profile.gamesDetail}

${profile.name} typically offers slots, table games, and live dealer lobbies depending on region. Provider lists change — open the lobby filter after login to see what is actually available to your account. Sportsbook products may sit behind separate tabs with different bonus rules.

## Alternatives to Consider
${profile.alternatives}

## South Asia & India Relevance
${profile.southAsia}

Diaspora players in the UAE, UK, or Southeast Asia may see different mirrors than friends in South Asia. A VPN does not create legal permission to play — it may violate terms and freeze balances.

## Pros
${pros}

## Cons
${cons}

## Risk Notes
${risks}

## Practical Checklist Before You Deposit
- Confirm you are on the official ${profile.name} domain (bookmark it — do not use random Telegram links)
- Read bonus terms if you opt in; skip promotions if unsure
- Set a deposit limit and session timer before first bet
- Test withdrawal with a small amount after minimal play if policy allows
- Compare editorial risk lists on our [blacklist page](/blacklist) for contrast with flagged brands

## What CasinoPulse Did Not Do
We did not run independent payout tests, mystery-shop customer support, or legal reviews of operator contracts for this article. This review synthesises publicly available operator information, player forum themes, and our scoring framework. Your experience may differ.

## Additional Context
${profile.extraContext}

## Frequently Asked Questions
${profile.faqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join("\n\n")}

## Editorial Standards & Responsible Play
Ratings follow our published [review methodology](/how-we-review). CasinoPulse may earn affiliate commissions when you use outbound links; commercial relationships do not buy higher scores. Gambling involves risk of loss — never borrow to play. If gambling harms finances or relationships, stop and seek help via [responsible gambling resources](/responsible-gambling). Check local laws — online casino access is restricted or grey in many South Asian jurisdictions. 18+ only.`;
}

function buildPillarReviewHi(profile: PillarProfile): string {
  return `# ${profile.name} समीक्षा 2026

## संक्षिप्त निर्णय
CasinoPulse स्कोर: **${profile.rating}/5**। जमा करने से पहले आधिकारिक साइट पर लाइसेंस, भुगतान और बोनस शर्तें सत्यापित करें।

## संपादकीय मानक
हमारी [समीक्षा methodology](/how-we-review) देखें। [जिम्मेदार जुआ](/responsible-gambling) संसाधन पढ़ें। 18+ केवल।`;
}

export const pillarReviewOverrides: Record<
  string,
  {
    content: { en: string; hi: string };
    excerpt: { en: string; hi: string };
    readTime: number;
  }
> = Object.fromEntries(
  profiles.map((profile) => [
    profile.slug,
    {
      content: {
        en: buildPillarReviewEn(profile),
        hi: buildPillarReviewHi(profile),
      },
      excerpt: {
        en: profile.excerptEn,
        hi: profile.excerptHi,
      },
      readTime: 16,
    },
  ])
);

export function getPillarReviewFaqs(slug: string): ReviewFaq[] {
  const profile = profiles.find((p) => p.slug === slug);
  return profile?.faqs ?? [];
}

export const PILLAR_REVIEW_SLUGS = new Set(profiles.map((p) => p.slug));

export function isPillarReviewSlug(slug: string): boolean {
  return PILLAR_REVIEW_SLUGS.has(slug);
}
