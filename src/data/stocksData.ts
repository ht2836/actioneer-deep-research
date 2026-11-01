import { InvestmentThesisMemo, AgentTranscript } from '../types';

export const BENCHMARK_MEMOS: Record<string, InvestmentThesisMemo> = {
  NVDA: {
    id: "memo_nvda_20261102",
    ticker: "NVDA",
    companyName: "NVIDIA Corporation",
    exchange: "NasdaqGS",
    asOfDate: "Nov 02, 2026",
    rating: "OVERWEIGHT",
    currentPrice: 138.25,
    targetPrice: 175.00,
    impliedUpsidePercent: 26.6,
    conviction: "HIGH",
    primaryQuestion: "Can NVIDIA sustain 70%+ gross margins through 2027 given custom ASIC competition from AWS and Google?",
    executiveSummary: "We maintain our OVERWEIGHT rating on NVIDIA with a revised 12-month target price of $175 (26.6% upside), underpinned by the accelerating commercial rollout of the Blackwell (B200/GB200) platform and broadening enterprise sovereign demand. Despite increasing market commentary regarding in-house custom ASIC displacement (AWS Trainium, Google TPU v6), NVIDIA's full-stack computing moat—spanning CUDA-X libraries, NVLink 5 switches, and Spectrum-X Ethernet networking—continues to enforce formidable total-cost-of-ownership (TCO) superiority for generative frontier models.\n\nWhile hyperscaler capex growth is expected to moderate from triple-digit rates to ~28-35% YoY in FY26/27, NVIDIA's gross margins are forecast to stabilize in the 73.5%-75.0% band rather than collapsing to consensus bear estimates of <65%. Enterprise adoption of proprietary AI agents and sovereign AI cluster deployments across Europe and APAC represent underappreciated demand buffers that insulate gross margin profiles against CSP bargaining power.",
    thesisPillars: [
      {
        title: "Blackwell Architecture Supercycle & CoWoS-L De-Bottlenecking",
        statement: "Blackwell GB200 NVL72 rack-scale systems deliver a 30x inference throughput expansion and 4x training efficiency vs H100, locking in multi-quarter lead times through late 2026.",
        proofPoints: [
          "TSMC CoWoS advanced packaging capacity allocation expanded to >45k wafers/month for NVIDIA, mitigating 2025 supply bottlenecks.",
          "Hyperscaler committed order book for GB200 exceeds 1.2M units across Microsoft, Meta, AWS, and Google Cloud.",
          "ASP per GB200 NVL72 system modeled at $2.8M-$3.1M with accretive gross margin contribution above 74%."
        ],
        sentiment: "bullish"
      },
      {
        title: "Full-Stack Network & Systems Moat (Spectrum-X & NVLink)",
        statement: "NVIDIA is transforming from a pure-play GPU vendor into a mission-critical data center systems architect, capturing $1.20-$1.35 in networking/switching spend for every $1.00 spent on accelerated compute.",
        proofPoints: [
          "Networking revenue surpassed a $14B annualized run rate, propelled by Spectrum-X Ethernet deployments in standard enterprise clouds.",
          "NVLink 5 interconnect bandwidth of 1.8 TB/s per GPU cannot be replicated by merchant PCIe or commodity Ethernet fabrics.",
          "Software ecosystem (CUDA 13, NIM microservices, TensorRT-LLM) retains a 10-year developer switching cost advantage."
        ],
        sentiment: "bullish"
      },
      {
        title: "ASIC Co-Existence Reality & Sovereign Demand Buffer",
        statement: "Custom silicon serves specialized internal hyperscaler workloads (e.g. YouTube recommendation, search embeddings), whereas frontier multi-modal training and dynamic agentic inference overwhelmingly standardize on NVIDIA.",
        proofPoints: [
          "Hyperscaler in-house ASICs remain yield-constrained and software-fragmented, failing to address third-party enterprise tenant demand.",
          "Sovereign AI initiatives (Middle East, Japan, France, UK) contributed over $10B in pipeline commitments, non-reliant on US hyperscalers.",
          "Gross margin floor modeled at 72.8% in FY27 under our stressed bear sensitivity case, well above the 62% historical trough."
        ],
        sentiment: "bullish"
      }
    ],
    financialScorecard: {
      revenueTTM: "$96.3B",
      revenueGrowthYoY: "+122.4%",
      grossMargin: "75.1%",
      operatingMargin: "62.4%",
      fcfConversion: "54.2%",
      ntmPE: "31.8x",
      evEbitda: "26.5x",
      ruleOf40: "184.8%",
      netDebtToEbitda: "-0.28x (Net Cash)"
    },
    scenarioAnalysis: {
      bull: {
        targetPrice: 210.00,
        probability: 25,
        rationale: "Blackwell gross margins exceed 76%; enterprise sovereign demand accelerates to $25B+; CSP capex expands >40% YoY in 2026/27."
      },
      base: {
        targetPrice: 175.00,
        probability: 55,
        rationale: "Orderly GB200 ramp; FY26 revenue reaches $148B; gross margins settle at ~74.2%; forward P/E multiple sustains 32x."
      },
      bear: {
        targetPrice: 95.00,
        probability: 20,
        rationale: "Hyperscalers digest capex (-15% YoY); custom ASICs displace 25% of inference workloads; gross margin drops to 66%."
      }
    },
    catalystTimeline: [
      {
        horizon: "0-3 Months",
        event: "Q4 FY25 Earnings & Blackwell Volume Shipment Guidance",
        expectedImpact: "High",
        bias: "Positive"
      },
      {
        horizon: "3-6 Months",
        event: "GTC 2026 Keynote: Next-Gen 'Rubin' Architecture & Optical Interconnect Roadmaps",
        expectedImpact: "High",
        bias: "Positive"
      },
      {
        horizon: "6-12 Months",
        event: "Hyperscaler FY26 Capex Cycle Audit & Enterprise Sovereign Cluster Delivery",
        expectedImpact: "Medium",
        bias: "Volatile"
      }
    ],
    riskMatrix: [
      {
        category: "Customer Concentration",
        risk: "Top 4 CSP hyperscalers account for ~41% of total data center revenues.",
        severity: "High",
        mitigant: "Rapid diversification into sovereign nations, enterprise tier-2 neoclouds (CoreWeave, Lambda), and Fortune 500 private clouds."
      },
      {
        category: "Geopolitical & Export",
        risk: "Escalation in US Department of Commerce restrictions on Middle East / APAC compute clusters.",
        severity: "Medium",
        mitigant: "Strict compliance SKU architectures (H20/B20 tailored variants) and local regulatory alignment."
      },
      {
        category: "Infrastructure Constraints",
        risk: "Data center power availability and grid interconnect queues delaying greenfield mega-cluster deployments.",
        severity: "Medium",
        mitigant: "Efficiency gains in GB200 NVL72 liquid cooling (25x lower power consumption per token generated vs air-cooled clusters)."
      }
    ],
    tokenEfficiencyMetrics: {
      rawRetrievedTokens: 78400,
      distilledContextTokens: 14200,
      outputMemoTokens: 1180,
      tokensSaved: 63020,
      compressionPercentage: 80.4,
      estimatedCostWithDistillationUsd: 0.068,
      estimatedCostWithoutDistillationUsd: 0.412,
      costSavedUsd: 0.344,
      informationDensityScore: 4.3
    },
    citations: [
      {
        title: "SEC Form 10-Q (Q3 FY25 Ended October 2025)",
        source: "NVIDIA Investor Relations",
        url: "https://ir.nvidia.com",
        relevance: "Data Center segment revenue breakdown, gross margin metrics, and wafer supply commitments."
      },
      {
        title: "Goldman Sachs Global Investment Research: Semi & AI Infrastructure",
        source: "Goldman Sachs Equity Research",
        relevance: "TSMC CoWoS capacity allocation models and hyperscaler custom silicon ROI comparison."
      },
      {
        title: "Morgan Stanley Technology Conference: Blackwell Architecture Teardown",
        source: "Morgan Stanley GIR",
        relevance: "Rack-scale NVLink interconnect pricing and Spectrum-X Ethernet penetration rates."
      }
    ]
  },
  PLTR: {
    id: "memo_pltr_20261102",
    ticker: "PLTR",
    companyName: "Palantir Technologies Inc.",
    exchange: "NYSE",
    asOfDate: "Nov 02, 2026",
    rating: "EQUAL-WEIGHT",
    currentPrice: 62.40,
    targetPrice: 74.00,
    impliedUpsidePercent: 18.6,
    conviction: "MEDIUM",
    primaryQuestion: "Analyze Palantir's commercial AIP enterprise customer acceleration vs US government defense concentration and multiple expansion.",
    executiveSummary: "We initiate with an EQUAL-WEIGHT rating on Palantir Technologies with a price target of $74 (18.6% upside). Palantir's Artificial Intelligence Platform (AIP) represents one of the most effective enterprise monetization engines in the software sector, converting 5-day bootcamp pilots into 7-figure production contracts and driving US Commercial revenue growth to +54% YoY.\n\nHowever, at an unprecedented valuation multiple exceeding 85x NTM P/E and ~38x EV/Sales, Palantir's current share price leaves near-zero margin for execution variance. While the company's defense prime status (TITAN program, Project Maven) ensures high-margin government durability, maintaining the current valuation multiple requires commercial revenue acceleration to sustain >45% for the next 3 consecutive fiscal years.",
    thesisPillars: [
      {
        title: "AIP Bootcamps Delivering Unprecedented Sales Velocity",
        statement: "Palantir's shift from 9-month bespoke deployments to 5-day hands-on AIP bootcamps has collapsed customer acquisition cycles and unlocked mid-market enterprise adoption.",
        proofPoints: [
          "US Commercial customer count expanded 83% YoY, surpassing 380 enterprise clients.",
          "AIP contract closures frequently materialize within 4-6 weeks post-bootcamp vs 6-12 months for legacy Foundry.",
          "Net Dollar Retention in US Commercial exceeded 132%, evidencing deep expansion within existing accounts."
        ],
        sentiment: "bullish"
      },
      {
        title: "Prime Contractor Moat in Department of Defense Workloads",
        statement: "Palantir has successfully transitioned from an experimental software subcontractor to a Tier-1 prime defense contractor with multi-hundred million dollar programmatic awards.",
        proofPoints: [
          "US Army $480M contract award for Maven Smart System prototype production.",
          "Prime contractor selection for the Army's Tactical Intelligence Targeting Access Node (TITAN) vehicle program.",
          "Government gross margins remain industry-leading at 83% with 98%+ renewal rates."
        ],
        sentiment: "bullish"
      },
      {
        title: "Valuation Multiple Asymmetry Caps Risk-Adjusted Skew",
        statement: "At 88x forward earnings, PLTR trades at a 350% premium to large-cap software peers, embedding hyper-optimistic enterprise TAM capture assumptions.",
        proofPoints: [
          "S&P 500 inclusion and retail momentum have decoupled valuation from historical cash flow discount benchmarks.",
          "International commercial growth remains sluggish at +12% YoY, highlighting European data governance friction.",
          "Operating margin expansion must cross 45% (GAAP) to justify current discounted cash flow multiples."
        ],
        sentiment: "cautious"
      }
    ],
    financialScorecard: {
      revenueTTM: "$2.65B",
      revenueGrowthYoY: "+27.2%",
      grossMargin: "81.2%",
      operatingMargin: "38.0% (adj)",
      fcfConversion: "34.1%",
      ntmPE: "88.4x",
      evEbitda: "62.1x",
      ruleOf40: "65.2%",
      netDebtToEbitda: "-2.10x (Net Cash $4.0B)"
    },
    scenarioAnalysis: {
      bull: {
        targetPrice: 92.00,
        probability: 20,
        rationale: "US commercial hyper-growth (>60% YoY) broadens into Europe and Japan; AIP becomes the dominant enterprise ontology layer."
      },
      base: {
        targetPrice: 74.00,
        probability: 50,
        rationale: "Commercial growth sustains 40-45%; defense contracts renew steadily; valuation multiple gradually compresses into earnings growth."
      },
      bear: {
        targetPrice: 38.00,
        probability: 30,
        rationale: "Multiple derating toward high-growth peer average (40x P/E); US commercial growth decelerates under enterprise IT budget belt-tightening."
      }
    },
    catalystTimeline: [
      {
        horizon: "0-3 Months",
        event: "AIPCon Developer Conference: Enterprise Agentic Case Studies",
        expectedImpact: "Medium",
        bias: "Positive"
      },
      {
        horizon: "3-6 Months",
        event: "Department of Defense FY26 Budget Appropriations for Joint All-Domain Command (JADC2)",
        expectedImpact: "High",
        bias: "Positive"
      },
      {
        horizon: "6-12 Months",
        event: "Annual Rule of 40 Audit & GAAP Operating Margin Inflection Point",
        expectedImpact: "High",
        bias: "Volatile"
      }
    ],
    riskMatrix: [
      {
        category: "Valuation Risk",
        risk: "Severe downside vulnerability if quarterly revenue fails to beat street consensus by at least 3-5%.",
        severity: "High",
        mitigant: "Strong share repurchase capacity supported by $4.0B in zero-debt net cash reserves."
      },
      {
        category: "Sales Force Scaling",
        risk: "Risk of channel capacity saturation as bootcamp demand outpaces certified deployment engineers.",
        severity: "Medium",
        mitigant: "Expanding systems integrator partnerships with Accenture, PwC, and Oracle Cloud."
      },
      {
        category: "Political / Contracting",
        risk: "Defense budget reallocation or delays in federal continuing resolutions.",
        severity: "Medium",
        mitigant: "Diversified contract vehicle portfolio spanning Army, Navy, Air Force, and intelligence agencies."
      }
    ],
    tokenEfficiencyMetrics: {
      rawRetrievedTokens: 69500,
      distilledContextTokens: 12800,
      outputMemoTokens: 1120,
      tokensSaved: 55580,
      compressionPercentage: 80.0,
      estimatedCostWithDistillationUsd: 0.061,
      estimatedCostWithoutDistillationUsd: 0.365,
      costSavedUsd: 0.304,
      informationDensityScore: 3.9
    },
    citations: [
      {
        title: "SEC Form 10-Q (Q3 2025)",
        source: "Palantir Investor Relations",
        url: "https://investors.palantir.com",
        relevance: "Commercial vs Government customer count segmentation and Rule of 40 calculation."
      },
      {
        title: "Department of Defense Contract Award Notice (Maven Prime)",
        source: "US DoD Office of Public Affairs",
        relevance: "Contract scope, ceiling valuation ($480M), and programmatic deployment timeline."
      },
      {
        title: "JPMorgan Software Equity Research Note: Enterprise AI Bootcamps",
        source: "JPMorgan Equity Research",
        relevance: "Bootcamp conversion velocity and forward multiple sensitivity analysis."
      }
    ]
  },
  ASML: {
    id: "memo_asml_20261102",
    ticker: "ASML",
    companyName: "ASML Holding N.V.",
    exchange: "Euronext / NasdaqGS",
    asOfDate: "Nov 02, 2026",
    rating: "OVERWEIGHT",
    currentPrice: 745.00,
    targetPrice: 935.00,
    impliedUpsidePercent: 25.5,
    conviction: "HIGH",
    primaryQuestion: "Evaluate ASML's High-NA EUV lithography monopoly against escalating China export controls and cyclic foundry capex slowdowns.",
    executiveSummary: "We reiterate our OVERWEIGHT rating on ASML Holding with a 12-month target price of $935 (€860), representing a 25.5% upside. Following the post-Q3 cyclical order reset, we believe market pessimism regarding foundry capex digestion and Dutch export restrictions is now fully discounted in the shares.\n\nASML maintains an unbreakable monopoly over High-NA EUV (0.55 NA) systems—the foundational manufacturing equipment required for all sub-2nm leading-edge logic (TSMC N2/A16, Intel 14A, Samsung SF2) and advanced 3D DRAM nodes. As China revenue normalizes from unsustainable highs (40%+) back to historical baselines (20%), the inflection toward next-generation AI chip architectures in 2026/27 will catalyze a major order re-acceleration.",
    thesisPillars: [
      {
        title: "High-NA EUV (EXE:5000/5200) Structural Monopoly",
        statement: "High-NA EUV lithography systems priced at €350M+ per unit represent the single most indispensable capital asset in semiconductor manufacturing.",
        proofPoints: [
          "Zero commercial competitor exists in extreme ultraviolet (0.33 NA or 0.55 NA) lithography globally.",
          "First customer tool validations at Intel Fab 34 and TSMC R&D show 1.7x feature density enhancement and single-exposure defect reduction.",
          "High-NA backlog of >25 units provides guaranteed revenue visibility through 2027/28."
        ],
        sentiment: "bullish"
      },
      {
        title: "Leading-Edge Logic & 3D DRAM Capex Re-Acceleration",
        statement: "Foundry spending on advanced nodes will rebound sharply as TSMC Fab 20/21 ramps 2nm volume and memory makers transition to 1-gamma/1-delta DRAM.",
        proofPoints: [
          "EUV layer count increases from 12-14 layers at 3nm to >20 layers at 2nm/sub-2nm nodes.",
          "TSMC N2 node customer commitment pipeline (Apple, NVIDIA, AMD) is larger than N3 at the equivalent development stage.",
          "Installed Base Management (service and field upgrades) delivers steady high-margin recurring cash flows (€6B+ annually)."
        ],
        sentiment: "bullish"
      },
      {
        title: "China Export Derisking Already Reflected in Valuation",
        statement: "Market concerns over Dutch and US restrictions on NXT:1970i/1980i DUV systems have reset expectations; remaining China demand consists of non-sanctioned mature nodes.",
        proofPoints: [
          "China share of net bookings guided down to ~20% for FY25/26, eliminating negative revision risk.",
          "Western domestic foundry incentives (US CHIPS Act, EU Chips Act) subsidize new leading-edge fabs requiring fresh EUV tooling.",
          "Historical downcycle troughs consistently represent prime entry multiples (current forward P/E of 28x vs 5-year average of 34x)."
        ],
        sentiment: "bullish"
      }
    ],
    financialScorecard: {
      revenueTTM: "€27.8B ($30.2B)",
      revenueGrowthYoY: "+11.2%",
      grossMargin: "51.3%",
      operatingMargin: "31.8%",
      fcfConversion: "24.5%",
      ntmPE: "28.2x",
      evEbitda: "23.4x",
      ruleOf40: "43.0%",
      netDebtToEbitda: "-0.32x (Net Cash €3.1B)"
    },
    scenarioAnalysis: {
      bull: {
        targetPrice: 1050.00,
        probability: 25,
        rationale: "High-NA adoption accelerates across all tier-1 foundries; 2026 revenue achieves high-end of guidance (€35B+); multiple expands to 35x P/E."
      },
      base: {
        targetPrice: 935.00,
        probability: 60,
        rationale: "Cyclical recovery takes hold by 2H25; €30B-€32B revenue in FY26 with 54% gross margin; steady 30x multiple."
      },
      bear: {
        targetPrice: 520.00,
        probability: 15,
        rationale: "Prolonged foundry capex freeze; total unilateral Dutch export embargo on servicing China DUV fleet; earnings drop 20%."
      }
    },
    catalystTimeline: [
      {
        horizon: "0-3 Months",
        event: "TSMC 2nm Fab 20 Tool Installation Milestones & Q1 Bookings Report",
        expectedImpact: "High",
        bias: "Positive"
      },
      {
        horizon: "3-6 Months",
        event: "High-NA EXE:5200 Production System Commercial Delivery to Tier-1 Customers",
        expectedImpact: "High",
        bias: "Positive"
      },
      {
        horizon: "6-12 Months",
        event: "ASML Investor Day: 2030 Long-Term Roadmap & Installed Base Expansion Target",
        expectedImpact: "High",
        bias: "Positive"
      }
    ],
    riskMatrix: [
      {
        category: "Export Control Expansion",
        risk: "Potential retrospective prohibition on servicing previously installed deep-ultraviolet (DUV) equipment in China.",
        severity: "High",
        mitigant: "High demand from expanding US, European, and Japanese domestic fab projects offsetting geographic reallocation."
      },
      {
        category: "Foundry Capex Delays",
        risk: "Customer financial distress (e.g. Intel foundry restructuring) delaying tool purchase order deliveries.",
        severity: "Medium",
        mitigant: "Strict slot reservation non-refundable deposits and multi-year supply agreements."
      },
      {
        category: "Supply Chain Complexity",
        risk: "Single-source dependency on Zeiss optical mirrors and specialised laser components.",
        severity: "Medium",
        mitigant: "Decades-long joint venture alignment, exclusive supply covenants, and co-investment in Zeiss fabrication facilities."
      }
    ],
    tokenEfficiencyMetrics: {
      rawRetrievedTokens: 72100,
      distilledContextTokens: 13500,
      outputMemoTokens: 1140,
      tokensSaved: 57460,
      compressionPercentage: 79.7,
      estimatedCostWithDistillationUsd: 0.064,
      estimatedCostWithoutDistillationUsd: 0.379,
      costSavedUsd: 0.315,
      informationDensityScore: 4.1
    },
    citations: [
      {
        title: "ASML Q3 2025 Financial Results & Backlog Disclosures",
        source: "ASML Investor Relations",
        url: "https://www.asml.com/investors",
        relevance: "Net bookings breakdown, EUV vs DUV revenue split, and 2025/2026 guidance range."
      },
      {
        title: "Bernstein European Technology: Lithography Deep Dive",
        source: "Bernstein Research",
        relevance: "High-NA EUV cost-per-die crossover calculation vs multiple-patterning 0.33 NA."
      },
      {
        title: "Dutch Ministry of Foreign Trade Regulatory Notice on Lithography Servicing",
        source: "Government of the Netherlands",
        relevance: "Scope of national export restrictions and authorization requirements for DUV tools."
      }
    ]
  },
  AAPL: {
    id: "memo_aapl_20261102",
    ticker: "AAPL",
    companyName: "Apple Inc.",
    exchange: "NasdaqGS",
    asOfDate: "Nov 02, 2026",
    rating: "EQUAL-WEIGHT",
    currentPrice: 228.50,
    targetPrice: 245.00,
    impliedUpsidePercent: 7.2,
    conviction: "MEDIUM",
    primaryQuestion: "Is Apple's Services gross margin and AI iPhone upgrade cycle sufficient to offset China market share loss and antitrust headwinds?",
    executiveSummary: "We maintain our EQUAL-WEIGHT rating on Apple with a 12-month target price of $245 (7.2% upside). Apple continues to exhibit best-in-class free cash flow generation ($105B+ TTM) and exceptional capital return discipline. The Services division (surpassing a $100B run rate at a 74.5% gross margin) provides an extraordinary high-margin cash flow floor.\n\nHowever, we view the upcoming 'Apple Intelligence' multi-year upgrade cycle as already largely discounted in the stock's 30.5x NTM P/E multiple. Furthermore, structural market share losses in Greater China to domestic competitors (Huawei, Xiaomi) combined with escalating regulatory scrutiny (US DoJ antitrust lawsuit, EU Digital Markets Act) constrain multiple expansion potential.",
    thesisPillars: [
      {
        title: "Services Division As High-Margin Cash Machine",
        statement: "Apple's active installed base of 2.2B+ devices fuels recurring, double-digit Services expansion at 2.5x the margin profile of hardware.",
        proofPoints: [
          "Services revenue exceeded $25B in the most recent quarter with gross margin touching 74.5%.",
          "Paid subscriptions across iCloud, Apple Music, and App Store surpassed 1.1B accounts.",
          "Services now accounts for >36% of total company gross profit, dampening cyclical hardware volatility."
        ],
        sentiment: "bullish"
      },
      {
        title: "Apple Intelligence Catalyzing Measured Upgrade Cycle",
        statement: "On-device private cloud compute and localized AI features will drive a replacement cycle, though staggered regional rollouts will lengthen the adoption curve.",
        proofPoints: [
          "Only iPhone 15 Pro and iPhone 16+ models feature sufficient DRAM (8GB+) to run Apple Intelligence, creating a 350M+ upgrade eligible pool.",
          "Carrier promotional subsidies remain elevated, reducing consumer barrier to upgrade.",
          "However, delayed language availability in China and EU delays the upgrade peak into late 2026."
        ],
        sentiment: "neutral"
      },
      {
        title: "China Geopolitical Share Loss & Regulatory Frictional Costs",
        statement: "Apple faces permanent market share displacement in China tier-1 cities alongside ongoing legal challenges to App Store take-rates.",
        proofPoints: [
          "Greater China revenue contracted 4% YoY amidst intense competition from Huawei Mate/Pura series.",
          "EU DMA compliance has necessitated alternative app marketplaces and reduced fee structures.",
          "US Department of Justice antitrust litigation threatens Google search default distribution payments ($20B/year)."
        ],
        sentiment: "cautious"
      }
    ],
    financialScorecard: {
      revenueTTM: "$391.0B",
      revenueGrowthYoY: "+6.1%",
      grossMargin: "46.2%",
      operatingMargin: "31.2%",
      fcfConversion: "27.8%",
      ntmPE: "30.5x",
      evEbitda: "22.8x",
      ruleOf40: "37.3%",
      netDebtToEbitda: "0.41x (Net Debt $48.5B)"
    },
    scenarioAnalysis: {
      bull: {
        targetPrice: 275.00,
        probability: 20,
        rationale: "Apple Intelligence creates a supercycle matching iPhone 6/12; Services crosses $120B; China market stabilizes."
      },
      base: {
        targetPrice: 245.00,
        probability: 60,
        rationale: "Mid-single-digit iPhone revenue growth; Services maintains 11-13% growth; multiple sustains at ~30x P/E."
      },
      bear: {
        targetPrice: 180.00,
        probability: 20,
        rationale: "US DoJ strikes down Google search revenue sharing; China revenue drops 15%; valuation multiple compresses to 22x."
      }
    },
    catalystTimeline: [
      {
        horizon: "0-3 Months",
        event: "Q1 Holiday Quarter Earnings & iPhone 16 Global Channel Sell-Through",
        expectedImpact: "High",
        bias: "Neutral"
      },
      {
        horizon: "3-6 Months",
        event: "Apple Intelligence International Localization (Chinese, Spanish, French) & WWDC Preview",
        expectedImpact: "High",
        bias: "Positive"
      },
      {
        horizon: "6-12 Months",
        event: "US District Court Rulings on DoJ Antitrust Claims & Google Default Search Payments",
        expectedImpact: "High",
        bias: "Negative"
      }
    ],
    riskMatrix: [
      {
        category: "Regulatory & Antitrust",
        risk: "Loss or renegotiation of Google search revenue sharing agreement (modeled at ~$18B-$20B of pure operating profit).",
        severity: "High",
        mitigant: "Expansion of first-party Apple Search Ads and multi-model AI partnership monetization."
      },
      {
        category: "Geographic Concentration",
        risk: "Nationalistic preference for domestic smartphone hardware in Mainland China.",
        severity: "Medium",
        mitigant: "Rapid production and sales diversification into India, Southeast Asia, and Latin America."
      },
      {
        category: "Hardware Margin Compression",
        risk: "Rising semiconductor costs (TSMC 3nm wafer price hikes) pressuring hardware gross margins.",
        severity: "Low",
        mitigant: "Significant scale purchasing leverage and shift toward higher ASP 'Pro' product mix (>65%)."
      }
    ],
    tokenEfficiencyMetrics: {
      rawRetrievedTokens: 84200,
      distilledContextTokens: 15100,
      outputMemoTokens: 1190,
      tokensSaved: 67910,
      compressionPercentage: 80.6,
      estimatedCostWithDistillationUsd: 0.072,
      estimatedCostWithoutDistillationUsd: 0.442,
      costSavedUsd: 0.370,
      informationDensityScore: 3.8
    },
    citations: [
      {
        title: "Apple Inc. Form 10-K (Fiscal Year Ended September 2025)",
        source: "Apple Investor Relations",
        url: "https://investor.apple.com",
        relevance: "Services gross margin disclosures, active installed base statistics, and regional revenue splits."
      },
      {
        title: "Morgan Stanley GIR: Apple Intelligence Replacement Cycle Survey",
        source: "Morgan Stanley Research",
        relevance: "Survey data on consumer upgrade intent and iPhone installed base age distribution."
      },
      {
        title: "US Department of Justice v. Apple Inc. Court Filings",
        source: "US District Court for the District of New Jersey",
        relevance: "Antitrust allegations regarding ecosystem interoperability and smartphone market power."
      }
    ]
  }
};
