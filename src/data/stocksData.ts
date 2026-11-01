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
    executiveSummary: "We keep an OVERWEIGHT rating on NVIDIA with a 12-month target price of $175 (26.6% upside). Blackwell B200 and GB200 volume shipments are starting, and sovereign cluster orders are broadening. Hyperscalers continue to design internal chips like AWS Trainium and Google TPU v6, but NVIDIA retains an advantage in total cost of ownership through its software libraries, NVLink 5 switches, and Spectrum-X networking.\n\nHyperscaler capital expenditure growth will likely moderate from triple-digit rates to roughly 28% to 35% in fiscal 2026 and 2027. We project NVIDIA gross margins to settle between 73.5% and 75.0%, well above consensus bear cases of sub-65%. Enterprise adoption of private AI clusters across Europe and Asia gives NVIDIA an additional demand cushion against cloud provider bargaining power.",
    thesisPillars: [
      {
        title: "Blackwell Architecture Ramp and Packaging Supply",
        statement: "Blackwell GB200 NVL72 rack systems expand inference throughput 30 times and training efficiency 4 times compared to H100, extending delivery commitments through late 2026.",
        proofPoints: [
          "TSMC expanded advanced packaging capacity for NVIDIA to more than 45,000 wafers per month, resolving earlier wafer bottlenecks.",
          "Hyperscaler orders for GB200 systems exceed 1.2 million units across Microsoft, Meta, AWS, and Google Cloud.",
          "Average selling prices for GB200 NVL72 systems stand between $2.8M and $3.1M with gross margin above 74%."
        ],
        sentiment: "bullish"
      },
      {
        title: "Systems and Networking Integration (Spectrum-X and NVLink)",
        statement: "NVIDIA sells integrated data center systems, generating $1.20 to $1.35 in networking equipment for each dollar of accelerator compute sold.",
        proofPoints: [
          "Annual networking revenue exceeded $14B, driven by Spectrum-X Ethernet installations in corporate cloud environments.",
          "NVLink 5 interconnect bandwidth reaches 1.8 TB/s per GPU, exceeding merchant PCIe and standard Ethernet links.",
          "CUDA 13, NIM microservices, and TensorRT-LLM software tools retain a multi-year developer switching advantage."
        ],
        sentiment: "bullish"
      },
      {
        title: "Custom Silicon Limits and Sovereign AI Demand",
        statement: "Internal cloud provider chips handle targeted internal workloads such as search embeddings, while complex model training and inference run on NVIDIA hardware.",
        proofPoints: [
          "Cloud provider in-house silicon faces manufacturing yield limits and software fragmentation for external enterprise clients.",
          "Sovereign government projects in the Middle East, Japan, France, and the UK committed over $10B in cluster purchases.",
          "Our conservative scenario models a gross margin floor of 72.8% in fiscal 2027, above historical cyclical lows."
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
        rationale: "Blackwell gross margins exceed 76%; sovereign AI purchases top $25B; cloud provider capital expenditure grows over 40% year over year."
      },
      base: {
        targetPrice: 175.00,
        probability: 55,
        rationale: "Steady GB200 deliveries; fiscal 2026 revenue reaches $148B; gross margins stay near 74.2%; forward P/E holds at 32x."
      },
      bear: {
        targetPrice: 95.00,
        probability: 20,
        rationale: "Cloud capex falls 15%; internal cloud chips absorb 25% of inference tasks; gross margin drops to 66%."
      }
    },
    catalystTimeline: [
      {
        horizon: "0-3 Months",
        event: "Q4 FY25 Earnings and Initial Blackwell Volume Shipment Data",
        expectedImpact: "High",
        bias: "Positive"
      },
      {
        horizon: "3-6 Months",
        event: "GTC Conference: Next-Generation Rubin Architecture and Optical Roadmaps",
        expectedImpact: "High",
        bias: "Positive"
      },
      {
        horizon: "6-12 Months",
        event: "Fiscal 2026 Hyperscaler Capital Expenditure Revisions",
        expectedImpact: "Medium",
        bias: "Volatile"
      }
    ],
    riskMatrix: [
      {
        category: "Customer Concentration",
        risk: "The four largest cloud providers account for roughly 41% of data center revenue.",
        severity: "High",
        mitigant: "Sales growth into sovereign governments, specialized GPU clouds, and direct corporate accounts."
      },
      {
        category: "Export Controls",
        risk: "Trade restrictions on advanced computing hardware delivered to specific regional hubs.",
        severity: "Medium",
        mitigant: "Compliant regional hardware configurations and formal licensing processes."
      },
      {
        category: "Power and Facilities",
        risk: "Electric grid interconnection backlogs delaying new data center construction.",
        severity: "Medium",
        mitigant: "Liquid cooling efficiency in GB200 NVL72 racks reduces electrical draw per token generated."
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
        relevance: "Data Center segment revenue, gross margins, and wafer supply commitments."
      },
      {
        title: "Global Investment Research: Semiconductor Infrastructure",
        source: "Goldman Sachs GIR",
        relevance: "TSMC packaging allocation estimates and custom silicon cost comparisons."
      },
      {
        title: "Technology Conference: Blackwell Rack Architecture Review",
        source: "Morgan Stanley Research",
        relevance: "NVLink rack pricing models and Spectrum-X Ethernet adoption numbers."
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
    executiveSummary: "We rate Palantir EQUAL-WEIGHT with a target price of $74 (18.6% upside). Palantir's Artificial Intelligence Platform (AIP) converts 5-day bootcamp pilots into recurring enterprise software deals, helping drive US Commercial revenue growth to 54% year over year.\n\nPalantir trades above 85x forward earnings and 38x sales, leaving little buffer for slower quarters. While prime contractor defense awards (such as the TITAN vehicle program and Project Maven) provide reliable high-margin government backlog, sustaining the current valuation requires commercial growth to remain above 45% over the next three years.",
    thesisPillars: [
      {
        title: "AIP Bootcamps Speed Up Enterprise Sales Cycles",
        statement: "Palantir shortened customer onboarding from 9-month implementations to 5-day hands-on bootcamps, broadening its enterprise customer base.",
        proofPoints: [
          "US commercial customer count grew 83% year over year, reaching 380 corporate accounts.",
          "Contracts routinely close within 4 to 6 weeks following bootcamps, down from 6 to 12 months for legacy Foundry.",
          "US commercial net dollar retention reached 132%, demonstrating expansion inside established clients."
        ],
        sentiment: "bullish"
      },
      {
        title: "Prime Contractor Role in Defense Computing",
        statement: "Palantir moved from experimental software supplier to prime defense contractor with major multi-year military awards.",
        proofPoints: [
          "US Army awarded a $480M contract for Maven Smart System production.",
          "Selected as prime contractor for the Army's TITAN mobile intelligence ground station.",
          "Government gross margins stand at 83% with contract renewal rates above 98%."
        ],
        sentiment: "bullish"
      },
      {
        title: "High Valuation Multiple Limits Risk-Adjusted Upside",
        statement: "At 88x forward earnings, the stock trades at a large premium to enterprise software peers, pricing in rapid market share gains.",
        proofPoints: [
          "Index inclusion and retail fund flows pushed valuation above historical cash flow benchmarks.",
          "International commercial growth ran at 12% year over year due to European procurement delays.",
          "GAAP operating margins need to reach 45% to validate current discounted cash flow assumptions."
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
        rationale: "US commercial growth sustains above 60% and expands into Europe; AIP becomes an industry standard for data pipelines."
      },
      base: {
        targetPrice: 74.00,
        probability: 50,
        rationale: "Commercial growth stabilizes between 40% and 45%; military contracts renew steadily; valuation multiple gradually aligns with earnings."
      },
      bear: {
        targetPrice: 38.00,
        probability: 30,
        rationale: "Valuation re-rates toward the software peer median of 40x P/E; enterprise software budgets tighten."
      }
    },
    catalystTimeline: [
      {
        horizon: "0-3 Months",
        event: "AIPCon: Customer Deployment Case Studies and Product Releases",
        expectedImpact: "Medium",
        bias: "Positive"
      },
      {
        horizon: "3-6 Months",
        event: "Department of Defense FY26 Joint Command Allocations",
        expectedImpact: "High",
        bias: "Positive"
      },
      {
        horizon: "6-12 Months",
        event: "Annual Rule of 40 Update and Full-Year Operating Cash Flow Results",
        expectedImpact: "High",
        bias: "Volatile"
      }
    ],
    riskMatrix: [
      {
        category: "Valuation Sensitivity",
        risk: "Share price declines if quarterly revenue beats consensus expectations by less than 3%.",
        severity: "High",
        mitigant: "Zero debt and $4.0B in liquid cash reserves support share repurchases."
      },
      {
        category: "Field Engineering Capacity",
        risk: "Customer demand for bootcamps outpaces the hiring rate of qualified deployment engineers.",
        severity: "Medium",
        mitigant: "Partnerships with systems integrators including Accenture and Oracle Cloud."
      },
      {
        category: "Federal Procurement",
        risk: "Delays in federal budget approvals or changes in military priorities.",
        severity: "Medium",
        mitigant: "Diversified contract commitments across the Army, Navy, Air Force, and intelligence agencies."
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
        relevance: "Commercial versus government customer segmentation and Rule of 40 metrics."
      },
      {
        title: "Department of Defense Contract Notice (Maven Prime)",
        source: "US DoD Office of Public Affairs",
        relevance: "Award details, ceiling value of $480M, and program timeline."
      },
      {
        title: "Software Equity Research Note: AI Deployment Models",
        source: "JPMorgan Equity Research",
        relevance: "Bootcamp conversion data and valuation sensitivity models."
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
    executiveSummary: "We reiterate our OVERWEIGHT rating on ASML Holding with a 12-month target price of $935 (€860), implying 25.5% upside. Following cyclical order revisions, market expectations for foundry capex and Dutch export restrictions are factored into the share price.\n\nASML is the sole global producer of High-NA EUV systems (0.55 NA), the equipment required to print sub-2nm logic nodes (such as TSMC N2 and Intel 14A) and future 3D DRAM memory. While sales to Chinese foundries are normalizing from 40% of revenue to a baseline near 20%, demand for leading-edge AI chip manufacturing tools supports a multi-year order recovery starting in late 2025.",
    thesisPillars: [
      {
        title: "Sole Supplier of High-NA EUV Lithography",
        statement: "High-NA EUV tools, priced at roughly €350M each, remain mandatory for commercial production below 2 nanometers.",
        proofPoints: [
          "No commercial competitor produces extreme ultraviolet lithography systems.",
          "Early installations at Intel Fab 34 and TSMC R&D show 1.7x pattern density gains and reduced multi-patterning steps.",
          "Backlog contains over 25 High-NA systems, offering production visibility through 2028."
        ],
        sentiment: "bullish"
      },
      {
        title: "Leading-Edge Logic and Advanced DRAM Capex",
        statement: "Tool purchases will rise as foundries equip high-volume fabs for 2nm production and memory manufacturers deploy 1-gamma DRAM.",
        proofPoints: [
          "EUV layer counts rise from 12 to 14 at 3nm to more than 20 at 2nm nodes.",
          "TSMC N2 node customer pipeline exceeds commitments recorded for N3 at the same phase.",
          "Installed base maintenance and software upgrades provide stable recurring revenue above €6B annually."
        ],
        sentiment: "bullish"
      },
      {
        title: "Export Restrictions Priced Into Valuation",
        statement: "Concerns over Dutch and US trade limits on immersion DUV tools have reset expectations, leaving remaining China demand focused on mature nodes.",
        proofPoints: [
          "China share of order intake is modeled at roughly 20% for fiscal 2026, lowering further downgrade risk.",
          "Government semiconductor subsidies in the US, Europe, and Japan require new lithography machines.",
          "The stock trades at 28x forward earnings, below its five-year average of 34x."
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
        rationale: "High-NA tool adoption accelerates across tier-1 foundries; 2026 revenue tops €35B; valuation multiple reaches 35x P/E."
      },
      base: {
        targetPrice: 935.00,
        probability: 60,
        rationale: "Tool orders recover by late 2025; annual revenue reaches €31B with 54% gross margin; multiple holds at 30x."
      },
      bear: {
        targetPrice: 520.00,
        probability: 15,
        rationale: "Foundry tool deliveries face delays; Dutch authorities restrict maintenance on installed China systems; earnings decline 20%."
      }
    },
    catalystTimeline: [
      {
        horizon: "0-3 Months",
        event: "TSMC Fab 20 Cleanroom Readiness and Initial Q1 Tool Deliveries",
        expectedImpact: "High",
        bias: "Positive"
      },
      {
        horizon: "3-6 Months",
        event: "High-NA EXE:5200 Commercial Production Validation with Tier-1 Customers",
        expectedImpact: "High",
        bias: "Positive"
      },
      {
        horizon: "6-12 Months",
        event: "Investor Day: Updated 2030 Revenue Guidance and Service Expansion",
        expectedImpact: "High",
        bias: "Positive"
      }
    ],
    riskMatrix: [
      {
        category: "Trade Controls",
        risk: "Potential restrictions on servicing deep-ultraviolet machines previously sold in China.",
        severity: "High",
        mitigant: "Tool shipments to new fabs in the US, Europe, and Japan offset shifts in geographic demand."
      },
      {
        category: "Foundry Spending Cycles",
        risk: "Customer capital budget adjustments could postpone equipment delivery dates.",
        severity: "Medium",
        mitigant: "Non-refundable slot reservation deposits and multi-year procurement schedules."
      },
      {
        category: "Component Sourcing",
        risk: "Single-source supply relationships for specialized optical mirrors from Zeiss.",
        severity: "Medium",
        mitigant: "Long-term partnership agreements, exclusive manufacturing covenants, and co-investments in Zeiss facilities."
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
        title: "Q3 2025 Financial Results and Backlog Summary",
        source: "ASML Investor Relations",
        url: "https://www.asml.com/investors",
        relevance: "Net bookings data, EUV versus DUV revenue split, and forward revenue guidance."
      },
      {
        title: "European Technology Report: Lithography Economics",
        source: "Bernstein Research",
        relevance: "Cost-per-die analysis comparing High-NA single exposure to multi-patterning tools."
      },
      {
        title: "Dutch Foreign Trade Guidance on Industrial Tool Servicing",
        source: "Government of the Netherlands",
        relevance: "Regulations governing technical support on industrial lithography tools."
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
    executiveSummary: "We maintain an EQUAL-WEIGHT rating on Apple with a 12-month target price of $245 (7.2% upside). Apple generates over $105B in annual free cash flow with dependable share buybacks. The Services division runs above $100B in annual revenue at a 74.5% gross margin, providing a solid earnings base.\n\nHowever, the multi-year Apple Intelligence upgrade cycle is largely reflected in the stock at 30.5x forward earnings. In addition, handset market share losses in China to domestic manufacturers and regulatory lawsuits (such as the US antitrust case and EU Digital Markets Act compliance) cap multiple expansion.",
    thesisPillars: [
      {
        title: "Services Division Generates High-Margin Cash Flow",
        statement: "Apple's installed base of 2.2 billion active devices drives double-digit Services growth at more than twice the margin rate of hardware.",
        proofPoints: [
          "Quarterly Services revenue topped $25B with a 74.5% gross margin.",
          "Paid subscriptions across cloud services and media passed 1.1 billion accounts.",
          "Services now accounts for more than 36% of Apple total gross profit, moderating hardware cycle swings."
        ],
        sentiment: "bullish"
      },
      {
        title: "Apple Intelligence Supports Measured Upgrade Cadence",
        statement: "On-device processing and Siri updates will support hardware replacements, though regional language schedules will spread out consumer purchases.",
        proofPoints: [
          "Only iPhone 15 Pro and iPhone 16 models carry the 8GB of memory required for Apple Intelligence, creating a 350M+ upgrade-eligible base.",
          "Carrier promotional discounts remain competitive across major markets.",
          "Language releases in Chinese and European languages stretch the upgrade peak into late 2026."
        ],
        sentiment: "neutral"
      },
      {
        title: "China Competition and Antitrust Reviews",
        statement: "Apple faces domestic hardware competition in China alongside legal scrutiny of App Store transaction fees.",
        proofPoints: [
          "Greater China revenue declined 4% year over year as Huawei gained share in premium categories.",
          "European Union rules require alternative app marketplaces and modified commission structures.",
          "The US Department of Justice lawsuit challenges default search payment agreements that generate approximately $20B in annual operating profit."
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
        rationale: "Apple Intelligence drives an upgrade cycle on par with iPhone 12; Services revenue exceeds $120B; China handset share stabilizes."
      },
      base: {
        targetPrice: 245.00,
        probability: 60,
        rationale: "Mid-single-digit iPhone revenue growth; Services expands 11% to 13%; forward valuation multiple holds near 30x."
      },
      bear: {
        targetPrice: 180.00,
        probability: 20,
        rationale: "Courts restrict default search payments; China revenue contracts 15%; valuation multiple re-rates to 22x."
      }
    },
    catalystTimeline: [
      {
        horizon: "0-3 Months",
        event: "Holiday Quarter Earnings and Global iPhone 16 Channel Inventories",
        expectedImpact: "High",
        bias: "Neutral"
      },
      {
        horizon: "3-6 Months",
        event: "Apple Intelligence Regional Language Releases and WWDC Preview",
        expectedImpact: "High",
        bias: "Positive"
      },
      {
        horizon: "6-12 Months",
        event: "US District Court Antitrust Rulings Regarding Default Search Revenue",
        expectedImpact: "High",
        bias: "Negative"
      }
    ],
    riskMatrix: [
      {
        category: "Regulatory Rulings",
        risk: "Potential loss or restructuring of default search revenue share payments.",
        severity: "High",
        mitigant: "Growth in first-party Search Ads and non-exclusive search distribution agreements."
      },
      {
        category: "China Market Share",
        risk: "Competition from domestic smartphone makers in mainland China.",
        severity: "Medium",
        mitigant: "Manufacturing and sales expansion across India and Southeast Asia."
      },
      {
        category: "Component Costs",
        risk: "Higher costs on advanced 3nm semiconductor wafers.",
        severity: "Low",
        mitigant: "Volume purchasing agreements and a sales mix tilted toward higher-priced Pro models."
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
        relevance: "Services gross margins, active installed device counts, and regional revenues."
      },
      {
        title: "Consumer Hardware Survey: Device Upgrade Intentions",
        source: "Morgan Stanley Research",
        relevance: "Survey results on customer replacement intentions and installed base age."
      },
      {
        title: "US Department of Justice Legal Filings Regarding Platform Interoperability",
        source: "US District Court for New Jersey",
        relevance: "Legal arguments regarding app distribution and operating system integrations."
      }
    ]
  }
};
