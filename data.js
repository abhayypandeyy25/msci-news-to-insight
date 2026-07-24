window.FI_DATA = {
 "generatedAt": "2026-06-30",
 "defaultEntity": "kotak",
 "trustProfiles": {
  "outlets": {
   "reuters.com": {
    "band": "High",
    "verdict": "Reuters is a global wire service with strong editorial standards and fast, sourced reporting — among the most reliable signals for corporate and regulatory news."
   },
   "business-standard.com": {
    "band": "High",
    "verdict": "Business Standard is trusted for Indian business and financial news, though a right-center editorial lean and limited shareholder transparency keep it a notch below top global outlets."
   },
   "livemint.com": {
    "band": "High",
    "verdict": "Mint (HT Media) is a well-regarded Indian financial daily with solid corporate and policy coverage; opinion sections lean market-friendly."
   },
   "moneycontrol.com": {
    "band": "Medium",
    "verdict": "Moneycontrol is India's largest markets portal — fast and broad, but mixes original reporting with syndicated wires and market chatter; corroborate market-moving claims."
   },
   "economictimes.indiatimes.com": {
    "band": "Medium",
    "verdict": "The Economic Times has wide corporate access and strong beat reporters, but a high story volume with variable sourcing depth; exclusives usually firm, roundups noisier."
   },
   "m.economictimes.com": {
    "band": "Medium",
    "verdict": "The Economic Times has wide corporate access and strong beat reporters, but a high story volume with variable sourcing depth; exclusives usually firm, roundups noisier."
   },
   "bfsi.economictimes.indiatimes.com": {
    "band": "Medium",
    "verdict": "ET BFSI is the Economic Times' banking vertical — sector-specialist, close to industry sources, occasionally close to industry talking points."
   },
   "thehindubusinessline.com": {
    "band": "High",
    "verdict": "BusinessLine (The Hindu group) is measured and well-sourced on banking and policy, with a slower news cycle than competitors — misses speed, rarely accuracy."
   },
   "cnbctv18.com": {
    "band": "Medium",
    "verdict": "CNBC-TV18 is strong on breaking market news and management interviews; television-first pacing means early reports sometimes firm up later."
   },
   "ndtvprofit.com": {
    "band": "Medium",
    "verdict": "NDTV Profit (ex-BloombergQuint) retains solid markets DNA and good regulatory coverage; rebuilding depth after ownership changes."
   },
   "businesstoday.in": {
    "band": "Medium",
    "verdict": "Business Today covers corporate India reliably at magazine pace; breaking coverage often aggregates other outlets."
   },
   "financialexpress.com": {
    "band": "Medium",
    "verdict": "Financial Express is a credible business daily (Indian Express group) with decent policy access; thinner original corporate investigations."
   },
   "indianexpress.com": {
    "band": "High",
    "verdict": "The Indian Express is one of India's strongest investigative newsrooms — its corporate/regulatory investigations are typically deeply documented and slow to retract."
   },
   "timesofindia.indiatimes.com": {
    "band": "Medium",
    "verdict": "Times of India has vast reach and quick city/crime desks (useful for fraud/FIR stories), but business coverage is syndication-heavy."
   },
   "thehindu.com": {
    "band": "High",
    "verdict": "The Hindu maintains conservative, well-verified reporting standards; business desk is smaller but rarely wrong."
   },
   "newindianexpress.com": {
    "band": "Medium",
    "verdict": "New Indian Express is a credible regional daily; strong on southern-India ground reporting, lighter on corporate finance depth."
   },
   "fortuneindia.com": {
    "band": "Medium",
    "verdict": "Fortune India runs considered features and rankings; not a breaking-news source — treat as analysis, not first signal."
   },
   "scanx.trade": {
    "band": "Low",
    "verdict": "ScanX is a retail-trading news aggregator — high volume, thin sourcing, largely rewritten from primary outlets. Useful for velocity, quarantined for confirmation."
   },
   "marketsmojo.com": {
    "band": "Low",
    "verdict": "MarketsMojo is an algorithmic stock-commentary site, not a newsroom — treat its items as market chatter, never as primary confirmation."
   },
   "whalesbook.com": {
    "band": "Low",
    "verdict": "Whalesbook is a retail social-trading app surface; unverified, engagement-driven content. Corroboration required before any score impact."
   }
  },
  "classes": {
   "Regulator & exchange": {
    "band": "High",
    "verdict": "Primary-source disclosures from regulators and exchanges — the gold standard: no editorial intermediation, near-zero false-positive risk."
   },
   "Agency wires": {
    "band": "High",
    "verdict": "Professional wire services (Reuters, PTI, Bloomberg) with verification cultures and fast corrections — high-trust breaking signal."
   },
   "Business press": {
    "band": "Medium",
    "verdict": "India's business dailies and market portals — strong corporate access and beat expertise; speed and volume mean individual items merit corroboration."
   },
   "General & regional press": {
    "band": "Medium",
    "verdict": "General and regional newsrooms — valuable for on-the-ground fraud/legal stories, weaker on financial nuance; trust varies by desk."
   },
   "Aggregators & other": {
    "band": "Low",
    "verdict": "Aggregators, trading apps, and social surfaces — high velocity, unverified. Held at the tollgate until independently confirmed."
   }
  }
 },
 "apiStatus": {
  "checkedAt": "2026-07-24 08:06 UTC",
  "testQuery": "HDFC Bank",
  "providers": [
   {
    "name": "NewsAPI.org",
    "status": "WORKING",
    "latencyMs": 1697,
    "articles": 25,
    "note": "Free dev tier: 100 req/day · 24h article delay · ~1 month history",
    "extra": "715 total matches · 2026-07-23 newest"
   },
   {
    "name": "NewsData.io",
    "status": "NOT CONFIGURED",
    "latencyMs": 0,
    "articles": 0,
    "note": "Awaiting API key (NEWSDATA_IO_KEY)",
    "extra": ""
   },
   {
    "name": "NewsAPI.ai",
    "status": "NOT CONFIGURED",
    "latencyMs": 0,
    "articles": 0,
    "note": "Awaiting API key (NEWSAPI_AI_KEY)",
    "extra": ""
   }
  ]
 },
 "sources": [
  {
   "name": "Regulator & exchange",
   "records": 0,
   "outlets": 0,
   "trustMin": 0.93,
   "trustMax": 0.95,
   "topDomains": []
  },
  {
   "name": "Agency wires",
   "records": 42,
   "outlets": 3,
   "trustMin": 0.83,
   "trustMax": 0.85,
   "topDomains": [
    {
     "d": "reuters.com",
     "n": 18
    },
    {
     "d": "bloomberg.com",
     "n": 14
    },
    {
     "d": "aninews.in",
     "n": 10
    }
   ]
  },
  {
   "name": "Business press",
   "records": 863,
   "outlets": 23,
   "trustMin": 0.72,
   "trustMax": 0.78,
   "topDomains": [
    {
     "d": "moneycontrol.com",
     "n": 110
    },
    {
     "d": "business-standard.com",
     "n": 105
    },
    {
     "d": "cnbctv18.com",
     "n": 104
    },
    {
     "d": "thehindubusinessline.com",
     "n": 104
    },
    {
     "d": "m.economictimes.com",
     "n": 99
    },
    {
     "d": "livemint.com",
     "n": 68
    },
    {
     "d": "bfsi.economictimes.indiatimes.com",
     "n": 68
    },
    {
     "d": "ndtvprofit.com",
     "n": 57
    }
   ]
  },
  {
   "name": "General & regional press",
   "records": 177,
   "outlets": 20,
   "trustMin": 0.48,
   "trustMax": 0.55,
   "topDomains": [
    {
     "d": "timesofindia.indiatimes.com",
     "n": 36
    },
    {
     "d": "indianexpress.com",
     "n": 26
    },
    {
     "d": "thehindu.com",
     "n": 25
    },
    {
     "d": "newindianexpress.com",
     "n": 22
    },
    {
     "d": "freepressjournal.in",
     "n": 14
    },
    {
     "d": "theprint.in",
     "n": 13
    },
    {
     "d": "ndtv.com",
     "n": 9
    },
    {
     "d": "m.thewire.in",
     "n": 7
    }
   ]
  },
  {
   "name": "Aggregators & other",
   "records": 598,
   "outlets": 169,
   "trustMin": 0.3,
   "trustMax": 0.35,
   "topDomains": [
    {
     "d": "scanx.trade",
     "n": 125
    },
    {
     "d": "marketsmojo.com",
     "n": 18
    },
    {
     "d": "whalesbook.com",
     "n": 16
    },
    {
     "d": "rediff.com",
     "n": 16
    },
    {
     "d": "tradingview.com",
     "n": 14
    },
    {
     "d": "upstox.com",
     "n": 13
    },
    {
     "d": "businessworld.in",
     "n": 9
    },
    {
     "d": "investywise.com",
     "n": 9
    }
   ]
  }
 ],
 "rawTotal": 7702,
 "feeds": [
  {
   "name": "Google News RSS · India edition",
   "detail": "15 entity channels · month-sliced queries",
   "status": "LIVE"
  },
  {
   "name": "GDELT DOC 2.0 API",
   "detail": "Global news firehose · quota-managed backfill",
   "status": "QUOTA-MANAGED"
  },
  {
   "name": "GDELT Events (CAMEO)",
   "detail": "Structured event codes · cross-validation",
   "status": "PLANNED"
  }
 ],
 "window": "Jan–Jun 2026",
 "sectorLabel": "Indian BFSI",
 "matrixSources": [
  "Regulator & exchange",
  "Agency wires",
  "Business press",
  "General & regional press",
  "Aggregators & other"
 ],
 "matrixSectors": [
  "Private bank",
  "PSU bank",
  "NBFC",
  "Housing finance",
  "Gold-loan NBFC"
 ],
 "matrixW": {
  "Regulator & exchange": [
   0.95,
   0.95,
   0.93,
   0.93,
   0.93
  ],
  "Agency wires": [
   0.85,
   0.85,
   0.83,
   0.83,
   0.83
  ],
  "Business press": [
   0.78,
   0.76,
   0.74,
   0.74,
   0.72
  ],
  "General & regional press": [
   0.55,
   0.55,
   0.5,
   0.5,
   0.48
  ],
  "Aggregators & other": [
   0.35,
   0.35,
   0.32,
   0.32,
   0.3
  ]
 },
 "entities": {
  "hdfcbank": {
   "name": "HDFC Bank",
   "ticker": "HDFCBANK",
   "sector": "Private bank",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 55,
    "risk": 4,
    "esg": 16,
    "momentum": 38,
    "catalyst": 44,
    "sentiment": 10
   },
   "trend": 5,
   "quarantined": 14,
   "narrative": "HDFC Bank: HDFC Bank was reported to face possible regulatory scrutiny for alleged violation of RBI directions on deposit rates — driving the controversy index. HDFC Bank's board approved former CEC and financial services secretary Rajiv Kumar as part-time non-executive chairman — lifting the opportunity side. 14 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    44,
    51,
    49,
    50,
    50,
    52,
    52,
    49,
    49,
    48,
    49,
    54
   ],
   "indexHistory": {
    "controversy": [
     50,
     49,
     48,
     47,
     46,
     44,
     43,
     56,
     55,
     53,
     52,
     55
    ],
    "risk": [
     6,
     5,
     5,
     5,
     5,
     5,
     4,
     4,
     4,
     4,
     4,
     4
    ],
    "esg": [
     6,
     6,
     17,
     17,
     16,
     15,
     20,
     19,
     18,
     18,
     17,
     16
    ],
    "momentum": [
     25,
     41,
     40,
     42,
     41,
     40,
     39,
     38,
     37,
     36,
     36,
     37
    ],
    "catalyst": [
     10,
     14,
     13,
     12,
     11,
     19,
     19,
     23,
     22,
     21,
     20,
     44
    ],
    "sentiment": [
     4,
     3,
     7,
     6,
     5,
     8,
     13,
     10,
     9,
     7,
     6,
     5
    ]
   },
   "articleCount": 133,
   "events": [
    {
     "id": "hdfcbank-0",
     "index": "controversy",
     "pillar": "Financial integrity",
     "title": "HDFC Bank may face regulatory scrutiny for alleged violation of RBI directions on deposits rates",
     "desc": "HDFC Bank was reported to face possible regulatory scrutiny for alleged violation of RBI directions on deposit rates.",
     "url": "https://www.thehindubusinessline.com/money-and-banking/hdfc-bank-may-face-regulatory-scrutiny-for-alleged-violation-of-rbi-directions-on-deposits-rates/article71030202.ece",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject — accused",
     "dir": "neg",
     "time": "1mo ago",
     "sev": 0.75,
     "corr": 1.3,
     "vel": 1.3,
     "stg": 1.2,
     "dec": 0.86,
     "stage": "probe",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → HDFC Bank",
      "Classified: Controversy · Financial integrity · probe",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-HDFCBANK-1000"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "hdfcbank-1",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "HDFC Bank board approves former CEC Rajiv Kumar as its PT Chairman",
     "desc": "HDFC Bank's board approved former CEC and financial services secretary Rajiv Kumar as part-time non-executive chairman.",
     "url": "https://www.thehindubusinessline.com/money-and-banking/hdfc-banks-board-approves-former-cec-rajiv-kumar-as-its-pt-chairman/article71162595.ece",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "today",
     "sev": 0.55,
     "corr": 1.3,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 1.0,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → HDFC Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "today",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-HDFCBANK-1001"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "hdfcbank-2",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "Supreme Court seeks police and CBI response on Lilavati Trust plea against HDFC chief",
     "desc": "Supreme Court sought police and CBI responses on the Lilavati Trust plea against the HDFC Bank chief.",
     "url": "https://economictimes.indiatimes.com/industry/banking/finance/banking/supreme-court-seeks-police-and-cbi-response-on-lilavati-trusts-plea-against-hdfc-chief/articleshow/131397140.cms",
     "domain": "economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject — defendant",
     "dir": "neg",
     "time": "1mo ago",
     "sev": 0.6,
     "corr": 1.3,
     "vel": 0.9,
     "stg": 1.2,
     "dec": 0.84,
     "stage": "probe",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → HDFC Bank",
      "Classified: Controversy · Legal & compliance · probe",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-HDFCBANK-1002"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "hdfcbank-3",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "HDFC may Weigh 3rd Term for CEO",
     "desc": "HDFC Bank's board moved toward recommending a fresh term for Sashidhar Jagdishan as MD and CEO.",
     "url": "https://economictimes.indiatimes.com/epaper/delhicapital/2026/jun/29/et-front/hdfc-may-weigh-3rd-term-for-ceo/articleshow/132058700.cms",
     "domain": "economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "today",
     "sev": 0.45,
     "corr": 1.3,
     "vel": 1.2,
     "stg": 1.0,
     "dec": 1.0,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → HDFC Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "today",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-HDFCBANK-1003"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "hdfcbank-4",
     "index": "momentum",
     "pillar": "Financial",
     "title": "HDFC Bank Q4 Results : Net profit rises 9 % to ₹19 , 221 crore , NII up 3 . 8 % YoY ; declares dividend of ₹13",
     "desc": "HDFC Bank reported Q4 FY26 net profit up about 9% YoY to Rs 19,221 crore with improved asset quality and declared a Rs 13 per share dividend.",
     "url": "https://www.livemint.com/market/stock-market-news/hdfc-bank-q4-results-net-profit-rises-9-to-rs-19-221-crore-nii-up-3-8-yoy-declares-dividend-of-rs-13-per-share-11776500563671.html",
     "domain": "livemint.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.55,
     "corr": 1.3,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.67,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → HDFC Bank",
      "Classified: Momentum · Financial",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-HDFCBANK-1004"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "hdfcbank-5",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "HDFC Bank likely to rope in Puneet Sharma , ex - CFO of Axis Bank",
     "desc": "HDFC Bank moved to appoint ex-Axis Bank CFO Puneet Sharma as finance chief amid a broader leadership reshuffle.",
     "url": "https://www.moneycontrol.com/news/business/banks/hdfc-bank-likely-to-rope-in-puneet-sharma-ex-cfo-of-axis-bank-13961503.html",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "today",
     "sev": 0.4,
     "corr": 1.3,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 1.0,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → HDFC Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "today",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-HDFCBANK-1005"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "hdfcbank-6",
     "index": "controversy",
     "pillar": "PR & reputational",
     "title": "Atanu Chakraborty terms HDFC Bank legal review superfluous",
     "desc": "Atanu Chakraborty dismissed HDFC Bank's legal review as superfluous and criticised the board's approach.",
     "url": "https://www.livemint.com/companies/news/atanu-chakraborty-hdfc-bank-legal-review-report-sashidhar-jagdishan-11782534635153.html",
     "domain": "livemint.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "1d ago",
     "sev": 0.4,
     "corr": 1.15,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.97,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → HDFC Bank",
      "Classified: Controversy · PR & reputational",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2d ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-HDFCBANK-1006"
      },
      {
       "time": "1d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "hdfcbank-7",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Keki Mistry may get extension at HDFC Bank",
     "desc": "Keki Mistry was reported likely to get an extension as HDFC Bank's interim chairman amid the governance review.",
     "url": "https://economictimes.indiatimes.com/industry/banking/finance/banking/keki-mistry-may-get-extension-at-hdfc-bank/articleshow/131185559.cms",
     "domain": "economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "1w ago",
     "sev": 0.4,
     "corr": 1.3,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.89,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → HDFC Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-HDFCBANK-1007"
      },
      {
       "time": "1w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "hdfcbank-8",
     "index": "controversy",
     "pillar": "Key-person risk",
     "title": "HDFC Bank appoints external law firms to review Atanu Chakraborty resignation letter  Did not mention …",
     "desc": "HDFC Bank appointed external law firms to review chairman Atanu Chakraborty's abrupt resignation, which cited ethical concerns.",
     "url": "https://www.livemint.com/companies/news/hdfc-bank-appoints-external-law-firms-to-review-atanu-chakrabortys-resignation-letter-did-not-mention-11774316265532.html",
     "domain": "livemint.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "3mo ago",
     "sev": 0.8,
     "corr": 1.3,
     "vel": 1.3,
     "stg": 0.6,
     "dec": 0.47,
     "stage": "allegation",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → HDFC Bank",
      "Classified: Controversy · Key-person risk · allegation",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-HDFCBANK-1008"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "hdfcbank-9",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "RBI seeks details of board meetings from HDFC Bank",
     "desc": "RBI sought details of HDFC Bank board meetings amid scrutiny following the chairman's exit.",
     "url": "https://www.moneycontrol.com/banking/rbi-seeks-details-of-board-meetings-from-hdfc-bank-article-13870317.html",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "3mo ago",
     "sev": 0.6,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.2,
     "dec": 0.57,
     "stage": "probe",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → HDFC Bank",
      "Classified: Controversy · Legal & compliance · probe",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-HDFCBANK-1009"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "hdfcbank-10",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Buy HDFC Bank shares : Chairman exit behind us ? Target prices post Q4 results",
     "desc": "Brokerages stayed positive on HDFC Bank with revised target prices after Q4 FY26 results despite a muted stock reaction.",
     "url": "https://www.businesstoday.in/markets/stocks/story/buy-hdfc-bank-shares-chairman-exit-behind-us-target-prices-post-q4-results-526399-2026-04-20",
     "domain": "businesstoday.in",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.35,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.67,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → HDFC Bank",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-HDFCBANK-1010"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "hdfcbank-11",
     "index": "controversy",
     "pillar": "Key-person risk",
     "title": "HDFC Bank ex - chair Atanu Chakraborty breaks silence after abrupt exit , speaks of incongruities",
     "desc": "Ex-chairman Atanu Chakraborty broke his silence on his abrupt exit, speaking of 'incongruities' at HDFC Bank.",
     "url": "https://economictimes.indiatimes.com/industry/banking/finance/banking/hdfc-banks-ex-chair-atanu-chakraborty-breaks-silence-after-abrupt-exit-speaks-of-incongruities/articleshow/129897919.cms",
     "domain": "economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "3mo ago",
     "sev": 0.7,
     "corr": 1.3,
     "vel": 1.2,
     "stg": 0.6,
     "dec": 0.5,
     "stage": "allegation",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → HDFC Bank",
      "Classified: Controversy · Key-person risk · allegation",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-HDFCBANK-1011"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 1317
  },
  "icicibank": {
   "name": "ICICI Bank",
   "ticker": "ICICIBANK",
   "sector": "Private bank",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 20,
    "risk": 3,
    "esg": 11,
    "momentum": 36,
    "catalyst": 17,
    "sentiment": 9
   },
   "trend": 1,
   "quarantined": 6,
   "narrative": "ICICI Bank: ICICI Bank received a GST demand notice of about Rs 769 crore including penalty — driving the controversy index. ICICI Bank shares gained after Q4 profit beat street estimates, with brokerages citing strong growth and low credit costs — lifting the opportunity side. 6 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    52,
    56,
    57,
    56,
    55,
    56,
    57,
    58,
    58,
    59,
    58,
    59
   ],
   "indexHistory": {
    "controversy": [
     28,
     27,
     26,
     26,
     25,
     24,
     23,
     23,
     22,
     21,
     21,
     20
    ],
    "risk": [
     5,
     5,
     5,
     5,
     5,
     4,
     4,
     4,
     4,
     4,
     4,
     3
    ],
    "esg": [
     0,
     0,
     0,
     10,
     10,
     9,
     9,
     9,
     8,
     8,
     12,
     11
    ],
    "momentum": [
     21,
     32,
     31,
     30,
     29,
     31,
     32,
     34,
     33,
     35,
     34,
     36
    ],
    "catalyst": [
     14,
     14,
     14,
     19,
     18,
     18,
     17,
     22,
     21,
     20,
     18,
     17
    ],
    "sentiment": [
     9,
     9,
     12,
     11,
     10,
     10,
     9,
     9,
     8,
     11,
     10,
     9
    ]
   },
   "articleCount": 53,
   "events": [
    {
     "id": "icicibank-0",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "ICICI Bank gets Rs 769 cr GST demand notice",
     "desc": "ICICI Bank received a GST demand notice of about Rs 769 crore including penalty.",
     "url": "https://economictimes.indiatimes.com/industry/banking/finance/banking/icici-bank-gets-rs-769-cr-gst-demand-notice/articleshow/129683261.cms",
     "domain": "economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject — defendant",
     "dir": "neg",
     "time": "3mo ago",
     "sev": 0.7,
     "corr": 1.3,
     "vel": 1.0,
     "stg": 1.4,
     "dec": 0.56,
     "stage": "charge",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → ICICI Bank",
      "Classified: Controversy · Legal & compliance · charge",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ICICIBANK-1000"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "icicibank-1",
     "index": "momentum",
     "pillar": "Financial",
     "title": "ICICI Bank stock gains after Q4 profit beats Street , brokerages bullish on strong growth and low credit costs",
     "desc": "ICICI Bank shares gained after Q4 profit beat street estimates, with brokerages citing strong growth and low credit costs.",
     "url": "https://www.moneycontrol.com/news/business/stocks/icici-bank-stock-gains-after-q4-profit-beats-street-brokerages-bullish-on-strong-growth-and-low-credit-costs-13893712.html",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.55,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.67,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → ICICI Bank",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ICICIBANK-1001"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "icicibank-2",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "RBI approves extension of ICICI Bank CEO Sandeep Bakhshi tenure until 2028",
     "desc": "RBI approved the extension of Sandeep Bakhshi's tenure as ICICI Bank CEO until 2028.",
     "url": "https://www.thehindubusinessline.com/money-and-banking/rbi-approves-icici-bank-ceo-sandeep-bakhshi-reappointment-for-two-more-years/article71012385.ece",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.6,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.65,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → ICICI Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ICICIBANK-1002"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "icicibank-3",
     "index": "esg",
     "pillar": "Governance",
     "title": "Prashant Bhushan urges RBI to intervene in the proposed re - appointment of Bakhshi as ICICI Bank MD and CEO",
     "desc": "Advocate Prashant Bhushan urged the RBI to intervene in the proposed re-appointment of Sandeep Bakhshi as ICICI Bank MD and CEO.",
     "url": "https://www.thehindubusinessline.com/money-and-banking/prashant-bhushan-urges-rbi-to-intervene-in-the-proposed-re-appointment-of-bakhshi-as-icici-banks-md-and-ceo/article70921239.ece",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "2mo ago",
     "sev": 0.5,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.7,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → ICICI Bank",
      "Classified: Esg · Governance",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ICICIBANK-1003"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "icicibank-4",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Six of top - 10 most valued firms gain ₹88 , 678 cr in market value last week ; ICICI Bank biggest winner",
     "desc": "ICICI Bank was the biggest winner as six of the top-10 most valued firms gained Rs 88,678 crore in market value last week.",
     "url": "https://www.thehindubusinessline.com/markets/six-of-top-10-most-valued-firms-gain-88678-cr-in-market-value-last-week-icici-bank-biggest-winner/article71157263.ece",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "1d ago",
     "sev": 0.3,
     "corr": 1.0,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.99,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → ICICI Bank",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1d ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ICICIBANK-1004"
      },
      {
       "time": "1d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "icicibank-5",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Mcap of eight of top - 10 most valued firms surges by ₹1 . 90 lakh crore ; ICICI Bank shines",
     "desc": "ICICI Bank was the biggest gainer as eight of the top-10 firms added Rs 1.90 lakh crore in market value during the week.",
     "url": "https://www.thehindubusinessline.com/markets/mcap-of-eight-of-top-10-most-valued-firms-surges-by-190-lakh-crore-icici-bank-shines/article71100489.ece",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "2w ago",
     "sev": 0.3,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.92,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → ICICI Bank",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ICICIBANK-1005"
      },
      {
       "time": "2w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "icicibank-6",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "ICICI Bank appoints former SEBI whole - time member Ashwani Bhatia as independent director",
     "desc": "ICICI Bank appointed former SEBI whole-time member Ashwani Bhatia as an independent director.",
     "url": "https://www.moneycontrol.com/news/business/markets/icici-bank-appoints-former-sebi-whole-time-member-ashwani-bhatia-as-independent-director-13937771.html",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "4w ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.72,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → ICICI Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ICICIBANK-1006"
      },
      {
       "time": "4w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "icicibank-7",
     "index": "momentum",
     "pillar": "Financial",
     "title": "HDFC vs ICICI : Who really won in Q3 ?",
     "desc": "A Q3 FY26 results comparison weighed HDFC Bank's quarterly performance against ICICI Bank's.",
     "url": "https://www.livemint.com/market/mark-to-market/hdfc-bank-q3-earnings-icici-q3-results-hdfc-vs-icici-labour-code-11768808054564.html",
     "domain": "livemint.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "5mo ago",
     "sev": 0.5,
     "corr": 1.3,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.39,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → ICICI Bank",
      "Classified: Momentum · Financial",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ICICIBANK-1007"
      },
      {
       "time": "5mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "icicibank-8",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "ICICI Bank Faces ₹50 . 38 Crore GST Demand With Penalty & Interest , Plans Further Legal Appeal Against Mahara",
     "desc": "ICICI Bank faced a Rs 50.38 crore GST demand with penalty and interest under a Maharashtra order and plans a further legal appeal.",
     "url": "https://www.freepressjournal.in/business/icici-bank-receives-5038-crore-gst-demand-from-maharashtra-department-lender-to-challenge-order-through-further-appeal",
     "domain": "freepressjournal.in",
     "source": "General & regional press",
     "sourceSector": "Private bank",
     "direction": "Subject — defendant",
     "dir": "neg",
     "time": "4mo ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.4,
     "dec": 0.48,
     "stage": "charge",
     "quarantined": false,
     "corroboration": [
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → ICICI Bank",
      "Classified: Controversy · Legal & compliance · charge",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ICICIBANK-1008"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "icicibank-9",
     "index": "sentiment",
     "pillar": "Entity tone",
     "title": "Nomura upgrades Kotak Mahindra Bank , calls ICICI Bank preferred compounder . Here why",
     "desc": "Nomura called ICICI Bank its preferred compounder among Indian banks while upgrading Kotak Mahindra Bank.",
     "url": "https://economictimes.indiatimes.com/markets/stocks/news/nomura-upgrades-kotak-mahindra-bank-calls-icici-bank-preferred-compounder-heres-why/articleshow/129767146.cms",
     "domain": "economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "4d ago",
     "sev": 0.25,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.88,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → ICICI Bank",
      "Classified: Sentiment · Entity tone",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ICICIBANK-1009"
      },
      {
       "time": "4d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "icicibank-10",
     "index": "controversy",
     "pillar": "Financial integrity",
     "title": "ICICI Bank Gold Loan Scam ; नागपुरातील ICICI बँकेतील गोल्ड लोन घोटाळा उघडकीस ; बनावट दागिने ठेवून तब्बल 23 कोट",
     "desc": "A gold loan fraud of about Rs 23 crore involving fake jewellery pledged as collateral was uncovered at an ICICI Bank branch in Nagpur.",
     "url": "https://maharashtratimes.com/business/business-news/nagpur-icici-bank-rupees-23-crore-fake-gold-loan-scam-exposed/articleshow/129950469.cms",
     "domain": "maharashtratimes.com",
     "source": "Aggregators & other",
     "sourceSector": "Private bank",
     "direction": "Subject — victim",
     "dir": "neg",
     "time": "2mo ago",
     "sev": 0.6,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.2,
     "dec": 0.66,
     "stage": "probe",
     "quarantined": true,
     "corroboration": [
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → ICICI Bank",
      "Classified: Controversy · Financial integrity · probe",
      "Corroborated across 1 source class(es)",
      "Quarantined (trust cell below 0.5)"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ICICIBANK-1010"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Quarantined (low trust)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "icicibank-11",
     "index": "momentum",
     "pillar": "Financial",
     "title": "SBI के बाद अब ICICI बैंक ने भी TCS को छोड़ा पीछे , बनी देश की 5वीं सबसे बड़ी मार्केट वैल्यू वाली कंपनी",
     "desc": "ICICI Bank overtook TCS to become India's fifth most valuable listed company by market capitalisation.",
     "url": "https://hindi.moneycontrol.com/news/markets/after-sbi-now-icici-bank-surpasses-tcs-to-become-india-5th-most-valuable-company-in-stock-market-2368451.html",
     "domain": "hindi.moneycontrol.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "4mo ago",
     "sev": 0.4,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.45,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → ICICI Bank",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ICICIBANK-1011"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 1283
  },
  "bajfinance": {
   "name": "Bajaj Finance",
   "ticker": "BAJFINANCE",
   "sector": "NBFC",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 0,
    "risk": 0,
    "esg": 6,
    "momentum": 8,
    "catalyst": 20,
    "sentiment": 4
   },
   "trend": 5,
   "quarantined": 1,
   "narrative": "Bajaj Finance: The board approved a plan to raise Rs 10,000 crore, putting the stock in focus ahead of the June 29 session — lifting the opportunity side. A report said two internal candidates are in the running for the CEO role, with a shortlist expected to go to the RBI by August — lifting the opportunity side. 1 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    54,
    53,
    53,
    53,
    52,
    53,
    52,
    52,
    52,
    52,
    52,
    57
   ],
   "indexHistory": {
    "controversy": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "risk": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "esg": [
     9,
     8,
     8,
     8,
     8,
     7,
     7,
     7,
     6,
     6,
     6,
     6
    ],
    "momentum": [
     14,
     13,
     12,
     12,
     11,
     11,
     10,
     10,
     9,
     9,
     8,
     8
    ],
    "catalyst": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     20
    ],
    "sentiment": [
     5,
     4,
     3,
     3,
     2,
     2,
     2,
     1,
     1,
     1,
     5,
     4
    ]
   },
   "articleCount": 13,
   "events": [
    {
     "id": "bajfinance-0",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Stock in Focus : ₹10000 करोड़ जुटाने की योजना , बोर्ड ने भी दी खास मंजूरी , 3 वजहों से 29 जून को फोकस में रहेग",
     "desc": "The board approved a plan to raise Rs 10,000 crore, putting the stock in focus ahead of the June 29 session.",
     "url": "https://hindi.moneycontrol.com/news/markets/stock-in-focus-iifl-finance-share-price-may-move-fast-as-it-plans-rupees-10000-crore-fund-raise-board-also-ups-borrowing-limits-2415186.html",
     "domain": "hindi.moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "1d ago",
     "sev": 0.6,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.99,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → Bajaj Finance",
      "Classified: Catalyst · Corporate",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1d ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-BAJFINANCE-1000"
      },
      {
       "time": "1d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "bajfinance-1",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "MC Exclusive | Two insiders could be in the running to fill CEO role ; list could go to RBI by August",
     "desc": "A report said two internal candidates are in the running for the CEO role, with a shortlist expected to go to the RBI by August.",
     "url": "https://www.moneycontrol.com/banking/mc-exclusive-kotak-bank-two-insiders-likely-in-the-running-to-fill-ceo-s-role-list-could-go-to-rbi-by-august-article-13960117.html",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "2d ago",
     "sev": 0.55,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.98,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → Bajaj Finance",
      "Classified: Catalyst · Corporate",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2d ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-BAJFINANCE-1001"
      },
      {
       "time": "2d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "bajfinance-2",
     "index": "esg",
     "pillar": "Governance",
     "title": "Like banks , leadership rotation rule may apply to large NBFCs",
     "desc": "A report said the RBI may extend bank-style leadership rotation rules to large NBFCs, raising succession questions for Bajaj Finance's long-serving management.",
     "url": "https://economictimes.indiatimes.com/industry/banking/finance/like-banks-leadership-rotation-rule-may-apply-to-large-nbfcs/articleshow/129353555.cms",
     "domain": "economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "neg",
     "time": "3mo ago",
     "sev": 0.5,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.55,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Bajaj Finance",
      "Classified: Esg · Governance",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-BAJFINANCE-1002"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "bajfinance-3",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Bajaj Finance shares : Why stock fell 20 % in a month ; valuation not compelling , says MOFSL",
     "desc": "Motilal Oswal said Bajaj Finance's valuation is not compelling after the stock fell 20% in a month.",
     "url": "https://www.businesstoday.in/markets/stocks/story/bajaj-finance-shares-why-stock-fell-20-in-a-month-valuation-not-compelling-says-mofsl-521969-2026-03-24",
     "domain": "businesstoday.in",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "neg",
     "time": "3mo ago",
     "sev": 0.45,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.57,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → Bajaj Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-BAJFINANCE-1003"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "bajfinance-4",
     "index": "sentiment",
     "pillar": "Sectoral",
     "title": "For Tata Capital , narrowing profitability gap with Bajaj Finance is a tough task",
     "desc": "An analysis said Tata Capital faces a tough task narrowing its profitability gap with Bajaj Finance, underscoring Bajaj Finance's sector-leading returns.",
     "url": "https://www.livemint.com/market/mark-to-market/tata-capital-stock-bajaj-finance-nbfc-stocks-11782113415410.html",
     "domain": "livemint.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Benchmark",
     "dir": "pos",
     "time": "1w ago",
     "sev": 0.2,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.85,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → Bajaj Finance",
      "Classified: Sentiment · Sectoral",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-BAJFINANCE-1004"
      },
      {
       "time": "1w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "bajfinance-5",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "MC Exclusive | Want Bajaj Finance to be known as a tech company in finance biz , say Rajeev Jain , VC & MD",
     "desc": "Rajeev Jain, VC & MD, said Bajaj Finance wants to be known as a technology company in the finance business.",
     "url": "https://www.moneycontrol.com/banking/want-bajaj-finance-to-be-known-as-a-tech-leader-in-finance-biz-say-rajeev-jain-article-13867798.html",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "3mo ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.32,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → Bajaj Finance",
      "Classified: Momentum · Strategic",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-BAJFINANCE-1005"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "bajfinance-6",
     "index": "sentiment",
     "pillar": "Forward signal",
     "title": "बजाज फाइनेंस में 2 साल का निवेश कितना सही ? विशेषज्ञ ने बताया कब करें एंट्री और कब लें मुनाफा",
     "desc": "A market expert discussed entry and profit-booking levels for a two-year investment in Bajaj Finance.",
     "url": "https://www.sharemanthan.in/technical-tips/462-advice/79572-how-sound-is-a-two-year-investment-in-bajaj-finance",
     "domain": "sharemanthan.in",
     "source": "Aggregators & other",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "today",
     "sev": 0.15,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 1.0,
     "stage": null,
     "quarantined": true,
     "corroboration": [
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → Bajaj Finance",
      "Classified: Sentiment · Forward signal",
      "Corroborated across 1 source class(es)",
      "Quarantined (trust cell below 0.5)"
     ],
     "audit": [
      {
       "time": "today",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-BAJFINANCE-1006"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Quarantined (low trust)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "bajfinance-7",
     "index": "sentiment",
     "pillar": "Forward signal",
     "title": "HDFC Bank , ICICI Bank , SBI , Bajaj Finance , Kotak Bank shares offer up to 41 % upside ; fresh target prices",
     "desc": "Brokerages issued fresh target prices implying up to 41% upside for large financials including Bajaj Finance.",
     "url": "https://www.businesstoday.in/markets/stocks/story/hdfc-bank-icici-bank-sbi-bajaj-finance-kotak-bank-shares-offer-up-to-41-upside-fresh-target-prices-522027-2026-03-24",
     "domain": "businesstoday.in",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "3mo ago",
     "sev": 0.2,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.11,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → Bajaj Finance",
      "Classified: Sentiment · Forward signal",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-BAJFINANCE-1007"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "bajfinance-8",
     "index": "sentiment",
     "pillar": "Entity tone",
     "title": "Rs 1 lakh crore wiped off ! Bajaj Finance shares tumble 18 % in March so far amid raging Iran - US war",
     "desc": "Bajaj Finance shares fell about 18% in March, erasing roughly Rs 1 lakh crore of market value amid the Iran-US war driven selloff.",
     "url": "https://economictimes.indiatimes.com/markets/stocks/news/rs-1-lakh-crore-wiped-off-bajaj-finance-shares-tumble-18-in-march-so-far-amid-raging-iran-us-war/articleshow/129694027.cms",
     "domain": "economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "neg",
     "time": "3mo ago",
     "sev": 0.25,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.05,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → Bajaj Finance",
      "Classified: Sentiment · Entity tone",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-BAJFINANCE-1008"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2008"
      }
     ]
    }
   ],
   "rawCount": 447
  },
  "sbi": {
   "name": "State Bank of India",
   "ticker": "SBIN",
   "sector": "PSU bank",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 68,
    "risk": 38,
    "esg": 30,
    "momentum": 43,
    "catalyst": 45,
    "sentiment": 7
   },
   "trend": 1,
   "quarantined": 7,
   "narrative": "State Bank of India: SBI and the Telangana government contested ownership of a five-acre Raidurg land parcel in court, straining the bank's relationship with the state government — driving the controversy index. The Income Tax Department raised a ₹6,338 crore tax demand on State Bank of India for AY 2023-24, which the bank is disputing in appeal — driving the controversy index. 7 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    43,
    42,
    39,
    36,
    36,
    37,
    38,
    40,
    39,
    40,
    40,
    41
   ],
   "indexHistory": {
    "controversy": [
     54,
     54,
     64,
     64,
     63,
     64,
     63,
     65,
     65,
     64,
     67,
     68
    ],
    "risk": [
     29,
     29,
     28,
     34,
     40,
     40,
     39,
     38,
     37,
     36,
     39,
     38
    ],
    "esg": [
     29,
     29,
     31,
     34,
     33,
     32,
     31,
     31,
     30,
     29,
     31,
     30
    ],
    "momentum": [
     40,
     39,
     38,
     36,
     40,
     39,
     37,
     44,
     42,
     41,
     44,
     43
    ],
    "catalyst": [
     31,
     30,
     29,
     32,
     30,
     33,
     36,
     35,
     33,
     38,
     41,
     45
    ],
    "sentiment": [
     4,
     3,
     3,
     2,
     2,
     2,
     7,
     6,
     5,
     5,
     4,
     7
    ]
   },
   "articleCount": 209,
   "events": [
    {
     "id": "sbi-0",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "SBI-Telangana face-off Over 5-acre land in Hyd raises stakes for both sides",
     "desc": "SBI and the Telangana government contested ownership of a five-acre Raidurg land parcel in court, straining the bank's relationship with the state government.",
     "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOQXM1MnNnb091S0tFMVd5Uy1pTmZXeXo2U0pYbFo1aHBtOTRld1lNTVVnUEVYLXBidV9LZ1RPOWdvU3VmVFA4SVFfdG51cGlYT3hSVTVCSEVLT3dTeGloMnZqSDB5ekdLVFBZVEtkLVoxQ2kyWGljbVlXZWNYZ1dFeEp1TVBpak9CNVdiMEQ5OUMyby1JMHJxZzdLWWlEN0lRUERrMEpJZ2JQY19KWGdrY241c2VNYnJabnFMMWg2RmdiZ2N1U2M0UkZISGk2WnRxckpRTFZmMldwemxiLXdmZFI4aGXSAesBQVVfeXFMT0JlR0dtOFVHbHpWNTlYVXlwRmRkMWtsWWZYdmx5M2FnRmRBSkpjVGllNkZieDBIRGtqN1I0cS1fTm5HcElxcm5DaUFkMnhPbE9FY2FWSzFPa3ExYldlT3hLcElSOEJuaGJPSmp4RW1KVlFHZ2tTdjZQTG15c0E5bzJ3R0UybXRKcU5KclJpY2hqeGR2SXZIU2hRT3Zoekg1a2hlUWw5bGFaNXZtSzB4Rkw4THdTSTg4MVVLMkZ1VjdDdXVKSHE1STdLRF9KNFFCcnhrSUlQMGQ3enBET3h4QUNDOVpUOGswTG42aw?oc=5",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "PSU bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "1d ago",
     "sev": 0.6,
     "corr": 1.15,
     "vel": 1.1,
     "stg": 1.4,
     "dec": 0.99,
     "stage": "charge",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → State Bank of India",
      "Classified: Controversy · Legal & compliance · charge",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SBIN-1000"
      },
      {
       "time": "1d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (PSU bank)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "sbi-1",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "State Bank of India faces ₹6,338 crore tax demand",
     "desc": "The Income Tax Department raised a ₹6,338 crore tax demand on State Bank of India for AY 2023-24, which the bank is disputing in appeal.",
     "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOR2RrWkZvREJpd3ktcUtjWjNHblVna1FfNXJPVnhLVlFuWDh5OGhGRkpBNkhkbk9iVnRtVGhiZ2wtNzRiM0JmWjRkekU1cTRZVDU0QTFFM1pyZnk0S1UzbUkydC1qaVYzSHVQTkZJTHNjNnN1MUtYODg2V2tKVWpCTElPdDJiUzhYTER1RVBVNlBIMlVJcjNISGZfSTJXVEpxWXdLd1l6Nm5zejlUSmcwZUtsZl9KYm1IemVwMmwyY9IBxgFBVV95cUxPaC1ES1lfcnR6S1JMc1NUemNfRW1odC1VUmFpU1pJWTNhN1E4UGY4TFNlV0tFMnZiMFhkNnZoSEIwdkJJb0p6SDFrV0Y1WFlUOHM0VGpDdjdFa3N3VHpzWWQ4aWRfdmRRYmdKdnBOellxQ0VtS3FaTDFDTEtrZllxMXJiNjNoVzhkNmw2c0F2b2trMGs3V2ExUGh2dDNuZDd6dFpHQ3VRa2NvcTB6UHBSVTZFeDh0TjhibEJsWGpNaERXZnA3Nnc?oc=5",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "PSU bank",
     "direction": "Subject — defendant",
     "dir": "neg",
     "time": "3mo ago",
     "sev": 0.7,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.4,
     "dec": 0.56,
     "stage": "charge",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → State Bank of India",
      "Classified: Controversy · Legal & compliance · charge",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SBIN-1001"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (PSU bank)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "sbi-2",
     "index": "controversy",
     "pillar": "Financial integrity",
     "title": "ED attaches additional assets of Anil Ambani Group worth Rs 3,034 crore in RCom case",
     "desc": "The ED attached additional Anil Ambani Group assets worth ₹3,034 crore in the RCom loan fraud case, supporting SBI's recovery prospects.",
     "url": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxOQk5DUmxMektONkJyYkpkU2dxckN4LU5weEtDSEpOZlJEc3FZcXJ4YWE0OVR3akFiOVhWbmFyUHRvRXd0QWVhSmFyb055SFVNNl9DMWNYc09TbTdjSXZDd2ZHdWlNa2kzSGluaEV2aDNuOE1QSFhlTERWdlF4UjlvNjlUd0I5Wmg4TmhtVWJLcXJQQ1lMSjdTREZMeENvTy1DVGFmV2tHdGV4X2YxNTJqMFBtVlJ0VnNOekMyS2c1ekJnWFhRd2ttSEpYcTRlSXJwZmZlQjdxZ09nVS1mTWh3eTBuaWdGNzTSAewBQVVfeXFMTUxINkQ2VWREaG9tak9YMS1hN0tlbEFzZHVyVHhGaVo3S0hkbVFoWTlDOThtSVlIQzJ3ZXp6U3FEUHRiMWRjQkU4RDVZVFB6WDUzajlSQ0JNSlRMY1h0d0xuczZ6bHdtZGptV19oWE9MX3RoWW5GWU4wSE0xMGZXLUszc0pBSEJWZFBRejdfNFVLclJKY2FUM1NZbFRRcUtDQ0plRUFQZzJlc1k1SWRrRHloV3BqcUlaSTA3SDRiOU1BTWZ6R2wxaU5uMFlQaVFyQlNBY2dyZlpuZTF4TjhfUnQwQlBPeHJGYmFlN28?oc=5",
     "domain": "legal.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "PSU bank",
     "direction": "Beneficiary",
     "dir": "pos",
     "time": "3d ago",
     "sev": 0.55,
     "corr": 1.3,
     "vel": 0.9,
     "stg": 1.2,
     "dec": 0.99,
     "stage": "probe",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → State Bank of India",
      "Classified: Controversy · Financial integrity · probe",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SBIN-1002"
      },
      {
       "time": "3d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (PSU bank)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "sbi-3",
     "index": "controversy",
     "pillar": "PR & reputational",
     "title": "Ram Temple donation scam probe reaches SBI: Did bank suspect something 3 months ago?",
     "desc": "Reports said SBI had sought removal of staff at the Ram Temple donation counting centre three months before an alleged donation theft came under probe.",
     "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNUWJMN1hod3VFTWJYWVV3Q0NxME5NelVnbW81R3JscThGZVMzM2hjRmNsV253S1IxelU2NE9aOU5QdU1qLVZibHpmV1pyU1hTZ1RUc2RvaXlyd2pzaTFXSkptaHUzTmF0aDNqczJsa2E4R1dlRThxUEhIanBnZEdXRUtVUmZRLTdvNlVYODBqWWh4X3F3Y05uc0MwWTJHYXpvNF9VbUI0R0JRWUtZNGluTEYzTG9EN1FHd2NpanVaM3o2Q3N5RWlpTnotdGZKcnlFVXfSAdcBQVVfeXFMTXRyWTFhaEo2ajZkSGtZZ0VRX3RkOHJhZHFRVThKblpJUHN5S3l3WlRtbWdGVWZQRjNtdF95TDZ0SEVHeHFlbWhPckZEcXZ4M1Vadlk3SWR4MGF3VTNJRURDUlBhUTQ4RDFySGZPTklxS0hOSjFsOVV2ZDdTT2dHZXhOYXBCWDFQV3VMT3FFOU1KS2k1Y0w5cmVuTEhDRlc0QnZmY2R0N2NnV1dnWkhyeExmeW95aEo0RzdTMzc4MXpuNnc5M1h0djN4SVBxOWY2ODh0X3lpa28?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "PSU bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "today",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.1,
     "stg": 1.2,
     "dec": 1.0,
     "stage": "probe",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → State Bank of India",
      "Classified: Controversy · PR & reputational · probe",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "today",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SBIN-1003"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (PSU bank)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "sbi-4",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "SBI moves Supreme Court to revisit verdict barring spectrum from insolvency",
     "desc": "SBI moved the Supreme Court to review the ruling excluding telecom spectrum from insolvency assets, warning of risks to bank recoveries under the IBC.",
     "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxNVV82ZEprLXctd3BpMmhOaXNIZzkzS1hwZDFsd0o4SmVuTkN6Y3dRTS1FUlg3MGpoSXpSbXB5Qm1iQ2ZLWENfMFQxcm1GOHdHSjREanFEZTZYRGFXN2lNaFhyYTdlVmJNbVZwLUZCOVBXN1lmczhGOVAtLWVZZmdqRjVzRTdtSG9HbGtsR2FyWnEza21xX1c2MTBQN3Bid2VacldtNHZDZkdmODBycFp4dFFrdWtsdExDa0ZFMlIzRnpCOW5ITDBEQnBIZTFDdFhjajl0aUFacGM3NEpsSmlrVDdPeXDSAesBQVVfeXFMUEFwU05ZdlVFUlR1SVZnWjBJS3JXcTNucUhXTUVaZUtINFVtVmlmbWI1VkhEX2RDejVmNVdxMW1ZYTlwZ2VLY3BGdjd4NUt2OFZUVkNmdG5Kd3hLLUdqTDBsdWVGM3UtMmJPal80eUhMMlBreEUzamlqZmVuMTVUS0lRQjZieDhid0VWUGsxS0dWWjJMMXpwaldVSHhpdWZVUFFrbl9DSHF3eG41ZEtGcGNRLWRGLWV1X3BYODZCOXphQXRjU1hncUI3VkZJV0hyRWpNRGZYWDJXd0VibVJHa2dkeFVNWEdiSWxoNA?oc=5",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "PSU bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "2mo ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.4,
     "dec": 0.68,
     "stage": "charge",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → State Bank of India",
      "Classified: Controversy · Legal & compliance · charge",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SBIN-1004"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (PSU bank)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "sbi-5",
     "index": "controversy",
     "pillar": "Financial integrity",
     "title": "Odisha Police arrest SBI staffer in Rs 5.21 crore gold loan fraud",
     "desc": "SBI staff in Odisha were arrested for a ₹5.21 crore fraud involving loans sanctioned against fake gold.",
     "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOXzkxUVY5M3NFcW9IQVUxaU83eTl6eXJTZzJpUmVUeGNWNjNWLWJGaEVMVmtEWWY3REc5M3J6WTM2emhWTlV1Z3Y1b1NzNEJQUERNUDdEMnk3YjI2S0doV3ZhM1JHakhUUmVPbVV5bTJMbUp0bS1rZTJHd1ZpU2lRcGxYYkdVY0lTR0g2eGtFQ3VjTUZvbDFqX1JTOXM3M0pTR1VXRVRtYlR4VXBMYnJhQ0c2M1RwY0hDSTN3bkt4M2VvYlBkZmIzONIBzgFBVV95cUxPMXljdy1oVHFWMXhkU2UxUzdSUkxsbFRoeEk1NW13b3dOQklmR2FJUm9VdGFyUThuMllIbDlaY0ZGZUZuQkNOb0VHS0lpRU1YR0RYZ1Exa2ZuQWd2a0I0Y0tYemtRekNZS2pjSVBnZHR5T09MX2ZoZHpsWUZqQjJ0Vjd4cDNVS1FqaTF0R1p0cTNFWkU5b3U1X2ZkME1OcW15NTFRLTdkak9qRVpDUkV0WGhuanJUY2tJbEQ4VUM2ZEd1V2tZV0NjdlU0Z0I5Zw?oc=5",
     "domain": "hr.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "PSU bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "1mo ago",
     "sev": 0.45,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.4,
     "dec": 0.86,
     "stage": "charge",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → State Bank of India",
      "Classified: Controversy · Financial integrity · charge",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SBIN-1005"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (PSU bank)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "sbi-6",
     "index": "risk",
     "pillar": "Financial",
     "title": "SBI shares plunge 10% in two days after Q4. Do Morgan Stanley, Citi & Bernstein see a rebound soon?",
     "desc": "SBI shares fell about 10% over successive sessions as brokerages cut estimates on margin compression following the Q4 FY26 earnings miss.",
     "url": "https://news.google.com/rss/articles/CBMiiwJBVV95cUxPZWVxeTZpeFhVWmZQNzFvNkNZVmdzVDNhQS1SWW4wMWQxdFFXYk9IUmIxZFhoVU9GUHd5am9ub2lSTjVHNEpuVEZ0a0VsVUt4emV6ZmVIclhNNEVBU25wbmZyWHNQT0NnaDFMUEdYeW1GRHlERExhLWRCOWdVcFdPWGp4YzNkLXR6Njg1TnBGbWYyRF9pTDFUTkItWGFERXhXRE1MNFdtR210QnRkWE03Q2FxU1RJVi1McUduMk5ia0hPWjVhemJrNWxpQUNXeTVMRVhKUDQ1WktYeVA5U1lkdlJJRWRiZmxVbzhWdlZ2ZWwyYmt3NVJqYjlnczRQS3lrWjUxbTB2TTcxMnPSAZACQVVfeXFMTzgyMFdMMlNnc21RRTBhR1NCYVRsSlVxbXgyb1h3aXRZSG1KZFdIUjB2aTVpN0JyYjBhZl94elNMNHowT0JrNVJSWnNLa0xpTDY4N1ltbFF1T1RFTzFZUGM2aHctSUZCM2lZYTNob0ZvYURBVExDZjhrZzVabEFKZFBBQXNGS0IyemVRalREbWRiSHRSVGNoNlhNODVzamlyYlluTUNqRWg3RWZtT0NfNzdzZ3MtaFFlWXdIRG9sbEhUcC1sRU1wb1RGOUFKV0VET0pQZjVoT1dGRFk2LXhLdWNHZmJ5MHlobVpYMzAyUTNUN0NEV3VGOHgxRGpQRHEyTVJsbWlkZVVGSVVZamZlN1k?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "PSU bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "1mo ago",
     "sev": 0.55,
     "corr": 1.15,
     "vel": 1.1,
     "stg": 1.0,
     "dec": 0.76,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → State Bank of India",
      "Classified: Risk · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SBIN-1006"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (PSU bank)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "sbi-7",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "SBI board to discuss fundraising plans on June 18",
     "desc": "SBI's board approved raising up to ₹60,000 crore via debt instruments during FY27.",
     "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOR0VBNk43anVlOEFDZGJwcnJRSXQ1aVdRbkZLTENReUlsVGNPS3BscnVodWcxSm1Ld3A1b05rblNFUEhBVTF4anFSU1psQVpDamZfS2Q3VEI2R3BHNjViaWRiRlEyUnREZlJUWDRIWFoyVVlWakRqTnNXMlM2TXJQeTN1QU84WnhrMWZvNFVITE9aYlhMdWZhcURyVTlsWXdseHlqZXhFNDR1bHk3ZHpyOXdSdUPSAboBQVVfeXFMT1Z5aTBYUFd6aGF3MDFheE15WjNiVGRYcm1nNTdmMGMtcHQxQW0wb0dETHZEdU94N2tvNDg4cGl4SDUwV1ZIOG5EZW4zbFZySHdfaVdSUi01bGVNSDlLMTY2ckRWLUQxMHJSRlBLWjc1ejdDRTdGMzdJS2JUOWh6eUZQSXNlTjhsYmhoTHdkVEdlUnMzRm93T1JHSU9BbGw0UF9LNVZURkRRNEg0akU3MElrd2Q0ZHpWR0xB?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "PSU bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "1w ago",
     "sev": 0.45,
     "corr": 1.3,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.89,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → State Bank of India",
      "Classified: Catalyst · Corporate",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SBIN-1007"
      },
      {
       "time": "1w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (PSU bank)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "sbi-8",
     "index": "momentum",
     "pillar": "Financial",
     "title": "India’s Top Bank Beats Profit Forecast on Strong Credit Demand",
     "desc": "SBI's Q3 FY26 net profit rose 24.5% year-on-year to a record ₹21,028 crore on strong loan growth and improving asset quality.",
     "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPUnkwTXFqdGdiRU53dy1RbmVnamVuMHJ5MVBkWDNZcE5oNEtOWkhuTGpENG81ZTJGazdwOUlIRGRaUEVoSGdzTVd0NHhzdm9WZkZHX0F6OThCNmJIb0ZEYzczR0dreFBDQ1A0VWJIR3hwbVdYUk5uLUZiRmFUZHE3RDFUc0N0SnFkVjB0TW9JR0VmT1p3UnpCNmlOWWRoNVYzbUNkM1NTTWlOUU55M0pONkdSVQ?oc=5",
     "domain": "bloomberg.com",
     "source": "Agency wires",
     "sourceSector": "PSU bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "4mo ago",
     "sev": 0.55,
     "corr": 1.45,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.44,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → State Bank of India",
      "Classified: Momentum · Financial",
      "Corroborated across 4 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SBIN-1008"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (PSU bank)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "sbi-9",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "Banks are lenient with big borrowers, harsh with common people: Supreme Court slams SBI while refusing re",
     "desc": "The Supreme Court criticised SBI for leniency toward large defaulters relative to small borrowers and sought responses in loan write-off fraud pleas.",
     "url": "https://news.google.com/rss/articles/CBMiqgJBVV95cUxOQlcyaUdaQ1JKc1JlMlVzMllUcmtzelVMSW91UXR5R3lZZnRYWGE5QlFvc3Bjd01nTWxjRnJlMUVRc2tYeDdXN3JsRU1wb0hEa3ppSUUzT1lFR0sxa0ZNS0ZFQU9rM1lBME1VMEVLaEg4c1pxNkdYMHVSdF9XN0NyTENmTHFXc2hMVDF6Z3dtYU9NMENEWUJmeldOMjRHVTdMZW9PQWFNb2J2S0ZDb1pPaE0wREtENGgyby0xRmNJVGFwOTV1Y1M2U2dFX2ZOVjhIUVptOEpSVUdSVDBvWXdDblJrZTRTcGk4anA0ZHZ1VDg1VzBfUFNmeF9QWlpnYW5PdFZUVUJNN1JNT29yLUcycUo5b0hHcVEzYUdwN2ZxLXpOSmQ4ekNkUkJ30gGvAkFVX3lxTE9tQW8td29kVXpFSzZSdGhOZ1pCVlFZSTgzdFpVNHVpYlQydGwzS3F4TGc1TVlpWDRpYjRrWTB5N3ptRzBnWEd0RDBwTDdvcmJycVZ0RktudDVqV1FpYzFXUWhlaHN1S2JiR1JFTmlLVjNuNVFfSUozTnRiZVQtVWRPdzNkX3VtRXZDZHRiYkQ2MXZ2NkZuSXZodURtV3JzVGFfWjB2R0RlVW0yN3FveXJDWGdnVEtxVGppWmh4SVBvRVlXYmtvTHFMXzdiSlhTUldUVFhUa1liSmoxWFhNZGo3bjVaRng3dnIwRllKZTlXU3RJaHp1b1NCeGtDWml3VkFzRHNFM2Y2NlJVd3VLbHdiWHBOM2htQXpYY0dBZnllaTJkR08tdlY5NU1UM056aw?oc=5",
     "domain": "timesofindia.indiatimes.com",
     "source": "General & regional press",
     "sourceSector": "PSU bank",
     "direction": "Subject — defendant",
     "dir": "neg",
     "time": "2d ago",
     "sev": 0.55,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.2,
     "dec": 0.99,
     "stage": "probe",
     "quarantined": false,
     "corroboration": [
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → State Bank of India",
      "Classified: Controversy · Legal & compliance · probe",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SBIN-1009"
      },
      {
       "time": "2d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (PSU bank)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "sbi-10",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "SBI, Amundi to offload 10% in SBI Funds IPO, no fresh shares to be issued",
     "desc": "SBI moved to monetise its asset management arm, with SBI and Amundi set to sell about 10% in the SEBI-approved SBI Funds Management IPO.",
     "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxOdFktTVExazNMQ21XZS1iRjk3RTg4NkpZTXlNbU9EM1hOQU16UnNTeTJSck5obFhla2ZPZThTT2hfTlVCZXAzamo2SjU2RXVBZTVtdmpmSGQ1VmsyWjVOdWxMMERsMURKZmlidU5YbmtSUXY4Q1MwLVhoVmo2MVBPV0k4UVZMZUxna2ExWFROS0lpNDltVnBzSWJwZDNoTzE4RjZjNFJIbUdkTVZ0QUloRGowb3pYbWFRQmkybTRXYmhpS1RaTzZrVFJFbFVIOE92alHSAdcBQVVfeXFMUFVPckRrVU5BVXd4YXZsUkFDTkYwMFJHVkFmbmtBTGd1S3h0QS1YM3U3ZnJ4dElCS0xWQzZHOVd6YklQenZ1SWltTjhMWG11SVFiMEJIVWM4anhPWFlRM1pPeGEteU93a0NrNGVROExnMUh2R0U1RXFYcXp0REJCMWh5ZFJjYTJWY2dudTdFM3REZ2t3M3I1TFFHY1h3UFkzVkFkTXRjWm5iUzdYY0UyLVJxYWM1NDdBVmJ5ZHJDamtyQ3p3Wms0RnhxZUtWbnZ2QWE1bEs1bUk?oc=5",
     "domain": "livemint.com",
     "source": "Business press",
     "sourceSector": "PSU bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "1w ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.89,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → State Bank of India",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SBIN-1010"
      },
      {
       "time": "1w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (PSU bank)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "sbi-11",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "SBI concludes issuance of 3-year $300 m floating rate notes to attract foreign currency deposits",
     "desc": "SBI raised $300 million via three-year floating rate notes priced at SOFR plus 100 basis points to attract foreign currency deposits.",
     "url": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxNcno4OF9SbWFDeGprV015V2dGbVB0UGFFOVd5WjdWNS1kZmFTTDJhRzJRREk4QjdxRWlPZmVUQ3FQalRsVnVUdjFxT1dZU0lUMmRDT1A2b3dYQWN3NHk4Mm5hN0xhZG5pZkhfQ0g0X2NLVW5SQTNKb3JvM3lJeW5qeTFJeDNIcXJnd1FfSExiemttRFA2ZndiTW9RWUFpa0pxV1pBTWpJR0QtZHRTQmZPNllFLXZOaE1jeU9FR2ZTRU1RZlZyN1l1a3dUOTIxT3hDaTc4d2N6dGhvMkhxTlpFOGVsQjF1X21aQ21KbkZyamczdXAwR1ZXTlZkLU9vdmvSAYYCQVVfeXFMTjREaGpPR043aWpXbXF5LUp6Z3JpZ2hVdWp0bEE2R21DdU0wT2c2cTJXa2hGQ2FyckF5ZUpFVzlwaTRneF9hR1I1NnpTWHNYSFF4M2QweFdTb1laVmQ3QTE4WEdwX1NDSFBTMjUxSjZZNE5mOWNKemJkeXQ3akx1NC1FOEQ3Rk5DNEZzUU1xdFVvUGtQdjVuQ09xMU9CNFdhYXc4aXdMRFRMVDlEWmJQakxlU0lnSU01RlpNZmY0OGlhQXI4Z0lVcnM1ZUJka3NFUnZyYy0yQ05lS1NLM2VMTjRiZXpqTDgwYTVsNU5kbnFsZkpSeUxyZmxEZmx5dlAwb1hwbFFsZw?oc=5",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "PSU bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "today",
     "sev": 0.4,
     "corr": 1.15,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 1.0,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → State Bank of India",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "today",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SBIN-1011"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (PSU bank)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 984
  },
  "kotak": {
   "name": "Kotak Mahindra Bank",
   "ticker": "KOTAKBANK",
   "sector": "Private bank",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 60,
    "risk": 14,
    "esg": 23,
    "momentum": 44,
    "catalyst": 48,
    "sentiment": 13
   },
   "trend": -4,
   "quarantined": 8,
   "narrative": "Kotak Mahindra Bank: Kotak Mahindra Bank signed a Rs 282 crore (about $30 million) deal to acquire Deutsche Bank's India retail, private banking and wealth management business — lifting the opportunity side. Kotak Mahindra Bank MD and CEO Ashok Vaswani said he will step down at the end of his term in December 2026, with the board beginning a search for a successor — driving the controversy index. 8 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    56,
    56,
    55,
    54,
    56,
    56,
    55,
    53,
    52,
    52,
    51,
    49
   ],
   "indexHistory": {
    "controversy": [
     60,
     59,
     58,
     57,
     56,
     55,
     54,
     59,
     58,
     57,
     56,
     60
    ],
    "risk": [
     0,
     0,
     0,
     17,
     17,
     17,
     17,
     16,
     16,
     15,
     15,
     14
    ],
    "esg": [
     20,
     20,
     19,
     19,
     18,
     18,
     17,
     17,
     16,
     15,
     15,
     23
    ],
    "momentum": [
     45,
     44,
     43,
     49,
     50,
     49,
     47,
     46,
     45,
     44,
     43,
     42
    ],
    "catalyst": [
     51,
     50,
     49,
     47,
     52,
     50,
     48,
     46,
     44,
     42,
     40,
     38
    ],
    "sentiment": [
     1,
     0,
     0,
     7,
     5,
     8,
     7,
     6,
     5,
     4,
     3,
     8
    ]
   },
   "articleCount": 188,
   "events": [
    {
     "id": "kotak-0",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Kotak Mahindra Bank to buy Deutsche Bank's India retail, wealth business for about $30 million",
     "desc": "Kotak Mahindra Bank signed a Rs 282 crore (about $30 million) deal to acquire Deutsche Bank's India retail, private banking and wealth management business.",
     "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQRHk2RnV2NFZOWUFhdmd0X012NFVLbERrVndGV2NuZzRlbVhwakxNX05ic1RPemROOXBTdFBLc0hLaURidDdhVGItNWpOWGZHWjRLVGN4dUxmM2xENlA5cjljODhWYjVxajY5MjdZOElJOWhLSnQxTFVYenotaHg1dURTMzg2NjRCRG5leWR5R1FoblJ6ZlhNQmtJNkY2eGEwcXNHVEtTQXlINmNvQngxVzh0bnktR1RmVUZkSWZLZW9MZw?oc=5",
     "domain": "reuters.com",
     "source": "Agency wires",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "today",
     "sev": 0.7,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 1.0,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Kotak Mahindra Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "today",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-KOTAKBANK-1000"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "kotak-1",
     "index": "controversy",
     "pillar": "Key-person risk",
     "title": "India's Kotak Mahindra Bank CEO Vaswani to step down for personal reasons",
     "desc": "Kotak Mahindra Bank MD and CEO Ashok Vaswani said he will step down at the end of his term in December 2026, with the board beginning a search for a successor.",
     "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQMXlvWlFiV1FOMllLSDMzSnNrMFRGenpUaWlkQjhTRUlfSTlRRE83ZVJ5dlR2eHJFRVhlTXh2NVJZSXVVMnNmRUI0RHhPcVNRMUxNcmhsT1VLTmg3cnZxRWxuMmkzcUxoYnRCZl9WaXJuUDk5R0oxeDZIMjgyQVBNVWhsRjdmRG1NTThwbUNFQ2pjaUs5Q1JsSEtSN2dET01FdmFiQjlQcw?oc=5",
     "domain": "reuters.com",
     "source": "Agency wires",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "2d ago",
     "sev": 0.65,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.98,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Kotak Mahindra Bank",
      "Classified: Controversy · Key-person risk",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2d ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-KOTAKBANK-1001"
      },
      {
       "time": "2d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "kotak-2",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "ED arrests ex-Kotak Mahindra Bank VP Pushpinder Singh in ₹145 crore Panchkula municipal fraud case",
     "desc": "The Enforcement Directorate arrested former Kotak Mahindra Bank vice-president Pushpinder Singh in the Rs 145 crore Panchkula municipal FD fraud case.",
     "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPRTZNYnoyaUZzZmRGQ1hzdVE4WHhfZmNQY2x4OEt2QWFuZUtINDEwSUhENDlsb3hBczlfZ3k2MFJQRWNPREFWVW12djgtOFB6di1ZMkwwUmhOY0pFcGp6akNabGgtTFo2OWc5MVJQSExyNWRITWc0aThKNWVtS2tZY09hMDlGa29MSzh1WWYzMzhNci16ODRaYmd3YXpXeDZmSDlMYjU4OVZqOWxnU1FVSWdQSUFRbmdRaUpHYUpIb1h5c1A2enRybU1fZHhUTUdJOXAwdzh30gHjAUFVX3lxTE8zbjRkXzJaQ3FqVnMySF9fMndfdVlwcDdjUFJfZWxSeFN6aEY5akJrWG84cUZzNjlmUktJU1hMdkg4N0xvYkFkYktsaHhPV1lrOEtIdTlTSWkzMEV1S3lTUW8yM1pTa1NmSzFaT0JVaGFqa2RhNUh3cHB0dUZMQ05XblJlNFpaUjAydzhzUmRDMHR0SWxPN3psei0xRndmeE15TzgwNGd6Z0plMDZIWExkZWlaVWx0anAxTTk5bjhlVi1pZ0hGajV3SGQtU0xSS2RtTG9ZcjNVLU5zQzJNMEgtc0p3?oc=5",
     "domain": "fortuneindia.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject — defendant",
     "dir": "neg",
     "time": "4w ago",
     "sev": 0.75,
     "corr": 1.15,
     "vel": 1.0,
     "stg": 1.4,
     "dec": 0.85,
     "stage": "charge",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Kotak Mahindra Bank",
      "Classified: Controversy · Legal & compliance · charge",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-KOTAKBANK-1002"
      },
      {
       "time": "4w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "kotak-3",
     "index": "controversy",
     "pillar": "Financial integrity",
     "title": "Kotak Mahindra Bank fraud case: Relationship Manager Dileep Raghav held for false FD reports",
     "desc": "Investigators arrested Kotak Mahindra Bank staff, including a relationship manager and a deputy vice-president, along with a municipal accounts officer and an alleged mastermind in the Rs 150 crore Panchkula FD fraud.",
     "url": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxPUUFyTkphaWRnUC1KcUw4Uk5DZDhDMGNmUU1pd1JCS3FCaWVXMTF0ZmhVdVg4YWNNMVFGcy0wWmRLWF9rRGNVeVpKbFlvMHR5TDVsZ0RxRnVtNE1jQVhOM3VUenBHalpaUEVoSWZhSklOdDE0emJKMW16TEJ5Y05RTzZoZmgyaXg4V004bmF5dlA3WTA0VzMyZlE2OXpnUnVGaXRIT1NHYkFTMnRnMmZpdGdFX3luRzVtSWpabWdiZTlMSXEtZmd3WFk3MWljaGRzV3hNcTFOYllOV25pZGpBU0pGSWZjWDTSAewBQVVfeXFMUGtWZnJHc1BNX1ljWmpCMm9QTU5QaV8tdXVEbjd0Qk5mOGgwbGhWNE5nd2VDeGZ5Z2lUbGJCOWhabU9WOTBONVlPcTFDajRqVTMyY1pERy1XaDY5VElEMWdTb2FGRkhyNmprLWJ6bnVLTXhTQzNXSk9tbGVicEVDeGJwTG9TQW9ybmE5WlBoaEt1WDlsVDhaUkcxeGxYMXQycV9pckZtSEViM2ZGU2lOODkyOHl2aG1pRURPUElLVlJhVXVUUnpkRTU2MG1ndlRBR2JUSF9ieDZ0OWQ2dkVhWVJ0RlExU1pMckNpTGo?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject — defendant",
     "dir": "neg",
     "time": "2mo ago",
     "sev": 0.72,
     "corr": 1.3,
     "vel": 1.0,
     "stg": 1.4,
     "dec": 0.69,
     "stage": "charge",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Kotak Mahindra Bank",
      "Classified: Controversy · Financial integrity · charge",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-KOTAKBANK-1003"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "kotak-4",
     "index": "controversy",
     "pillar": "Financial integrity",
     "title": "Kotak Mahindra Bank files police complaint in Panchkula FD fraud case",
     "desc": "Haryana's Panchkula Municipal Corporation flagged about Rs 150 crore in fixed deposits missing at Kotak Mahindra Bank's Panchkula branch, prompting the bank to file a police complaint and start a detailed reconciliation.",
     "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPQXE0MjVuSFVWMXNiRTJmb2dUc0ZqNkJodjVGb1UtLTItQ1E1bWwwN3lLYnNvdlZJdGs1cGdSQUhiY1pxMmpoamNmcHI0MnZSX2dJRGdVVTk4Z0duUWM0NGpidzZtdFlPUUUwOWk0T2p6QTk5MjFCZWcwMzB1ZVExaDl4aEttd1BodHV4ZWx5Mk1GcW5YQjcyWExMaUZOdVo5NGR4cGIwNTBGWXZ4c0pIWVNKTlF0YzdXUmNvOVhCdUc2MF9D0gHKAUFVX3lxTE0wbzVzSEx3WExwc0JDbkx2RkxIT2lDNU1OTlpEUlVuZ0ZaNi00WThac0xtVDFycjVzUmQ1V2swbGllbl84MmItMWl5Wkt5d005eGxQQUkwV2R4eTVfZzI3UHp4amxrbVNQLXU0OHEzUXhTMlQtbGVuMVZWLVVTQWFOODFDSHJ0aXpBUUVvVjd4TENOR1RkbXZWVGFkcEE0MWxLVWtRMGtMMkxCMWpoZUFIOWR3c2pmdEtoalNOOVB1Yi1WOF9vRzFraHc?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "3mo ago",
     "sev": 0.78,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.2,
     "dec": 0.64,
     "stage": "probe",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Kotak Mahindra Bank",
      "Classified: Controversy · Financial integrity · probe",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-KOTAKBANK-1004"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "kotak-5",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "Haryana govt recovers Rs 127.27 cr from Kotak Mahindra Bank; no outstanding dues left with any bank",
     "desc": "Haryana recovered Rs 127 crore from Kotak Mahindra Bank, de-empanelled the bank for government business and recommended wider probes into fixed deposit frauds.",
     "url": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxONUpKU1FhdFBFdDVoNk9PbWhiZXNiX0dPVWQxei1SRWlYTExDMktUNFBmSExENjJZTFV3VldmUHRaRjIyT2tGZXlfRVU0QjhSSVFEWTlyLW9FYjBWUXlIOWk3Z1BxcnAxRWxXSjBadTBrNkxvQ3VXRm1WU3lNdmxpSjZETDFSaXhpWFBnX3JCcHEyWGl6MGNGMFpnMWpmX0ZiVEg5U2JvbERLZjYyMUFKdnQ0S3pqcUYyMDl0ZGhPMURXdUVkaFJUbDZES2NnSVBQZmR6TUdaeDJKanhNTXZuSW1rMlJEdjNYQnBmdlJXM1h5V1U?oc=5",
     "domain": "aninews.in",
     "source": "Agency wires",
     "sourceSector": "Private bank",
     "direction": "Subject — defendant",
     "dir": "neg",
     "time": "2mo ago",
     "sev": 0.75,
     "corr": 1.3,
     "vel": 1.0,
     "stg": 1.2,
     "dec": 0.63,
     "stage": "probe",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Kotak Mahindra Bank",
      "Classified: Controversy · Legal & compliance · probe",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-KOTAKBANK-1005"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "kotak-6",
     "index": "momentum",
     "pillar": "Financial",
     "title": "India's Kotak Mahindra Bank beats profit estimates on strong loan growth",
     "desc": "Kotak Mahindra Bank's Q4 standalone net profit rose 13% to Rs 4,027 crore, beating estimates on strong loan growth and lower provisions, with a dividend declared.",
     "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPSjdYRm1jZVBIMVRuNS1aQllGNWJ5NGEtUzNITEtFajBFQ1dmcGpXaExNcUZGRkdxQlExWG9VYVJSOVhJbzQwUlNZNDVaUGhPS25Val9Ea2t6M2Z2OFFUWGdvdnYxUFVGc0l1WHVuZW55cWpHSHRqME1pckxuMy1lT2JIejhJMG9ZTGtYVXY4SEdBaWpoTm8wam5pcE1BaWhwSmJvUU13aXV2YXNvRnBJWEI4YVRucmc?oc=5",
     "domain": "reuters.com",
     "source": "Agency wires",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.55,
     "corr": 1.3,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.72,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Kotak Mahindra Bank",
      "Classified: Momentum · Financial",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-KOTAKBANK-1006"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "kotak-7",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "ED Registers PMLA Case In Rs 150 Crore FD Fraud Linked To Kotak Mahindra Bank: Sources",
     "desc": "The Enforcement Directorate registered a PMLA case and raided 12 locations in the Rs 145-150 crore Panchkula fixed deposit fraud linked to Kotak Mahindra Bank.",
     "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPbHJLbEw1QzhNTTZPSzExUHVBczVCaG41em92UDg1TmE3bXJGWEVtMzBHazIwMTBCVVh5SWdUa3BGYVV5V1hSLUFXS24xU2l3RkdjU2dZek9IS20wV2RnZ3JzTi1uMTF0Z3BSajdQcTlHdjdjV3AxNVpvYzY1eUtsakhwQkZTbTQ3cmM0S0l3N2liUi1ZVmpjQk9xN1ViVUhVcW1XVlNQd1g5ZW5Vb2t2cUVfT205ZzhxV2tBVXNXUdIBxwFBVV95cUxOcVJ2NnQ0YkJoMVVaOFNkeW9IZl9YRC1DVmtTVzBPRGFLekpWNzhEdkhnTXlERldpUjBCaTNTSWVJd1p2Y3dKZmxJZGdNVFJiVnhBR2EzSEhFRjltMmQ0NDJUdHlVSGFKZTZ4TXlUTm1oRVRTRlFjdEFBUkNWQVBMUEk3akEwZlF5ZWhuc2MySzMyaG8zdTVDb1ltUTJWWk9XNGh6djRkR0hZRmgxekRMejBONmxSQWpVd0hnQjdBU1dLdGtUWmdN?oc=5",
     "domain": "ndtvprofit.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject — defendant",
     "dir": "neg",
     "time": "2mo ago",
     "sev": 0.8,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.2,
     "dec": 0.68,
     "stage": "probe",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Kotak Mahindra Bank",
      "Classified: Controversy · Legal & compliance · probe",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-KOTAKBANK-1007"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "kotak-8",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "Kotak Mahindra Bank eyes M&A to deploy excess capital",
     "desc": "Kotak Mahindra Bank said it is open to large acquisitions to deploy surplus capital, betting on affluent, SME and digital segments for growth.",
     "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNNGU5eU1FN1NlOU95VC1ycjFuUFBmdzJWeU9BTXhPNkxuVm5FODhqWnNBUUlZVWxpYUdtVmw5V1NHb0hIdE1Ha0hxalVPQ2hhXzBKMFctSmtRU21FblAzY1Fxcl9iSWVac2puQ05PazFhbHhkVy1BaUZGVmNWNjdiU0xXQU9kVG5YS1lhTFdoeUxWbVMxUk5OM042aWNtQ0toa0o0aW5FbTJEVHRFSFpscndGYlYwRFhWYnpCTkl5OGY4YVdRZWfSAcwBQVVfeXFMTmpqNGJvS3BvTlY2bzZFTURTanFkRGhPNmNmOGx0akFYUVdrMXBRSDI0MjZqRl9ISzFmazI4bTBZeTl5Vmp3WGtUU1pTSDlZa0EtQW43X1F6bG5hb0xueGdqZ19pU3hwNEpzTlktQnhhLVdQZDBPTERFcEFvNENQU2tpallCVXdBM3FHb0Z5NHZxNnJic0hEd2VpNkF6a2tlNHZTNUpvYjliLVVxMHVSMDhMQVV4YlNIeFhUcV90V0lrRzVMMjhQT3lPaEJ4?oc=5",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "5d ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.94,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → Kotak Mahindra Bank",
      "Classified: Momentum · Strategic",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-KOTAKBANK-1008"
      },
      {
       "time": "5d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "kotak-9",
     "index": "esg",
     "pillar": "Governance",
     "title": "Kotak Mahindra Bank: Two insiders likely in the running to fill CEO’s role; list could go to RBI by...",
     "desc": "Kotak Mahindra Bank's board is weighing internal candidates including Paritosh Kashyap and Anup Saha for the CEO role, with a shortlist expected to go to the RBI.",
     "url": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxQV1RBWU5GRVhDSVBucWkzVDdUWXJhZFlFVG1VWnBFWTdxemI5ZkJaMnNVWlJRRzdmbkhDdDRtVWRLNF8wNENFdUlUaVpmNDhGb2xqbFQ2anRJNHIwZGdnR2xyY0F2UTAwYnFtRGVOODkxZG96ZUEydTdvVlBiSVJacXBNTUZmbjlyclVNUEs1NTV5NDhGUm1Lc096ZHBHQmFBa2RxLW1OejBReHp5ZG1zTHNVTFB0VVRjRkR0V3FBT19fZVFrODY0bC1ucWJiZkIxWVpoTV9sTEc0dW1kVUtja1dyQ0NKZnlSNXlha0ljdjlMZGVvamxNeGw3c9IBgAJBVV95cUxPX0k5U0N3Y0J2eFg1WlhVbnB4ME5MaGZvNkx3NmhQUmtraHNlSEk4aS0xaUlDdV9UNTRzQzlFRFpGN3lzZGFjdEZaaEFCcVduNlV5aVZrOWZFTXAxMFVHU3l0OTNVSHpNUkx3MG9XUjNxY2RUTVFtdGpILTlmQWZoekhfNmJvYkNScS1CSVM4Slh3UFhTc3VhLXUwdXJFYmkwUkZlQS1ySzcwcXc2Y1kycGRQcVVUcklmZ0FybjVWemNfRllSNzZaWnJHRzVhNFlzTDNkMDBib29KNndpRzdtdTR0alFCU05yMmtoSDk5blFidVI0LW4tUjhydlJmcWRn?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "neg",
     "time": "today",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 1.0,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → Kotak Mahindra Bank",
      "Classified: Esg · Governance",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2d ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-KOTAKBANK-1009"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "kotak-10",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Kotak Bank gets RBI nod to acquire 9.99 pc each in AU Small Finance, Federal Bank",
     "desc": "The RBI approved Kotak Mahindra Bank holding up to 9.99% each in banks including AU Small Finance Bank, Federal Bank, J&K Bank and City Union Bank.",
     "url": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxOLXo5a2tXLVFBUTVSbURFU1Q2NEVtTndLczNhRks2Y2Izc3FKNTdiUXAtQU8wQmdKRmQwV3RWWXdoUktHbzJiQXVVMnNnbXJUd18tZTVqNEp6R1NVaWJOdlliOE5EbW9VNmZTaXhlaEpRa3p1VGp5a09YaDBocXV3SEdQMUJuYUMzNTNEaVNleTdmTURSUjJvZXZGTEhtSVhCR3NGSF9hWGkzY0FteUhtbVh3RVBmakRSTl9SdlBDc3JNT1BwNGNsR2pwUUY4MnM5TmtFRFc3U3hWUTJQX29pYzI3ODJ2Q2RucTV1dkFHSnHSAfYBQVVfeXFMTkd2TkhRN083RUZKNHdnSW9LbUQtYVB4WThLcEpnQmdMRFZzSXVyaTlGeW56a2dmNERGT29QSnQySGlVNnpnOHhVeWZmbkNLR3doY00tdGhpeGM4TUNLeksxSUVDMVFZSnVEVEswMWx2TzRtdm5DS1M0bkdZV0VmN2NJQW5iZnppUnQ3dldUaE0yWE5WUUNXT2FHWS1vX0xvRW5NelJQRk05d1RRNzhNS0RpTHdIU2hDRnBsa3owNjJzLWNhUTUtaGxkMzFDbDFyRmRxeXdtSlp2UUhqWTVxXzUyQ2ZFS2NpamhKekRJRU9rTGhsX1Jn?oc=5",
     "domain": "legal.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.6,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.54,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Kotak Mahindra Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-KOTAKBANK-1010"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "kotak-11",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Kotak Mahindra Bank to absorb KMIL business into bank from April 2026",
     "desc": "Kotak Mahindra Bank will absorb subsidiary Kotak Mahindra Investments' operations, approving a Rs 10,639 crore acquisition of its loan portfolio effective April 2026.",
     "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxQX1U4SW9mSVJoVE00SkpudUFuNjl5LW1SSHpCTlpnM28yQi1VWFpzdnpYcnNta1FVYm5FYXAyUl9Ya0xhdGFLM3lKdDQ4ajJaaEw0aWNrcjhQRnhwU05FSENSRV9VeExCR3RwYTZ1Z2RPV3V2TjVkLWVPbXoxeE5WNlVmamZwUEVZM2RvN3pXRkFlRXZvQXp4T2Q1QUtROXJaeHVWSUtQUHN4VUhEQWQxLVQtdEV5dUNucUluV2ZTcXNVVVN4dzQ1Q1BodERrczZ6b2hxeGVQd9IB3AFBVV95cUxNRXFGZFhYajJDSkVBZHVNWG5ab0dYTmJHNnY3d25XczZOZEpUUXExa3pDUk9HcFJWcmRwN1NWcDRjQnVLU2hqQmhlR0RIbFJ4d1M3V0phajFLWjRWeElUb25faEtEVVdRNmVYc2hLMFI5bm1pakg4T1BoMmdaSFNsYjJYNnhXamJKd1ZELVdXd1VKQzRFTm1BekxuZjhPN0w2bmdIaDk1NUExMHNocDhpNUFYZDhnal81SWlmdmY3SUd0Y2d2LXIwNHUyWWhFWHFkZURlOXBsa0ktWjEx?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "Subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.45,
     "corr": 1.15,
     "vel": 1.2,
     "stg": 1.0,
     "dec": 0.71,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Kotak Mahindra Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-KOTAKBANK-1011"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 657
  },
  "axis": {
   "name": "Axis Bank",
   "ticker": "AXISBANK",
   "sector": "Private bank",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 22,
    "risk": 19,
    "esg": 11,
    "momentum": 54,
    "catalyst": 52,
    "sentiment": 8
   },
   "trend": 4,
   "quarantined": 12,
   "narrative": "Axis Bank: Axis Bank CFO Puneet Sharma resigned effective August 31 after six years and was subsequently named HDFC Bank's CFO-designate, with no Axis successor announced — driving the catalyst index. Axis Bank's Q4 net profit slipped marginally to about Rs 7,071 crore on lower trading income and higher provisions, missing some estimates — driving the momentum index. 12 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    61,
    60,
    62,
    62,
    64,
    64,
    65,
    64,
    64,
    64,
    64,
    68
   ],
   "indexHistory": {
    "controversy": [
     28,
     30,
     29,
     29,
     28,
     27,
     27,
     26,
     25,
     24,
     23,
     22
    ],
    "risk": [
     18,
     18,
     24,
     24,
     23,
     22,
     22,
     21,
     20,
     20,
     19,
     19
    ],
    "esg": [
     18,
     17,
     17,
     16,
     15,
     15,
     14,
     14,
     13,
     12,
     12,
     11
    ],
    "momentum": [
     51,
     50,
     57,
     57,
     57,
     56,
     57,
     55,
     54,
     53,
     52,
     54
    ],
    "catalyst": [
     40,
     39,
     47,
     46,
     48,
     47,
     45,
     44,
     42,
     41,
     43,
     52
    ],
    "sentiment": [
     5,
     4,
     3,
     3,
     7,
     6,
     9,
     8,
     7,
     6,
     5,
     8
    ]
   },
   "articleCount": 175,
   "events": [
    {
     "id": "axis-0",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "India's Axis Bank says finance chief Puneet Sharma to exit",
     "desc": "Axis Bank CFO Puneet Sharma resigned effective August 31 after six years and was subsequently named HDFC Bank's CFO-designate, with no Axis successor announced.",
     "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOeUZ5X1F1VFkxX3Bla21uYmRRWkV2VFB4VFRMMl9xdGVBUTNkbVR4U1FKZjY4V1FOZWI5T1luajNBTm0yQmp3REwwNDFNaFpuNVlBU2NHaDUyV29OQTJQVXNtdjFnTTFlVkZmQ29kMnIxcERvT1JXVjY1TnZJRXctaVNB?oc=5",
     "domain": "reuters.com",
     "source": "Agency wires",
     "sourceSector": "Private bank",
     "direction": "employer",
     "dir": "neg",
     "time": "today",
     "sev": 0.55,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 1.0,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Axis Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "today",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-AXISBANK-1000"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "axis-1",
     "index": "momentum",
     "pillar": "Financial",
     "title": "India's Axis Bank slips on profit miss, $2 billion equity fundraise",
     "desc": "Axis Bank's Q4 net profit slipped marginally to about Rs 7,071 crore on lower trading income and higher provisions, missing some estimates.",
     "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOMWtnc2Q2cnJwb1FJeTlwdWFxbkM5VDdmNWJMTHYweGpCclpXQjNTZmtLUkcyc2VaTDlobHNZS1l2b21pYWN1aVo5Q2FzbmowQkthVnlpc3UwNExtQVFTZUxCcnlaenNZX0F4STg5bFR3VFNhQU56V0RVbldXYXRLdjUtNjdxQU9CTEYza2lBdHkwd2dXa3U3TUxXSnQwWVI4ODRkT2hCN3h5SUlTdWc?oc=5",
     "domain": "reuters.com",
     "source": "Agency wires",
     "sourceSector": "Private bank",
     "direction": "subject",
     "dir": "neg",
     "time": "2mo ago",
     "sev": 0.5,
     "corr": 1.45,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.69,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Axis Bank",
      "Classified: Momentum · Financial",
      "Corroborated across 4 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-AXISBANK-1001"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "axis-2",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "Case registered against former Reliance Home Finance director in Rs 150 crore Axis Bank fraud case",
     "desc": "Axis Bank's complaint alleging a roughly Rs 150 crore loan fraud involving a former Reliance group finance director led Mumbai police to register a case against ADAG-linked entities and officials.",
     "url": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxPWjhQNl8ycDFsUFlZRkRQUXJKUTJMWEgtMHpQNTVfTldabUN4NWM4MkFzeDZTZElmOGhsUXh1YmlTYlNCZElfb2ZKQkhLYXRhSTZ0X3JUZG5zQXJWbXR1UVVmNFNzUWFfSzhPMFhrRFRaRWhmbWtpM21raUZob3k3b3U3T1JYWjYyS2lIMW9uUXpVc3dyQmdTclRMLUt5T2hyRVo5bkMzUU83ZGdyQkVFQ2t3LU5URmFrNVByblNSTkI4b2NDNndrMExsenBwY3BBVUZTV3V5SUFwd3h4NVlxeUNjY2hzQi1lMWtJZFNHelowM2la?oc=5",
     "domain": "aninews.in",
     "source": "Agency wires",
     "sourceSector": "Private bank",
     "direction": "complainant",
     "dir": "neg",
     "time": "1mo ago",
     "sev": 0.5,
     "corr": 1.45,
     "vel": 0.9,
     "stg": 1.2,
     "dec": 0.82,
     "stage": "probe",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Axis Bank",
      "Classified: Controversy · Legal & compliance · probe",
      "Corroborated across 4 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-AXISBANK-1002"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "axis-3",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Axis Bank raises $800 million through dual bond sale",
     "desc": "Axis Bank raised $800 million through a dual-tranche dollar bond sale under its GMTN programme.",
     "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPelFucXVUNGdWaHpHbzBONDN2SkhZRWpDRVdfWFJuUEk1b1hZYmVYRkZXTHk3M25PVEV2aEdKWDFEU09pNVkwR2xZZGJxM29SdVpfNDlXdlZsRU92Yy1aakRRVEpfcEJRVDFpYm9mNzRWQ1B5d2RWZ21BZGMtdzlJeXhGNWQ4ZE85RHZQYUxEUk1XZTR3M2trUHNDV1lIczlwb1hyTXgyZ3JHdnVKRFk4M2NWOERXdHFpU2lB0gHAAUFVX3lxTE5tbExSM0twY0RVN25ZNzJnVTRWWVJzT3ROb3JibVJTTTJnbWhrU044QjRQUS1CMlB0S1lfZ2RHWGJWUVJWXzc4dVVjeWdSUEw0WnRkaGoyLS13SXV5R1FxTVVFVGtUdVQzYzJLX0pDZWFMMlRodVhGbndacjNCRmFRRHVDUC1rTjlubG83V1UwYVJiUDd1c21neGUyU1kyR211Mk1fcURLSkRnVEZ5cThib1ZCUTR3MUM3Rk82cjZUaw?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "issuer",
     "dir": "pos",
     "time": "5d ago",
     "sev": 0.45,
     "corr": 1.15,
     "vel": 1.2,
     "stg": 1.0,
     "dec": 0.94,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → Axis Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "6d ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-AXISBANK-1003"
      },
      {
       "time": "5d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "axis-4",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Axis Bank Declares Final Dividend; Approves Raising Rs 55,000 Crore Via Debt, Equities",
     "desc": "Axis Bank's board approved raising up to Rs 55,000 crore via debt and equity for FY27, alongside a final dividend.",
     "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOckN0V3liWGhEdnhETlJzT0lqX3hyVjJJSlZFbWlWb19VeF9ZalgtbTFPTHRnRUktdFZMQVZFQTM3NDBUdHBxcDl6OEh0bXpnalJSb2ViNVFvZk9wLVZrVkNzeEJONGxSdXdSVUFoS0VKMUgybHdEQU51ZDI2RHZFQ0t3dXBlbHBOdFhJUzNneTRTQXd1Q1lwZWczQV9MY3k4TGFPNWJMT2wzUXZMSUNtb3NXOU85UzR5WGNhRXZDY1NQYVlJYkVZ0gHPAUFVX3lxTE53MnBLQWpVYnFGcXdWRG9HcnlfOVgxZ3ZwUkJYZGFsRmV1dVdvcmR0UFhncEVTWlhwY1BreW1seVM2cXRrcldncHNGWEU2T0Z5U3ZjNkxpNnZHLWEzQjdRR1Z6d0I2RnBvaW81R2JZemVqUGlHUWdXa195cWVyT2U4WlBiNlZqXzlrZzAwUWpydDRuXzB1MHdUZnhSbzRWUGVqMmFINEZ5LWJMVVJDX2t6RFZmcUlIUDBpLXN6V3I0NnlqRjJMNXdDSk9reWNZMA?oc=5",
     "domain": "ndtvprofit.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "issuer",
     "dir": "pos",
     "time": "4d ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.95,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Axis Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-AXISBANK-1004"
      },
      {
       "time": "4d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "axis-5",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Axis Bank hikes stake in Axis Max Life Insurance to 19.9%",
     "desc": "Axis Bank received RBI approval and raised its stake in Axis Max Life Insurance to 19.99%, with plans advancing to list the life insurance JV.",
     "url": "https://news.google.com/rss/articles/CBMijgJBVV95cUxPcmxLaHZHR1J6MkFOYkRWaWhLUzhkbU50aGs3VThIVnVDVjh0Mk9VNzFiZXpfN3NiMVhQWXR4Qms5cmdqWDFqUXl6YjF6QTNIcmJ2OVdoeDFOOUY1YTd3UFVndWdpU2xfd0lWWVVhc0RyZHR0SzFqdnZ3Szg1Z3hXR1A2V1B0d3diUmlFSEc4QXFqM1dQYmpyd0I5WEY0NzFfV2VZeUp6dmR1Q0Nlc0JqQW9LYURjQnRoVHBFbzBuOWw4VmRod3U1S1dMNERJY3VZQVlRNzJRbW04NDdoSWo4cXh4d1ZYdXFWTDkxdnhUWmZfNlVYaFNFdVVKWlNvNldqd2dyS3B4ckI0eW5xTEHSAZMCQVVfeXFMTTRVblNKWWtoNjZ2cjlGNF9KLV9zM1JXVFJudkpvUTUwOVh5ell2dzBodXZMNVlFRTJFV3FveXBLc0ttd3lJdTZvcVdoQThtZzBldjZISEZXbC1TaWI0R2Z6RkoxMDZhcnlFWHRIMzVsN2loM21PaHZTUmoxcXRBSGZteTB3a1NtV1VJUHlWWTFHZVptV0dBZmRfRTNWb0lMZ0ZfaTE2WmM0S2hoQmc5M3AyVG9hSDlDQ2FYNzZGbVF6dVAxUGRMRUt6RlpqSWZST2lscWJfdDZ2ZWhiNUVJOF9PdTVoVmZ4ZEtTUGIyWHJJTnllTkNsMks2ejd1VkRSTTNTNzF5NzNqODBsdzRpMlNkMms?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "parent",
     "dir": "pos",
     "time": "4w ago",
     "sev": 0.45,
     "corr": 1.3,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.72,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → Axis Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-AXISBANK-1005"
      },
      {
       "time": "4w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "axis-6",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Axis Bank hires McKinsey veteran as AI officer to drive enterprise-wide push",
     "desc": "Axis Bank appointed McKinsey veteran Namrata Dubashi as its first chief AI officer.",
     "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQcGR4RTZ6VFktYXcwX0MwWlJyZTZvbThlYzlHbHM2WUtWaGEwZkF3cGVwTUpGVmRYTnFIVUdjZ19PQ0NKcUlGVWRGNG9wWENyR2RialZrY21GbElpVlNiOEpITGRpYUpJSmRaQ2RNYWRKQ0w0WUpSWHVPUS1BWHltci1HMlVhYlJZbW9heUZZekJ6dVFwWnFCMDFpSlRwUTAtY1JZSTROQ1BKYmZBTHZZaHg5Y09NYU9fc0J5R3ctUjVxbEtVbXpCU2Q4VzRkYzRpT2fSAdcBQVVfeXFMTV9RR0t1TERRdEJ2ajBiTmtRSlZDalVZR3R2aXIxaEFIUmJWSjdiWTNBbGRZZGxGWGRKRGhUSFYwcmhpTDJQOWtOTndtMmRzNkpOZHpCTUlvOTdzeXZvNGlhVEhQQURhUHNuUjZJMEZRWWVhWXFoUThaSk5ueWJVcE1hZ1NhV0IzdWk5NEhreFo0akVqbFMtaEpsRzFQR25DWkJQajZLUUtnVzFDSlg1cWlSc1UwWVo4SlBLX2VNRXZHVDR6cF9CRTFwekEyc29mSklQQ256aG8?oc=5",
     "domain": "livemint.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "employer",
     "dir": "pos",
     "time": "5d ago",
     "sev": 0.35,
     "corr": 1.15,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.94,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Axis Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-AXISBANK-1006"
      },
      {
       "time": "5d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "axis-7",
     "index": "momentum",
     "pillar": "Financial",
     "title": "India's Axis Bank posts surprise rise in quarterly profit on healthy loan growth",
     "desc": "Axis Bank reported Q3 net profit up about 3% YoY to Rs 6,490 crore on healthy loan growth with stable asset quality.",
     "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQN1ByYTdIMDg5VlBZSXNzSDBOSkJGZllUWEJJcjNleG5iNlRpdWtmNm5vOExsdW5SY01EWGF4cFl2a1drZFJPbjVjN0hGYzllX0ZIbDh0a01JM0ZOZDhCYUtua2tNZUlIMkY3VHkwNkprRDhzWDlxa2pFNjZNeVRBYjVHNF9yakE3cFRjQkdDSGIySGMxNTNmVm05RnM2cmtiTTBV?oc=5",
     "domain": "reuters.com",
     "source": "Agency wires",
     "sourceSector": "Private bank",
     "direction": "subject",
     "dir": "pos",
     "time": "5mo ago",
     "sev": 0.5,
     "corr": 1.3,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.41,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Axis Bank",
      "Classified: Momentum · Financial",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-AXISBANK-1007"
      },
      {
       "time": "5mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "axis-8",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Axis Bank sees loan growth outpacing industry, margins improving",
     "desc": "Axis Bank management guided for loan growth ahead of industry while seeking an optimal balance with margins.",
     "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPcmwzMVdDMjRjNnJSZllPcGpkT0VGVzcwYThOQUVyVGl5bjRDTDdBdmt2VF9reUtkTGFiamxJVXlUbGtLcVVZbXhxNzM3RkNuaWowbXFPRXJ4ckZMTU1nQi1wOVpzTlpCSFRHc3M5cFI1NmZULVJvMVhiLWlmdm1IazE2RmZjVk40MkdNWC00S2lRLTBEVUdRNWo0Ylh6X0ZKb2pjNFVfYWVxU0tPUkZBRnd2U0xQbW05UFA2N2Q4V2NybnNTN1J3N0FTT0FGbUwtZFHSAdcBQVVfeXFMUHdzeFNMeGd3N3dQS3BOX2lYZXpsUXNxZmFZak83NkVUUUNOaUJOaE8wcWx1TXBOUnBaU3hGejdOVHY2TmtsQWVuTWRMU0poNTIzMjNsN0ZoUVZLSEJlblctTDEtWC1wYVd2OXo5MTNDQUVHLVZBemw5LVRKeDIxYVNsSDJPUkp6aGFTNjBaUHZLZ3FMRGJVb1FCRXdzajdkbWJzSlE4YnI3RG5oQVdSR19qbHNpem95UU9LRC1oS09CTENJR18zLThicXJVb2hPMTVKbUVWbnM?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "subject",
     "dir": "pos",
     "time": "4d ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.98,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → Axis Bank",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-AXISBANK-1008"
      },
      {
       "time": "4d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "axis-9",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "Axis Bank plans 500 new branches, targets presence in 700 districts in FY27",
     "desc": "Axis Bank plans about 500 new branches and a presence in 700 districts in FY27.",
     "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxQQW1hbmJxRUVlWlBzLUVGWHBZRk0zTFh2aHhzWU1fWXoyTG5zSzl3QUhMcVZhY1Zla1psU041SFk4anFOZ1B0OFBvSE1MelA4cnA4Z0NWakZmWFdNVi0ya1VucnhhcTNiY3I5VmNxcjQ4cWcxdm9aU0s0UUJGS29HMHYwMDB2Mkl3akRiSDFZUzJnTkN1WTNydFRKVFEtZXpXUXdfVHhDNGRxQW84UlpTQlowWkVYSW1OWk03TU5MYk9ZY0xOM1o5UHpMM19RUUlmQV90THBZMTRIbjRSbnfSAeMBQVVfeXFMTlh3NEJWZi1lWlVTcUNqczY3MGRVZ2hwRkRrbHJrRVVGTm9ZSFF3WTBPNkxoU1BRaW05VG5tQjFRSF9VeDM1N2g5bHRDMktVUjd1a2RXZzVRY1ZIVGpCZy02SEJFbmduU1c3QndiWjhxLXhtMmplOGFoMzM4eVJoZkxxMW52Z0dOSGlOU1Z2U0w1dWZ2Q2ItWEd3M3c4bHFVbE5mY0Vwa1pteEQxaEdSaHR0TElMVzV2cTc4dVpvZmF0d3NVaWdaSzYwYVNfVE1fNjIyMWJidmZkRUI1T00yMEVab2s?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "subject",
     "dir": "pos",
     "time": "6d ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.93,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → Axis Bank",
      "Classified: Momentum · Strategic",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-AXISBANK-1009"
      },
      {
       "time": "6d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "axis-10",
     "index": "risk",
     "pillar": "Financial",
     "title": "Axis Bank says Rs 2,001 crore one-time provision buffer created against identified pool of assets",
     "desc": "Axis Bank created a one-time provision buffer of about Rs 2,001 crore against an identified pool of assets amid West Asia-related uncertainty.",
     "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPVDB0RFIxNzQwTHNDYUtiVFJFMVJ2VW5wTWVDZjFwNU9Sa1V1dFFieHJKSlYxYVMxRnREVzcwVW9TYkU2dTNOdE5lb0JLdnZDT2RBZU1nQlp3VGlON1lnVHhKYnpfLTBHUmtKY0JvUVFYbk5iaWRYcmFjR21JMFFyaXA5NmJnRjgxWmtLR2Y0YS1TWWFEX0JVSmtUSzJzX1dnT21qSEFKaUN5Um9DMTE3S3pMeEY2XzBUa2hzX2YwMnNxVTZseEpRbWtvU2ZycjZidlByS0ZwMVBmNjR5UGIzem1WZXV5aDE4cG9LQXR4QmxsZ9IB9wFBVV95cUxPVG82eWJ1UTFZLVRBaHg0QjB4czNJeEtTVlBwdEt3T294ZGNNY2hMXy1FcG9OQ2VKRTh6UC1PYW1oRkYwWjBYQVpEX0JxVnRBLTg3OWwxVWk5WVN2VjhZa2luRVg4ZWhwdEhwNGhqSVFEQ1NCdjBjQ2FZZ29CblRGMlh3bGRpQ3M5dFFKeGtaekItcDVvUlRUYi13TnJHUUNZbjNuX1Vic2VWOWpkMV9nbW5DNDVUVjhhdTJ5aEFVRklVcjM1aHNxNzhQWjBRMm4xSEp0Zi1jNVlfclM3X2dzbm42MXFuU0ctMWNGZ2JIYVNVcHpVMThv?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "subject",
     "dir": "neg",
     "time": "2mo ago",
     "sev": 0.45,
     "corr": 1.0,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.69,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Axis Bank",
      "Classified: Risk · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-AXISBANK-1010"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "axis-11",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Axis Finance gets Rs 2,250 crore infusion from Axis Bank, Kedaara Capital",
     "desc": "Axis Finance is raising Rs 2,250 crore from Axis Bank and Kedaara Capital, valuing the NBFC at over $1.5 billion.",
     "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQMGZ4Z0lNQjdrYnFtTHZFdDZuaXpGdDk5cncyYlVoN21tM1BucHdpT2NlVzZOLWN2SXhfUkFvVnVkWGpvbEFjcWo1OEZEbjh0eXJ0cTNFbVlVeDVYdjF3TFdXZmZnZkVWRVJNSGxVMkNVSXVSUThTMURVbVgzN1VKRmE1SUNlNERJQW9zTzRvQ1BISFdpaXRTMXFVcm1VWl9aVGRtUERuVVF1TTVHcUxhU0RFUTVtUS1ucFUxS3NvNTJzRXNXQkRJc1o0a9IB0AFBVV95cUxPdDJXN2JRUExxcnJDSHZIUl9KZHd6VHBNUFB4TVl2X2hSekdEdU5tNHoxelVEamM0dmpXUnA5eFBqcUlkTU9XNmRGaE9nQU9IUUJ2b09nbmp1OVdxMkRiSFotOFU4WTVGalNhbS1BSkQxU2ZmcmxPMGdkU0Z6N2Q1SkJNN2N4Y24xZzBlVnF1dnd3Q1ZCM2NpYlI5UFRwdmdSVWRKM2hWN2xTZldvUzVrSk5VSjd6ODBseE1Iamgtd0w5LTc4Y1BLTUsxXy1XdGR3?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "Private bank",
     "direction": "parent",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.45,
     "corr": 1.15,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.59,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → Axis Bank",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-AXISBANK-1011"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Private bank)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 592
  },
  "shriram": {
   "name": "Shriram Finance",
   "ticker": "SHRIRAMFIN",
   "sector": "NBFC",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 1,
    "risk": 15,
    "esg": 10,
    "momentum": 47,
    "catalyst": 37,
    "sentiment": 9
   },
   "trend": -2,
   "quarantined": 7,
   "narrative": "Shriram Finance: VinFast India partnered with Shriram Finance to expand electric vehicle financing access — lifting the opportunity side. Shriram Finance reported Q4 FY26 net profit up 41% to Rs 3,014 crore, crossed Rs 3 trillion in AUM and declared a Rs 6 final dividend — lifting the opportunity side. 7 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    72,
    73,
    72,
    71,
    71,
    71,
    71,
    71,
    70,
    69,
    68,
    69
   ],
   "indexHistory": {
    "controversy": [
     2,
     2,
     2,
     2,
     2,
     2,
     2,
     2,
     2,
     2,
     2,
     1
    ],
    "risk": [
     7,
     7,
     15,
     19,
     19,
     18,
     17,
     17,
     16,
     16,
     15,
     15
    ],
    "esg": [
     10,
     10,
     9,
     9,
     9,
     8,
     8,
     8,
     11,
     11,
     10,
     10
    ],
    "momentum": [
     48,
     51,
     56,
     55,
     55,
     54,
     53,
     52,
     51,
     49,
     48,
     47
    ],
    "catalyst": [
     44,
     45,
     44,
     42,
     41,
     39,
     38,
     36,
     35,
     33,
     32,
     37
    ],
    "sentiment": [
     1,
     1,
     0,
     5,
     5,
     4,
     10,
     10,
     10,
     10,
     10,
     9
    ]
   },
   "articleCount": 137,
   "events": [
    {
     "id": "shriram-0",
     "index": "catalyst",
     "pillar": "Bookings",
     "title": "VinFast ties up with Shriram Finance to widen EV funding access",
     "desc": "VinFast India partnered with Shriram Finance to expand electric vehicle financing access.",
     "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQSUl2WVJBdnJSSUluRVhrT0hEWm80X3hudGVXTlc4V0lMNFVWdE5RUktUczltNGFEZnhGREhXYUpoWjRSRjJfUUdSYjFGT1FrWnk2a2YyMGZJNm1zTkVZVkNfRm1yd3NGeXpjN3FHalZqUTNETmJWeWptOHd0RXJRbHNQb0t0RTQ5Yk1mU2M2UzlWX21xUm9FQjh3RHBEWjdHbU5lNWFVQlZKUGItRTI5dGt0VHBINFZZX2fSAb8BQVVfeXFMUGhBblBhZnB2dXBnX2FSVVRhRlRndFc1d3ZKaVVlR015VVFpOHVNcG5wQkJ3MFdsRm05TUctMjdCcUppMjBvUG82Q3VXRTRFSW8zZE9qLWpUdHEybThSSDNQZ2t5X3ZkWmtkTzZjRHptb041WllaWW5SOVVHaEJjVWRUTndNMktTN2Q0Sk5MWG1FUFl4MU1NMU9tTzBNWE9nSEZjRVlWa0VLTUpnRVg3NW5YaDRkLUR1R3g0dGU5UkE?oc=5",
     "domain": "businesstoday.in",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "primary",
     "dir": "pos",
     "time": "5d ago",
     "sev": 0.4,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.94,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Shriram Finance",
      "Classified: Catalyst · Bookings",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "6d ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SHRIRAMFIN-1000"
      },
      {
       "time": "5d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "shriram-1",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Shriram Finance Q4 Results: Profit Jumps 41%, Final Dividend Declared — Check Record Date",
     "desc": "Shriram Finance reported Q4 FY26 net profit up 41% to Rs 3,014 crore, crossed Rs 3 trillion in AUM and declared a Rs 6 final dividend.",
     "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQbWgxaEZGeW1nLXR1VndaODIwT284TkhrRkhWMjJVRlE3eWNwTVVoLTk5WmZvNUZhbFNmZWhjYW9EcE1Dc2xXb0IxaUJmVWhaTHQ0TjB2dGk2Y0FMZWFHN1p4SlhIRHFiOHF0VlpmUzBmWkUzVHdqdnZYa0VKekNxM3F3Wm5zcnY0a2hXNktZSkFIN1B6RGVNU2JRRzBWbVBRUE55YUxaV3dMN05BSlNoUEVuZExLaHdDQi1xNlI3N1BBSzBQRUpV0gHPAUFVX3lxTE9IOUNBRzVqbENaUXEzSTNTUkphT2NhbUw0dnZkZUQ4MkJMYk9WS0M5TFRzN29EVkJTaXdPOFUzT0oxTFBBRk9uQ3VGbV9oV3c3TDlPRnRFcV9BcjE4a2tON2FTS3RCNW9mNWVhc0VQZUxuY0VwZmlzY3hUZmx6TmRpbm5KRDlHajBSLWp3RjNmLW9kRTIwbW9DVS02ZXdxYnNmaDJCTXpBQ3hrUGJRcmZ6RWJhUzFQNWVUaGl4YnFnTU8xU1dEQWtwa2JFQU80OA?oc=5",
     "domain": "ndtvprofit.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "primary",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.55,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.68,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Shriram Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SHRIRAMFIN-1001"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "shriram-2",
     "index": "catalyst",
     "pillar": "Capacity",
     "title": "DEG, Citi provide $76 milion to Shriram Finance for MSMEs, EVs, rural lending",
     "desc": "DEG and Citi provided $76 million in co-financing to Shriram Finance for MSME, electric vehicle and rural lending.",
     "url": "https://news.google.com/rss/articles/CBMikgJBVV95cUxOYlRBOHB5US1WSlM0WkloZE9PMklKRXE2M1BMUW02RXJyUHUyZGxNdk9OcW5sSmtIWlQ5S1ZkN2dpdUlkeG9BVndHNi1sbjVKcEFlbVdpNDdZcGZPY3QwaVVqakpNUHd5UDVkY3AtOERxdkloeVRmbG95X0t2Z0tFTlZxWFFreWR1WWE3VUF3dXBhaTVLcEZoZ3NGSzd6dE5IVG5BX0V1TkkzQnRrbEQxMFVYenpwOUxkLXlkUTB2SVZxT3dmLXhuMGVCTnRaWkFHZGFQS05hY2JQZ3FsUVN4OWhQeXRacWx3cEMxZDc3ZC0tQlllWm1zcTRjZ1FYNk1Edmw1OERIUWtBVnBwdUcxOS1R0gGXAkFVX3lxTE5rSXJiOUF0WjNTWUJ4amtabmZfa3JjS0RPaDlGQnFXMlp1alVrTEpjSktKYXZtTjRsdzBsNE5xSG54Y0d4eXl4ekVXVFFpalpVTzY3QlVTYXNVcjcteU9hTGwtQmFYSE9hc3l0RDFWMkJOeEdGamp5ZF9DcE10NkVIZnZwMWdLVUdkSUlxcC1Da0ladTktZU01Tk9lSlFqWmg5WDZzTm1ZRFF4YTRWWFhjdl8yY1ZlbUN3QjVpX0dqMVY5M3NzcktOblBSR1JFbkxZTElNbWJkRklOZVFmbnBMREZoMHI3RmJ6eVpCcjZYSUZIYlo5QUZtZENwaGd4NnA2YkdyTndLSFZFbWdnOU9fTnNsOEtaNA?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "primary",
     "dir": "pos",
     "time": "2d ago",
     "sev": 0.45,
     "corr": 1.15,
     "vel": 1.1,
     "stg": 1.0,
     "dec": 0.98,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Shriram Finance",
      "Classified: Catalyst · Capacity",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SHRIRAMFIN-1002"
      },
      {
       "time": "2d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "shriram-3",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "How an 88-Year-Old Founder Clinched a Record India Finance Deal",
     "desc": "A profile detailed how Shriram Finance's 88-year-old founder secured MUFG's record $4.4 billion investment.",
     "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOUEMwRHpkV2pGektxbXY5aEo5dllqZ3NQUS1oLVVEUUVwZFd1ZE9pc014Z2JDR2JaVHQtbGYwU0pibXNRUHVwblJqcFhPa005LTNQWmVzRlBhWE8zeThVN01HNUFVSkZXUkd1QzY2WkVPRWRVaU5ZamN4VEhyVGE5bU8tNzJsX29fVUpZY2JnQ1p3ei1kOXIxRFhudzl0elFSOWZOZndpVjNpcUhPb1JiSUtVb003ZVhZNFNKdktDZw?oc=5",
     "domain": "bloomberg.com",
     "source": "Agency wires",
     "sourceSector": "NBFC",
     "direction": "primary",
     "dir": "pos",
     "time": "3w ago",
     "sev": 0.55,
     "corr": 1.3,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.75,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Shriram Finance",
      "Classified: Momentum · Strategic",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SHRIRAMFIN-1003"
      },
      {
       "time": "3w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "shriram-4",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "MUFG Bank acquires 20% stake in Shriram Finance for Rs 39,618 crore",
     "desc": "MUFG Bank completed its Rs 39,618 crore acquisition of a 20% stake in Shriram Finance, the largest FDI in India's financial sector.",
     "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPRFBnZElXTy1sSnExOUpTdk54UXA0MEQ4RXAtRUs5cjFOdzFsMVdhV3RSNnhOaHJ0djJOanQ2UG5nSGpWd0N6SDZLdW9GRE5Ud01HYU53Uy1TQTEwSWtxa19xcFpNck83U2dXMjJXbzEtdUdsWUVfRjVTSFRnQ0pDczFBdHI4WWxNLUk2OEMtOGtqdmFHZXRHMGZCQ2N2eXdjRzVCd1VqcDVmbGFMWHEwc1VMNndNbXNLcjdRUXRWcjlZSGfSAcgBQVVfeXFMUEdrbmU4RTUxZnI3UDYyMlduMGoxcUxiUTZERTVUWVNlZUdEWEFTNDU0X3BpdmxfLV9iVVNoYzBzTkFyMWo0R1lPOEIxY3EwQ2lEV0x3aWp1MWtzbnNMVHBEdmRuVzc3UGo5NlRTWUxETDBaQmJMSnM0enMyWVQ1SUJDYlBSbjNIOUVrdXJXU2pDUUpOaHp1MHVMNFR5V1BvNWZVQ3RaTlhQY1phTkRLVEVGUXIxVXVwMlVzZFVOOVhGMzc5R1l5NGM?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "primary",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.8,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.39,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Shriram Finance",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SHRIRAMFIN-1004"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "shriram-5",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Shriram Finance Q3 Results: PAT falls 29% YoY to Rs 2,522 crore, NII rises 16%",
     "desc": "Shriram Finance reported Q3 FY26 net profit of about Rs 2,522 crore, down 29% year-on-year, while net interest income rose 16%.",
     "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxNc1NjODV6X0lnZktSTTUwQ0dPaUw2ZjAxZ3lwMGI5M0ZtMVJseUMtOXBBMlJ0RFdDTkVjZ1Fydjc0VmZMWEFXS2p0MUh4UWlzbzFETjFqZ1FHSTFPb0JVTXcza0htdHpTS0IyeXlESlJ6ZmxpbTlDMm9iU1BTdlZkSzJXQmloNHBGc3VlOG56OVgybk9JLUhaU0dKYkFoSUlTQm03eEc1X3RDRjdYTHpKRDRKaU5rYWlvS2dBQ3BpOHZWNW1qUlAyd2h6blpZdzhJUF9qNkNqX2t0QWZROERCWm82RmRqQdIB6wFBVV95cUxPYjdERDkxeG9NMFdJYnkydHZ4S0JQMzl6WUFqQWdIMmd6T0RjYV90MUMyemNUZ1pMNjJjdFVtMEF0TzRFZk82RlFId0Z3eU9ZR2ZMUEdZZ1pxVzNrbHhIXzU0d3FsV0duUU9MZGFEWVpjc2pmRjl2dkNzblotaElZZDRqLWQ0al9BMHNjVlNldWZfWUtJZUJMREhVak5hTmdNT2wtei1zaTJHc3I3ZUlsa0xpSEFKLTVrdFNydWk5S2YtajA1dko2Q1A3OGREYmZZTkh3MV85VVI5T0NjODNrX0ZlVjd4MlRKTzRV?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "primary",
     "dir": "neg",
     "time": "5mo ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.41,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Shriram Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SHRIRAMFIN-1005"
      },
      {
       "time": "5mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "shriram-6",
     "index": "risk",
     "pillar": "Financial",
     "title": "Shriram Finance shares tumble 4% despite strong Q4 results: Why Nomura, other brokerages maintain 'Buy' ca",
     "desc": "Shriram Finance shares fell after Q4 results on pressure in the MSME segment and cautious near-term management commentary.",
     "url": "https://news.google.com/rss/articles/CBMiiAJBVV95cUxPeVYtLTRiNFFZUEpzWG9kNmtXSDEzYk94a0E2X3dadjZMOFVoX3k4U1JUXzFaaFBWRHdxa1J2TVZxcVJUVmJ0TWZtSnZyOExmRW16ZE9BNzRFblhlc2FwR1FHM0V3cUlUUHpCRFM3eWxwUS03dXBRa000SzkzU1NJZDhGbjhMNHNlTnJuRXpmblhuR2Q2bW5TVW0wZmlQSEJNbFg0QlNTX3NMUjVjU09raUtvTHZzd3VyUXhnUTVpdV8wOWVQaFU0TzJDRk9weUdPdFJwSmdYb2d3eEJkc0lTWnk5MTJiMnF5OUVCeWUxNFVUVkZjdlhwY0Y4TnRCcEtSWnBsREpCb1bSAY4CQVVfeXFMTXBZenUyUkFDT2lRaTVYOTdMYTlHNGt4NUZTaTlfU2R3QWp6Q1dfVUhqUlBHSG5BRERubVNKZUVrNFRiaC1uRlZ2c19GQlhtWXJRUEcyeGhiM2JBSk1ZdFlvVTZjaWdiMzI4VEEtVGVUaEs3bUhrdVdFZWgyYzRRSk1MdUhFTFdsVVZyVm1TWUg3anNRQXJPc0tpc1FhZHNxejBtTHFrTzVfQXVPcWpFUEdrNUhibFpDZGQxM1RocjliX1BkZ2JlOXNxVkthQUxCNll1bVZYeXR4TlhtdjJyaV9lcVlicHhEZWY3WWZSbndWWFU0RGE5TUtobHZiT0NaODU1dk5ueUhva0t6RHBn?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "primary",
     "dir": "neg",
     "time": "2mo ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 1.1,
     "stg": 1.0,
     "dec": 0.69,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → Shriram Finance",
      "Classified: Risk · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SHRIRAMFIN-1006"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "shriram-7",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "MUFG's $4.4 billion investment in Shriram Finance wins CCI approval",
     "desc": "The Competition Commission of India approved MUFG Bank's proposed acquisition of a 20% stake in Shriram Finance.",
     "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPYXMzSm5Ed0E3UDZzaUNxUm5vei0zaEtrMlhQNDhRYnVnU1lJcWpTZFJQOUQ1OEd4TVNlbkE0SXhLNy10amxfN3RaclB6ZGF6OFNmSGh5cldRS1gtM0F1TThTTW1RVzRhT3VVaUNXQUEyekljMGJtX0hfSWVIUDdVaEFiWTQ4UkpXNU12Q1BCM190NkVJUW1hMGZjNkVpSkhyX2dSbGZVd2h2TWfSAbABQVVfeXFMUHlTbm90U0RnNDRPM05ad1Y4SDc4bUd2SlRicXhOV2J3M3NFcUNkMG9DeXlyVkRxaC1Xd1RmWU16TVQ3THRNNUtUQjBIMUpfZnNncTVPemwzSFJUTm9fakRjVEVTS3I2cFE4ZjFWX2dwODZiT1I2OGxHdm5VazZuUnU1UTdab0w2Tkl5ZUlLUEpvM0M0OUtWS1lMVU90NmYwVFdURVBUVGw1aXR0ODZ0ekw?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "primary",
     "dir": "pos",
     "time": "3mo ago",
     "sev": 0.6,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.33,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Shriram Finance",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SHRIRAMFIN-1007"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "shriram-8",
     "index": "momentum",
     "pillar": "Financial",
     "title": "CRISIL upgrades Shriram Finance to AAA, Sammaan Capital to AA+ rating",
     "desc": "CRISIL upgraded Shriram Finance's long-term credit rating to AAA after the MUFG investment.",
     "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQZXNjR1o2YU5uRU41NldKZG1iczctdTJzcmJMaWFpY2FBbnZ5al9VZnhPRXk5dW43dzY0UmV1anBEdUFRTHcxYmlJLS1ETE10X3dtLXpmTVR5RDlsTFJJbFpHTi1VdU12ZWEzNEQ0dThHanRTQUNVeUJHakl2SnB3VVo1TmhjNEltbFZiTjhKR09fcjB3VlRTdm0zU3RPRkowdHlFTUJJQ3JnbXkwTktwdDRwR21mQll5akxBUVdCRWhVQ1NCSkpLWWV6RVRmd0Nqa3fSAdcBQVVfeXFMTmM0UzBkOU12c1JqR3gteXR6OTUzNlM0SzJyR1FoRDlMZ0NFV29tRmdIc0RDQ2h5cEtwRzhadEYzamExdllCV0FoZ3hCcV9keTN2UFloakk4NFNFZkhxdGtZbzl3TlRfVUoyUzR0T05ZbGV1OEd2SW94ejZTOVBpLTRSZ2p5TDVPOTBRS1pZaGZsVzQybHptR2JwZFRqMk9GaEhXSHJ0LUUwX292UDJsQkRaWjBLdlZIcUVzWllhN3FzcU1vTmtNRTdiX25zYlM1cVZJdzBvYW8?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "primary",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.5,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.63,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → Shriram Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SHRIRAMFIN-1008"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "shriram-9",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Fitch Upgrades Shriram Finance's Rating To BBB-",
     "desc": "Fitch upgraded Shriram Finance's long-term foreign-currency rating to BBB-.",
     "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOdWpyX0VrazJNbXZ1OTFpdVJQQ296LWxQaEszczhIakNmVkpSRU14Y21BOVhvX0c4ZGZyVWlIWFN4eXptQkkwQUxjZDZxZ2dQZ2k5YXNBeXpzbEVhakI5MGJIdUk4ZTAtR2dpdjN4Z0ktc0FjRkFuRC1QSWhteWxzZjVPUGJTZWRYY0hIUXFWOGJZNmPSAZsBQVVfeXFMTUcyNWR2bkprNDFEU05ILWI3c0NpQkR3Q0FxSzBWcTVicUs4dEtCYXY1NXVpcnJfVnFwaDVSQ2Z4QVE3ZUt4dU9wZk9pNXJvSjlHd0V6Qy0ydlRzYUhpT1ZLekxuRWdELW42YmZMTWJkeHFCM2RxbDU3ZThtY1c0ODl6MnZKYzIwUzlVdkY2UG53MzNTUU5RUi12RUE?oc=5",
     "domain": "ndtvprofit.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "primary",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.45,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.64,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → Shriram Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SHRIRAMFIN-1009"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "shriram-10",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Shriram Finance Shares Target Price Raised By Motilal Oswal Post Q3 Results — Check Details",
     "desc": "Motilal Oswal raised its target price on Shriram Finance after Q3 results.",
     "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOMGZjM2lMdXRPUDlITFVQUzFRTGlkVC01S05xRGsxUnhPNXdDMXJxc0MtNWgtV1lMOGk1STBCWWswcFgzdnpvRDE2WkpSbnhSdjc3WWR6RmhORU4yejZzVjRvUWlzbXUyME55bkpraVRzNXdlYXk2VC1XTllGay01Y2l5YnRYci1BNVJWcEJfeHpUS3hoM0VuN29nZDZXaGlEYUQ3TUF2YmxCUS1GdV9zSDhiMkg3dTlRenpxd3pUNmRZd1BHS01MZWV5cXFqZw?oc=5",
     "domain": "ndtvprofit.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "primary",
     "dir": "pos",
     "time": "3w ago",
     "sev": 0.3,
     "corr": 1.0,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.86,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Shriram Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SHRIRAMFIN-1010"
      },
      {
       "time": "3w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "shriram-11",
     "index": "sentiment",
     "pillar": "Forward signal",
     "title": "Sensex rejig: Trent likely to be replaced in next reshuffle — These two stocks are top contenders",
     "desc": "Shriram Finance was named a top contender for inclusion in the Sensex in the upcoming index reshuffle.",
     "url": "https://news.google.com/rss/articles/CBMi9wFBVV95cUxOTE8xU0Y1Ql9rNTdDZHNvaUdFWm5oTktFeHkyV294ME8wTGZFSW1TR2k0Wi0zYVVmNE8xOHNyZkZVYU45V2tESWswdUxqbkFXXzZCdjNfWGJFejQ3Nl9tXzZvblpwanY3cnh3QXhIbTdMa3FIaHhvRWRZa2dzTW1FQzhFMTBEaHZCcS1pdDNjMC1JZC10ZDJ0Nkd5cDZUT21sLU92VU1jS3NXOW9wVkcyTDNMRHpLekV3WkFLT3l1Zmw0TmlUdU9RSGFmQ0JTa3Q2UVdYd0ZsQ0FudG8tbzBua25qdGZjbEpmLUhDSG5COXlYZEtlU0ZZ0gH8AUFVX3lxTE9hSU0xcHJEOUl5T3FDcGJyQ01KT0s1a3JCN0lFRjBuZGZRQzZXQk9XS01EQlExQkg4dzNPNHJTb3J4bUlJOVpVcUJHcUhvMzhMUUJTcEpURlhORC1RRTl2SU1IYnRRSmJETVRCeEowWG5PSTNNVElBTHFTZ0dqbTZwQ3Z5N0pFcHNVSERhYkFSaUI4ZVA4Rk9tT2FaMmNPSVdYZ0dpamVRb3JhWTU5bkFENlNkU3ZDMTROdEdkbDNRV1dxNFhBcERXRkQ2VzV2eTNNaUZfajMyamV1elNXQ21xMTZTR0xUb2IwSVhzeVpWMFFxY0t2azRIdDZDLQ?oc=5",
     "domain": "livemint.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "secondary",
     "dir": "pos",
     "time": "1d ago",
     "sev": 0.25,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.98,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Shriram Finance",
      "Classified: Sentiment · Forward signal",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SHRIRAMFIN-1011"
      },
      {
       "time": "1d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 475
  },
  "ltfinance": {
   "name": "L&T Finance",
   "ticker": "LTF",
   "sector": "NBFC",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 0,
    "risk": 9,
    "esg": 13,
    "momentum": 45,
    "catalyst": 7,
    "sentiment": 3
   },
   "trend": -3,
   "quarantined": 14,
   "narrative": "L&T Finance: L&T Finance's Q4 net profit surged 27% on higher NII growth and the company declared a dividend — lifting the opportunity side. L&T Finance's consolidated March 2026 net sales rose 18.6% YoY to Rs 4,771 crore — lifting the opportunity side. 14 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    61,
    61,
    64,
    64,
    64,
    64,
    66,
    65,
    64,
    64,
    64,
    62
   ],
   "indexHistory": {
    "controversy": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "risk": [
     12,
     12,
     11,
     11,
     11,
     11,
     10,
     10,
     10,
     9,
     9,
     9
    ],
    "esg": [
     15,
     14,
     14,
     13,
     13,
     12,
     12,
     11,
     11,
     10,
     10,
     13
    ],
    "momentum": [
     44,
     43,
     54,
     53,
     52,
     51,
     52,
     51,
     49,
     48,
     47,
     45
    ],
    "catalyst": [
     5,
     5,
     5,
     4,
     4,
     4,
     11,
     10,
     9,
     9,
     8,
     7
    ],
    "sentiment": [
     7,
     6,
     6,
     5,
     7,
     6,
     6,
     5,
     4,
     4,
     3,
     3
    ]
   },
   "articleCount": 99,
   "events": [
    {
     "id": "ltfinance-0",
     "index": "momentum",
     "pillar": "Financial",
     "title": "L&T Finance Q4 Results | Net profit surges 27% on higher NII growth, declares dividend",
     "desc": "L&T Finance's Q4 net profit surged 27% on higher NII growth and the company declared a dividend.",
     "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxPWUpBamlOQlI3MkpFSHIyenVfd1ZPTkItN2NwT0ttV2FEWGV2cGN5VXN0VnhfLXlrTy1qaTNWZll1M2Q2YTQ2NzZBc1cxWGgzdUhYUTU3SFhsNFo1cEZKTkRfaHZ3VUtCNEVJcl9VdVhBenVDWTRVY3lzZmNzT3NXTDQtcVh3cEFmdm1iR0dvYnZMb3FaeFBoeEotdXpWV2J5SlRjZDFvTHNuTFhWa1pYNi1pSXd2OERodWxydmwzX00zcjY5QXlJNnVxYmhHSll2cDFGSWhWODM2UTdtUTNBSktJRnDSAeoBQVVfeXFMT3EzcGluLUJnM0lRRnpxaFZacHFELTRWVlZjQ2hvNlIyT2xpWmg2OXhMOEE5aDlUWXA5MmdvWFZVTUNaaHAxYjdZdmFJRnF2U0xmUzRCWEs2amNCQzhkQThhMDZNRHFxdnB0ZW82a0NiUGVBLXZTNVJzaDNUQ0tUbkVmVXlpREZjMlBIMGJyNWg1VWJmQ2pRVkh6SkpJb0txZnNxWTM3VUZkNS1jdTJTNnNxVjJDRjZCZktoR0hxS2ozTnhKdDVvS1J6bEF2NFFaa2JSQ1NBQjFFXzJvSmdZcklOMzVSeFhOb1Rn?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.55,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.69,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → L&T Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-LTF-1000"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "ltfinance-1",
     "index": "momentum",
     "pillar": "Financial",
     "title": "L&T Finance Consolidated March 2026 Net Sales at Rs 4,771.03 crore, up 18.6% Y-o-Y",
     "desc": "L&T Finance's consolidated March 2026 net sales rose 18.6% YoY to Rs 4,771 crore.",
     "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxQLTI2YkxJVjVCUjRreWhQV2R0NWZCSkxPS1J1eE5zUUczZVBVQTZ5dXk2NW0yRTJNek9DZ0JyNVNGZlprUEhaVTBuT2tzNElOUGFvdldPOUUzQm5GeGdwcEtIT0VkblZmX1dXbzFoQm1xeFlHeDBxUFh3ZUNEYnZCVW9rZmhSY2E1TUt2ZjVTUWluTEw4NHVyTjc2UXhqUGdaUDdKS0JLcnduaV9HbU56dkZJZm9RVHBJZnhqQjR4YlZhUVdCMVJQRUxPNTBWNVBnU0ZOMmcyUnhFQmRw0gHiAUFVX3lxTE5NenB0Z2JwOUNpTFAzTlh5WkpqbTBEeUxJVkVxVThJVFBqNkd1RkFnSlFVVERMT1hvYXk5WHMzTkVENUtDQmc5UXJOTWc1SXVzT1lWR1l5RlVtZ3M5blBYWUN2OXpSUE1uNWlzNEpEX3lxd1dPazZlcDBZeWZUNV9NVkV5dWlzN0I5ZzJJZ3RpN2RBcmExWDBULVhDVE5wUkp4cnBjU1NlOUVaN0Rxdi1YRDBOOHgyM1BlUHdKT29GanV1cjY4YW52S0NxYk8wcG8wU1kxNC1kSWFMSFktYlh0VEE?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.5,
     "corr": 1.3,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.72,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → L&T Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-LTF-1001"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "ltfinance-2",
     "index": "risk",
     "pillar": "Concentration",
     "title": "L&T Finance, Utkarsh SFB, Fusion Finance tank up to 11% as Bihar passes MFI Bill 2026. Here’s what’s causi",
     "desc": "L&T Finance shares fell up to 11% along with other microfinance-exposed lenders after Bihar passed its MFI Bill 2026.",
     "url": "https://news.google.com/rss/articles/CBMijAJBVV95cUxOUlZmcHZDUm8ycFA3V1dDeUhrTjRzYnVjWkV2aEpha2E5SFQwMnEyemF6VEp5MHFlTlhQdUdqQlZrWFJHQzhKbXRiLXlmRnExYWpsd1ZfWERfeld4dDNGczc4am0xSEVxQ1lVcGVyWDV3c0pQOXlscUNSY0FTWF9Ebzc4VTdZSkhkN1dBWmFwejIzLWpJbnhtSkZtcTZmQTh2NmxuSUN0TmRRSWx0NFpLVHFUZEhxaGdqTkRncWluTjNuamVhSC0xZnB1T1J0MnVYOS1oS1VoSWtYTF9jblE3NzkxWkVOZk9FNl9CbWxuSGhJS0ZSZFUxS2xGQnRNcnJfdjg4Z1Y2dkg0Ml9K0gGSAkFVX3lxTE9qR1NrazVfeVBFRzBHQ1VGVWNQcjRqQ1RvYlJ1X2VtelR2MTIyLVRxZ1Y4R3huMThPWm1qbmE1VDFuMlhxMW10c19TS1ZtMzdJcXB4dy1sX19UeFJzSUJVTW9zaFRCTUtkcGpNZXI2Y0xkZHVLVkhlWE1tR0pFTGJhVFZMUnlPazBkU3NISVlHQUMydEUtc1o0Q2ZxX2YtSERJOW1YTUpvN2NXamRSNHMwZ0dzRm5hblNNWlZBeS1Rc2s0RDZ0SlhFRTZpel9xdWh4U0trYW1YakNhcG03M0xGTnk1Ui1GYU1mMTk5aWZ2WFZSQ1hsN1hFUFJDOEJTcGVMdlhRVk1WUVpZbTZJZkRSRXc?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "neg",
     "time": "4mo ago",
     "sev": 0.6,
     "corr": 1.15,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.57,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → L&T Finance",
      "Classified: Risk · Concentration",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-LTF-1002"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "ltfinance-3",
     "index": "momentum",
     "pillar": "Financial",
     "title": "L&T Finance Q3 results: Net profit up 18% on improved interest margin, fees",
     "desc": "L&T Finance's Q3 net profit rose 18% on improved net interest margin and fee income.",
     "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxPUkhfbmVaN0ZnQkhvVWZWQS1xWnh0VWFtdFZGcjdiVmpTeklpR0FyOVIzdGt6MzFTTXdMdGd4bGtBcHYtUnNmYTZpcjQ1Uko5cGdfb2FKbEtqNHhfRkdYOGlFTFVVcHZWOVMzOEg3bnhqZE9HQUJrZVF4Uk5WMGtoMmRka2xrbXJqcHJmckJtTWtYcE5vaEkxdzhBczlfdHBiUUJzMTRGQlRMNVBOWjRyNmZ0RHBTR3JYV09FdGdjSGFzQXBzb2pCY29sV2FNd05yMXRGdW5JTFhvcFVlV1A3Q29pOWlOcGdQc0HSAe8BQVVfeXFMUDhIOXk5cHI0WTFZdlk4ZmwzV2w2eFBneURCUUNHWWJ3bjdGMXZyZDhSLXBqeFFKRU9rQi1Zc2EwVDdSd0QyZXQ2TW9DMzRQTm1ackRYd2RETVhlV1NPLUlUcGJGdm5LV3VEZUdwdnZrWTVMNXpJSWFVQjFaZWV6SndhZllhMlB5TUJmamUwS3FiTXdhVW9qM3FfYnBScVBnbGI0WVpvTmYtM0NIeFZsMThlV0dtN0FtRjlyUXlqWjJjYUFSZTRYcVJNTFE0SjBqZ3FUMzVzM0t3eW4tb1Rsa2JQZWlvV3VpbHd1MldVbVU?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "5mo ago",
     "sev": 0.55,
     "corr": 1.3,
     "vel": 1.2,
     "stg": 1.0,
     "dec": 0.4,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → L&T Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-LTF-1003"
      },
      {
       "time": "5mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "ltfinance-4",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "We're building our own cloud, says L&T Finance CEO Sudipta Roy",
     "desc": "L&T Finance CEO Sudipta Roy said the company is building its own private cloud infrastructure.",
     "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQVzhWV296cVJYQU0xMGhlQWkzNnVqQ2RMTmtGZFZPRHE5YUhMLTZOejJHVVdUV2VnWGRTMXNlUGlNcDlFQl9hVGJidm8xa19UcmpRbTR0RGhyZ2ZGdkhZdHI1MHAyOUFiVWRpQlpsWXN1dVprM1hkS1ZXZ1BhaXhCMmJsVE51Ri1NaUpFTEdSTHRZVm9UWU1yaE82bzFlOVZYRFdFU2p5eVhaMXFGQk8ydDU4RkJWcm1aMmRaWdIBwgFBVV95cUxNc1d5RG02SERvSDlqMXBXVFlYNXBUQlBjWk40X1RreTVBUS1kdjdYSVc0N01WeFUzT2FlZlh6aWcxQVNnYnlmdkhpbjlIWElNQS16T1l4Z3A0Y3M1S3JoVWVaT05TajdVWnFIbTQ0Xy1FamdHSzhkTVJpZ18tVUxTNlQ3a0ZNTTRsanRYUGFFVEwwMTNfSWdya04zUFFRZjEtbXBRV3REOUtTS21QR3oxd0Y4OG5aRmN3VmNwd3RBb3NGUQ?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "5d ago",
     "sev": 0.3,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.94,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → L&T Finance",
      "Classified: Momentum · Strategic",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-LTF-1004"
      },
      {
       "time": "5d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "ltfinance-5",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "What is Lakshya 2031? How L&T Finance plans to become an AI-led retail lender",
     "desc": "L&T Finance outlined its Lakshya 2031 plan to become an AI-led retail lender.",
     "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxQd3ZWTDc1cnVjWE81VXh5aEMtOXg2Zm9hYnVEd1g2Z1AwUDF0c1kxQWY3OG0tcU1JLUdWd1Fscks5ZEc3WWstZ0VJYW1ZbDRObEVaSVFSN01rUFBVbVJYWVZ0WFVwLVlzWi0wblJLbjZhLXdxdWFBa0phdnFkTy1wNnJrQ0NKeTVKMDg5RlBITGhpVWNGeTJhdE5PcVQ3YjdGc0hVY2p2VEFBNk1zc3BVbUttczRCNUV5NHdFdlpNOEtRUk1XSmI4RzJmZndTd0VucmRWaktrQmRiMGZGV3fSAeMBQVVfeXFMTUFZTWMyN19EMjZvZnVRUldkRm1fdVVQQzJ6cWczWWJScHlFRTJVYm9OdU1XRmVkMlZVeUhnQk9COHRRSXFNNndkdnNmYmRQREpkVzFtZFFUYTJBbVNfLUVjX0lKUmIwVC1EalBqcmtkdUZNWDJ2Z0dfd21YV2xlTTdGVjFqcXlXS0UtVFFueGI1T2c4a244YThCR3BRSHJWaTZKeUF2cWpuMjBFbEdoQmJJWU4zelM1bE9FMi12NFFsX0pkTWxJd3AwVTJnTmQ0b2F0ZDNtRUx4aWpLY3JaZnBPRjQ?oc=5",
     "domain": "businesstoday.in",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.4,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.68,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → L&T Finance",
      "Classified: Momentum · Strategic",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-LTF-1005"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "ltfinance-6",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Buy RBL Bank, L&T Finance shares, stay cautious on Jio Financial, suggests YES Securities",
     "desc": "YES Securities recommended buying L&T Finance shares alongside RBL Bank.",
     "url": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxNWF9QZEI1YXd5bWVqaGJkMy1xVVBHSUtwUDlkTUN2RDhuLVZCV05qRU56ZUE5c1N0a2lRbHY5cmVBSThnZnV2WEdLaDlyZEYteGZvdmNPSGtIR0Q1NUpETmtVNXpkdXJtVlRhUGNLcWZQU1BINWFzSmNIWE5Oc3pqa0RVRVhaaFJiTDdBX19ndWljaHROang2Zk84dHJKR2ZOaXl3X1IxTnczMHFIQ3o3X0JpZ1pUQTI5RDNSWGlWT01RNXZwaFRQYlBKNmcxSE5CVWdtU2dDMHJKRG9VWGRxbkREUGJEMjdI0gHuAUFVX3lxTE1rUDZDTnNmcFhteFQ0empndFhsMEgwQW51MTY3TFR0TEhmb0xLU3hhM0JHb2ctcm5hZy12MWlEYTZ6ZGdKR002N0pwUzRBNUQ3T3BiUjlWdGFMaVZaXzl0eUFsZUtVZjBxYmJzNkVfTVJwRzM2cnl0Z3E4cE41WkxwRVRpdmhrMFM3ZWNCSFE3UHdkU3BIaWIwQTdoVmMxNmdVSi1jTTJuN2NJa0pta29xNmFQY2x4MnROTFFKZmNKcWdwWXNGQTdXX0tRSzRLX0RHbVNNY1hDcmRzOC05eGVCWmRsaTVlMFhWVHE3QkE?oc=5",
     "domain": "businesstoday.in",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.3,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.82,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → L&T Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-LTF-1006"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "ltfinance-7",
     "index": "momentum",
     "pillar": "Commercial",
     "title": "L&T Finance retail disbursements jump 62% YoY to ₹24,080 crore in Q4",
     "desc": "L&T Finance's Q4 retail disbursements jumped 62% YoY to Rs 24,080 crore.",
     "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxNUjhYcXplMmtGQmRFVGdvVVpBNU5xX3MtQ0NWcF9MOUxnUEhYWUYxMnV3VUlWR1U3X0NfWFh3cWN3Umo3QVU4emlrM0NZWmNfdFB6RGdJZmZRbFV4NDVUalRpWFFMQW9Bb3VINEhlcy1VQzRMQ29xeW9aenY4VnlWbkpzM1I1OGN5OWdlRUhnWW9va2cxY1FOVmJUYjVEdk5vMmJ2NmtjMFNHMGl4eEhSNjUzMnN0b0l5dTE0bDhiRE50NDRoQmt4Z1VR0gHPAUFVX3lxTE9ZUHZLa3BNN3VkTlJldmxvaHRQbUpqR2xZUlh6LW1OWVZDNTB0NGRwc3JJYWwxMGo1TElMRU9oS0ZIa29NR3hUT0x6cF84akh2Q0pDejlGWlBBTzB6eXBMZndZZS1uaFowZnJESzEyWWVPZWNRcEM4RzlRcUx6Y29jYjRHcml5bm8wNUg4TmZqNHdPSjktVWNOaWlhTXNzMDc0bG5HNkRkdkRqakF3emQ4bWVZanRlMElob3BzTTNidko4QlRJc1V3SHBjUzRQaw?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.1,
     "stg": 1.0,
     "dec": 0.38,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → L&T Finance",
      "Classified: Momentum · Commercial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-LTF-1007"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "ltfinance-8",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "L&T Finance may raise equity capital by the end of FY27 or early next year, says CEO Sudipta Roy",
     "desc": "L&T Finance CEO Sudipta Roy said the company may raise equity capital by end-FY27 or early the following year.",
     "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxNY2M3alh6MHAya2NJTkl1aHg5bnd5YlBvZkY5bXp4Z2o0TDNzNjhwQjF4R2djQm9yaDdfM2p4TXJsR1R2STM2Zk40amt0b19WOFNlVFY2Qi1hM1ludVJjbkxLRkFFSGo5WTNaNWNqdkctS3kyY2laaGJJVnBzdkpwQS1pNDNmY1pKOVFnYmRKNmRJZ0s5RDJDMm1HeUExTUxSRjJYY2l3czg3MmdySVpYYWgzdUJESDYwb2hNYndZQ2YwQUxyTVp2WnZPa05pUThRd3hRYldUME1QSlZzeGF3ZzE2WDgwbkRWQUHSAe8BQVVfeXFMTW4welFGTEtiZW5MdWwtQnNUM2ZPQXU3YkpNQ1lna3hIQ0RsZjFJMzlCZWd5c3hUVzlRb0FXNG5KSlc4eEhKUVJhMDFjb0JBYUt3T1k2SEViVk5OVjRqakxQU3IzMHR0WllMWEFUUmFhN1pTd1FISzQ3dmxtNmNNUnYwTXh0aDBPS3EwaWNaby1uZmZaV2piNTY1Wmpneko3OVhjLXh1RjRwdmFCMXVJcUJpaTFDVl9jTzc0Y0tZazFZOHdDRXlBQm9DVFRaWE1VTFFiZDVKLTJ1UFN5NjRVcGQxY3RjRDg1a2Y3ZFpNVm8?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "issuer",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.64,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → L&T Finance",
      "Classified: Catalyst · Corporate",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-LTF-1008"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "ltfinance-9",
     "index": "esg",
     "pillar": "Social",
     "title": "How L&T Finance is building socially responsible lending",
     "desc": "L&T Finance was profiled for building socially responsible lending practices.",
     "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQaWVadUtkVklZZUs1M2c0eS04QTBlSXlib0h3dVQ2SVJwVzJKSXBtclRuYWdLQTVpM3I3dEV2d1U5U0RxOEtyek9rTjRjZlh6Y1lRa2dWdmhuSTJjYTNVYjNab0xsa0lPUU1rME92MnVETGQyTGsxNVhwUndWd3A5ZWQtOHVXb3FVTGV5Sk1KeDA1ZHdWRGpHeTVMZ2NFTC1tcEFEcXlkMzBpQ1dYRHlTYjZLcDFDN0dmVEdIS2ZfTXpPWUE5OXfSAcsBQVVfeXFMT1JkcFl4SlUtNEFTNEpfN0hPYmpWRVhMQURzMlZIRFpia2VfR09Ed3FkQ19KQW5ObEVHdHBUYW5CSm5oMk9PUUI4VldfeHFnbzR5bjVBYmtyVWJNOURNb2xQdDdaOGJ4YWtvel9yYVlFR1I2NWUtb1NFM3NjS00yWGdfWTBNZkxtcEVxcW9FemhBVmx3REQ1bWswSFdTbnNOdXU5eFNvZnlQeFo0MS1yc0RXZ2lSdEkxdS1IS1llcXBpUWxYNjItWDFfYjQ?oc=5",
     "domain": "businesstoday.in",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "4d ago",
     "sev": 0.25,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.97,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → L&T Finance",
      "Classified: Esg · Social",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4d ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-LTF-1009"
      },
      {
       "time": "4d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "ltfinance-10",
     "index": "momentum",
     "pillar": "Financial",
     "title": "‘Microfinance revival to drive margins’: Sudipta Roy, MD & CEO of L&T Finance",
     "desc": "L&T Finance MD and CEO Sudipta Roy said a microfinance revival would drive margins.",
     "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPVDNGWEhJSWN0UEZjX0ZLQ2VFcDFZSWlUdnhXSlRVbU05eEx4dG9CTXlQZ01Ba09obDUwdVdsR2RGSzdKTG9kTFhZS3dHdHdVODdwM2p5QjhLZm1TcFEzaE5HMTZvWTVnTDNHalZ6OUNCdHlXdEFUMlVXRGxfQmdSZVBudEZGX1N4VldKb0xwanVXbzZLclFkLTBGZWFPSFV0YktDVmk1NjdtSWpwcndFTTVubTZMTTY1RlNDNmgzUXRZcFFranU1d0w0QlUxUdIB1AFBVV95cUxQbzF6N2p3am45S25FbkEta21UYzBSVm1VUEh0ZGVvNUVYejVlSl9sRTZxUGZiUjlNbWRqSU92dkh2Q1k3d09tajU4cXdteW9hYW0xeC05Q0dFNWlGSC0xTlUybjg0V25QMXR0N2xmaGR0Q2M0QXNPdmhCU3B5OE5seEU2a2ZFbDU5X0thb0FETnVUUUUwX1ZyTUZyVFFzTzlvRk55MmltY2lYREJPbU9GUF9ZdHdpOU1nTml4N3BnMjVlNmctZWYycDNDTkJlamprZG4xYQ?oc=5",
     "domain": "financialexpress.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.35,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.69,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → L&T Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-LTF-1010"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "ltfinance-11",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "ET AI Conclave | L&T Finance’s AI-powered lending tools: Dr. Debarag Banerjee, Chief AI Data Officer",
     "desc": "L&T Finance's Chief AI Data Officer showcased the company's AI-powered lending tools at the ET AI Conclave.",
     "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxOWU5GTVdwWERmUjR2bGk3dFlEMHQ1TUpLaUlHaU5tOTBhTWd5TExpLW1tNUFoX0toSkZlci15TFRZM3IzTTE5T3QwOFlxUDU3NWdmYmhyWjVvcHN2cUZNdDUxWVN4YzN0b1NJTEhBZlNpZkpKNFhEaTU4TDZLczdVM1E1REpsX0UzVjNYZzF2TmhzWHZSVVI3V2pzQVEtYWFPZjdJdTdocmhBX1lSMUlXSk5qM1k5eDdSZGN4UDdCVURla0N3dU8tcnNZMEVtMS03eENKSnJMeUprbVFoZDE4WVBSU0p3Y0NQSmtmZ1Zn0gHzAUFVX3lxTE9KVU5OaHdIalR3dGEyRmROX3B2Y2pmcnhCbjRjbGhiQ0kySC1hZ3QwdU8zWTVVNkV4VFIwenhPQ0JlZ3ZqSWhDRmJHeWwxVUtHUkUwR18tYkdVS0NPWTZPS011Z3NDTG10dkhzdXB6aVRGRGdJb0dkN29peEVSOTJubDZSV0lkNXAxVmkzdU9ISHpERmFJZ1NRT1RsVmtOSnV5cmFuaVlERThFVTM2T3RhRVluSWE3Wno3cGFEOFNMOXdhdnctWXBydEJVcFEtUUF3V2NPd2lJcWRNOGVlRERuelhIUG1oS2J4TXBuRERtYkFUTQ?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.3,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.64,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → L&T Finance",
      "Classified: Momentum · Strategic",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-LTF-1011"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 249
  },
  "smfg": {
   "name": "SMFG India Credit",
   "ticker": "SMFG",
   "sector": "NBFC",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 3,
    "risk": 6,
    "esg": 0,
    "momentum": 26,
    "catalyst": 8,
    "sentiment": 5
   },
   "trend": 4,
   "quarantined": 5,
   "narrative": "SMFG India Credit: SMFG India Credit's standalone net profit rose sharply year-on-year in the March 2026 quarter — lifting the opportunity side. Sumitomo Mitsui Financial Group infused Rs 1,075 crore into SMFG India Credit to fund expansion — lifting the opportunity side. 5 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    52,
    52,
    56,
    56,
    56,
    55,
    55,
    55,
    58,
    58,
    59,
    59
   ],
   "indexHistory": {
    "controversy": [
     5,
     5,
     5,
     4,
     4,
     4,
     4,
     4,
     3,
     3,
     3,
     3
    ],
    "risk": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     6,
     6,
     6
    ],
    "esg": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "momentum": [
     10,
     9,
     8,
     8,
     7,
     7,
     6,
     6,
     16,
     22,
     27,
     26
    ],
    "catalyst": [
     0,
     0,
     16,
     15,
     14,
     13,
     12,
     11,
     11,
     10,
     9,
     9
    ],
    "sentiment": [
     3,
     3,
     6,
     5,
     9,
     7,
     6,
     9,
     8,
     7,
     6,
     5
    ]
   },
   "articleCount": 32,
   "events": [
    {
     "id": "smfg-0",
     "index": "momentum",
     "pillar": "Financial",
     "title": "SMFG India Credit Company standalone net profit rises 2621.00% in the March 2026 quarter",
     "desc": "SMFG India Credit's standalone net profit rose sharply year-on-year in the March 2026 quarter.",
     "url": "https://news.google.com/rss/articles/CBMi_gFBVV95cUxNUlFrLTJlel95ZTRWN0FQM05uUUo3SWJ3aU5yd19mZFpIa1lxX2VMcXBSM2lSczBBbFdOVnIxYzdsUHc1SlBfa1EyTWFuMENUWlJSdzZLWlBIOVdwbGtldHJHS1draWRNYTY1ZlJKRDlaaDJnbC1mdHE3S0JRaTRfaE9OT2Y5RVNFVUR2d1E3dXRSVi1aRzBwazhiLWVqSDRsTkVsQmNSRWNrY1dlTjlIQWNKXzlmNHo0NnY4Nmk0NE5NdlppUWhxWXhxQlI0VHpUY0pIOVNuc0t5SzBHeHBISGFWMlhlV25KbDBLeGREdER1aUFRNW5WOEdKa2w3QdIBgwJBVV95cUxNdXZXeHF1cFRlaF9oS1oteVNvOWFYVFFIMHE0d05LUFpDUC1FejRDUDR5SzBRVU8xRDZ4Y2hMQU9WWDM5cXpPN0hSRXJXLUpkNFBmTGR0d0U4RE1ma0luT2pZN0RYd2s2dXUzZkdxb3dGYkkxRDVvckFkUVBSQnZvWlNQWHJPbHBZQ1oxMTliX1k1d2RKWnczc0lyaWYyd29QR2hUcFpNZ3p6eC1PXzBTeVhYLXJFZ0R5MUh6UGhtd0FTRnRHajBKLTZCcC1nbkNYandtMm5aRUlDcXozb0w1TTBqZldyeDJ1b2FCeHZPZVlzM0JLMDJjbEo4LTRZNGNZWGp3?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1w ago",
     "sev": 0.55,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.93,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → SMFG India Credit",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SMFG-1000"
      },
      {
       "time": "1w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "smfg-1",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Japan's Sumitomo Mitsui Pumps Rs 1,075 Crore Into SMFG India Credit To Fuel Expansion",
     "desc": "Sumitomo Mitsui Financial Group infused Rs 1,075 crore into SMFG India Credit to fund expansion.",
     "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQSkx6cnltem5iUGhrZTJXTnJibGRnRWlkaFJNWmQzUlA1V0VMaEN6blpUUFpYMksyZTV5Q09jY0ZxZTRIclB2U1BzeXVJeTFYeWdZN0N3ZVFQSG1XU1BHdXhKY3kwNmpKdUxxdlZfTHZZVDI3UzczaVYwT0VPdnhKdWR0U0ZLdlBDOE5pRE0zU0pjVWZDeWVHeHV2clhLaTBFUWI3N19fdVNYVlJjLXE2TmN4dFpkbDBkaDlCOUhZZTdlRDdkWVZoMNIB0AFBVV95cUxQdnExYmRsNDJxN2dESjUwaGo3ZF9aVWtQLVVQaWllS1huUGpxRnlTU3F5T21qUjdqaDg1dHVqRm5kNTZMN21faVZVSzB0Y09lUmdsMzFzcUhqTFYxYTZ0OHhtMmh3TEtUb3VtdUpOc3ZpbTdmVWlKdEx0SlloRGtOUGg2eWpwejVsd0VHSFc5anlVZ1lIY2pPbGg0aDYwLVIyY0lFVnFobk9Hb3Uxb2dhUUJCQlJnOGN3Vm9DUXFJQ2ZtbkxXb08tVGczYWlGX1pV?oc=5",
     "domain": "ndtvprofit.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.6,
     "corr": 1.0,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.48,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → SMFG India Credit",
      "Classified: Catalyst · Corporate",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SMFG-1001"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "smfg-2",
     "index": "momentum",
     "pillar": "Financial",
     "title": "SMFG India Credit CEO Ravi Narayanan on 20% AUM growth, 60% secured book target and rural lending opportunit..",
     "desc": "SMFG India Credit's CEO outlined targets of 20% AUM growth and a 60% secured book alongside a rural lending push.",
     "url": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxQWHRsZlVUdGtqRVBVSmxmVU00UEprRGJqOGVrX013cVlOa2pONzhpMTJTaFdNa2I5SVZRMElFZnY2VWE1X1dFNERiUlJwRmFuZnY1aV9ZcXJ0RGtiSS1sY2VENl9xdElJUUswXzkyRDhvZWRVd1I1bExOcUV6dWdzdzY2TlVfeWxFSFgzbExrZDZEQUJydmRKQUg3dTk1dEhwT2pCRzUxRWxvUXZHTkVBVnM2amlHM0Z1YjVFYi1aNWhvTExZcW81S3MxQmZZOTI3SXE0cVpnMWlYM0lBTWt4NmZycjFYcWtVNzRud0ZOSXhZeVFUTTBqb2l5SdIBgAJBVV95cUxNTFVjQ3dIZmxrV2ZYR2U0ZlFCaUEybW90N2hyeTZGU05CbHRldzdETl9ibThiaXo3a0ZYUFFjMjgwQmxPUlJHYVl3SHotM3VDQmpLUmx4X1QxenEyYkphR0I5eV9RUVhFYzhLdFJyLXRhVncyR2ZzbmpaRUNRbHhxaEthUDdETVljU3cxemJ6NFl3YU5HQlZTZ0ZIMHk3Mlc3WUdKMm13bk56N0NWVlE4VlpYcUVReXpiWEc0N2xuSjdzQW5jRE5xd0YwM0tkYkJKaWFCdU9xdUtUUFRyTHdMRlNoZldJZzd2dG9sSkVDejNGdkVrcXVGeEhsckxtdzYw?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "2w ago",
     "sev": 0.45,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.92,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → SMFG India Credit",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SMFG-1002"
      },
      {
       "time": "2w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "smfg-3",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "SMFG India Credit’s supply chain finance rollout expected by Q3 FY27: CEO Ravi Narayanan",
     "desc": "SMFG India Credit CEO Ravi Narayanan said a supply chain finance product rollout is expected by Q3 FY27.",
     "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOSFJQY1hUTXd1dTFkYVFaRURhSlpyei1OZlRMV2FpSFlnWWVRRUJia3Y0ajFRbDJmVkFBTFJ3TjdSMTdFZnZyT2RKZW03LWlLWmpnZ19iM2RkbkU1MHVRTHFGTFoxUkd6SEs5ZkhUWUJuSU9sVEJoc00xcnlsYjBFaFZjSi1yWjJLSjc5SWVZQ2Voa25XaWZSanJsNWVXX2syalRndElfaEloNUQwLVpGNU82SG5McVkwWkhJcWVySlY3d9IBxwFBVV95cUxPNmVZMnFLV1lpQ2pRbldMNEpXUUJGajFnUEtOa2tzRWVFdVRQMU1EdlhjaXp4bFdhUEFaMHpyd0FNVk1UVmFlNXB6alZxS045Q3BPcDhLeVE1M3gtamVPNU93bTVVYUhiSWVHMUlfM215ZmN4bmRDV0JzTWtKcnduM3J6NzN2SnU5S01fMTBEd0FfSkMxM0tSdlFJQ3UzdUE5VjBaQmx2UlhyUFNreVItdU1pd0kwc1FjVnl0bkNpRHhxSjJQMGZv?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "3w ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.75,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → SMFG India Credit",
      "Classified: Momentum · Strategic",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SMFG-1003"
      },
      {
       "time": "3w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "smfg-4",
     "index": "risk",
     "pillar": "Financial",
     "title": "SMFG India Credit sees no immediate fallout from West Asia conflict, keeps close watch on loan book",
     "desc": "SMFG India Credit said it sees no immediate fallout from the West Asia conflict but is closely monitoring its loan book.",
     "url": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxPWS1ndDNwRV9ybjMtVm8wMGJtQ3VOSFVtMC1QSS1qTG9LYnhTM0dSdjBkNkE0b3NKUkZUdG1MOTRta3RNY1dTRE9SaFBWc1hkOXRlSGFBWDF4M09jRjBxaEpxV3RKS2I1b0RPZ2ZPS1BmYkR2UTBPa0tiWklMX04telBzQUctNTR4RFQ1WWd5cE9nYlRzM1ZNZG1YQlZPWXR1RVpJQ013bzlnR1RlNGh6YUk3MFRPRjVpb0hHWkJvSWwwTmFUUk9nZEhlRlZwV1I5Q2lOVkx5WENHZjhsc1RxRXdObTI3MFQ5REdHb25uNndtemd3ZElRVURB0gH_AUFVX3lxTFB3UHJGZDlNYkNsVUhxa3pSWjJKSmREb1Z3QWY4eklnQ2FUWWVOQ2N2a196bFpqMzh3ZWlZclF5WC1kZDN1QVB5Y2U1dEw2OG1UNVg2TFEtRVdMckNnVVRyWUZ2UTkzNFhUODU1OEd0Yl9sQVcyVWxkMUptTU5ENXEtTkt5WXBlMTRqZnZoTGRmNlNiVXpwZ2dUUERNUi02X2thNW9sLW53bmtxZTBvaE40Y25jQjdkVFpjb1ptb1pncS0tbEsyamgwMmRjRkdidUdNQkxSendIVUNOZEhPX1BIQk9FR25RbmQzcTNnT2R3X2VLZUVsRjNCM1pwQktiOA?oc=5",
     "domain": "businesstoday.in",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "2w ago",
     "sev": 0.3,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.9,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → SMFG India Credit",
      "Classified: Risk · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SMFG-1004"
      },
      {
       "time": "2w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "smfg-5",
     "index": "momentum",
     "pillar": "Commercial",
     "title": "Komatsu and SMFG India Credit Co. Ltd. Launch Finance Scheme to Empower First-Time Machine Buyers and Small Fl",
     "desc": "Komatsu and SMFG India Credit launched a financing scheme for first-time machine buyers and small fleet owners.",
     "url": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxPQnZWWFhMNzQ4QUc1dkZtNDVrQWQwU3AwZVNfWTdYNU1WZXNmUG01QWtXc0V0OEJsNjFXTUdCdUtOVmw3cTluZk9lTXBTWnJqT3RaVDN4eFdjZzNHSjBacjB6UzdJUTBDdFBUX2JoMnBabmdhYldRWGZUZmRVNWxzSVJiQ2Q5ZmhtN0NqZkJhSU92SXQ4TjNXRjl6Q1ZpMEZweGE5UkRsSjZqSG5DMlFwU0VPekVvU1piNktaZ0VoNl9NamdKSzJ1bzNhRU9NaXVIM0FZdFVVcWVtdnZrV3RKck1FM3huRWs1d1BNS3Q3cExrQXZuUWNIYTNB0gH_AUFVX3lxTE5YM1hBNFl6VWhidVk1YjJRVjBicWNNTHdGeVY5d0dPZTFEcE42Z3lyZ3k3bmJmeUZiZ3NWUVQ1RjM5eHBPN0g2OXdTWjRWeTF1a2FaNmpWa3ozX0hEakk3dUR0M2FuMzJVNkVacG03aWktM2lyQlNrLVdoVVlyY0JoUDlRa0FYYkM3dmRnb0x6NF8tOTBLdzJfQjVPa1pzM2o1WGQ0d0NpOWdaNnJKNkVwTWU2aUJhZWVTaVppZzd5enhVcTVzN2RtNXNoQkthcXdiaWQyTGpGQ3JyVEFVY2o2T0FmOWZQeEh6bUJTYWgxRjAxb0dOeG9hVjJoTVZnTQ?oc=5",
     "domain": "theprint.in",
     "source": "General & regional press",
     "sourceSector": "NBFC",
     "direction": "partner",
     "dir": "pos",
     "time": "3w ago",
     "sev": 0.35,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.76,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → SMFG India Credit",
      "Classified: Momentum · Commercial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SMFG-1005"
      },
      {
       "time": "3w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "smfg-6",
     "index": "momentum",
     "pillar": "Commercial",
     "title": "SMFG India Credit partners with Google Pay to offer collateral-free personal loans",
     "desc": "SMFG India Credit partnered with Google Pay to distribute collateral-free personal loans through the app.",
     "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxON3RUakdISTVZZWljZVZ2NHZ6dmtYOVRBMXZ6RldBQ3BySVBTLS16SHRSWm5aT1g1ZFVLaWg4MzVMV0diVEYzNU5PLW1rdk9zVGhZX2JpcVhpY00xZG1ULW5DT2dtSi05Qmp4VEtXRTRzQmN2dHdGcXRWWjY1U1VPN1RneGtlNzdMQW5hYW1JS1ZJZGZFMlpWVFV3bFE3di1iQVJDbjdKNTVFYTN1WmxFbEpnSWlBZVcwUklqTk5tcVlWTXA3R2w4THV0dFMtUWU1Zi1Eekdoa0tUbUnSAeABQVVfeXFMT2J2VEItdUd2T2ttZkd6SmRENmdMbU5BQUlZd0l6OTBZX3d4Q0lXc2tTTzJmbHNkOGZEcmFYT2xra0VZMkpjeWtLaGhUUHljRndPNlFURV94U04yS3NYMV9OUklqeThMLUFYZngtOGhxWXV6Rk5VTjZsbzFobVNsRXVqc3p1XzY4YlppYllpbWo1TlVkTTlHOTUtQy1NLUZteWFXdGxvamg0eld5aU5Ob05lUTZyT3M2cGtPVVRPbS1wU04zU2JWZzFaYVp3dDktNmNyT1poOFl2M2FsVXhCRFU?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "5mo ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.18,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → SMFG India Credit",
      "Classified: Momentum · Commercial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SMFG-1006"
      },
      {
       "time": "5mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "smfg-7",
     "index": "controversy",
     "pillar": "Key-person risk",
     "title": "Dr. A Shiju Rawther joins CareEdge Ratings as Chief Information & Technology Officer",
     "desc": "Technology leader Shiju Rawther, previously with SMFG India Credit, joined CareEdge Ratings as Chief Information and Technology Officer.",
     "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOWG5Wckw0RnZOOUFXVnI0Z3R1T2hCRS1rUG51QjlWR0lnZmV2RC1LR1VEM1djaGxzc2FZZWxoNFJEQ3JxVkxKWHhZU2I2LXBiQUVtN21fNDlYX1RNM2VPR0VNY0FUSDVSalFvUE9Dc2IzU3dVb1dTVGh0cmlQTGVPd0Y0RkwwZzQ4QXlpZkFoLUZRMnczWjNuNHQwQjhnWmdobC1JMVhJYklWQ0lxdVdFeUs0LVpUaU5fcFB6M3p0ZGg5aGVwVy1XR3VSX2RhZ2UybG41aC1iUVdKVW5Zdlo5WmtVM3LSAeoBQVVfeXFMTnBaaWNSaFVjbkhNRGJTWnN3VklPcXltRFV4Szk5NmUyY3J0TlZ4LWx2dXRsblladkg3eG92MHVQUTk4dHZ6Z1FnVmNDeW1Xc0VjOEJCVDlHMVNvLTZXVWNPR0ZvNnBkZldhSnJHZDNHMk9zaWtJZWU1N0ZnUW5EMV9RczZfV1NUc2ppV0Q5RzB6a2c2RmpWei1iZUhyOUxNV1VlZnFaY3JrVEhveGRUWVhZYmlPcVZBNGdGaE1xcGhLUXVwQ1hvUkk2V1VvU3hvekZic3dZVktRQUZDR0phSnZ4bU1fQzVmcGN3?oc=5",
     "domain": "cio.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "mention",
     "dir": "neg",
     "time": "2mo ago",
     "sev": 0.25,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.53,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → SMFG India Credit",
      "Classified: Controversy · Key-person risk",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SMFG-1007"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "smfg-8",
     "index": "sentiment",
     "pillar": "Forward signal",
     "title": "‘India is one of the most important countries for SMBC Group’ Q&A with Hiroyuki Mesaki, CEO, SMBC India",
     "desc": "SMBC India CEO Hiroyuki Mesaki called India one of the group's most important markets, signalling continued parent commitment.",
     "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxPRTJXbzlrS055dWZrX3lMWkNyLVdqSklTODBSS3pMMlJ0YUFTQzJLdFpqclVuQUYwb3ZfY0Fwem1kN0RWYXJfeGdwekI4bGViaHFSRkVHMFlkWDdGcHEwTE1UZmVCRzludkxSY1NfOHUtaXgxaHAzWGltYUs1cUJTTU1HMm5URmJSX2tSaHZnVzRUeWhWS25wUjFjbFZTMGV2Sng4RDFFbWlaTkYtekdlS0I0ZW1TTDA4VmJGQ1B3WkJsa1VnUzQyZ3hzeHpobHlHaVRXTzdZLVF6Y1hzUnNVMHl2cnJkRnJIMTA0NDAwUdIB9gFBVV95cUxPNjVCNnNmYUtYbDFiaDg1U3NId09vRVhjb2V6S1BReVh2dU1EMXBUM1NSekkxdEo2cWlLUzdIZ1I4VS1oZkdYbVRpYURWckJfN1FhWk9iWndhaUV2d0xQWGhzMm1NY09aVVdaUE1ya3VMOVN6a3d6eVRWd1dWV2VySnpFUUZYRG5oT19KeHZZel84VGpkRkZvbUlodGtmZkZibVhIMC1ydnplMWdvaTJqbW1WbFB2dGFLbDBLdXFSLWNwb0VZQWQ5MC1ycFlrcmZsS2ZJTy02VDF2NV91VE5IdXFaM3R5M2xUeWdwRXFZQVdnNzFkX0E?oc=5",
     "domain": "financialexpress.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "mention",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.2,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.46,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → SMFG India Credit",
      "Classified: Sentiment · Forward signal",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SMFG-1008"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "smfg-9",
     "index": "sentiment",
     "pillar": "Sectoral",
     "title": "Indian banking sector faces 'structural profitability squeeze' amid rising costs and credit risks: McKinsey",
     "desc": "McKinsey flagged a structural profitability squeeze for Indian banking amid rising costs and credit risks.",
     "url": "https://news.google.com/rss/articles/CBMi_gFBVV95cUxQbTRzTWNnSEt1WDFKZ2dnbmNsS0ZuZ1V0X2dTVFFXTnhsU2FIMWVjdTBTWXpnT0prTFZrd0dwcmpOTk8zcFNNNVdQRGFBUzczYmxiQ2gzYTBxYng5cThXRUxFYWdfTTRQSy11LUp3czNyeXF6b01NQ00tYXVyQ09FcERPRnZfSDg5STdEd0JTVDNtcTRDcHA1N3hFd21IY3NEOWZvZmhucG5EM1JfaDFqQ2NGQTlRcjBoS1dKTjhmclNodFVnQXRrdlo4YjNvWFdqTW1EelVGSUV5NWRzeEQ1MDVYT05aZXpsbnFSWDVhXy1FWU5HLXlXbFlucHJiQdIBgwJBVV95cUxQSDNjc3dFQUh5VjZrMGZUckJqMExIQ2pSa0VHSjhnUWlhUzY5QjNTVzdRRDdWMVJZN3hBc1FPTmJUT21WV2VNZ3JURmEwNXNjcW1sanZaV3pBWFZ2MjNzY0RtM2dBMEpBVlZ0eDNfOS15eEZVZ0hwdWk0ekZSc1NNUXpPMFpQZ3EwSUVpZHpOdDVTaDZBZ240QjFDTDloakJ0eXFOblJFZlI3SVFEbzJETTN0ME1KTVVDTmVITVVBcUlqS3ZlbzktTV92Ry0zaHMzWUZRSUNEOFNDd3JXc3I4NElKaDJJTDhBUlVWQ21QNHZXOUpURWFDQmZJWnFKYTdCS2ZB?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "mention",
     "dir": "neg",
     "time": "1mo ago",
     "sev": 0.25,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.28,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → SMFG India Credit",
      "Classified: Sentiment · Sectoral",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SMFG-1009"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "smfg-10",
     "index": "esg",
     "pillar": "Social",
     "title": "SMFG India Credit Impacts 1.55 Lakh via PVD",
     "desc": "SMFG India Credit reported reaching about 1.55 lakh beneficiaries through its Pashu Vikas Day CSR programme.",
     "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOYWJ6dW1kRlRIQnF5Z19lUS11OFlDemtrc1lLQnFRVklVZFRqcno2Y3c5V3h0YVhNYk5WQktSTGF1djFmeUZIaURqc0pEWU96SlZHZkpjV3NFTXYyVHlGSnpiWlZBZUM5WWMzVEE5UHlKZC12cXFvczRYNlVobzlOcDV5cGJVZEJIYm9KWVB1ZEpHY3BjQ19sODV3RG1wTTB2ZElwM3U2el9uZHE1ZlF4eDVrVGs?oc=5",
     "domain": "thecsruniverse.com",
     "source": "Aggregators & other",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "4mo ago",
     "sev": 0.35,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.38,
     "stage": null,
     "quarantined": true,
     "corroboration": [
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → SMFG India Credit",
      "Classified: Esg · Social",
      "Corroborated across 1 source class(es)",
      "Quarantined (trust cell below 0.5)"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SMFG-1010"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Quarantined (low trust)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "smfg-11",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "SMFG India Home Finance Lays Out Five-Year Plan To Double AUM",
     "desc": "SMFG India Home Finance laid out a five-year plan to double its assets under management.",
     "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNOG5kT1BZUVNaQ3hQNUNGeFl1R2lHYWNkN3laYzc1Q2tPb0hvWnhfN1luWmw4Z19wRXU2cy1jMjU1X016MmticEJ4Ylh1SWotMGtLY2poSk5GVWJfcUNLV2s3SC1pdjJSV1VzeUlNdWoyQXBwclA2Z00yWExSMlJqc2ZLRUpmVEEwUDRXSWphdlk0QjNlMzRVNVJrY1M4MXZCaGNQWNIBqgFBVV95cUxQTl8xVHBfdzk2azFRN1ZNdjBCNm9FdGZpUlBHMDlma1ZGQjdiWVVXWWFQOExSSUViSnc0bFFtOE9ZOURkTmlrMGpJeXNraVVzdjZCSHB2am9XTFppUnpxU1ZENzd3VXVFT1otY24xMmdRNnVUbGVkTThNM05NaWJxZWkzeHJ5NnF2cWZhU3dyRENGRjBOZVIyUjl0Q2xEVEJwTEgtQzZxWHNzUQ?oc=5",
     "domain": "freepressjournal.in",
     "source": "General & regional press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "4mo ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.2,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → SMFG India Credit",
      "Classified: Momentum · Strategic",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-SMFG-1011"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 76
  },
  "piramal": {
   "name": "Piramal Finance",
   "ticker": "PEL",
   "sector": "NBFC",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 6,
    "risk": 8,
    "esg": 0,
    "momentum": 41,
    "catalyst": 17,
    "sentiment": 9
   },
   "trend": -2,
   "quarantined": 12,
   "narrative": "Piramal Finance: Piramal Finance reported a sharp jump in Q4 FY26 net profit aided by exceptional gains, with FY26 PAT at Rs 1,506 crore, AUM crossing Rs 1 lakh crore and a Rs 11 dividend declared — lifting the opportunity side. Piramal Finance shares rallied around 11-12% after the strong Q4 FY26 results, with brokerages turning constructive on the stock — lifting the opportunity side. 12 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    61,
    60,
    63,
    67,
    66,
    66,
    67,
    67,
    66,
    66,
    66,
    65
   ],
   "indexHistory": {
    "controversy": [
     9,
     9,
     9,
     8,
     8,
     7,
     7,
     7,
     6,
     6,
     6,
     6
    ],
    "risk": [
     11,
     11,
     11,
     10,
     10,
     10,
     9,
     9,
     9,
     8,
     8,
     8
    ],
    "esg": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "momentum": [
     28,
     27,
     35,
     45,
     44,
     43,
     46,
     46,
     44,
     43,
     42,
     41
    ],
    "catalyst": [
     29,
     28,
     28,
     27,
     26,
     24,
     23,
     22,
     21,
     19,
     18,
     17
    ],
    "sentiment": [
     4,
     3,
     3,
     6,
     5,
     7,
     6,
     5,
     4,
     6,
     10,
     9
    ]
   },
   "articleCount": 111,
   "events": [
    {
     "id": "piramal-0",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Piramal Finance reports surge in quarterly profit amid strong growth, one-off gains",
     "desc": "Piramal Finance reported a sharp jump in Q4 FY26 net profit aided by exceptional gains, with FY26 PAT at Rs 1,506 crore, AUM crossing Rs 1 lakh crore and a Rs 11 dividend declared.",
     "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNMC1Sbi1URlItblJoeUViRzl4WGRWaWN0MFZwTTRJb1hvY3ZrWkRUeEFlWmF1ckJtNThhY1lrQVZXY1F1TXFrTF93SGNCTWx1NXFFbDI2Mk0zeGVoRWdLQ01sMWFlNTJFUVlJSE9FdGplS2gtdWZxbk4zU0RvR1IxMmhwc0pjMmJfQ05QZzNfMmQ5QURyUzIyd0w2cXFWeWdfNzQ1U3h6azhOWjNPQktSWVZxbWZvSmZKZElTbUNUVXppWVVkVFpuMExISktfd3Jo0gHXAUFVX3lxTE4yTERhbW5WVVlHcVdreVY5SVZYSzhGUGoxdVdUWnl4M2pQcXU4SDNaZDBUVnVEOFNULTVUd0wwakFud2p0UUV3WmhxdjFXUjdNS2k5eW92Wi1kdFdkREo5Qk4za1dzMHprblpkSU40N28weTJQU0NFRWdJaEdIVHBWZVNIT1czeHV5dzR3d3VmTHRFMGFaeWY3OG1xenhyREZBT25Sc0NDd2VMRVZRZ0Y1bU9QWXRqY2c0ZDA5aHJpTEhnZnB3d0k1NVlidUJFUVFPUWF6SzVF?oc=5",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.7,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Piramal Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PEL-1000"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "piramal-1",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Piramal Finance stock jumps 12% after Q4 PAT surges, brokerages cautiously bullish",
     "desc": "Piramal Finance shares rallied around 11-12% after the strong Q4 FY26 results, with brokerages turning constructive on the stock.",
     "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPMDdySW9jTU5SOXFNamtuSF8xWU92ZVV2Sk1DZ2plUnR2TVFuZjl3QmFBSi1Ca1ZRUjZfdEM4Z2VvNGw0elpSeWFINU1UNnA1VVBhcmgtVjM0d0U3dXRSYjV1RzNmVUN4VU1ORHdlMUxtb1NNX0FGS1V2SEtIRjdUQllqTlB1SmRjMVhsZjRJbUlRejEwNFNYenVxN3BxOUVyTTVVam9Tanp2YXFFOTBhNFpQVTRfUjhERHNqbFdQOThfbGRyeVFvUUJFTVpOVk1pWG5pa05YeWNvWEdF0gHiAUFVX3lxTE9LUjlFWEQ2MjVXX1gzX2Z2czllMW0xUjRPbjl3bERZSWctandiOExoclEwLVdhX2wwa0pUcGpxQVdicFFXMEZSbFBZT3lPRk5MVW5rc2lZYmVoaEo0Wld2c1U4aW1JOUZfYWhVNC1PZ3IydXVZQlJoWVdHZ0l0NU9SM2NLbi1wbHpRNG9HY242bDVmSnRPeTBOSHlFSXNIZHdsUUJoeUNGeDMtaTNIQTU0YU9rMHRhLVdnOV8zcHNlejNBX2wwS2N2REozZE9qR1M0d2RfNmMxb1cyX3NReGlxTXc?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.35,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.7,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Piramal Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PEL-1001"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "piramal-2",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "Piramal Finance Targets Raising Up To Rs 30,000 Crore In FY27: CEO",
     "desc": "Piramal Finance guided for about 25% AUM growth and roughly 50% profit growth in FY27, plans to raise up to Rs 30,000 crore, and sees RoA approaching 3% by FY28 while tightening underwriting.",
     "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQRjl1d3FCeTZvelpHMTBucUNjYUs1UjRrY2Rmb29DX3VBQzExOE80dUVqbzRXZjZtczNLTW02X1BPRVRRd0oxLWNTWDBpRms1WlJNcGlBbXVpbUU1U1ZTV1ZWNUV0aHViLW1LZzVmejhsOUNZRFJLcG5KdVZad0p2bnJwdGhwalRyMjZwYXJvTW81MnY1VUF0XzRkOUMtV1NlMVlSREZIQ1VJbEpTenVN0gG3AUFVX3lxTE5TaUVLOEcxWWFfSGF3X2FvTUdXVjROZFNHVmJ4aVZ6WjhtWWVHSWZyOVhuWGZqQzhFeUpiNkptckRGYVU1aVh2Z0tLZU1xbERKMzZxcXkzS2dsSVFQcU9wZU1jdHlDNEloT3d2RC05emh3QWNuRThPX1lIZWpsNzdQZmpiQWJBamhubW9xTHg3aEt0ZkNHN2J5TU9OM1pBUDU4dFgzeDVkZnZSR3E0dzFzbVR0dGY4NA?oc=5",
     "domain": "ndtvprofit.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1w ago",
     "sev": 0.35,
     "corr": 1.15,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.91,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Piramal Finance",
      "Classified: Momentum · Strategic",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PEL-1002"
      },
      {
       "time": "1w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "piramal-3",
     "index": "momentum",
     "pillar": "Commercial",
     "title": "Piramal Finance, Shriram General Insurance partner to expand insurance access across India",
     "desc": "Piramal Finance and Shriram General Insurance entered a strategic distribution partnership to expand insurance access in smaller towns across India.",
     "url": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxQSDJWQnQtQmxqaS1Tc2lpSjZlQ29ydnA0WUdkMzNvemxrbUlQaEROaTlPUXUwOGVsTzB2RUhWV1BQQ0xlT2xsd1JhUWxRU1JPLXd5X2lkeXhzV2IyZndieTdHU1FEUjJjZ3RhbW15bG9EazV0QlFYZjB3TTJaaVVjTEhQNlJTcXNxUTV3OWdtMmdGWFpwXzhNSXNoNXNSX3NWS1FISTVIMUhtcjltY1ZiemxjdlotLU42LUx1S1YtbEdfQUp4TDVWYkF3cUhBcF9VRVAwWlV5YWQ3LUN3a29XZjFPb24zQVBocU5ETVdYZGNKVDTSAfgBQVVfeXFMUHJhNWJQWHdSMWtjbG55MEJRLW9ibElGZjBfR3g2X3E0Q1NVWkxoN3pIXzE0UFF3VWFBMnRJSHRVZFpBc3hsVG5GQ28wV1JHRF9pSkxTTmk1NVFVVlNwQTZkMFFVZmNGenJJcHVoVUM0OVlmS01qTHJHWlkyejYyUFN1eTdVNFg0Q1QzYlVwTUVUUVM1MFNoY0d2LXMxaEtBeUJpU1czaFJNNmpRNzY4VlB5cG50LXVzd0JYdnY0NHYyLWExUXA2VzJYT256YTFhR3lidmI0UTV5U0Zfd2VJTGRiM0ZiTExvRlh4QXVYbTVhNmQ1Sk5RYnU?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.3,
     "corr": 1.3,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.69,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Piramal Finance",
      "Classified: Momentum · Commercial",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PEL-1003"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "piramal-4",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Billionaire Piramal’s Shadow Bank Plans $1 Billion Foreign Debt",
     "desc": "Piramal Finance said it plans to raise up to USD 1 billion a year in foreign-currency borrowings to diversify its funding base.",
     "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPS2QxMmFsNGg5MzNQWmk5OVRDRjVFRUtlWVhUMmJfV2FsQUxJcGVzSHRRdVgyNEl2WTZmRnAyQ2I5SUxVOG5HZWpRaGl1Sy1qNnQ1N3d2UUpFUDF5eXlfdnVUOEUzSDZJZWdGV0dpNzZSQ0lER1BGYVdCRXVHX3hfWjFRQXROcDBBMmdUbE5SWEwzaHhwYThNUDJmOWcwRWxGSlRmVTZYaG1SYjNOLU9XSjBqUQ?oc=5",
     "domain": "bloomberg.com",
     "source": "Agency wires",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.35,
     "corr": 1.3,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.55,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → Piramal Finance",
      "Classified: Catalyst · Corporate",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PEL-1004"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "piramal-5",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Buy Piramal Finance; target of Rs 2220: Motilal Oswal",
     "desc": "Motilal Oswal maintained a Buy rating on Piramal Finance with a target price of Rs 2,220.",
     "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNNVRLM0xEM2tVeWdrdTJzb2NnSDRLRDRoTkxycmp5NEw2Mmg3YTJYRHl6WXRJak93ZkcxSS1SMG5IZmRUYTl2N21LSTduU3QxSWF3V0Fua0hJOTlFTHdVTTlOZVppZUVkNUhobHNKNDd6akt5akc3VW80V3p5eVZLWHZhQkFVaUN3UDlWMlRVc0xwdE5SVHc4RDJ2WlVkTVN3X2NrNjVzSHl4SXpr?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "4w ago",
     "sev": 0.25,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.85,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → Piramal Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PEL-1005"
      },
      {
       "time": "4w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "piramal-6",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Piramal Finance AUM touches Rs 1 lakh crore; acquisitions on radar: CEO",
     "desc": "Piramal Finance's assets under management crossed the Rs 1 lakh crore mark with retail lending at over 80% of the book, and management flagged acquisitions as a growth lever.",
     "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxOUjFKTlhhd3RVdmpnX0dRYXRaWnJqM2hjZk80TlVMNGZYTEREUmE5NUNuZTlaUUdTLWdyLWUxcVR2S21aSmZfT3I4aEsyVl9BWmR0RTdYMk1XZGJXY1k0dGc0SmUyR2xTU0JDWFdkbTd0UTItQ2NDX0xCZ09vR0VpN0F3M0FKOTFTTXRWUTFYRE1vWlUtSi1WZ2QxSlZTZzhZZ2p1Ujc5bWV6SmxSZVlqZUhtQUVRRW5KRmhSRXVUeDl5UlpOaU92MDRVNkw1WWV5VnoxTkNsSkZpX3FPVE95alln0gHnAUFVX3lxTE14UFpEZ04wa0cyZDFJbXVTdklBVW9pbmFFeGVvSnVIWThlbUpYX3dGR3M0LWVEN2NvTmIxcV9Ray1obkYwVEhzYVNXOUZQZmVkY0NqTFUzclJ3M3l3VmxxLS1GRWpyU2hURnZodU16NXJhUDRUbU45Mi1HLUJKUHNkWFBJOFQ1Nl93aEh4Q2J0WHFGT1o3Q19Kb3JKeFVaM1pCWS1uaEJ3SlJ2MXlGektqOFNFd284akZfR2lvbXR5eUYzbXk1SkhMbjlVcHdxdHNTa2s0dGFIWEZzdUplNVJWTEJ1bFpsYw?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "3mo ago",
     "sev": 0.35,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.59,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Piramal Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PEL-1006"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "piramal-7",
     "index": "risk",
     "pillar": "Financial",
     "title": "S&P Global upgrades Piramal Finance on improving business conditions",
     "desc": "S&P Global upgraded Piramal Finance's long-term issuer credit rating, citing improving business conditions for the merged NBFC.",
     "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQSWtYOUJ4b1JFQVZoWjM5X3J0UzJBWDVDRW9faV9BeXRGOVVGYlhZVThpT0tkNEhSYlpUenRkeVk0MG41VnkxenVOUU4yckkzd19oQzFfRUloUl82UFlGLXBscnFTWlVtTkRPMmV0RHZSRXgwS3d3RjlQTDl2TkQ1eTE3dFZGNTd5RGhteFI3bkxWd3N1b25Mei0yWkI2TXpIMGRqNElXZXN3Zzc3UHRteHY2cEd2X2c3dWdOLWItQ1NLMTZrMEp5X2lUZ9IB0AFBVV95cUxNUzh5Tnhsa2w5TUZMM29aNk5wMmVlckRrWE9FM0RBUm9hVktsOUpNRFMzRHNJemJUMkszWFlJLUtiTGlCZ3JOM3JsRzZHTEFQSlp6emhhdDhqbHF4dEpVUGdseDVnSUp2VUFhS29IaXNrTERzZ0JGaXZpWFZiTlpwQUFtQi1YZXk5bjNXUVExbGlSZWw1dnk1R3BOOFg4UTRpT3NBdW1yUlZBLVQtUDB4VDAtZkhGNUNJM3BDVS1wcG94SmVJaHZEUUd6VHlDUG12?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "4mo ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.49,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → Piramal Finance",
      "Classified: Risk · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PEL-1007"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "piramal-8",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Piramal Finance receives order allowing a tax loss of ₹10,110 crore",
     "desc": "Piramal Finance received a tax assessment order allowing a loss of Rs 10,110 crore for assessment year 2024-25.",
     "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxOVlV5X2FoeVJCQ25FLUl2ME9LUDhmeVJSZDFNdUZKa3FxVHJIOEUwb1BnRWRBZmYzbEdVUUk4YXQxajlaU0tSUW93TkRrWUFXbDRVbktyLTUxZ3dIWW1vUTc0ME9XMG44Y0lBRUl5LTRmUUw0RVdGWXJmVGFLMmpjeENxa1JmWU1pdW1oS2pRN09CdTdwRmtrbmM2WUI5Nmh3b0FyQk9QYXh1OG8xU21OY0syS19EcmVReXNVdXpXdmhUX1NtcWRoS2FKQW5WRzBDVW80T2J6VdIB3gFBVV95cUxNYTBTc3gzN0FNSDdLNHBkOTdxNGp0bXBMcXlBYzJjY3NUWXQtRXhUOEg4UHh2ODVuUFFGdElNRTRzVEhEWEN6UHd1R0hWMThNZDgzYUZWZll5VkpuamtLeFlpekNhMkJRVUlXQkdhamx0YkczLTJSamdXNUJWa0UyM2FyVGRjVnd3dXFfYzhwOXVuVExKOXRBaUh1T3lfc2xJQ1pCQjVldG45U3RhaGZ4YzVMYnlraDgxejB6NVd5YkVrR2RNYmJNVmgxcGF1bmRsV1JGdEpqRTRGaFl0UUE?oc=5",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "3mo ago",
     "sev": 0.3,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.58,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → Piramal Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PEL-1008"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "piramal-9",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "NCLAT Allows Piramal Finance Plea On Merger Scheme Of Four Companies",
     "desc": "Piramal Finance is amalgamating three wholly-owned subsidiaries into itself, with the NCLT and NCLAT allowing the scheme to proceed to shareholder approval.",
     "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQN2otYUlLaFROVUFQTnNvYTJ4YTFQRHI1UGlBSUxWNEJHbjBVX0o2dEtfOERZNGtkakZxa0kxTzJsUGpBY0FuaVZvSmNXdF9WMnU5elR4OUNXX0x0clhGdTRHQUdQblJsTjJWOWZxWFJHbG1XeF9hajJJWnVkY0NNTmxzOWdkTlU3Qy1QOHFrc2d5TTgxdTFIRm9OYldGTExCbUxvT2tuN0t6NU9pMzh1aTV30gG6AUFVX3lxTE9mcDNWTDNzZVdsRTB1Mi1Oa0pWcmhBakJqVkZaZ0VYT1VFdUc4ckwzX3B1c2VQZ2lVVlU4bk1HeTVSenk5SnNtdGhIek9LUi16bzFxMW91RjBjRE52Uk1BN0pkZXlCallBNXNuOEZUV2VxQUpWN0RySi1sU3gxSHZ4R213ajNRZDNJZDJxc0FhYVBYQlEwYjZLbDdCQTQ2UHE0b2xoa2ZORldtaEE4a2hkMzZ5Q1NxSl9xUQ?oc=5",
     "domain": "ndtvprofit.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.25,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.68,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → Piramal Finance",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PEL-1009"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "piramal-10",
     "index": "controversy",
     "pillar": "Key-person risk",
     "title": "Piramal Finance Retail CEO to lead IndusInd Bank's consumer business",
     "desc": "Piramal Finance retail business CEO Jagdeep Mallareddy is leaving to head IndusInd Bank's consumer banking business.",
     "url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxOMVJRdmpUaXVGSW4xWm80ZzhhLXF5Q1Q2UmFuSm1XdHNlYllpRW5YWkFaOXNMVlVDNDB6QzJUMnVfNXlORW9ocWJObTJwU0JmczhNTW9SSXM1NVJSOG4tVXU3RHUxdHZZSElfaGhKZVBPS0x2RlRFUC1SRThFTUxsUkFFLXF6LVYyU3FUWXV0Qk9SS0JjTXFVbHh0WnZubHhFcGMzcFpyZ29CdVpLSnc4TDNYX1dDejBOTzdaLUtDdXBudEpoYjUxQXdleXJKakI4dWE4ZDhnVVdiMDdBcTN30gHkAUFVX3lxTE5sLVpiZFFxWG15bHdJY2g4V0ZldGlGaUR1alpoYXplWHhVMEYtMlRZdTJlZUhKU3lrcGk3ZUVtNmx0cUo0UG4yTDVpaVBScUNzV3c5WDhjV2xQZDRfOGFFLTBIOFdtUm9hUVMxRjZhOHc2TWxQVUgzTFd4QUYxd3Q4c3hEZDFJMENmWi1IYm5TUHc3ZjItM0Zjd3d4eXBRRUpoSVA5N0hkZUFkcGg4VGgtSEl0WUMxSXdTcUhIOXJ2dEZSbnJqNzR1SUNXMzlWRDFRREJkSmN3S1A1OWlvZ0NGdXNDUg?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "neg",
     "time": "2mo ago",
     "sev": 0.3,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.54,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → Piramal Finance",
      "Classified: Controversy · Key-person risk",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PEL-1010"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "piramal-11",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Piramal Finance reports Q3 PAT at ₹401 crore",
     "desc": "Piramal Finance reported Q3 FY26 net profit of Rs 401 crore with assets under management growing over 23% year-on-year.",
     "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPZWV2d2wtMXNucVRzekFkWno3X1Fuc3o1a0NZZG9ieTNEZHhNT1EtTDQtMG9WaTYwR1dPZ2JuVDdiRlgzR0RoZEhLVU5YczdlMlk2X011VHhoSklKT2t4RVV3MDdZVXZtblU3ajczWGdTVzh4cTIyYTJjRjYzeWxXVXllbFd4LUFHYk5wc18tcHVRVGlJamhaNHczSnZ6VHpId0lXRW5ObTBrVFFMcXAxN2gza9IBugFBVV95cUxQclpSaDJSdU95SzRqT1BmLU5xNndscFAtTGlyQW1CZ0dkX0NZNnd3U0lFN29yRWxwM2dDWlNSQTRTcVpZV1Nta21RMjhEM1lWMlRKMzZKQWFKTUFOdk9XQ1Etb3JYc3dZeTViMTR1cXZCN3QwQ2EtVGEzYnNyRDYtanJmRUZBbmpUdG9oVkVJMFlkVEF5RkhtV1JtYXBjVXJ3aVVlZXh6dE5ra1BoNWQ3Q2dTaUNyR0Y3dmc?oc=5",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "5mo ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.4,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Piramal Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PEL-1011"
      },
      {
       "time": "5mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 231
  },
  "poonawalla": {
   "name": "Poonawalla Fincorp",
   "ticker": "POONAWALLA",
   "sector": "NBFC",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 0,
    "risk": 4,
    "esg": 0,
    "momentum": 37,
    "catalyst": 23,
    "sentiment": 4
   },
   "trend": -1,
   "quarantined": 16,
   "narrative": "Poonawalla Fincorp: Poonawalla Fincorp's Q4 FY26 profit jumped 70% QoQ to Rs 255 crore — lifting the opportunity side. Poonawalla Fincorp raised Rs 2,500 crore through the QIP route — lifting the opportunity side. 16 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    69,
    69,
    68,
    67,
    71,
    70,
    69,
    68,
    69,
    68,
    68,
    67
   ],
   "indexHistory": {
    "controversy": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "risk": [
     6,
     6,
     6,
     6,
     5,
     5,
     5,
     5,
     5,
     5,
     4,
     4
    ],
    "esg": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "momentum": [
     34,
     33,
     32,
     31,
     41,
     40,
     39,
     38,
     40,
     39,
     38,
     37
    ],
    "catalyst": [
     37,
     38,
     36,
     34,
     33,
     31,
     30,
     28,
     27,
     25,
     24,
     23
    ],
    "sentiment": [
     5,
     5,
     5,
     5,
     5,
     5,
     5,
     5,
     5,
     5,
     5,
     4
    ]
   },
   "articleCount": 87,
   "events": [
    {
     "id": "poonawalla-0",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Poonawalla Fincorp Q4 results: Profit jumps 70% QoQ to Rs 255 crore",
     "desc": "Poonawalla Fincorp's Q4 FY26 profit jumped 70% QoQ to Rs 255 crore.",
     "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOOFV4ejRIRmlRaFQ5SVdURUZjRFNjRzNndk9nbU1EZmt1cWFRUUZNNkwxSmpfMW9heTNqWTMwcWswYnhWY0JnSm9kU1JCcE1QbVlKMmFzZjc5V1BVQVdrelN2VGRXNnFUMnBRTUlkZ3dQUzJya29uZkdtNHVmbW8xcHBocC1fVHNhSllZN1hydEYxY2wtaUhsZ21VUUF0aTlDd2p3UkdaaW96SHhtZzVaeTNaQUVnYVVXeEhaaVRwZVpmSDhmQXgtcHFPLU14MEZkeGR4SnZYQy0xUDTSAeABQVVfeXFMTXJCWEhOLWxQaXlyZXp3X2tRMWxldnlYRlBPZTV6S1VnQnAtQi1TTW9RWi10bGFXcDFiRGFVT1VwMWZqWVNkcjYyekpzNm9aVG5wTV9GU3VGcmNZTkZwUGs3Z0xsMXNlM0ZwX0oxclZrOExTWFB3dDhSaC1KT3RXZ2J6MmpwVjd5WXBWUEhWU0VZTG5wWXBfRzhrZldfVmNJS3NLc0J0RWtqN1pGalpNY2FXYVN6QmZJeWVrdGc0a0haZmUtTTkzZUNnM3lQd0pWeC03VWlBVVdSUlg0RmJxV0I?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.6,
     "corr": 1.0,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.73,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Poonawalla Fincorp",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-POONAWALLA-1000"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "poonawalla-1",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Poonawalla Fincorp raises Rs. 2500 crores via QIP route",
     "desc": "Poonawalla Fincorp raised Rs 2,500 crore through the QIP route.",
     "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPSEQzWGZDZVVyQmhBU0VYQ2Nsc3cyYi0zR3U2R0k1bXNRdVhNMjdkalhudEh4LVExQWxNa24yTUhGM05uTm1BRVlvZS14WmV3UXlqc0c5SER6bnpNMFljSjRJejJlMlAwVU4yM2hleURUQ3NtQUdJYnNzSXZGOENvcjVrcjBQekN1cW1saWNZMXJOZm1CVFlVWTZvaVd2RlBjMkVNdHZkdXQ?oc=5",
     "domain": "aninews.in",
     "source": "Agency wires",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.55,
     "corr": 1.3,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.42,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Poonawalla Fincorp",
      "Classified: Catalyst · Corporate",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-POONAWALLA-1001"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "poonawalla-2",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Poonawalla Fincorp Q3: Net profit doubles sequentially to ₹150 crore; plans massive ₹5,500 crore fundraise",
     "desc": "Poonawalla Fincorp's Q3 FY26 net profit doubled sequentially to Rs 150 crore alongside plans for a Rs 5,500 crore fundraise.",
     "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxPZWtLUXFvVEhWQWR5SUdGNm9CbEk5clkzYkhGMEthZjhkNzUyaC1jb19ZM2plU0x6R3RTdzN3b28zUnVYa0drSkpFczB1bURzVEYzLVNjZ1dFN3V5Y3dnSEJnZ3U2Ni1OMkZxRHNibWlxSDlKWjBUWnBHbFZVbTZGUkVVc1QwTWlSSngtc3NqOU1PMFFEWGdOTFp5NlN3cHRMOVQ5a195MjB3Y20xTEQtT0NKY1pHd3UwR010NVJUM1hoS1hmd1Z1X2ZvMEM4SVctNE0tVXQzQW5tel9NdnN0QWJDTEJaZ9IB8wFBVV95cUxPYmhabXlkN1o1dmZkQXdMUmV3QUUtMnVJSU5XYnVIbFh0VFU2TExmNW9SUS1mcXJEV0VVejVjS01QZEl5QlkxWkppMUY3RXlrVmdsd0Y5akRySzlUUW84LWpTNlZldllsYnJNdTlhXzdJWWtkdzlFWEFodWlCd2pab2c4YTlBZVlhTFRxQlJfOHcwQzRoenRXa3RKb1NxWGFNNkJ5REhtaGNIVmNBNzFOcDF1eVJId1h1ZEVtbFphUGtPZlhlenBkdVhrVklmd0lmODR3WFQyRmFoOVJCemxuUHN2SzlnVEptVk11QTZLbW1yTjg?oc=5",
     "domain": "fortuneindia.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.63,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → Poonawalla Fincorp",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-POONAWALLA-1002"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "poonawalla-3",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Jefferies initiates coverage on Poonawalla Fincorp with Buy rating. Why are analysts bullish?",
     "desc": "Jefferies initiated coverage on Poonawalla Fincorp with a Buy rating citing growth prospects.",
     "url": "https://news.google.com/rss/articles/CBMi-AFBVV95cUxQcVNFdkdwV3ZWYzVkNC1GNElabHMtZVZrRkdmcEI4eTBWX0hEbXFmeGNyVUY1MlgyMGlvVDFac3lUSjR3QTQ4RWpJN2psU2FYTklkZlJhNnpBd3ZtOGl3elY3aUlGYXJnbEZwS2p0Vk5xa1dEQkpZajBrRDBQNHhQWHJFWVJTSXV4QzF1RUhFSzBXRFBBUU84SHk3bV9JdDlyWmlIUXdKc2xDSExoR21XR3pzM2xLaDBWTHVoVDFLYmVJVkhMVU1mMF81TEpFOFFhbW15U0dVVUVvdUo2RHRjQmJUdGVKUTdyOWVzZTl3RkZmeU56SDV2TNIB_gFBVV95cUxORFZRdENCT0x2Q1IwRC1xaVlLclVMOXRJZm93TWFPU2hqUThQY2VYLUFNRjR6QnFGbWhSU1hTWnVteG1rcThVMGRLbkJYNjRkME1qOWFyR2FBY09tcGUtUGp6TFRIN0Y2ZWJiWFpQU1lMZzBLTzdtSnZLLWlYUm9SUTZ4Vi0wdmxpYmRtMHFoeUtGTnhfOEpuanB0cEMzWE42MnhidDlIYm1LTm91eWFzQk9QbWRJbVh5Nk9wakV6VXdxbWpjU1JYLURSUS1LYmxlQnRwTjhsQm5nUG5BaGJWc3JfU3ZQTlAweDVwNUFhblJWbkpoblhGamx0UXpaQQ?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "3w ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.87,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Poonawalla Fincorp",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-POONAWALLA-1003"
      },
      {
       "time": "3w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "poonawalla-4",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Buy Poonawalla Fincorp; target of Rs 520: Motilal Oswal",
     "desc": "Motilal Oswal reiterated Buy on Poonawalla Fincorp with a Rs 520 target after Q4 results.",
     "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOOHNKcjhsZVFaRTdCQThCVmZVUXdnUWtFYkpreFdmWjFrOHdqYlMxNmFLRFZVeHpNLTdrRVI2dWZPVElLWk5hVjVlbXg1LWZzUzRzdEJsalYtQjhEVmtNbU5seXEzYVNDZk02NVUxd0Z4MGFqUnIzOFdDRUd1SmRFX202eDFRN0JST1I0bmxlRlNSYmp4b0JFUGUxV2NvcXlwMmVDX2lIX2Jua1lnMmJZ0gG0AUFVX3lxTE53QXVib3loVzJtUnNmOW42MEZVT1VQZ3h5TmpKVXpKSEt2bVZhZURrdHEtX1FfRXFCU1BJeFB3Z2Z0cXk3dnQxdFJka0hWQWhRWkh5RWdSNWZTQ21ST0Jvb2R6alg1VzJMbnMxbTZLQkx5anRaZHBpcFlUdGVSOU8zNTJJZlhhdlFLZEtXQVlQczhXQkNBSlFYN29QSkdtUzRDeGUxVzJiWE02eUVNV3lEWlZWSQ?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.74,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Poonawalla Fincorp",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-POONAWALLA-1004"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "poonawalla-5",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Poonawalla Fincorp launches QIP at a floor price of ₹390.26 per share, down 2.6% from previous close; stock up",
     "desc": "Poonawalla Fincorp launched its QIP at a floor price of Rs 390.26 per share.",
     "url": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxOOW0wSi1jNDJteExBZzNwQnEydnBRSmpYWWNiVzl0MUxBd2QtUUt6elE4a3c1WjJMcDNwaTFYckVycW5sdHVrbnFJMS11MUlpbnEydkZDY25ibGxlNUFYOHZYRTh0cE9mekVRUFN5UUtFZXJ1LTh2ZTNSNUhPTmtod2t4WEZkSUp0TlVFd2l6ZW5sSWxEWENzSFpHYk5IVDFIZ0FkRVY5alBIR2JVSktIei1YWFVUeVAzV25oRTNnNjVXNFl5YVoxcGU3N1ZPSmNOdFd6X2xiWGM4WXNGNDF5MF9ILVF2YzFPWHhuZmpLUEU3aEJEX0R3QjZ5TENoMnfSAYQCQVVfeXFMTzBUWVEzSExTU3RHNjdUendRa2RqSnJjdGtPSFI1b1pWTTUwUDJDbDZzUExWbHEwb1lsc3BNLXl0NExKNE0wdzhpd051b3Z5UHVCRFQ2VTFwOE53NUhzdjhGNFJlUjNYb2pjeHZhUmMzNy13Z3U5WHF2RHItMWJUcUM3TEMzWFlsTmNNOEcyVEZ1RlY2M2ZldWd2ak1OV2dnS2Y5UUhwVU5GMEZsdnF0V1FRbm11WjE4UDdfWkZzdERRS1h6WFpaQ1BMWHhESjh0eGRHdzdYbTVRcGxMbndCOHB6ekVSNHpWN2V0eXphUW1RZndJVTR4S1BWODdPZGx0NnBJank?oc=5",
     "domain": "livemint.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.2,
     "stg": 1.0,
     "dec": 0.4,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → Poonawalla Fincorp",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-POONAWALLA-1005"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "poonawalla-6",
     "index": "momentum",
     "pillar": "Commercial",
     "title": "Poonawalla Fincorp AUM tops ₹60,000 crore but stock swings between gains and losses",
     "desc": "Poonawalla Fincorp's AUM topped Rs 60,000 crore while the stock swung between gains and losses.",
     "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQSHZkMzYyc1Q2YzhrNjRrbU5uVmJPY0NGOFBzcFFua01FS090aXJVZTJVSFNFLThobkpoZWJTM3Y0MWljaHVidXhGT1ZMT2xuRFZ3SEdIYlNsYUVzb1JudUFDcWtVX3Bqenc2aGY4blF1ZFo2akRzYS00d2RRTVdqNVlGS1lCM19jcmllNHA5anpJWVhGNUtLM3J6OUZlSi1RX2xHSnViX0NJMUZJSHVNWUZSUFQ5SVZzU2fSAb8BQVVfeXFMTl9XYk9hMzNDNl9rZW1RQUhub3E4LTZ4TGNjSjR2TGhiVWtvSWJXS0tnY0I3MVB3YVBhaTB6a3BWWkZqemdaSURDdU9xMFUwdGNaYkczNzNSd0RIR2RNQ216cXA3eUdZRUNFY2VMdVhhTXpPb3owdXNrajd2NU1ZY1V2YmZTZ0UzVHpmWTV1Qll6WHRQQ3FFM3VMMTBSV25QcVlsSjVRT2FqakR0S0NReWF3Q1I4TUNlUWZoT2pFNDg?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.5,
     "corr": 1.3,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.38,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Poonawalla Fincorp",
      "Classified: Momentum · Commercial",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-POONAWALLA-1006"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "poonawalla-7",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Buy Poonawalla Fincorp; target of Rs 560: Motilal Oswal",
     "desc": "Motilal Oswal recommended Buy on Poonawalla Fincorp with a target of Rs 560.",
     "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQUHpXa1k0d3Z0THNYTXBHMzhOXy1hak03VjRaTEsyYzBqNmdEYWZ1dFUwNWZwaTV2S0k0QW9LMmxMT1dvLXhxVlFhQmpnUVQ0TWRickhBVk9vN0kyUVU0MzZTN1NGQmlBQUY3bDVvMmdudTVpc0JnVVNFNFY4ZDlZUC1wMWJ3T1Bzay1ub2hWNjB3a05xMFh2WHVISnVzYThZY3pTSHpud1ZmNzdrT0JsU3BNWUxsbW9D0gG-AUFVX3lxTE1zLUtCNGxiMTc5NEh3UDFhQ0N0LUFYWXRfa3JCQjJqa2VENEZxc1F6ZE1CMnp2T2ZhdVZCVEVJc2hzekFadTYzOThTQTBpaUNJdkEwSVRXRkZTVlVyVmwzTlJ3Y1pfQmVEQkMzUUZMWWJkanFxRjlfeVhzUFBWX2I0OHcyLXFBVjV4MEhjY1RtUHowOHZMVlVIUjRob0c5SU9yeXktUHpXLW5aTk14VWRFcWtwZEtUMDExY1hWdmc?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "3mo ago",
     "sev": 0.35,
     "corr": 1.15,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.55,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Poonawalla Fincorp",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-POONAWALLA-1007"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "poonawalla-8",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Poonawalla Fincorp Is A 'Buy', Says UBS On Initiation — Check Target Price",
     "desc": "UBS initiated coverage on Poonawalla Fincorp with a Buy rating.",
     "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOZFdJY2p5R055TlVmbjJpU3JXNnFVQXBSdGtTa0w0S2t5VU5Zbk9pQkl3YWhDaEZadTBCdEdUZUxfcGZpSlBXZVpiNGFMRGpzaVkyZzB4T29tYXo1d3JvTnlYMldjc01DekV4ZUxCLXNoV2d5bUhSdEN0WXFzd3ROZkxEV3N3Wkp0Umo3VlV5Y1V2WW9sazdWbmVBdndfREtxbUQ3YnZ2UmRON0xlUEdn0gG3AUFVX3lxTE9xaGNfWmlBSnlaS2VtdER1Q0NYZW9VSFFFaHlBWUNNd0lCMjd1d2VuaVphLW9tY2pIRHRpZ3ZmazBuR01NRjdYVG53UC1XWnA5MzhGelYyY2U3Rmo5QlV0Wm9WU2FrVHlyc2VjallXRTJST3l6UzZDR0R2SHFBaEV6RXA4SndlV3g3bzJaMUFPZmJhSmgzTjZWWTJEc1lIWk1wbkpmRV9VWGNfM2hsT05CR3d0cjJfbw?oc=5",
     "domain": "ndtvprofit.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "3mo ago",
     "sev": 0.4,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.5,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Poonawalla Fincorp",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-POONAWALLA-1008"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "poonawalla-9",
     "index": "catalyst",
     "pillar": "Capacity",
     "title": "Poonawalla Fincorp deepens commitment to its AI-first approach",
     "desc": "Poonawalla Fincorp deepened its commitment to an AI-first approach with new enterprise solutions.",
     "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxQZFVvOEtzdDlhdkM2R0ppV011VUwwWUZ0dUxndnc3eHV5cmpCT056eWxidkNpdTdGV3ZscGFpNzVmVGdSd2VYU2t2Zm45RElJbXROdzBBSWt6dGU4LUJsQ2g4NWI5YTJlRy1FZndfSFNHRThNZEYtdkNuUzVOZU5BckJqakpRRkg5OWs2U3JGak9BMVByMmJKU19kOHhNZjY1TlhHYjA1YTE2OVFPamJGSFNtOEZVV2I4TVBHbU92aEVMOTJQcDRrOS1kUHNjVlR2S1pkcFVETl9KdnNy0gHiAUFVX3lxTE5wYUJORDlSeVFLNlQ3ci1RMnl5QVphMEhza0V5bHhTWjljU09SLTFsdmdEbE15OGpaVHdVU0JmZTJwQ2w1MTB6dXE5eWFpM2lDMG9RZy1nRkpZd0JBX0dQQW9SY09sLW1ha08wZ09jbzJzTUh3MXoyejBTa0tJanNpVXkwZ1ZDUEtIUkU1bTRBaHNFNkw0WjlXSjRseHNyMkh1cmQ1QmJoLTIzWDNyQmJXNmI1UmsxcUc2ZHJPNnJkSXhycVBDSHRKR0ZEUFJxX01MWEJTbWVOal9JeDdjcDhCRlE?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "4mo ago",
     "sev": 0.35,
     "corr": 1.15,
     "vel": 1.2,
     "stg": 1.0,
     "dec": 0.38,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Poonawalla Fincorp",
      "Classified: Catalyst · Capacity",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-POONAWALLA-1009"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "poonawalla-10",
     "index": "risk",
     "pillar": "Financial",
     "title": "Budget impact: Shriram Fin, Poonawalla Fincorp, other NBFC shares fall up to 5% as higher gross borrowing...",
     "desc": "NBFC shares including Poonawalla Fincorp fell up to 5% on Budget-driven concerns over NIM pressure.",
     "url": "https://news.google.com/rss/articles/CBMilgJBVV95cUxPand0LXpET20wNnNyejFFUFgzVWZGT052VExtRUQ3dnZ0cFVGM2dTNFdleE9rMzhMNUUyWER1bUFQUVNPYkgwQk5MblpaeGdpUFNGMFFfTC1RT2RHR2RfRzVhMlNMM3JIS1VFYV9VNXdvZElTNFowTE90dEZfekQtNWlpTmVNT2hOQmF1NEVYUGhhMUF3NVl5ZWRRRTYyOXl6c0xuR09LMS1yOTBGNGg3akwxYWNNS3lqYmdvZHNzZHlYV0F3WmExRHBxLXBYUnNYNElyU3ZZNkpNTmIyaU5NSmFOSjRsYlBDWTVfRmY1TWx1X1BYaDZndkY4TUxSbERzMGt3Vm90OWhLNG9EX2k1d3Z4QktrZ9IBmwJBVV95cUxQc2dDMHI2aXNYUDNHT2drbUs0Nmlqdk5QcEg0eFYtQzB4WERPQ0tHVDJvLW9iWFJ5YVU1TDI2TGJjVkRZRmVBdjZQS1dvd1Z0MHRwemN3UkZSVU95VVdERk9od3hmVUJTQTJvWTJNMmhWMU1PLXRuX0VJTU91bDhneTFEVlNNS29vVl9TWEpJcExKQUkzaEpQVnFvdkpUMjgtNzhJODVBQ2p6ZXQxamV2T2p5MnRjV3gyV2ltQ0lhY3FtYWMtMGtBMlBJU1Y1b3hTUk1pWFAxTUczTzRyUV95S1FPeU5aaVdYY091Zm85OWJiSWhkZUVSXzVBRzlnTnJyd2tDNmczem1YcmJJcHk3dUU3TGdpaUZxdzVR?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "neg",
     "time": "4mo ago",
     "sev": 0.4,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.43,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → Poonawalla Fincorp",
      "Classified: Risk · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-POONAWALLA-1010"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "poonawalla-11",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Poonawalla Fincorp shares jump 6% intraday; JM Fin upgrades stock after Q3",
     "desc": "JM Financial upgraded Poonawalla Fincorp after Q3 results, sending the stock up 6% intraday.",
     "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQS2FteVBpdHpPVGNKZDZBWFQybkRaeHlUdlZYZkVmUnVEZzFtRUNwblY5c2dEdVdONWwzS2dHVThFSlNJU0wxN29tUDc3TjNhU2F5cm5TNW9SZ0stTlBkcm54SEcwYVpPalpTdVJKT0xyUE1IME9STFkxTDdDcTRLTE5CQ3JBMTRHMHVGSEFkOXFUZFhWdzlFNHQ0N3dKWkZCVS03NmdsbzNGNlBkMVZJemYtOE1SYVlMVUJVcnFjSVBVem1aM1k2V0tKbEdWeEkzaTU5TTNmNl_SAd4BQVVfeXFMT01ZZk45OWdLeUh0RV9LMGV5N2xYNHZyUDM2c0dlV1RCakp2cThxZHpHRjFtRUF4QlJKVUo4ajBzTGhZTDJMVUlOV0NjRkt5VVhSSTdGYkF1bEhJeTJJSHFKQ2toTTVuSURpd21DRGZ0WmE5cDNlZGUwWDR6cTAwUjR4ODJKUVpXZmkyMmNLdVZjWWRaUEJ1Rl9nRWRYV0djMXdLYTFDTEoyTnNkUmdZVFpsSU1FOXJQanBFN1N1OExPMmw5Z2JPQkZzUU03MjZhOTM2LWNVaEtQeWVObEd3?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "5mo ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.4,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Poonawalla Fincorp",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-POONAWALLA-1011"
      },
      {
       "time": "5mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 178
  },
  "iifl": {
   "name": "IIFL Finance",
   "ticker": "IIFL",
   "sector": "NBFC",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 36,
    "risk": 3,
    "esg": 1,
    "momentum": 27,
    "catalyst": 33,
    "sentiment": 8
   },
   "trend": 0,
   "quarantined": 19,
   "narrative": "IIFL Finance: IIFL Finance received a Rs 476 crore income-tax demand for the 2018-2025 block period and said it will challenge the order — driving the controversy index. IIFL Finance shares fell about 13% after the Income Tax department ordered a special audit of its accounts — driving the controversy index. 19 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    58,
    58,
    58,
    63,
    63,
    58,
    57,
    57,
    57,
    57,
    56,
    57
   ],
   "indexHistory": {
    "controversy": [
     24,
     24,
     23,
     23,
     22,
     41,
     40,
     39,
     38,
     37,
     37,
     36
    ],
    "risk": [
     5,
     4,
     4,
     4,
     4,
     4,
     4,
     3,
     3,
     3,
     3,
     3
    ],
    "esg": [
     2,
     2,
     2,
     2,
     2,
     2,
     2,
     2,
     1,
     1,
     1,
     1
    ],
    "momentum": [
     20,
     20,
     19,
     34,
     33,
     32,
     31,
     30,
     29,
     29,
     28,
     27
    ],
    "catalyst": [
     38,
     36,
     35,
     34,
     36,
     35,
     34,
     32,
     31,
     30,
     28,
     33
    ],
    "sentiment": [
     9,
     9,
     12,
     11,
     11,
     13,
     12,
     12,
     11,
     10,
     9,
     8
    ]
   },
   "articleCount": 109,
   "events": [
    {
     "id": "iifl-0",
     "index": "controversy",
     "pillar": "Financial integrity",
     "title": "IIFL Finance receives ₹476 crore tax demand for 2018–2025 block period; to challenge order",
     "desc": "IIFL Finance received a Rs 476 crore income-tax demand for the 2018-2025 block period and said it will challenge the order.",
     "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQWXhOSVVRdmx6YkstMWREMmFOaXZJb19lVlR6dGVDUjBCanRHcVBEQmgzbHgwazlPRHd2NzRoYWpuNjByYW91aU81OVlzc3Zzd3dCWnd1elVYeWdsMDVuUTZXS29VY1dPRUdkMkVjRXEzZjg5STJ1V2tGMHAtYzJWNllYdG5HcTVrQmhXYlc4NWtxX0lnb0FvUVVCdnlVdDluQW9EQ082RHRDOHB0TVl1S0RYMEJqdlJ4NWNGeThuZFROcDVtcmRSYUhTNTFWSFhwdXg3THJIdmdzREZIcFRqLXllNVdHd1VFaDZjNVBaUlp5Z9IB9wFBVV95cUxPX2NLRzVZUm1Fc3FrYW1VYms3eEFyeENQeWVydXFEeUlIUFhFbXRIQTc1U216SFFFNlJQQzgyRlJINXI0eU9YcVJlNlBPUU9acXdsTFY2OFdPVXF6Z1oxQkJkWndIejQzUHBxSDktNk5reTVIUENtbGpZWVAwUmZYeFo4UWdMd1MwQ3VHdmhnMmtCSTFNNFNDR3dvejRiTWxxVFdlSG84dlJzR05YTzAxRVd4UEQzTUZnTVdJVzc4UkFOV1pHc1JjUm9xNmo4RENXWjZ2NzM0X2JsV2o3aEdLM3k3RkhJZEdRbEZwMVdnbm9WWnFUdlI4?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject — under probe",
     "dir": "neg",
     "time": "1mo ago",
     "sev": 0.7,
     "corr": 1.15,
     "vel": 1.2,
     "stg": 1.4,
     "dec": 0.8,
     "stage": "charge",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → IIFL Finance",
      "Classified: Controversy · Financial integrity · charge",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-IIFL-1000"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "iifl-1",
     "index": "controversy",
     "pillar": "Financial integrity",
     "title": "Shares of IIFL Finance tank 13% after I-T dept orders special audit",
     "desc": "IIFL Finance shares fell about 13% after the Income Tax department ordered a special audit of its accounts.",
     "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNdHF6dDhJd1RmelA1ZDlYSUh2VVJ5azdkLW5sMS1FTjJuVUtIZFNsbldpQ0tWakpVWWw1ZFJXTDdPaGpvOHBXd0hubHdRelBpOFNhWVUyV1E1WncxM1g3aUlscHk5NXFmaTZ3akY3bVV2TjZhSHNHYU1vVFZXYi0tOW5IaF9RWE91Q2hKTThidWcyTHFIVUpQb2EwNnQ0a2ZINDFoVmZLV2FPczkyUnU2VkZCbUU1dlZJbUlzOTg1ZGNfV2NVVlp1SGYwV3d5eklT0gHWAUFVX3lxTE9DSnczTW1zTUZuRWJMcV8xcmpRTWQwZUU1NlRzN2YxRXIxLXNMaUsyZnpmVExFQjFNU2thRTN1V2ZrQ1o4VFpaMjhpOHVNa1BMbms3UE5DcktLTFpqTnVMd0dvbUtXRFNUa0Q4WjdaSHRtNl91SmJ1TXQ5SG1lcmlMak5WNTB0aDlmdDhSblMteHRDMlRqSTZMMkxHVGU5T2p1cThBZGgwU0ZaZXUwUERva2lIN0FZbUxMVm9KN3B6WldGR2RpMzdhY1A2VnhPT3kxZVNva3c?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject — under probe",
     "dir": "neg",
     "time": "3mo ago",
     "sev": 0.75,
     "corr": 1.3,
     "vel": 1.2,
     "stg": 1.2,
     "dec": 0.65,
     "stage": "probe",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → IIFL Finance",
      "Classified: Controversy · Financial integrity · probe",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-IIFL-1001"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "iifl-2",
     "index": "momentum",
     "pillar": "Financial",
     "title": "IIFL Finance Q4 profit nearly triples, powered by booming gold loans and better asset quality",
     "desc": "IIFL Finance's Q4 profit nearly tripled on booming gold loans and improved asset quality.",
     "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQY3FYVUpmOVAxbWtZbVJLRlNSSWpieUV2VWlCeHZUd0hGQnJmcmJDLW53SzVlX3l0d1AzTkpreEZwdVhsNDBvV0ViUGtaa3E5Y1V6ZXVCNWliYVREWGRHS3pGNEJ4X2lEb2c3aEl6WEM5dlpNdUZJbjlTalFkM1JjMEphNTNua21oRm5UQlY3aTZRRS1vc0RRZXNldHNSYUtWX0JqYWUtQ0J4RmJ0VEJRLTVMM1RTZW42WTgzSnFILWRlZ0NMaG9tUlFQU1FKT212UG44dNIB2gFBVV95cUxNU2drNFlQazRhMjlVQ3Zod0t2YUhWdl8zVVZKVjZSXzNqNzg2T1BkOGdqVEpBZU9zZGFDYmxpTlNNWFpycHBIUjAtR1RjeWtpUWVYY1NYeXRGa3hreHlHb09ORnBRQUR0WHduRU1CcXpsMlNzMF9oaUs0XzBfaWZIb3VkeHptMkcyWll2dVl1ZkoyOWVQelhlZTRjV3NqNDJieDViUEZILXN6ZlVTc1N1R0NjcFRHLXg0bDE0Q1ZLTVc5NHVETjZTTXJPak1keGpoblVxS3A3T09UZw?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.55,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.71,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → IIFL Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-IIFL-1002"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "iifl-3",
     "index": "catalyst",
     "pillar": "Capacity",
     "title": "IIFL Finance plans ₹10,000 crore fund raise; board also ups borrowing limits",
     "desc": "IIFL Finance's board plans a Rs 10,000 crore fund raise and approved higher borrowing limits.",
     "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOb0RjYXpfanNCZGNxMDZWMGd1OHc1UTdsa2c1WGY2VzA2NTUyc0FiSHRUR2NPVmI5X1EwLXNnS2FKY0dJQVdGd054cU1OZFVjM2FWSW94eXpGTzIzUzJkdDZacm5tRTRvVzI2QURXV1FJY0hkS3labGxTTGg0V05zMWRnLThOeUY4Vi1BdGIzb3p0YXRBWTBJbjZTc1UzbEFISFdoTl8ybGdES2ZFc3hBMDlGN3ZHT3FZX1puYUdR0gHDAUFVX3lxTFBTMjNyZ2t0WE5OQUstRWE1Y1llVjRGUFdVZElpeGM3ZXhKWWJDWFNxN1dIeVlIZmc3cU9DZzVLVGVlY3BkV3prbGdqNlctcU1WNGduT1NSeHBieFNxcUptbXFwNlA2dFU5VUJrQzFNMXBNeU8xbkV0cExNeXNldGdrbHRSV3lXTUtNNTdCUnpaeGZtX00zRy1MUmlMbl9UQ2hWZGhFeVJ4bkV5V2hHczkxSmd5blVhQU5kOHpuOTExM3BCQQ?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Issuer",
     "dir": "pos",
     "time": "today",
     "sev": 0.45,
     "corr": 1.15,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 1.0,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → IIFL Finance",
      "Classified: Catalyst · Capacity",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2d ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-IIFL-1003"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "iifl-4",
     "index": "catalyst",
     "pillar": "Capacity",
     "title": "IIFL Finance raises $500 million in debut social bond sale",
     "desc": "IIFL Finance raised $500 million in its debut social dollar bond sale.",
     "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNRlJxd0pPczlPN3NKWlpFMWlsSTN6M2Eyc0xZZkNRWkNSS2k0WF94X2VRMVF4UmRaTllpaHc4aTJ0bVZkdmpPdWdzTHFlSTBfTjBvdG1XQ0NnS0ZXYzFYdHFMTzRzMkZHY1ZCZEplcjRFUDJtS1RwRG9CNWxGNVNPT081ajJQRGlsaWVjUWFESGhXMnI3bi1XVGhFUS1MazZVYXB4NFpDb1JkTF9EdjV4YlQycWxiUmJnUTZlQm9hYzk5NFZMZmtOWm1zUWlFRzdPY3fSAdcBQVVfeXFMTnU1MVpjS3k5VDBxdjhiaUpRLUhoZi05bV9mSU5GZVh6RGNhUXFhWkpKV01hakg3Z1lJYk5QX2VzcG5Lek9VSkEzZlFneVc2UWZzMDZYazVua0JwMkloVnY4UGdyd1QxQ3FRUWt2ZG0tM3prRGtQOXowZDRHZUU3UnlQa0pOSENqZjVzX1N0Slk1WmI4M0dPVWM1eDQ0MkhSNU5TM1lpcVpPaVJ3ekc4V09ZOVhTaGNONTRCMlBxODNLdTN3Q3BnN0JyUTctcndUalpyVEFRYms?oc=5",
     "domain": "livemint.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Issuer",
     "dir": "pos",
     "time": "3w ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.82,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → IIFL Finance",
      "Classified: Catalyst · Capacity",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-IIFL-1004"
      },
      {
       "time": "3w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "iifl-5",
     "index": "momentum",
     "pillar": "Financial",
     "title": "IIFL Finance jumps 6% on healthy Q4; Motilal Oswal eyes up to 34% upside",
     "desc": "IIFL Finance shares jumped 6% on strong Q4 results as Motilal Oswal saw up to 34% upside.",
     "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxObVVrdUYyZ1RQRGdWWmFXb0E1QWlldWZkNllETTlNd3lHY1VNN2NOR18xVDdJQURoYVRYZHgwUEEtYkZZTmlzN1I2T25ZRjdjYkl0eDBSQ3ZnY29RRWkyZm5NTkk5ajBnU1dBbWx2ZXVYVjB1RTJQVUtSdERUeGoxaHZ0S0pwQ2FzRTBlMWcycnZ1MWMweFk0QjdPMWd4TlFSd2xyeWFwLVNFazEwNHdhUm1QbGE4T2c3T19pelpxVUZ6Z1M5RmZQd3ZMQUFVMUYwTEHSAdcBQVVfeXFMTU83TTlLOC1sdnZRczBRQnJYa3pkVXF1RGM1Y2ZRTG5JZldURDFILVVZTzJmdTlFdmEzcjdvT3lDMThIeUx5U0p1NGpubWFOMmZ5WGx5Qjl1SGJVczBzYnQ1aDR0QlY4cTByLUxZclVtQ3Y0Y2dQX3VrTEVKOE9GUzRWQUZQeHNoSHVaTl9TZzdhcUVLT0xGY3FjTWoydVBiQThxRnoxaWFRME1RVkpaTWFvd2w2Uzk5Y2RER0VPc0hwUVNwZEdPckQtaThpLUlmQk1pOG9OdTg?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 1.1,
     "stg": 1.0,
     "dec": 0.71,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → IIFL Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-IIFL-1005"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "iifl-6",
     "index": "momentum",
     "pillar": "Financial",
     "title": "IIFL Finance Q3 Results: Stock tanks 15% despite sharp surge in Gold loans; Here's why",
     "desc": "IIFL Finance's Q3 results showed a sharp surge in gold loans even as the stock fell on the tax audit order.",
     "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPSXFuMG82Y3BTS3YzcE1veDNXQmViUDB1dVJWdGNNSnUwNUxfanUtTmRSalhlVUw1aXlPa0tWMEctQW4wR1M4Tmd2SUJ6WkNBNWNlUzItbjNma2JQeEpGZTNJYVlJQnlEUVVESUVGN2VKeHJiNndRNkRmb0ZBSHdzaEpidlE4Rk1ZengxR3BqbE9PUDRNX04xWkJhM0JtRWFPYTA3Q1RTMnAzbVpocXZTbTY0bVN2cV9hNFpsNHdEZm10Z9IBxwFBVV95cUxNT3V4TXJacE5ieFl2eXR6bU9hdG5iWm1Ta2NGaENGWTMyNzFSQnNOOEJRTUFyTkpvNXIyMnVXb2hFUzkxRUo1R1lnaGxtNHY5OEt3TEtCYl9jUVMyNHpLQlZZbHdia18zZDZrQ0p5UnlqRi1uNDFld0QxS1dZM093MFlKbHdfTk1zc2tNVTZLd01NZ3ZsX0VlM3BJbExXcWo2NnBYNktPeE5XSEZvOEx3Wm0tYTVSVlJ1LUNVR3V5U2xoSEhjLUM4?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "pos",
     "time": "5mo ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.41,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → IIFL Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-IIFL-1006"
      },
      {
       "time": "5mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "iifl-7",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "Reserve Bank of India imposes Rs 3.10 lakh penalty on IIFL Finance Limited",
     "desc": "The RBI imposed a Rs 3.10 lakh penalty on IIFL Finance.",
     "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOdE1hdGF5bjdjYTBmTFZIOGxOOEt4bE9LZi1adkF5Mk5KZUxVTmVNWkFidEJSdFV0MjRCUDU3TmRMM2l3RHVlRWxXVkJadEpmNk9mWVo5X1NKdV91X052dWlRZXlRZ2VyUmRmc0QtY0pIdlVESUJFR3JXWkJ4SnJUdU1EVWcwSHVHenBKR1ZSbl9WNDRlaTUzb2QzN1B1ci01VkhuNzg1Rzd3Q09wOURTV2IyRnJjaEY1ZENtRnNmb21hdw?oc=5",
     "domain": "aninews.in",
     "source": "Agency wires",
     "sourceSector": "NBFC",
     "direction": "Subject — penalized",
     "dir": "neg",
     "time": "1mo ago",
     "sev": 0.7,
     "corr": 1.3,
     "vel": 1.1,
     "stg": 0.3,
     "dec": 0.8,
     "stage": "resolution",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → IIFL Finance",
      "Classified: Controversy · Legal & compliance · resolution",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-IIFL-1007"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "iifl-8",
     "index": "catalyst",
     "pillar": "Capacity",
     "title": "IIFL Finance plans to raise $400 million in ECBs",
     "desc": "IIFL Finance plans to raise $400 million through external commercial borrowings.",
     "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOVkhwSGNRUjdJd3ZIdUxacGFtbTFWWWx0dHp1WGhhRDJnbS1lWldBbVRPdHprbVNCQWdRYkFySUlPR3hXSWNEV0FocE56Z1pFMlJwTXVZQ18wdlBTdGNicVFLWEw1TmxDM0lPYWhpQkZ0T3lMNkFESnRVYzJ6MDJGZ2ZQeWV1dEVtVTRqbVFJUmVNUlUwbW9wWXVfNGhzWlNNVFc0S2dMN19RN1A2M0ZweFJQc2xwdmI1Wjk1N2lB0gHDAUFVX3lxTFBBZWJ0bkJfMEZwQ1ZlMDFpdFQwX2p1ZGdnREUzRVhfWFpIRG5Jek9TU19XZmdPbW5MeTBVVHJDZGUtUk02OWRSNE1wMHJiTk9adjBMU3FZSEwtdTZ5MGY3RDBqdlI2Z21GSmk1eEtqaHl5VjNVc3RxVWVkR2lqZHdhV193cGR4NmJnV2daaEJmSl9MY185MV9BVlI1azVHMzA2QUpSbEJwSFd6dTVzTXFQMDhFU3pQbnhWQWdQZGo5cnp1Zw?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Issuer",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.35,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.66,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → IIFL Finance",
      "Classified: Catalyst · Capacity",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-IIFL-1008"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "iifl-9",
     "index": "sentiment",
     "pillar": "Sectoral",
     "title": "Gold, silver prices hit 7-month low: Hindustan Zinc, IIFL Finance shares fall up to 3%",
     "desc": "IIFL Finance shares fell as gold and silver prices hit a seven-month low.",
     "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPNlJMd29mdWVyYkxuVkRIcFdzak9PQndaZTA2T2VucWs1dTlrcWRrTEwzODVUdGFuR3docENoc3lJOXYwcDF1OXRmTGJpVzdoeDlyMGJLN0lLVFVvQVo1UTNEeVg3b0lJQ1dvek9vMDhuQ3QwZXhTT2NsZ0NIY2FlcmpuT0RMRElPckhzU0MzMEtmVnUtdk91bERzSFlnWk1hemtkVXB5bERUTERCaTh4dGlMM2dqd3FvU1ViX3ZLa1Z2cFI2NHFob0xOUlVIS2s2U3JVYmFacTJScWpH0gHiAUFVX3lxTE5OZXVJU1E5Vng3OUk4NHp0cm93RXUwR3F6VENjcG5iUm94VXo5MHh0UE9pazA0SmhoRTluY2lQdks0LXB3dDN2enlzb3Vfcm9Hd0YybzNmeGhraTVkQTNuWDQ2MmswaENHelN2T1RjeGhXVzViVzdNWDBjUHZ1cklTWVRyOXJTczFJOE1tWkl4SVhseFM4cTUtczc4LW5PelZOM1JjV3RjS3VpeFo0Q1liS1k3UWcxN21hWWRkVFdsV21xMGFfSnB5cldBVVpXOFVyNlZJbVFUR0NxeTFjSTVNcXc?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Subject",
     "dir": "neg",
     "time": "4d ago",
     "sev": 0.2,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.91,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → IIFL Finance",
      "Classified: Sentiment · Sectoral",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-IIFL-1009"
      },
      {
       "time": "4d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "iifl-10",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "Supreme Court Appoints Former Judge Justice Abhay Oka As Mediator In IIFL Finance-Paramvir Developers...",
     "desc": "The Supreme Court appointed former judge Justice Abhay Oka as mediator in the IIFL Finance-Paramvir Developers dispute.",
     "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOOGFNSFZOLU5nV2Z2R3g1TWZDVk1uWE1XUWtzVjVNenhmcmN2Tkw0LUhIV1Q5YUR5R0F2MTNYS2JJTGVhdXVnaGFzdzlQdkRSeXowX0FaM3gyNUVBNVBjbGdxN0RXRUdQLTJzVE9GNGx6SThfSlN3UmIwUWFGOWhnb0VXUDJWVU5tcEE1N2xCQzIxV01BOVlqQ1ZTb0ZlcGw4RmRjNUlYNE5SWWZBa0NNY24wMUxBbFFnZFJzekRRb2NBRGstaUxjUm9yY0lIenVfSS1GTE95WDI1UdIB3wFBVV95cUxNNUFwQktPbk5GaS12bXNRZV9OdkxyZkhPeFZvTzBaM1daRFU2aElrbXhMbHFkTVlDSmZjYV8tZ3l5eThYZFJ4QXR6MVNwNlctTlJnc1lPZDlMMjlmWi04LXdMaDl0aW5zbEhJbm9xcU9abEJYcUpkeXpfMzhhQ3hzMU5WSkNCSnVaTEpLTGNOWm9PbGZGVGE5LW1SdEVlaHhUWEpUQXVaMGZicWZsZ3NnWER3X1VyREFaM0RPU2ZGVGpQSExhMDkzTWZobHZqSXRwbFVHbEc2VXJfNDdJWUlv?oc=5",
     "domain": "livelawbiz.com",
     "source": "Aggregators & other",
     "sourceSector": "NBFC",
     "direction": "Subject — defendant",
     "dir": "neg",
     "time": "today",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.2,
     "dec": 1.0,
     "stage": "probe",
     "quarantined": true,
     "corroboration": [
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → IIFL Finance",
      "Classified: Controversy · Legal & compliance · probe",
      "Corroborated across 1 source class(es)",
      "Quarantined (trust cell below 0.5)"
     ],
     "audit": [
      {
       "time": "today",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-IIFL-1010"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Quarantined (low trust)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "iifl-11",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Piramal Finance and IIFL in exploratory talks for an MFI deal: Sources",
     "desc": "Piramal Finance and IIFL Finance are in exploratory talks over a deal for the Samasta microfinance business.",
     "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxOWmdXMzJsQU5ZN2s0TzNDdHlkaTR6WnJqNGQtWUV1Sm5HUGg2VHVkNzZ4aldrcUMtSC1faXFaZVhwa0lQam5vaE9BeWg5VWdjZ0FiTU1LcnV4NDc0amk0M1FhS1BXVk1TMklfU2ZPOWlvdjdvM2lxRFJ5a3BvSVpFNURBcjc0WThkZTJjWUI3eHQ4QUxtcHNRN0RTZXRQbXFMaWlObFppdS1yVUVJSkdITHVsNXQ1bFZEYS1XQngxY2pVZzhFUnVGNFNXemLSAdIBQVVfeXFMT19Ramp2dmtRWEZiSXR6RGdoaWw1S1p1ZmEwbWo3U3k1OEs3b2puMGRhem05WDRHRVVUNUR5OVF1Mmc0blA0M2tzMWZJTS1oWUVOakIxVmhNOVV1dTBtWTQ5VklJb21ucnRYU25wM1NlX01sdVRQMWJ5VVB4ZzJIQVI5a2lXSDliRThtdjVyZzhZX055YUk3enJFVWl4ZUhHSmp5VnhYU2FVcU9qUDRNTHppb2NvbkNqV20wY3NZLVlqa0lJVGczbmIxNEFSY3JSV3dR?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "Seller",
     "dir": "pos",
     "time": "3mo ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.2,
     "stg": 1.0,
     "dec": 0.26,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → IIFL Finance",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-IIFL-1011"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 261
  },
  "manappuram": {
   "name": "Manappuram Finance",
   "ticker": "MANAPPURAM",
   "sector": "Gold-loan NBFC",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 12,
    "risk": 21,
    "esg": 0,
    "momentum": 32,
    "catalyst": 23,
    "sentiment": 4
   },
   "trend": -4,
   "quarantined": 11,
   "narrative": "Manappuram Finance: Manappuram Finance swung to a Rs 405-crore Q4 profit and announced a Rs 0.50 dividend — lifting the opportunity side. Manappuram and Muthoot Finance shares fell up to 7% as a gold slump raised growth concerns — driving the risk index. 11 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    60,
    59,
    58,
    61,
    62,
    61,
    61,
    61,
    60,
    58,
    57,
    57
   ],
   "indexHistory": {
    "controversy": [
     16,
     15,
     18,
     17,
     16,
     16,
     15,
     14,
     14,
     13,
     13,
     12
    ],
    "risk": [
     19,
     19,
     18,
     18,
     17,
     17,
     16,
     16,
     16,
     22,
     22,
     21
    ],
    "esg": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "momentum": [
     23,
     22,
     21,
     31,
     36,
     35,
     34,
     34,
     33,
     32,
     30,
     29
    ],
    "catalyst": [
     42,
     40,
     39,
     37,
     35,
     33,
     32,
     30,
     28,
     27,
     25,
     24
    ],
    "sentiment": [
     13,
     12,
     11,
     10,
     9,
     8,
     7,
     7,
     6,
     6,
     5,
     4
    ]
   },
   "articleCount": 140,
   "events": [
    {
     "id": "manappuram-0",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Manappuram Finance Q4 Results: Firm swings to black with ₹405 crore profit, announces ₹0.50 dividend",
     "desc": "Manappuram Finance swung to a Rs 405-crore Q4 profit and announced a Rs 0.50 dividend.",
     "url": "https://news.google.com/rss/articles/CBMiggJBVV95cUxOZEpULWloZmlNMU5qZm5jNC1udHFYRFhzcnZUOEZPaXFvTXpNQWk2UEFSTkpCRnI5QTFmMDVwOUgxaHlwOG45bTlqdGtHMGpLdEVBSW1OeUg0MVNlODZYVkxCeEUwRXhwNlZNOGJCaVhCSGJWZDRxWXhiUVRmTXBkYlJUdW11cGktRnl1dGIxck93cnlfQkJGZnFlaUNyNFZkOUxHSXVpN0ZmYXdBMllYZ29sTXZ6cnpMYWFBM0I2MzlabFVmYWlqOVlfaEY4WklvV3hkM3FkM3hTM0J1NWZUandoeFVsT1hYdG9lX1B4eUVEUUdhWldSVE9WOUxzM2pJTHfSAYcCQVVfeXFMUEU5YzJRbS13MWtXcW5mU3NwMWdtZjBfZE1OUmhMSWdybThTaWdUZ0ZSbnBHZGJQLTVUVTl1VjFlY3ZWMEVwczhCT19aTzF6RHJFNllVbVA4ODI4Z0lJWktIOThHbmJHek5GYW55Yy05YkkyMWlULUdkb0wyZWVDZzVucHZFSkllcGFkak5Id0NKQ0xINUJIdjFhZWdhTEJGU0g2aFc3dW53TE5IekhWU1B0d2h3VHlOd3lyOWdLS3NaaS0tX3FDV1NvRU1EaFZRTEFWU0s0VVlFVkU2SElqZ29TMndDc2JLUDh0Z0FCMmdnVWY3Q29DdmtjVnNvdFBORS1vdDVLZHc?oc=5",
     "domain": "livemint.com",
     "source": "Business press",
     "sourceSector": "Gold-loan NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.55,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.73,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Manappuram Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-MANAPPURAM-1000"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Gold-loan NBFC)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "manappuram-1",
     "index": "risk",
     "pillar": "Concentration",
     "title": "Manappuram, Muthoot Finance shares fall up to 7% as gold slump raises growth concerns",
     "desc": "Manappuram and Muthoot Finance shares fell up to 7% as a gold slump raised growth concerns.",
     "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxON0JRcHF4MmNsV2lhLVIwN2NDdXNNS19XSGJ2bEd0WGpDR0IwV2JFRi1rVktOWU5ydWZfaWRfNEI5ZUR3Z19GOE82Qmo3VlVMZ3lxd0tBVEd2Rk1MeFg3SmVmMy1QZFAxRmx4cG85b1c1Y2VmN3pLRjB2eWZ4a0w3ZVpONDZaUnZRX2t0UEdncjVlS2wyTE9uQlFWZXhkN2ZXaVFocEJTa0llb2lZMVY0ZmQ3SENicE1DX0Vmc052bWVLTTlDY3BIVlJEV3g3bjRJRGprRlhfbDlRY01hcjZmUE95dnFIeTVCb0QxWUV30gHzAUFVX3lxTFBqNTdTaTVwUUYxTm00cUdpVTZvYU9HdVFvTGthZ0YxYzU0dEtta1BjTFRmLWN6OXJUaTF2UVVLVWU0MTc1S2lVQWpuaGtJckZDTEY2ZzR2Zm9uckRpWlJVYmpsU3hhOTJBQ2tBRFpQYVYzN24zNnlWcm14R3ZQWGgyeDZoc2ZLTjVoOUIxSlhtNU5NNldyTnNIb0NCMlhqUHNPbXJxWk12bkdZN1VhQ25XcFJDV095NjdpcV9JSXJkekcwdFlkTkdUQlBSTThabUhmZEhleUEwZGpZZmkxUF8ydTByQ2o5TjVMNHpSMXBWSXV2dw?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "Gold-loan NBFC",
     "direction": "sector",
     "dir": "neg",
     "time": "4d ago",
     "sev": 0.45,
     "corr": 1.0,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.98,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Manappuram Finance",
      "Classified: Risk · Concentration",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-MANAPPURAM-1001"
      },
      {
       "time": "4d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Gold-loan NBFC)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "manappuram-2",
     "index": "momentum",
     "pillar": "Commercial",
     "title": "Manappuram’s gold loan boom sets stage for earnings rebound this fiscal",
     "desc": "A report said Manappuram's gold loan boom set the stage for an earnings rebound this fiscal.",
     "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPMWZIVFozWmNna183dGt4cS1WZ0xub1hWSVRpVmZkS3Awc1BBWS1tUGEwVTRkVVA4YlZUM0xfbHJteERkZGw1cXM4VzB3Sm1Ddjl5aE9sUndhOUxJa25JUW9ic3pDUmtCazJ2aW1Ba1ppanphYzJlVDZpUDZlUGtweWNYSGZsTGloMkYwZDVvLUlFbFp4QXVxaGZZc213NC03N1d3c0hyZWdXQUhnZzVKTkpIUTZ5OE1yRVZPMXZhaUhMUDJjempIREhXRHhwdmPSAdQBQVVfeXFMUGdHM2Q5NUlCc2d5ZHA4U3NON0ZSRHdNNTFaS1I4TkI5dEJqS1VpODhLYkpSSV9KYVdtVnQxeDNwcDhDYzJPcDJoXzVlMV9fYk5qeG54OWF6TC15LXpsNTRhaktpYkZDcE9HUWxCaDRkZkhoV2dtTE5tUGx3elJ3LVo4ZTYtcXQtZk01M0N0dG1uTU45bjNGMmZFR2sxOWtKTVl1LWExMER6di1Rc2xhbU1pNlFIVGZZbl9uRm5BLVl3cnVCcXpnY0swUkFWZkJDd3FTeVM?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Gold-loan NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "3w ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.74,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Manappuram Finance",
      "Classified: Momentum · Commercial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-MANAPPURAM-1002"
      },
      {
       "time": "3w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Gold-loan NBFC)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "manappuram-3",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Manappuram shares get an upgrade from Jefferies after Q4 results; Here's how much the stock can rally",
     "desc": "Jefferies upgraded Manappuram Finance after its Q4 results.",
     "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxOeklxQmQwcGRLOHRCOTFnOC05YV9ZZGFVbmpkVEE4ZWlPLW4wSUhTWHIwY3pGajZ0cThxRkhBMlhUQnB6a3RoT1dsc1JVX0tNRk5SdXNyckI5NDNNYmxtNFlCREVpX2NRZXk2alBINGZ2N1p4UTVWS05PTTRXWVVBSXE5bWRNXzBXNTBTUlRjclloWkhYWnVyUFdDdW5hM3BMMzhEY3I1TTZjbXZRRWFTOV9mdjJVMFAtTTdlQ2k5TUJONEtJNnBCX0dSNDB2Y0QycUJ1VXdYWEdPbmRhVTg4aS1PWW9fV3A3N1hn0gHwAUFVX3lxTE5BM0JjZGpnWVYtanFpN3RBMmVSV1pBZ1pkM2l1ZUtFSUhEcHR3NmN0UmxVUmV1WHBkV2Z3eDN5TWVzUm5abGJSejY4NTVqVm9DeUJ5RWRVUzR3Z2dBYnIwUEtHODF3Y2FuQ1Y3VW8zWUlRUU56ZnFmVExVd3NsVUJwU0ZFbWh0T2FNUC1lTmpraURhVHJLdzhkR0FvU3l6eW1hYXNBMzlDeEdCZEFLNmRJbGJFQXRkZE9mODRlNWhfc25EY0JWczZYeGFUTmgwSURmV1lqQVZmVzRqckRmUm9TRFgtN3ZTZlM4MTBTYmRfRg?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "Gold-loan NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1w ago",
     "sev": 0.35,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.94,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Manappuram Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-MANAPPURAM-1003"
      },
      {
       "time": "1w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Gold-loan NBFC)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "manappuram-4",
     "index": "controversy",
     "pillar": "Key-person risk",
     "title": "Manappuram CEO takes medical leave as Bain Capital gains nomination rights",
     "desc": "Manappuram's CEO went on medical leave as Bain Capital gained board nomination rights.",
     "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQS2lCRGpHTGtmZ1pqUkRxa0pyZGpYTHRoZXhteXlxWkw1M3gwUlFjcWR6ME5DQzZWOXA0U3ZZaEVoN1daTXlXUzQ2Qnd6Nm1xZUpSSWJraVVobmpvOUgxaDB5dHNYclpMN1I2SGg1X2NtUDFlNkVyRjRaellQcXliSHpUWkxzZWdKUEhGaTJualV2eDJvX0lJclNaRVhYTG5oOHdDSFlULXBrcnhQbGI1Y3YtcTFzd1NoN2t2VVRSRWhjVDBTVVA1blBmV2dKMXc4ekHSAdcBQVVfeXFMT2k1UENoaXJKbnVwaHRCWTNYLUE1MzVETXNNZFVCZjRndVp1cXl5NS1VeG1LYUNRN1p4VzBsQ2tRRUFfam5fbFo1WENRN1VPUldLcHctcmR6dk5TUmRncVZPbFRTc0d1Z0h0N2E4UDM5cmJ6OEM3bm1TRmxwQW5NQXhhSzBQRmtMal91V0IwSmVtVTJqZEp1TmR6ZU1uQVBtX3pfbmtkUUpKQUFMd3FYSl90eFdnX0kzSHRGams5c055bU5BS0JRMU5xS2hFOHk5dHJwdXlpSmM?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "Gold-loan NBFC",
     "direction": "subject",
     "dir": "neg",
     "time": "4mo ago",
     "sev": 0.55,
     "corr": 1.15,
     "vel": 1.2,
     "stg": 1.0,
     "dec": 0.39,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → Manappuram Finance",
      "Classified: Controversy · Key-person risk",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-MANAPPURAM-1004"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Gold-loan NBFC)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "manappuram-5",
     "index": "risk",
     "pillar": "Concentration",
     "title": "Gold price crash: Muthoot Finance, Manappuram & gold financers tumbled up to 7% today",
     "desc": "Muthoot, Manappuram and other gold financiers tumbled up to 7% on a gold price crash.",
     "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxOTENBdzY1RGJuWU9oQnNteW5NdGdaVlhSZHAzMGhYbEZxanlsX0xOcG9uZmg4eFotaktmNDJLd2dsNVpnV0w0Qmx2SDRUSnpKOHNaSDZibFBYYTk3OVk5UmhKSWN3eEFCSDd4bG1Sd0c1OEtGUWNHREliQUFtdGQ5ZHF0aHp3TXQxeHR5bnk4bXM0Rzh0N0Q3Ri1IUElQMjlnR3MxM28yR09yN0lDejRPaGU2eUo3Vm1NbUR1d19XMUpLUjVuZHBReGFRVUsxWTNWcnVZRFhHeXZsMkxBbWFCRzJ30gHnAUFVX3lxTFB0MHN5RkxDZmM2aDN3am01NEJNMExPZlIwbnVTbGE5eFh4b0hQSllzM0xnMFdvOEdvUFFXWEhSc2l0WnhkNk1JT0Qtd3hfVHBzdlBEYmZMVUhPdUNiTktNNFY1WVoyaFI2d0RtVG80OWJobGhZZlhBTmRsSVdPelFOT1hJV1lYSHlsYWhkbGtWbGRfakZzX0pfMVRNLVNSMnlmMjE5RHFEWm0zNHVyNjZzTjJCZmlnQ3VhTHI2ZFFaTzF0VlEzQkxmVFpmX0EyV2xUWkVTZXhidDdtRlY2bU01UWhwalgwUQ?oc=5",
     "domain": "businesstoday.in",
     "source": "Business press",
     "sourceSector": "Gold-loan NBFC",
     "direction": "sector",
     "dir": "neg",
     "time": "3mo ago",
     "sev": 0.45,
     "corr": 1.0,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.64,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (3 article(s))",
      "Resolved entity → Manappuram Finance",
      "Classified: Risk · Concentration",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-MANAPPURAM-1005"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Gold-loan NBFC)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "manappuram-6",
     "index": "risk",
     "pillar": "Concentration",
     "title": "Muthoot, Manappuram Finance crack up to 8% amid Gold price slide",
     "desc": "Muthoot and Manappuram Finance shares fell up to 8% amid a slide in gold prices.",
     "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxORHh4blBVRXpXdVZ4MlFZQngwVUZqbnVTREZhUTMyWG92bTNXckc5bWxXcjZveWdJT01pd05mSHktS3B1OXFVaTlJcDU0eUllN2FKSUU4b2RKRFY3YmFQOWJTTWsxOUlzLWZUaWlaYUZaSW9EUmZqRlFYNmJrY014ZENybF9TcVR6MHVtUVMwOWNMMG5PY3dVa0pnSXo2eEJwazJtaU1tRmJYcUFpZUNld01neVEtdWgzZUhwMWFtODZNaDFFa2kwNtIBzgFBVV95cUxOUmY3bUw1Ukg1ZU5sLVkwcUpvQTBIY1pRcnlLMnpKMmhGVG5sN0w5NXhQSVJyNVl2LXJieEU0by10aGVWWW5iOWlsS0tydUZqakkyYzY4WGNPd2ljTXpzRDN1V1hOS3hlVW9FaGpOWDNTTzdYQ0xnbGY0VzNmLWxibEk1cDVldGFqSUpBdnFuanQ3LXNpRldfUGZPNVNxU2wyNG1rVXFOWXJNVDEtLWtORktIWmZBV3FFa1NMMVN2cklsRnFZcExWanlEekV3UQ?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "Gold-loan NBFC",
     "direction": "sector",
     "dir": "neg",
     "time": "4mo ago",
     "sev": 0.45,
     "corr": 1.0,
     "vel": 1.1,
     "stg": 1.0,
     "dec": 0.5,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → Manappuram Finance",
      "Classified: Risk · Concentration",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-MANAPPURAM-1006"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Gold-loan NBFC)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "manappuram-7",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Manappuram Finance shares jump 7% as Bain Capital's 26% open offer kicks off April 6",
     "desc": "Manappuram Finance shares jumped 7% as Bain Capital's 26% open offer was set to begin April 6.",
     "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxOdzJzd09HWFgyRzdMQmxweERxbFZ2eGNjcUs4eDBnTndvT29yb2V2RGFtZnVNUktJaWR6SC0wSHpFc2ZLODVuVzdKX1RvLUhSX295eUZSaTNpVlgzTlpYVzRqSTljY09pazdrOXNKM3ZFSjVpZ1JBcEoxZlgzLVdyNDRiLUoyUDY3MnRZWU50WDNBVkQ1MHRrY2Yzbko5Tmc3M3VadmlTeUsyTHpzcU4zVnRKallDdHNMUm5WMnZvQWs4QkszOXNCT0ltQVpOLW8zbmhubThWTTFDT0dSQXpEZkJPNjlCZUtrT3BaSXVn0gHzAUFVX3lxTE1hcm5aVzZwamU2NFQyaV95Y0VpNjJuWmxJLWJKRXdWS1RFVzBNX3BtWXNZOXVpaDNoNmxSZDltQ3hNOWIyTWVCQU9YRHU1WlBvNFMtd3pULU1OdnJTRDhaNkdsTVR5YjExeUxvM2JDWjc4LVpZVVRxRHliOWIxWVRqWXlTc01Ic0N0bGdBbTl6QTN3N3dHTzdxY2I2S2xIZThnaDljaEFFTURHa0QyNEY4N3NVUVJycUJPNm03aTZsVURuZHpWSEtCTXFlaTN4MUZSOHhTSDFfNTloSzR2ODNzX0Z5RFZxV1B4bjg2Vml4VjBnUQ?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Gold-loan NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "3mo ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.33,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Manappuram Finance",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-MANAPPURAM-1007"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Gold-loan NBFC)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "manappuram-8",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "RBI clears Bain Capital’s joint control of Manappuram Finance, subsidiaries",
     "desc": "RBI cleared Bain Capital's joint control of Manappuram Finance and its subsidiaries.",
     "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOZk9xaWlEOFhXZHYyNVczeldsbzJEUVA5WGVpd1RXb2owY1hmMVo1OFY3TzYxZjZybmZqVXhzcVIwcVNzVlE0OVZGTlJ6b0s0VEI1MHZmcUpKNGhzWGNnaWNPWXZBMWRra0RyU3NMalh1cVQ5ZWxIS0xPdjM0Sm5SWTgzOU9fXzdwSUx4MXJwYW9tSDNXVUoyZzd0WlNBLUpMcTZ6T3AwSzl2bzdUTC16Sk95X01Ma1hYaVRQUXVJWV8yQ1JpMnQtcDlNTEs2QdIB0wFBVV95cUxOUmF0ZmZGSG9WUVh2d1JSMUVmcUlzUDJBbFZXUkFKeDVyeU12N01FRFNZS21IdnBXbUNlWEVNZmQxNHdZNnVoRkRqUmtmMnIwM1lDT1Z2SWx3R1B2X2xJTExDRlhsUVFxYm1ST1Z2LUFhWEZ1dXJNYjhjMHVRTnFhRWs0X29GYmFjWkNVbjR5WnZ5YVJMMTg3ZTEteDJtZzRoNnhTTkZaTzdsT0doa1V5WFlBWmI5YW03Tzk3TGotbExhZTZmTzc0R0tSNDF5OHRoZ3lB?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "Gold-loan NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "3mo ago",
     "sev": 0.55,
     "corr": 1.0,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.3,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Manappuram Finance",
      "Classified: Catalyst · Corporate",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-MANAPPURAM-1008"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Gold-loan NBFC)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "manappuram-9",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "Magellanic Cloud arm receives LoI from Manappuram Finance",
     "desc": "A Magellanic Cloud arm received a letter of intent from Manappuram Finance for AI-powered surveillance across 1,000 branches.",
     "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNR3huSDlXc2RVMzZxc1poNldISW5ZcFhobjd4ZVVXazI5cEVMSnRiNnhYVkJadDJtcGxYVUg0bVV3Z2JRb2NIOWhnRGVYVmRlSlV3ZTE3eXY5ZDBQb2hQNk13NWItdVRqLUZFbGlaX0RWVHpMS3RvNF9CTlp4VEZFbjVod29lbHpCbkVBSnF0V2NVdzVEbDVYQm9sTHZwT0ZvWFZtMHhzOVJnUWdrNkN1anZvZ3RGczVyYmpudXlZRHVtX3UtU21RNXNadjNtbzFfRFUyaHB30gHbAUFVX3lxTFA2WW5PY2tmanF0eDBDQ0NFMUJGODljLWFmSEVwRjVtdE1tVUJGZENNcFlPczVtek5sRjFvaXQ1Q3l5UlNwYlZRMjFUYUV3MTV6UXhhNTZwUEN3aEd0X20wZkZORUdyTHBFd1dYUU1zSzBPQUIzejdxYVZmdXpVbldSU1VFRDVjamtXQ2ZCVjZjNm95cnUtMXR5WndoTjlFekxZRks5cVBiYWhKc1VwWmVIVEdxdmo2MTVPb0VUZjNuZGRYSlYzLUcxT1lVWnFhTzBfWHVNUjdoTzV3Zw?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "Gold-loan NBFC",
     "direction": "counterparty",
     "dir": "pos",
     "time": "today",
     "sev": 0.2,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 1.0,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → Manappuram Finance",
      "Classified: Momentum · Strategic",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "today",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-MANAPPURAM-1009"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Gold-loan NBFC)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "manappuram-10",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Bain Capital may have to offload majority stake in Tyget Capital, say sources",
     "desc": "Sources said Bain Capital may have to offload its majority stake in Tyger Capital for the Manappuram deal.",
     "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxNbEZwQncycDlHU0dkeEVxTkVZSWs1VTZZMW5RVm9rS3BSY2YtOUQ1VkNMd2pvSXBPcnhDS2Y1bGYzZG9weVk0a1NQU1JCVWtZRExqVjdaZGdvVVBhWGI4VFpPRF9rT1A5Smo5U0J3azdpOE9keERxLS1oQWFxRDFEdTNibGE2VXlIZXRxTGZ5UVEwcDN2RUE0WkR2cEg5RVM2YVlWcFdKRzZSckV1UTZYa2syUHRGNUh3d1hpZWVqMWhBelVQVkJjT3FMWGY0eEnSAdYBQVVfeXFMTTBLdzNIQkFEaEwybFNZYUFNVlRNbGRZOE9YM2Ixa19XcWVzSHhhcktEcU9Ga001WU9kbmNOMGVPeHFGNFNiU00yb3I2aWd1S1VoNmhSeDdrSHltUkdhNTdxQW1qd2xNOWFxblNLSS1jMkVteEdkWVg0NWVWeENaTy1QYUFuYkc4WTFmb3kwMEZ6WXhwWmtSRlpfWjRqMG5TR21LV1NMOFpYT2VBYzMzckFqYmhBMXZ0VTVkNkt1QkM4dWN5cUhYRFhjblRLZ2t0RnZHYTFFZw?oc=5",
     "domain": "thehindubusinessline.com",
     "source": "Business press",
     "sourceSector": "Gold-loan NBFC",
     "direction": "subject",
     "dir": "neg",
     "time": "3mo ago",
     "sev": 0.5,
     "corr": 1.3,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.35,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Low"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → Manappuram Finance",
      "Classified: Catalyst · Corporate",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-MANAPPURAM-1010"
      },
      {
       "time": "3mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Gold-loan NBFC)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "manappuram-11",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "RBI clears Bain Capital’s 41.7% joint control in Manappuram Finance; Rs 4,385 cr investment moves ahead",
     "desc": "RBI cleared Bain Capital's 41.7% joint-control acquisition in Manappuram Finance, advancing the Rs 4,385-crore investment.",
     "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxONGtYYmNPMDNaLW5OclJ4YXRDVlRFUTRWU05EdTJMMVkyQ2xEUzBINmhPUzQ0Z3ZMNGZUc3ZmZFk1QnFEVjNRenczUHd5djk3TVBsZzZSeVlsejBJOHVxeWFORFJBUEFDY2JSeWtnY1duVjhZTVJOMjAwamh1UWkzdmdubUwxZVd2cF83MVNCUlpnZlhEN3l6cXVpenI2UUx0bDZvQjZOS0J1OFJuU1oxT2xJRGFtX3BFRUVmcEFTNXAxR1ZGS0dDdURiQmZrTlNSWE9RS0d3bllXbEtTbUQxb3VBX1k3ZldpSUx0a3lhcnZxUdIB9wFBVV95cUxQR2NBdVBRaElZR0FRVGtEd1F0R3dyUDlkazN1U2k1R0hKM3JzdmYtVUlnWHBtcGFQbWVzNmJvbHQwTEhSSl9oOGU4NVcxVE81SFF4Ym1SYkozUG1MSlBMSlhLczlsTk9XSWJIZmk2Y3RyTFRvbzJSLWNOU1FhMVU5MmgwU0xGd29ucmRzakgxa0ZoR3g3MVBYZFlvZ3pvZjVwMnJxdVptejhyX1dhZTktWndZUFV1dWxVM3ZHQlhCQjVWTUpjX1Jremx2YV9xSXRnNFlXZVZ3N1U0NHlBMHFDWE9NZE5IaUpwaHY1TTMzaGowOXJHU0xB?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Gold-loan NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "4mo ago",
     "sev": 0.6,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.21,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Manappuram Finance",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-MANAPPURAM-1011"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Gold-loan NBFC)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 334
  },
  "pnbhousing": {
   "name": "PNB Housing Finance",
   "ticker": "PNBHOUSING",
   "sector": "Housing finance",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 19,
    "risk": 17,
    "esg": 0,
    "momentum": 31,
    "catalyst": 0,
    "sentiment": 6
   },
   "trend": 0,
   "quarantined": 16,
   "narrative": "PNB Housing Finance: PNB Housing Finance posted higher Q4 profit on robust loan growth and improved asset quality — lifting the opportunity side. CBI filed a seventh chargesheet in the builder-banker nexus case against Sequel Buildcon, a matter linked to housing lenders including PNB Housing — driving the controversy index. 16 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    55,
    57,
    58,
    57,
    55,
    52,
    52,
    52,
    52,
    52,
    51,
    52
   ],
   "indexHistory": {
    "controversy": [
     14,
     14,
     13,
     13,
     13,
     23,
     22,
     21,
     21,
     20,
     20,
     19
    ],
    "risk": [
     0,
     5,
     12,
     12,
     19,
     19,
     18,
     18,
     18,
     17,
     17,
     16
    ],
    "esg": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "momentum": [
     22,
     33,
     41,
     39,
     38,
     37,
     37,
     36,
     34,
     33,
     32,
     31
    ],
    "catalyst": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "sentiment": [
     10,
     10,
     9,
     9,
     8,
     8,
     7,
     7,
     7,
     6,
     6,
     6
    ]
   },
   "articleCount": 83,
   "events": [
    {
     "id": "pnbhousing-0",
     "index": "momentum",
     "pillar": "Financial",
     "title": "India's PNB Housing Finance posts higher profit on robust loan growth, asset quality boost",
     "desc": "PNB Housing Finance posted higher Q4 profit on robust loan growth and improved asset quality.",
     "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPNE5xSG82RjAtckg3OEd2TE5STlpSMHlDaWJaTUlNdjFGMmZONVE0ajhNejUwZFcwT0dmd3ROSFY0c1hGeHVpV2JTSy1sVld0ZFdDZ2ZBZlFGLUJ5QmJHYjRjVFBUbHM5LVFTNXF5WHRrdWZId2tldDdFd21EQ1haWnRXM1ZrWkFMOEpSRVVwVEt6UzdGcjFGVGR5V0tJaDhTSGdJSEtzN3Rqbl9IQVpYNGhIYlB2aXZpNU9rNDgyV3JfNGp0RkE?oc=5",
     "domain": "reuters.com",
     "source": "Agency wires",
     "sourceSector": "Housing finance",
     "direction": "primary",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.45,
     "corr": 1.3,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.67,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → PNB Housing Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PNBHOUSING-1000"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Housing finance)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "pnbhousing-1",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "CBI files seventh chargesheet in builder-banker nexus 'scam' against Sequel Buildcon",
     "desc": "CBI filed a seventh chargesheet in the builder-banker nexus case against Sequel Buildcon, a matter linked to housing lenders including PNB Housing.",
     "url": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxQanRTNzBiNUFta3ptLV9yZ2UzTzlWWnZ0bUd0a2Jraml0N2FVck1Wa21Ubkh3bzRTLUFrbHhwWHVPUGJIY2ZyYkkyNU9xc0hXTXdqNVMyUG1lVlo0YjdaZnNvMlQ0ekxBMkZIVDY3dkMydHh1VGtubXBSNUcxWnAzRFUyXzhyaF9LQTl0UWwwZ2o0SXYzd3dtNHdMckdpSmY2M3JTaGpnd045WnJDX0VESkx3WExFWjFhRjVBZ3RxcmpnYlliMjFJUUhaZVhYS09Ld1dPNkJ3T21BcXJWY3FhSFFHOXhwTzTSAewBQVVfeXFMTko1RjlLU1JFR285alN3RFNzeC1VVklDN1pOZVpBbDFPYlhSeW9HZVdvZ005RUFYWHNMMzZYVXNkSWhIdzJqUmNWQUczc3ZnV2xiS29HcXpRYmIyUU5ZNFQxWHFnc2lhd1diMzF4eTR5ZXRzRFA3ZUVTUnAwc2FhZlAwZmNBV2V2cmhob0k5Z1NrLVFvSldubjMtS21EMm02QjRCYmNzM0dfYUhZcmVad2FwaEhURkhITUNIVi15dFZSdklyX3dNdnlVRE1laTg0bFlFd2Y1Ri1IS2FkbS12Qi1kVHNVY3llaXFaVDQ?oc=5",
     "domain": "realty.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Housing finance",
     "direction": "peripheral",
     "dir": "neg",
     "time": "1mo ago",
     "sev": 0.5,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.4,
     "dec": 0.76,
     "stage": "charge",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (1 article(s))",
      "Resolved entity → PNB Housing Finance",
      "Classified: Controversy · Legal & compliance · charge",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PNBHOUSING-1001"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Housing finance)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "pnbhousing-2",
     "index": "controversy",
     "pillar": "Financial integrity",
     "title": "NHB flags ₹933 crore additional bad loans in PNB Housing Finance's books",
     "desc": "Regulator NHB flagged Rs 933 crore of additional bad loans in PNB Housing Finance's books.",
     "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxOcE1oOXJCbVE0QjdhMEQyMnUySmRGS1dKbzBWaWVZcmZPS3ZkVWJzZ21NN2QySC1xSW1PZXBvNDZoNHdNaTFMVTVKdFdfOW9YU1NMR3NxcVRuUVVoUl91LTZWS201d1drckFVbm54R3NGSldNbkZ3TU12MmlaOHV3dEpTMGdfOUQtV0szTTMycGlVaDZLaTRhQU9taEdjdnRqNlY2aG5YUXJOOWVFdmJVV19VNFYxZWloWDVoRDhraU50ZE9KMW5aQ3h2ak5ZYmZ6RFlPRHRGc0dWTi04MVg3VNIB5gFBVV95cUxQNjJKdUIwQVh2SjNqa0RiQVRkQjRxRUJhT2RZN2RxVENrMEJYTUVWalFFdXNqWHdtajJVR0dQVmU1c0hRU0NnbFA2Q3Etb1RvQjRxVW1GT2taOFliWjVoZElOenAweEJRZW1WTjVPVm9xS0w3cXJJY3FVODdNc0RreGduQ3NLNGxjeUI4M1VBMWt1ZVQ1V3BVcndOanB3QzdxeVk2ZlRRR3laVEJNUFpnUl9DRl9PT2xRQ0tnaExReFlSUkVBemRLaXd2UENTdUdQSUxpSXdpdjFieWFjOWplUktzcVhFZw?oc=5",
     "domain": "realty.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Housing finance",
     "direction": "primary",
     "dir": "neg",
     "time": "2mo ago",
     "sev": 0.65,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.2,
     "dec": 0.67,
     "stage": "probe",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → PNB Housing Finance",
      "Classified: Controversy · Financial integrity · probe",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PNBHOUSING-1002"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Housing finance)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "pnbhousing-3",
     "index": "momentum",
     "pillar": "Financial",
     "title": "PNB Housing Finance soars 10% post Q4 results: Why Morgan Stanley, other brokerages remain bullish",
     "desc": "PNB Housing Finance shares soared 10% post Q4 results as Morgan Stanley and other brokerages stayed bullish.",
     "url": "https://news.google.com/rss/articles/CBMi_gFBVV95cUxOZjB1RzdBTUJEQU5mVENTbkw4VGVNNXA4V29EX1dvQ05DaUpGZHg1Rnh1OVQwSTN6Z05sRm1mMHZJLW1Xc1QzZGRBUUpyaE9wT2VIbEhxc2J2bFRzSy1IeXo3bS04aEJPVE1rakdxc0pTOTJ5amNCZW9pUjRRUUZiM2ZZRFVhY2Vyb3lnZ01UbjRkUkFlbjJpUVAtcjNpYV9XQWMwelNtcVoybTVhZjRnWFBwUTBsWXJveThnb0NIZ2Y5NHFTaXR5bExjU1hMalR0ZnhrRWtlckR0RFJ0UzFJZEpfTVRIR3p3RkhBNHVEaTM3czQzM3VFVzhIUXBaZ9IBgwJBVV95cUxOaDZmOWFXRElUU2RZWVRaS0NYWHVESmVnQm9WRGY5UjQtQ2tqSnJaTEFRNGtZS2FDbEZ1RkcydmJ3VUZWa1BvWHBSM2J3RndqZ1cyVUpSaTZGVTVJSmduTzZxUHNFSkdoZWE3d0lYVlVaVEtBQjFsa3E2bGVMc2hpOWV0VlV2WlRIbm5CSG9LaUkwMnU2VUV6emRfRVhfcHUwN29tUTlUamZISHhqWENDUUtST1d2Qmx5Zjc3SVllYmhsNk5NdjBYZHVXVGRkc0w2UlpzU1NvN0dkMWp5Nnp5REZkSXJJQ0Z4YnZkb18yZ3AwZ1JLdjVXbHRkelg5UmRoMWcw?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "Housing finance",
     "direction": "primary",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.4,
     "corr": 1.0,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.67,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → PNB Housing Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PNBHOUSING-1003"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Housing finance)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "pnbhousing-4",
     "index": "risk",
     "pillar": "Financial",
     "title": "Ratings upgrade to ease costs of funds by 10-15 bps, says PNB Housing CEO Ajai Shukla",
     "desc": "PNB Housing's CEO said the ratings upgrade would ease its cost of funds by 10-15 basis points.",
     "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNNnd0aHdVSUlHM2xtN1JacmlFYXZMZm1GTF9OcDVPakh0ejh4d3ViRXFuNmUtTHBkR1VpOUpOY1piT0tpcDc3RTlZcVpLQ0l6N1lFcDVSLThXalBmZlhXZGZVbkxORDVGQ1R3NGdBOEN1dnRHNWxlNlBHM0ZsdmhaRWNrazdRUm1LVUFHWjFpNG8wTTRRa2Z1YzJremdaRElZUkRLZkVPa1c3cno5NzR4RnR2UzlwTjA0dG9lbThJSTBZNmFqRWJyajJvZUg2d1JhM29KajlTQWHSAd4BQVVfeXFMTXdmbWdpX0pXd1VFTGl6cjRJbGt6eDBQbTJmV2MzVWU3QThuSzFkV2xXNEY0WEVibVNRRDVvbFlaR1YtTklwblExWVZRVTVfUHVZWTdwdTdOa2VtZjhGaTRyNG9iY0xId08zbWNvcE9LOUwyZXpqWmc2Y3FqbUtuRDNQNHUyY2Y4SUNIbXlJdmEtZjlBa2p6cllNYUxUNzdGQU5ieUg5c1VYRmFPNnVSYUF6VXZMMldMY2VRR0xhVzc3UzRpRDdmdlI4N3E0MzJGN3ZITHBqb21vRmRzbEJn?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "Housing finance",
     "direction": "primary",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.4,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.74,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → PNB Housing Finance",
      "Classified: Risk · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PNBHOUSING-1004"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Housing finance)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "pnbhousing-5",
     "index": "risk",
     "pillar": "Financial",
     "title": "PNB Housing Finance faces margin challenge ahead even as NPAs remain low",
     "desc": "PNB Housing Finance faces margin challenges ahead even as its NPAs remain low.",
     "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQSmFZaDhWYjB1RE93Uzc2VFFrd3ZlblhfbVVLMjZOekpXTllFaTl1SE5TOU9rMm1Id3VENEhwaVZwb3YzZm0wUWpqVlVPeF9NY1Nqa0xTQk44R0ZqdlNHVFdhb09ub3BXVnVfVk4zejNwdGoyaXdIU01fTFNkYjJRaG5NSjFiTThnUUxSV29heHFrVVlmbG9oZEd0bkRQQlR1alV4MWpnOUpldm1pemVSbWMtdEgxcGtfSENXZFdfakV6UEZvRElB?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Housing finance",
     "direction": "primary",
     "dir": "neg",
     "time": "3w ago",
     "sev": 0.3,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.89,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → PNB Housing Finance",
      "Classified: Risk · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PNBHOUSING-1005"
      },
      {
       "time": "3w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Housing finance)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "pnbhousing-6",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Buy PNB Housing Finance; target of Rs 1250: Motilal Oswal",
     "desc": "Motilal Oswal reiterated a Buy on PNB Housing Finance with a target price of Rs 1,250.",
     "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQTm1SaFNVdUhBR2F2WEpUWHZ3LVRnUU9ZU0tBUzNWRXJ3NS1UUGFNSDJBWG5DN29WcHl4X2E3TUh5NWxYN0ZvU1JCWE1VZEtsMjZhdmVFLWY5S2o4Q3AwX2E2Mmk0bE14bUZtQkdxMFNEZzIzYWxvSDFIbHFMM21NWGZhWGlmMzczcFhFVEpPV19LaFI3Y294a1Y0ZzFVcG51OE1uRGwzNDZkemF5YjdYQjZR0gG3AUFVX3lxTE5wdVZIUWpzYlNlRGFXUFNRQmdJR3p5V3ktdWRHOG0yOHhfdmhRUVJ5bDlfQjVEaEY1LXUzXy04RFZNaEpkQWUxZUVZQXJwbXhYZjFiN3lLeU5wTi1IVjBmTXlJaUpQcERIMVF3OHd0VGNHNVhLRUxURWUtY2dXQll4ZnpkVkNKNUxORGxFeHVXdHlhVzd2cmZzZVRTUUdmMGNhMnktVk9pR1NUR3NBeUdmRkdOUzV0WQ?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "Housing finance",
     "direction": "primary",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.3,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.83,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → PNB Housing Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PNBHOUSING-1006"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Housing finance)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "pnbhousing-7",
     "index": "momentum",
     "pillar": "Financial",
     "title": "PNB Housing Finance shares tumble 8% as Q3 misses street's estimates",
     "desc": "PNB Housing Finance shares fell 8% after Q3 results missed street estimates.",
     "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQbHowSVZFLWJxNHgyckluTlk4OTVmWGg0NWRiWnkwaG4zTmt1N2hINklPWEhiSnpwVURUMzl0aVpjRWVBYnZkblFuVlVoNTBzQXlrMTlqRHhKa3BUUGI1Z3lqV21wTnBFYkVIU2hSV0pWWVBkQlYxZ2lIaTJfdDgtejJTQ25CZlM4dWlxaWxTaWU0dVNoRTVOQnR2bnJIR0ZBamdfOWxwR21kT0ZyMG1fbV9fUVQzUEF5SlFYUXhWa2Y1Rkxhc0dhblJ0ZWM1WGvSAdQBQVVfeXFMUFJwZk1PN1dPdFJ5Z2hZb1VyQnFRM2ZpMlV4Ung3TDRfWXJ2djBfNGdSNFpMNTVDN2gxX09va1BNamN3MWZxLWVsclJQUFFMWkpWRXRGakIxZU5aWUVEUk9TVGR4dUdQbi04TFRDbTFQNjZ4NW9fcFV5WHBWWXZ2MHRWbUZfNUU5dUxGRTJocUxpa1pFY0Z6RVJvcVh3MWx1NEI4NnhOVGUwWHVVZTFISlE4YXhmajFHaEFtRFRJLUg3dXJPbXRtN1UyLWtuVHNZTjVrNHE?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "Housing finance",
     "direction": "primary",
     "dir": "neg",
     "time": "5mo ago",
     "sev": 0.4,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.4,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → PNB Housing Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PNBHOUSING-1007"
      },
      {
       "time": "5mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Housing finance)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "pnbhousing-8",
     "index": "risk",
     "pillar": "Operational",
     "title": "Sammaan, PNB Housing may lose NBFC-UL status under RBI's rejig; IRFC structure warrants exemption",
     "desc": "PNB Housing may exit NBFC upper-layer status under the RBI's proposed reclassification framework.",
     "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxQc2N4bHBrTEdod3B2TjFacGFYSk50aUxpeE9Walpfa3dIMDlwLS1NWTdIbUxUU3c1M0pXak9rM0NVejBDdy1sSHY0Q1Q5R21qaGM3c2VKVmhGZF8xNWRtTWhLMTFfZS0xTk91UVhoY2lyVXVkTTZ5b1pmSk1pTkZCVXdJWE9CcnAzczVwTXZCYUJralRaY0YwaWFsTkZHUjlvTkZKNG00ZVF0N3h4dzBfai1DWjBCb1dVdG1CaE5zSkV6YlZPSWdrUmROcGROTHhidllqT3U2UXFDWFhzZDFUVHJJYnlydVBoeXlR0gHwAUFVX3lxTE93NDNJRUhIcEUyNGRFYS10X0tlaEZNazJhYUZQX0ZtZGwtTmE2VGh4d3NuMWw3TnRxNXhyQTBpZUhzSEhQZkFqSjJvc2NFZEh1WUc3ZTN5cTZyejdaeGdMeFZaN3FSSWNTMjc0QXhTYjV5eXRBREJidzJ4RUhHUXRpekE4eDJ6a3NnZU9lb0d6Um1XSXduWVhZRkl2QUV1bTBNMWRmVk14Yzhva3Z6WlZYdFYzWENEdmpBX3NMQ2V6QnBiTmNYa2tvRWp0d1VIbFplTWZneU84ZXpHNHRWeTBxREdsWXpidUFjWi0yU3NuYg?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Housing finance",
     "direction": "primary",
     "dir": "pos",
     "time": "4d ago",
     "sev": 0.25,
     "corr": 1.0,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.98,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → PNB Housing Finance",
      "Classified: Risk · Operational",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PNBHOUSING-1008"
      },
      {
       "time": "4d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Housing finance)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "pnbhousing-9",
     "index": "momentum",
     "pillar": "Financial",
     "title": "PNB Housing Finance's net profit up 7.71% in Q3 FY26",
     "desc": "PNB Housing Finance reported a 7.71% year-on-year rise in net profit for Q3 FY26.",
     "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNU2FOUzhfMl9CRDNzeVdzLWh1M25nbWZsTHZKMDRWT1pZWUtSY3kwTTZxelZxSVJfUVNWYU9SOWN5NVpUWndqa0FlQm01ZjBpOU9wT19adkE4Z0x3TGtHR2VmTVZoMmZwbDlaOE5TSE5PQnlZWTZGUk9FY1I5a3hXZjhJLW9qMWk2dWc0V2NWVTJkc09Rb3RWeWxiN3oxWWF2TkpsZWg1clg2NTU5RURKbWpIeWJkd0lxU0JxVnpxOE9ERm_SAcgBQVVfeXFMTjVFYndzQXRkX1ZsVlJHa1l1cmdFVTd6LTNBU1FfdDhXSnZMclE5bHhUN2VucFNBWlJENWR3ZktNZ1BwX01obTlrNWwzQVpNR28xZXdHSG01Zk5xbFdlZ0lqa2libS10ZkhNaG1FWHBVV21mTm5jSFp0X2c5Zl9uZThyUzlwOE5DdHdHQjdQcWtvWkZuMXUySWtLR2ZyVWFUMTBFYmxaOFlUWHBDYVJCXzJ4OGtCTUwxaU5NcnJ2bUVLLWVORTBwRU0?oc=5",
     "domain": "realty.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "Housing finance",
     "direction": "primary",
     "dir": "pos",
     "time": "5mo ago",
     "sev": 0.35,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.4,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → PNB Housing Finance",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PNBHOUSING-1009"
      },
      {
       "time": "5mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Housing finance)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "pnbhousing-10",
     "index": "sentiment",
     "pillar": "Entity tone",
     "title": "PNB Housing Finance - MFs kept buying these 11 stocks for 8 straight quarters; shares surge up to 250% in 2 ye",
     "desc": "PNB Housing Finance was among 11 stocks mutual funds bought for eight straight quarters, with shares up sharply over two years.",
     "url": "https://news.google.com/rss/articles/CBMijgJBVV95cUxNUkIzUG9acERobnI0b2s5RlJERXRTNDlMbkZoUU5ySWJxVzV2T2RzVkUyRk14bjFJQnpmOVpCZkt0ZVVkc0lMa21DUUMwdWg5dlJscGNjUXRiZUNpb0Y1eVdsbGpLcUFZN1dxUHNvaGM4TzZUVW04Q1hHMTZ6ZlhPX29IMWhFbTV1NGFCM2lZc2R2RVZ0VkJGRktjODZxYXRLeWZMZmZMRnl3RzJiRkx1bmdoUVpqNkEyNWRjeWxIR3dJRF9Tbnp3eVNod2xmUDkydDhuWDJrcDBfZVNEWHFDc0x2bkQyeVBWZnZMcWtNcm9Ca1hleWdBLUhHck9hRS1SMlp1NElfdC1LX0pjOEE?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "Housing finance",
     "direction": "primary",
     "dir": "pos",
     "time": "today",
     "sev": 0.2,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 1.0,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → PNB Housing Finance",
      "Classified: Sentiment · Entity tone",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "5mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PNBHOUSING-1010"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Housing finance)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "pnbhousing-11",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "PNB Housing Finance gives 18-20% growth guidance in FY27",
     "desc": "PNB Housing Finance guided for 18-20% growth in FY27.",
     "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxQT0dDNFpXMzNlOTVpYWJ6UVcxVVdQNGFuQ04xaE4yVVBKejFkaS1STWV5ZjdzVjF3a05QcVMwcDlaZEVqSy1BZFZOLU5pZjhGeTdyeTAwRWpyX0cyQ1NpUmVsMlBINGVIUzhoVWNqQWdfMHdkSzdfb1R0NzNsSFIzT1ROeDYwbjJUQkNMaUxkd0tScUdHcVdxSTlaSVBZdElxT2JGUnVwTzRNMlVTaVVYVkd5SnZ3cG1heHVlUFZVQ3Bic3E0N05IeExCdWs5a05RRWhqbndZb21fUdIB3wFBVV95cUxNSi1pejkycXdFVy1saXByT3hCUVJBNGtEanhxWFN6Q25Scm5qbERESHdWNTh3VGh6V3hZVnFKSW9pV3hTdGJoZy1YREp0NVpOaWpoYVE3V3huS045YTdMLWlqUFk1QXpqWHJsMEZ1VXR4aldYZXppUlZlUjFDQTlaYzNpbkdzTGIxcWdvWUFINFMzMTMycV9xUExCLWlOUVFNUmFtcVFYWXRoQ3RiNXB3VHNZTlJMQUdoUFNRb2JUQWFmVUE3V0R3dVZuQ1JJNEEzMnprS2tYdTA0aDVpbXNj?oc=5",
     "domain": "m.economictimes.com",
     "source": "Business press",
     "sourceSector": "Housing finance",
     "direction": "primary",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.35,
     "corr": 1.0,
     "vel": 1.0,
     "stg": 1.0,
     "dec": 0.48,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (4 article(s))",
      "Resolved entity → PNB Housing Finance",
      "Classified: Momentum · Strategic",
      "Corroborated across 1 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-PNBHOUSING-1011"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (Housing finance)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 236
  },
  "abcapital": {
   "name": "Aditya Birla Capital",
   "ticker": "ABCAPITAL",
   "sector": "NBFC",
   "meta": "Indian BFSI · Jan–Jun 2026",
   "scores": {
    "controversy": 10,
    "risk": 0,
    "esg": 1,
    "momentum": 40,
    "catalyst": 31,
    "sentiment": 5
   },
   "trend": 2,
   "quarantined": 13,
   "narrative": "Aditya Birla Capital: Aditya Birla Capital reported a roughly 30% jump in Q4 FY26 net profit to about Rs 1,124 crore — lifting the opportunity side. Aditya Birla Capital allotted 11.23 crore equity shares on a preferential basis to promoters and IFC — lifting the opportunity side. 13 low-trust item(s) remain quarantined pending corroboration.",
   "history": [
    68,
    69,
    69,
    70,
    70,
    67,
    67,
    66,
    66,
    68,
    69,
    68
   ],
   "indexHistory": {
    "controversy": [
     0,
     0,
     0,
     0,
     0,
     13,
     12,
     12,
     11,
     11,
     10,
     10
    ],
    "risk": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "esg": [
     2,
     2,
     2,
     2,
     1,
     1,
     1,
     1,
     1,
     1,
     1,
     1
    ],
    "momentum": [
     34,
     33,
     32,
     39,
     38,
     37,
     37,
     36,
     35,
     37,
     41,
     40
    ],
    "catalyst": [
     25,
     33,
     31,
     30,
     28,
     35,
     33,
     31,
     30,
     34,
     33,
     31
    ],
    "sentiment": [
     9,
     8,
     8,
     7,
     7,
     7,
     6,
     6,
     6,
     6,
     6,
     5
    ]
   },
   "articleCount": 111,
   "events": [
    {
     "id": "abcapital-0",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Aditya Birla Capital Q4 FY26 results: Net profit jumps 30% to ₹1,124 crore",
     "desc": "Aditya Birla Capital reported a roughly 30% jump in Q4 FY26 net profit to about Rs 1,124 crore.",
     "url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxOcElRei04MHRlSF9IT0NHNXM5N3JSVDJwck11WkpXZXZvRlVIUU5KbHA0VkFZREZxUTY1OUVsUWhmb1dpN2pJV054TlJ3Zkd1ZFpQMTgzbUJFMzJkcmczSXBmeGlBeG5xSU4zdy1USVFnWWtORDNEeGo3YTJSd1hob241VzZhX1VBSWNNZGxkTkkxaldMMER5MmNqTU43bWQ2bGJLcnhZcDM4ZmdzNGVUX3hQc2xVcXpXOWVWdHJEZ2ZYRlQ2NEFLX21KZVotRFRic3c0VU9OcXRpSEtQaVFj0gHkAUFVX3lxTE9hb0xua2c3dW15ZkpJRlJTaTV6eEdOV0NFT2tYVmluelY1dk9xNk4yNkFJeUVYNHljaFEyN3hmeHlSdDNoRUdON0lIVF9zZmNsUmZXb0hHY2ZIMk9vZzdVUHVLY3IwYmdMcmhTMXFfb3M5U3U1b29obEJzanNkSmp2NkQyV3o5dnd5MldQMUpZWlpscXZBMUNmWnpPUGQyeGREMzNybUtpcmdJSVI2cHNHN1I3akt4OVpFUmVFbVFfcXYyenZXTENCYXFmQWVCWkF6MUhuV3FoeVRzQjU4TGJEYU1Tdg?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.55,
     "corr": 1.15,
     "vel": 1.2,
     "stg": 1.0,
     "dec": 0.74,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Aditya Birla Capital",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ABCAPITAL-1000"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2000"
      }
     ]
    },
    {
     "id": "abcapital-1",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Aditya Birla Capital allots 11.23 cr equity shares on preferential basis",
     "desc": "Aditya Birla Capital allotted 11.23 crore equity shares on a preferential basis to promoters and IFC.",
     "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxPMXp0REp1MmRpVTdMRUZpUlFFYXNNdndMOUlWc3lacFl6eFBrbUpUUVVSbzcxZFhhNlNiUTVURThkSVpkdkdaRGZtYktKeW1HZ3BSSmNDcUZhTmNXN2IzZ3pxS0NqV0NkSUIzZUlwT1BwaWVjWldzdktvS0RZd0xrVVF2VVlxV0ZOZmpRbVpBNW9uZEM5R0pvQjRFbE5KVm5oSDlMQk1zVU9OZ3BrY1JFNFBKMG9zUGRURHlqR3c4RV9SOFVrTFN2ZW1BR3Q4SkI0MUJOSzJrVlhkRm5QcGplSHBQSHhTMHJEZ0HSAe8BQVVfeXFMTzV4ZTZHSTZ6MTZlZWhoSHFVUkNLdUh3Sk54c3NqcTJyb2JtY0NyM0k1UVEtZ0FCZDZGN0szeEh5RXFsZDZPb3JuUG94dHVLY25id21mcnI2VE1jTUYtMENNZjlCOW5BWlZEOG96QUZmNmN6NHotN2dDc0huYmVfcHU2U3NkNXA2Z0J4S1NFTm5Jc0hxeURETzlRRl9wRzQzQTBMd096R0FObU1RWmlVQl8zWDNTYUtxUkdJejU4c1FGZC1xbDd4SXBqTkoxSmYwLUN2OFBmQUotOFIzOENQYlhtQmZPeF9kZVBXeUNHdkE?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "6d ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.93,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → Aditya Birla Capital",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ABCAPITAL-1001"
      },
      {
       "time": "6d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2001"
      }
     ]
    },
    {
     "id": "abcapital-2",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Aditya Birla Capital shares hit record high, m-cap crosses Rs 1L crore mark for first time",
     "desc": "Aditya Birla Capital shares hit a record high as market capitalisation crossed Rs 1 lakh crore for the first time.",
     "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxOckkzWGtieTBRblZFWmlmWlZ2NVZKZVJTcjdtMEtSV0d6ZktobTZvSWVzUWE4NThEdGZTbVB3dUJVaGRxS3VMVEJFNHk4eUNvUXoxVEVzdGtHMGd4bFFqblU1YVZ6eE5oQU9FWFZPSFh3cDJvUU11MV92UnlEQ0RfangyWHRZMEhYRHYxZmhLMUhvLTc1UHY4cjFqYlJ5WjZHUjEwenlxN2VTT3I3bHcyQlhxdFpnNEhnWkhCU1dmTnFpdXpSWFFIWTFuWHF2Z293a3BLTFdUajdTb3pwQkhCc1FGZG9ZTEdZc0hNQWdR0gHzAUFVX3lxTFBFaWozclUtVjZINjAybnpiRWxXaExTb0hYcmtpaTlGY3dfakZoaGRIV2NqWS0tT2pvVVMwOGJ2YkVsSF9HRFhrRkNGTjFHYS0yREJ3TWlOQVMxYkc1emhOb3pwZU1SUDhjTS1lSElLNTBRQkdwMEpEZEcwU1IxMEU1RzVNNmFVS1I5bm1lbko1bXpmd1AzanFLWE5TWVpXc3d6R0hPLXNxakV4dzYyVDg0VXAwLXFwM2ZWdktDd0FFSjdxRVB5SVlUT3RNWUI5UnZVYUZMSG9HZTRxVUl3RUtPNS1xUlVZYjlqRlV6YUlKb0xURQ?oc=5",
     "domain": "businesstoday.in",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1w ago",
     "sev": 0.35,
     "corr": 1.15,
     "vel": 1.2,
     "stg": 1.0,
     "dec": 0.96,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → Aditya Birla Capital",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ABCAPITAL-1002"
      },
      {
       "time": "1w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2002"
      }
     ]
    },
    {
     "id": "abcapital-3",
     "index": "controversy",
     "pillar": "Legal & compliance",
     "title": "Aditya Birla Capital receives ₹195 crore tax demand notice",
     "desc": "Aditya Birla Capital received a Rs 195 crore income tax demand notice.",
     "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOa1h3amJLX3NqMzJRbTJQRERaV0M2cENpbUZWVnFjbWdtcEtOYWtTY3hFc0hxd0lyUDB1OTlNOHl1VGZQU1l1OGxQbUlCUC1fVW9OWHpkUHVEMXRiWUxUOTdfSHFpXzROTHlUcWV2Qjd3N3VjVXFBRFhYODZ3bk5jUVJpeGlEbG1sY1dYYWxRM0dEZVZVMjd1SlR4c0N6ekF6SklWTlVmTFFsQzRxMkxLV3hCQnNyWkZMbXl5VzBPRExPZ1BCQU5PYWozb3hOT3lzaVYtd25laHNHbzJ1ZmfSAeMBQVVfeXFMTjZqc25nTHhxRHdQSzBCaGgyRGZoc19GRUtDRHBLY1hKSEN3X2JNMExaOGp5TVhsVVFlVUJBb1JvUzVZVm1XeVp3OE16LTU0dlQ0dnNDTG5GSDRGaVBYZUFpM2Zvd1VmRjBQQ0lGcjJ6ZUp4WHhQcHEtYVUtRzdYek5kZWhHRDFoN0FKSGx3SFY5RVI1NkM2MFlqeFdQU3daUkhwb1A0NFRaMWJHY0dMTUJPWldrOWdJclg1MUtPR2RvUXRUeG1PeHBjNEVOTXloN2txSEs0NGRwbkJ0dkE2eEFibzg?oc=5",
     "domain": "legal.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "neg",
     "time": "1mo ago",
     "sev": 0.4,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.4,
     "dec": 0.78,
     "stage": "charge",
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → Aditya Birla Capital",
      "Classified: Controversy · Legal & compliance · charge",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ABCAPITAL-1003"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2003"
      }
     ]
    },
    {
     "id": "abcapital-4",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "AB Capital board to meet on May 20 to consider fund raise proposal via issue of shares, QIP, preferential issu",
     "desc": "Aditya Birla Capital's board scheduled a May 20 meeting to consider a fund raise via shares, QIP or preferential issue.",
     "url": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxPQVMtejJhdFhHNlJuNm1mTXJ2M2djTmxBc0dBZ3FhYUE0SXFDSkhVdzRramlRQW1pVTRJNzVtV25kRFdSU0NqMm1FTFpFSG9TbmV4aTNRQm9uYUdabTBHUXN6b0J5dTE4Mi1qSEJ1ME1aT2lTOG1JYnFUbjR2eFE1d0wyVXp0aGRJQjNmdlZIeTk1YjZuWW5WX09YekhlRVhPVHJ0Vy00NWRNUG5HcHRaUGhIRWZfWmNURE9HODdiRTZQTHhSSUhzRGh2S1J6WGpCaW5WUS1tRTNqeF9lVlZEMWZLR0lqb1dPT3JaTklYQ0pYZHdZ0gH6AUFVX3lxTE5aSEN0Z2Q1VFBDejlvQ1VMOWEwNHM2eUo5bjNuNm4tWURHb0xhUS1HTXpPcDQ1T01VYnYyQlhWWDFka0d1SnNDc1FrdEZ6V2VwVXBOUmtJRVJUX1hTRE5ILVZDYWVHWWxKR1kta0pYRmw2cktpNG10TVRMWGI2NlBmcVJZVUtxd0xheGJQWVZ2MWdQc1dVWWhkdTZ4UFVGNkp5WVVieDhybVVrVzZLcUpDTl9iYl9Vd3hTTEprdmZidzZZNXRkendnVkJVMTZnTDZyMWpmN0JYWTlpak9qSUk4MkItS1NjTGVwVHg0SW95MTIwdTlfeWRjWVE?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "1mo ago",
     "sev": 0.6,
     "corr": 1.3,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.64,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Aditya Birla Capital",
      "Classified: Catalyst · Corporate",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "1mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ABCAPITAL-1004"
      },
      {
       "time": "1mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2004"
      }
     ]
    },
    {
     "id": "abcapital-5",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Aditya Birla Capital Q3 results: Net profit rises 33.3% to ₹966 crore",
     "desc": "Aditya Birla Capital's Q3 FY26 net profit rose about 33% year-on-year to roughly Rs 966 crore.",
     "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxPZjYxZkRkN2szTlhfM1pua2phV3NiLUh1Sms0S3dhOGtQbXcteGtjMzhwVjZMcjhlQ3dTVTRjZEtuRUdZcHR0dkR6akYxY0hmdS1Vb1prRHQ5bkd6cXRqd0JKbWRTWGdicVJpYWU2RXdVTkVyNGJSX2VmeUx4TVpuS0xPWFd0MHdqWVZoRWlkSEQ4VzJZT3oxQTFHVVk2Zl9QUWswTWs1WTNEd3pmaEtwbVpFbm1za1NxdDdLRGp5SDNoeFE2UDY0UTRQNmRqS0lib2hfb3V0bTdKaFBvZnlUbFNn0gHnAUFVX3lxTE02YWwwMHB4Y20weTVuNUJwLU9BWF9fQW5fWWRYMEtBQVZoSW9Wc3VfXzFiMWJRVDh0RUl5cXVnb2RyaElCYmo0WnBVQzFSTzFaNXNlM2hkTHhtTGxkQ0xkVHhNVVA2UC1YMk9GekJZRGh1SFhFalZoYV92dzNRM1Z4ZU9NT2FHdkhwNktjNGRyOG9jQnRJY085WTVMcERIZGphd3R2YlJLOXRPVENiY2paeWZSaUx0X2NfSGxfRU5rVy1QWFdWaW5zd2MwRFJMSnZnelRiVFJwUEJmZGw5OWp4eEhRa2tnOA?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "4mo ago",
     "sev": 0.5,
     "corr": 1.3,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.43,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Aditya Birla Capital",
      "Classified: Momentum · Financial",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ABCAPITAL-1005"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2005"
      }
     ]
    },
    {
     "id": "abcapital-6",
     "index": "momentum",
     "pillar": "Financial",
     "title": "Aditya Birla Capital Shares May Rally 29% Says Motilal Oswal On Improving Fundamentals — Check Target Price",
     "desc": "Motilal Oswal said Aditya Birla Capital shares could rally about 29% on improving fundamentals.",
     "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQWmxYUFVhajctemt3d0RuOWZjNEhDbzJGOTRMMDhTZndnNWJsb0N3R042NHM3OFNzOVAtX014T05ERHNvNXc1aDlsR0N6MVNRblB1OXZpOEdzTkVLa3RtNGJKR2dleHZMQlpWREhyTmJPUm12NzA0ams4WWlOakNDZ25SdWNsTkhlXy1iOW5fSFB2bnZpZk9wUkZZUW56RzBydG0xRHZ4Wm8zcTVfSDIybg?oc=5",
     "domain": "ndtvprofit.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "6d ago",
     "sev": 0.35,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.97,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Aditya Birla Capital",
      "Classified: Momentum · Financial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ABCAPITAL-1006"
      },
      {
       "time": "6d ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2006"
      }
     ]
    },
    {
     "id": "abcapital-7",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Aditya Birla Capital sells 14.3% stake in housing finance arm to Indriya for Rs 2,750 crore",
     "desc": "Aditya Birla Capital completed the sale of a 14.3% stake in its housing finance arm to Advent affiliate Indriya for Rs 2,750 crore.",
     "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxOcE1CNmNfdEhUMkJzZzJrTjMtdWprUWlDbTFHMXFZaXhncklMMTZqNWJXQmQyQkMwcGJEdFFIQUtVdHZGdnNzX2hCYzdITnU3Wkdvb2NkdlFDbC0wY1ZSNUp1TFlmXy1JLW1CMS1kY0h3amIxXzkzXzBIUVZNWXg1dFpfMktwaW1JakJUVDB6NEY5NUc0TzFRTm9tOUxZYzJzNHBibm5Na2g4YU1ZTTkzLU95T19iSWh4eWJlUVp1eWh5TnVhdkdiT0wxQUcxTUpNaWtKbllWZUoyM2FES20zd9IB5gFBVV95cUxPUFZ3Rmp1WXhkTUdmeHpmZ1oxMEdKdUN5c2JfY1p1N3RDaWZISUEtQm1LOUhRU2tDRTI0NTBOdVQ0bWN1QUhnYmFxdnNBbVBsazBJV1JBQ19FbG91dHN1VnBYSzRLNk9nX0lRN2RIMHlGOXdnY0U4dFdXa2ZoLXUtdmVjSFRMeHFKcUgzbVZfYUdWcE9uRndWY2hPVGhXQ1VMRWxKTFFETFBvWk4tSHdmcllHYy1yTVpPVXNFMHFkTUJxcUFaOHhCRHFJd2VoUVdrMFVuRHRFVDdrVVM0aExlVVZOWTF5Zw?oc=5",
     "domain": "moneycontrol.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.5,
     "corr": 1.15,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.44,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Aditya Birla Capital",
      "Classified: Catalyst · Corporate",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ABCAPITAL-1007"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2007"
      }
     ]
    },
    {
     "id": "abcapital-8",
     "index": "momentum",
     "pillar": "Commercial",
     "title": "Groww promoter entities pledge 1.8 crore shares worth Rs 302 crore to Aditya Birla Capital",
     "desc": "Groww promoter entities pledged 1.8 crore shares worth Rs 302 crore to Aditya Birla Capital.",
     "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxPbUlQcVpNREF5ZGlfSFBuR0pIeDNfN29GNjlJNE9wSXM2c1dlS1hySFNtZXl5R0RIX2F1czJQQjNMdjhuMTctZ25STWUxTDlzMFM2d2djbWJuYnNNYmNGdTNQS3J5LS1ZLVBwdlZ2c0Vld3YzdU9DZGNjMnZRRldPR1lZRTg2ZGRJXzRNSDNRVzBXaGxweDBNWldQY0FoTV9fTzBucjFXdm9hTFFObmhBWXJvcWhyQ01UeUdiZjlxT3NfYU1VYWRjbFhMVFI1SG5iSm5ZTUlqQ2R6SHN0RElKV3lGcmdSejZWbDdn0gHwAUFVX3lxTE1Ub0ZickJGWk9OMkJLVE9lai1LWmhiZGtNaExjamswM0hENlAwQngxSGZ2bzJpN0VacEZlenpCbW9pcUowYmdya0dfZjhUbzd2X19UWFJfX2Nnd0JKdlZaQ3lSNTUtbGxYX042UWhwWUF4QnJaLUozOVFCRE9aRUxkeHFXY1I2WllHay1oY193eVFUNHFhak5Ob3BQdTgzX3JWNXhvT213NDlNX0phUXJyZXdOVTV5V1p0eW9PS2VnQ1pLTnF5WkNyOHlpUEM0dHFtT3k3bk5RVHhkXzZpVTRhekpndzVkakt6NUR5T0hDSw?oc=5",
     "domain": "bfsi.economictimes.indiatimes.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "counterparty",
     "dir": "pos",
     "time": "today",
     "sev": 0.25,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 1.0,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Aditya Birla Capital",
      "Classified: Momentum · Commercial",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "3mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ABCAPITAL-1008"
      },
      {
       "time": "today",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2008"
      }
     ]
    },
    {
     "id": "abcapital-9",
     "index": "momentum",
     "pillar": "Strategic",
     "title": "Aditya Birla Capital has turned around, it now has to scale up",
     "desc": "Analysis said Aditya Birla Capital has turned around and now needs to scale up.",
     "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOWVYyaU1MUzRqT1dsZWhfdzdrZVJBODYtWHZXYWpaN1E2SmhMMWxESjlUeTF5bi1BUERVTmlaVjU5WV80UmRxV1Vqd3FlcGJmZURaSVA0LUZQaFFWYl8wZjlEdjU2dWFVY0ZLLXpyTUNmaHFFV0E2dHBjeDQxS1RIQUVlX081RTRXRE9aWjF1Q2JycHVrYU9IYVFVbUNpNTVjOTlici1qdUgxXzQzLTdMNUlqeEhqZGZUaXkyNm41X3VfeEpC0gHKAUFVX3lxTE1MYThPYjFwQWQzMU5kOWpzMEZsQjFKcnl2R2M1WmpTRTRWbG9FTnNyc1JqN2JwVXdjdDdGdWIybi1jczgzaUlrc3VHYzNGWGRlX2lQcHJySmo0OFZjN01ZOTlzVmhxWVRhSjN1c2IzYkZBYmtMS0NVZEl0eWE0UUdSUV9Na00wY3doUDg5N1drRVRvc0VyWjRpOUxyVnFBM3hqeWZHRUx1blV3UGhVYTRsRjlxUXN0Qjl1djdSNnR4aXctSFdVc1Vmanc?oc=5",
     "domain": "cnbctv18.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "2w ago",
     "sev": 0.3,
     "corr": 1.15,
     "vel": 0.9,
     "stg": 1.0,
     "dec": 0.8,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (2 article(s))",
      "Resolved entity → Aditya Birla Capital",
      "Classified: Momentum · Strategic",
      "Corroborated across 2 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2w ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ABCAPITAL-1009"
      },
      {
       "time": "2w ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2009"
      }
     ]
    },
    {
     "id": "abcapital-10",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "CCI clears Advent to acquire 14.3% stake in Aditya Birla Housing Finance",
     "desc": "The Competition Commission of India cleared Advent's acquisition of a 14.3% stake in Aditya Birla Housing Finance.",
     "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxPOVVEZzl4UU0tOFhnTGJZVjlyemRFMEM4RkxwbkN0cFFqY2ZGZktqOGZaYk9zZm4tVXVWSzZ1b1RweEVORjhGS01LcFN1UzdJRDcxZ1JPUTV5Q25uQnpnbUNyUm1yWUMzcTZGVUQ2ZU96YlIyRnI4TTVUb3A4VlJRWnl1Qk1mWk5uWDFzQ1ZnMkpHRG9VQ2Ywc2RtVHFibjBkTVI5WDEwRkczQWNfbDk4bkFBQVZLUjloMmI4ZHM0TERUNENEWVEtaGxmX1BMYWstX3FNRU9MZTJZM1XSAeABQVVfeXFMTy1YMWxCSkljdjVDc0tlR2VGQ0g3ZFpaeXFCVThnSnIycDBkYTRHWlNJRHhsT3dtcFo3TW9rODBJUE9sLXpwdUl2YnNJOUdtdUVxa2k2NWZLQmhSRVJPUDZ5SWg3Z0tHb0FteG5CR1hGRzAzYnFlYkQ5WVgxODhvY05XNk9rb2o2dDNvalIxS0J4RlFULV9HRWRyM2hsTkpzcnNoaUx5Rm9qZjZnckdqc3p6aDR3ZWRaWm0xS3ZlVF94eHoxQjkwMjdiaVRhbk5lajdNcHkzc3FWRmZSNHVSdHo?oc=5",
     "domain": "business-standard.com",
     "source": "Business press",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "2mo ago",
     "sev": 0.4,
     "corr": 1.3,
     "vel": 1.2,
     "stg": 1.0,
     "dec": 0.39,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      },
      {
       "name": "Aggregators & other",
       "cred": "Low"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (5 article(s))",
      "Resolved entity → Aditya Birla Capital",
      "Classified: Catalyst · Corporate",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "2mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ABCAPITAL-1010"
      },
      {
       "time": "2mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2010"
      }
     ]
    },
    {
     "id": "abcapital-11",
     "index": "catalyst",
     "pillar": "Corporate",
     "title": "Advent Invests $304 Million in Aditya Birla Housing Finance",
     "desc": "Advent International agreed to invest about $304 million (Rs 2,750 crore) for a minority stake in Aditya Birla Housing Finance.",
     "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQVmx2T3FfLVBmUlF4VGs2SnVFeDE3RVN1eEFCTTgwX3dUNEZ6QUhTUzVoTDNtM19yeWtMTXpzRmdjZUhqelpyWVo0WVEyLThJLTgwQVpXUnVMbFdmc2ctYzhYcWFzaUhYTWFzc1l5SVl4R2tlYXBTMnRxR0VIdmEzMVRHMmhvRlVTYjJDMHJlX2dhMzlORFQwbVpXVm1OY3I1NmlTTWt3WlhuakFNd3c?oc=5",
     "domain": "bloomberg.com",
     "source": "Agency wires",
     "sourceSector": "NBFC",
     "direction": "subject",
     "dir": "pos",
     "time": "4mo ago",
     "sev": 0.6,
     "corr": 1.3,
     "vel": 1.3,
     "stg": 1.0,
     "dec": 0.19,
     "stage": null,
     "quarantined": false,
     "corroboration": [
      {
       "name": "Agency wires",
       "cred": "High"
      },
      {
       "name": "Business press",
       "cred": "High"
      },
      {
       "name": "General & regional press",
       "cred": "Medium"
      }
     ],
     "provenance": [
      "Captured from GDELT DOC feed (6 article(s))",
      "Resolved entity → Aditya Birla Capital",
      "Classified: Catalyst · Corporate",
      "Corroborated across 3 source class(es)",
      "Scored through event engine"
     ],
     "audit": [
      {
       "time": "4mo ago",
       "actor": "Signal layer",
       "action": "Event extracted & classified",
       "id": "EV-ABCAPITAL-1011"
      },
      {
       "time": "4mo ago",
       "actor": "Trust tollgate",
       "action": "Credibility resolved (NBFC)",
       "id": "TG-2011"
      }
     ]
    }
   ],
   "rawCount": 382
  }
 }
};
