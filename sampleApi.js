const data = [
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Jeff Cox",
    title:
      "Watch Fed Chair Powell deliver his key Jackson Hole economic speech live - CNBC",
    description:
      "Federal Reserve Chairman Jerome Powell delivers his much-anticipated speech Friday morning as part of the central bank's Jackson Hole symposium.",
    url: "https://www.cnbc.com/2021/08/27/watch-fed-chair-powell-deliver-his-key-jackson-hole-economic-speech-live.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106804329-16068385972020-12-01t160130z_1286664382_rc2gek9zu94v_rtrmadp_0_usa-senate-hearing.jpeg?v=1606838623",
    publishedAt: "2021-08-27T13:41:15Z",
    content: null,
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters",
    title:
      "Contaminant in Moderna vaccines in Japan suspected to be metallic particles -NHK - Reuters",
    description:
      'A contaminant found in a batch of Moderna Inc\'s <a href="https://www.reuters.com/companies/MRNA.O" target="_blank">(MRNA.O)</a> COVID-19 vaccines delivered to Japan is believed to be a metallic particle, Japanese public broadcaster NHK reported, citing source…',
    url: "https://www.reuters.com/business/healthcare-pharmaceuticals/contaminant-moderna-vaccines-suspected-be-metallic-powder-nhk-2021-08-27/",
    urlToImage:
      "https://www.reuters.com/resizer/ht3wqW_eu4m94_ZVlHI55wdy4uM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PWO4ESE7XZPSBLHINEWBTWZ5NQ.jpg",
    publishedAt: "2021-08-27T13:37:00Z",
    content:
      "TOKYO, Aug 27 (Reuters) - A contaminant found in a batch of Moderna Inc's (MRNA.O) COVID-19 vaccines delivered to Japan is believed to be a metallic particle, Japanese public broadcaster NHK reported… [+2893 chars]",
  },
  {
    source: {
      id: null,
      name: "MarketWatch",
    },
    author: "Tomi Kilgore",
    title:
      "Cassava's stock tumbles again, after Quanterix said it 'did not' prepare data charts presented by Cassava, that are under dispute - MarketWatch",
    description:
      "Quanterix Corp. undefined said that while it was previously engaged by Cassava Sciences Inc. undefined to perform sample testing, the digitized biomarker...",
    url: "https://www.marketwatch.com/story/cassavas-stock-tumbles-again-after-quanterix-said-it-did-not-prepare-data-charts-presented-by-cassava-that-are-under-dispute-2021-08-27",
    urlToImage:
      "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
    publishedAt: "2021-08-27T12:58:00Z",
    content:
      "Quanterix Corp. \r\n QTRX,\r\n +11.07%\r\nsaid that while it was previously engaged by Cassava Sciences Inc. \r\n SAVA,\r\n -26.55%\r\nto perform sample testing, the digitized biomarker analysis company said it,… [+911 chars]",
  },
  {
    source: {
      id: null,
      name: "MarketWatch",
    },
    author: "Jeffry Bartash",
    title:
      "Inflation rate hits 30-year high, PCE shows, as U.S. confronts major shortages - MarketWatch",
    description:
      "Americans are paying more for a variety of goods and services as inflation eats into their incomes",
    url: "https://www.marketwatch.com/story/inflation-rate-hits-30-year-high-pce-shows-as-u-s-confronts-major-shortages-11630068319",
    urlToImage: "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
    publishedAt: "2021-08-27T12:45:00Z",
    content:
      "The numbers: The rate of inflation in the U.S. rose again in July and drove the increase over the past year to a 30-year high, pointing to fresh strains on businesses and consumers as the economy rec… [+2775 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Kate Duffy",
    title:
      "Jeff Bezos' full-time job is filing SpaceX lawsuits, Musk says - Business Insider",
    description:
      "Elon Musk's tweet came after Amazon's subsidiary Kuiper filed a protest against SpaceX's plan for more Starlink internet satellites.",
    url: "https://www.businessinsider.com/elon-musk-jeff-bezos-spacex-blue-origin-feud-lawsuit-kuiper-2021-8",
    urlToImage:
      "https://i.insider.com/6128c66780be940019b9ef6e?width=1200&format=jpeg",
    publishedAt: "2021-08-27T12:45:00Z",
    content:
      "Elon Musk on Friday took a jab at Jeff Bezos after an Amazon subsidiary protested against SpaceX's plans for more Starlink satellites. \r\nSpaceX CEO Musk tweeted that Bezos, Amazon's founder and execu… [+1869 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Jeff Cox",
    title:
      "Key inflation gauge rises 3.6% from a year ago to tie biggest jump since the early 1990s - CNBC",
    description:
      "An inflation measure the Federal Reserve uses to set policy rose 3.6% in July from a year ago.",
    url: "https://www.cnbc.com/2021/08/27/key-inflation-gauge-rises-3point6percent-from-a-year-ago-to-tie-biggest-jump-since-the-early-1990s.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106934277-16300704172021-05-28t000000z_1021479584_rc2yon9zbts7_rtrmadp_0_usa-economy-inflation.jpeg?v=1630070953",
    publishedAt: "2021-08-27T12:43:05Z",
    content:
      "An inflation measure the Federal Reserve uses to set policy rose 3.6% in July from a year ago, meeting Wall Street expectations but also tying the highest level in about 30 years.\r\nThe core personal … [+1661 chars]",
  },
  {
    source: {
      id: null,
      name: "Kitco NEWS",
    },
    author: "http://www.facebook.com/kitconews",
    title:
      "Gold price sees little movement following 0.3% rise in U.S. Core PCE - Kitco NEWS",
    description:
      "(Kitco News) - The gold market is holding steady, testing resistance just below $1,800 an ounce as the inflation pressures cool slightly in July.",
    url: "https://www.kitco.com/news/2021-08-27/Gold-price-sees-little-movement-following-0-3-rise-in-U-S-Core-PCE.html",
    urlToImage:
      "https://www.kitco.com/news/2021-08-27/images/inflation-400.jpg",
    publishedAt: "2021-08-27T12:36:00Z",
    content:
      "Editor's Note: With so much market volatility, stay on top of daily news! Get caught up in minutes with our speedy summary of today's must-read news and expert opinions. Sign up here! \r\n(Kitco News) … [+1643 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Kate Dore, CFP®",
    title:
      "Annuities make it easier for retirees to spend, research finds - CNBC",
    description:
      "Many retirees are hesitant to tap their nest eggs, but research shows they may spend freely with guaranteed income. Here's what older Americans need to know.",
    url: "https://www.cnbc.com/2021/08/27/annuities-make-it-easier-for-retirees-to-spend-research-finds.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106083452-1565969489094gettyimages-960189884.jpeg?v=1600197673",
    publishedAt: "2021-08-27T12:30:02Z",
    content:
      "With fewer employer pensions these days, some retirees are hesitant to draw down their nest eggs. However, older Americans may spend more freely with a guaranteed source of income, such as Social Sec… [+3381 chars]",
  },
  {
    source: {
      id: null,
      name: "Kitco NEWS",
    },
    author: "http://www.facebook.com/kitconews",
    title: "Gold price up just ahead of Fed Chair Powell's speech - Kitco NEWS",
    description:
      "Senior Technical Analyst Jim Wyckoff prepares investors with an overview of how the markets opened and closed. What moved metal prices? How do the technicals look? By looking at important developments",
    url: "https://www.kitco.com/news/2021-08-27/Gold-price-up-just-ahead-of-Fed-Chair-Powell-s-speech.html",
    urlToImage:
      "https://www.kitco.com/news/2021-08-27/images/goldchart_0827_am.png",
    publishedAt: "2021-08-27T12:08:00Z",
    content:
      "Editor's Note: With so much market volatility, stay on top of daily news! Get caught up in minutes with our speedy summary of today's must-read news and expert opinions. Sign up here! \r\n(Kitco News) … [+3317 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Meg Tirrell",
    title:
      "A race against Covid: How Moderna and Pfizer-BioNTech developed vaccines in record time - CNBC",
    description:
      "The teams at Moderna, Pfizer and BioNTech recount the historic race to develop Covid-19 vaccines in a newly released documentary by CNBC.",
    url: "https://www.cnbc.com/2021/08/27/how-moderna-and-pfizer-developed-covid-vaccines-in-record-time.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106933810-Vaccines_Thumbnail.png?v=1629998387",
    publishedAt: "2021-08-27T12:00:01Z",
    content:
      "The decision to pivot an entire business to focus on the coronavirus is an obvious one in hindsight, at least for Moderna, BioNTech and Pfizer, which succeeded beyond anyone's expectations and will r… [+3652 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Peter Schacknow",
    title:
      "Stocks making the biggest moves premarket: Big Lots, Hibbett Sports, Peloton, Gap and others - CNBC",
    description:
      "These are the stocks posting the largest moves before the bell.",
    url: "https://www.cnbc.com/2021/08/27/stocks-making-the-biggest-moves-premarket-big-lots-hibbett-sports-peloton-gap-and-others.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/47161007-big-lots-1-200.jpg?v=1347772586",
    publishedAt: "2021-08-27T11:55:38Z",
    content:
      "Check out the companies making headlines before the bell:\r\nBig Lots (BIG) The discount retailer's shares tumbled 9.5% in premarket trading after it missed top and bottom-line estimates for its latest… [+3644 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Lauren Thomas",
    title:
      "Peloton says it has been subpoenaed by DOJ, DHS over reporting of treadmill injuries - CNBC",
    description:
      "Peloton said Friday that the U.S. Department of Justice and the Department of Homeland Security have subpoenaed the fitness equipment maker.",
    url: "https://www.cnbc.com/2021/08/27/peloton-subpoenaed-by-doj-dhs-over-treadmill-injuries.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106878574-1620228160806-106878574-1620227425123-gettyimages-903922964-98984839.jpg?v=1630063274",
    publishedAt: "2021-08-27T11:26:09Z",
    content:
      "Peloton said Friday that the U.S. Department of Justice and the Department of Homeland Security have subpoenaed the fitness equipment maker for documents and other information related to injuries rep… [+1524 chars]",
  },
  {
    source: {
      id: "financial-times",
      name: "Financial Times",
    },
    author: null,
    title:
      "Food delivery apps stung by New York City cap on commissions - Financial Times",
    description:
      "Grubhub vows to fight legislation as shares in European parent Just Eat Takeaway fall",
    url: "https://www.ft.com/content/d63d4453-62e0-40e8-a303-2ee483c1d792",
    urlToImage:
      "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fa657f24a-ac16-4553-82cf-e9dfdbd998ca.jpg?source=next-opengraph&fit=scale-down&width=900",
    publishedAt: "2021-08-27T11:26:09Z",
    content:
      "Shares in Just Eat Takeaway, the owner of Grubhub, one of New York’s biggest food delivery apps, fell more than 4 per cent on Friday after the city voted to cap the commission rates that food deliver… [+4398 chars]",
  },
  {
    source: {
      id: null,
      name: "Cointelegraph",
    },
    author: "Arijit Sarkar",
    title: "Cuba set to recognize and regulate cryptocurrency - Cointelegraph",
    description:
      "Cuban businesses will reportedly be able to get relevant licenses based on their crypto-related service offerings.",
    url: "https://cointelegraph.com/news/cuba-set-to-recognize-and-regulate-cryptocurrency",
    urlToImage:
      "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDgvZThlYzNhNTgtMjljOC00OGFjLThkMDktMTU2ZGM3YzIzY2U2LmpwZw==.jpg",
    publishedAt: "2021-08-27T11:01:42Z",
    content:
      "The Cuban government is reportedly planning to recognize and regulate cryptocurrencies for payments.\r\nAccording to Aljazeera, the Caribbean nations central bank will establish rules for mainstreaming… [+1257 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "https://www.engadget.com/about/editors/saqib-shah",
    title:
      "Waymo will stop selling its self-driving LiDAR sensors to other companies - Engadget",
    description:
      "Alphabet's Waymo plans to halt sales of its LiDARs to third-parties..",
    url: "https://www.engadget.com/waymo-self-driving-car-lidar-103642444.html",
    urlToImage:
      "https://s.yimg.com/os/creatr-uploaded-images/2021-08/ff655400-0733-11ec-b6fc-947e970011e3",
    publishedAt: "2021-08-27T10:39:37Z",
    content:
      "Just months after a CEO shakeup, Waymo is officially halting sales of its custom sensors to third parties. The move sees the Alphabet-owned self-driving company unwinding a business operation just tw… [+1560 chars]",
  },
  {
    source: {
      id: null,
      name: "Electrek",
    },
    author: null,
    title:
      "Tesla plans to enter Texas deregulated energy market, starts with massive 250 MW battery - Electrek.co",
    description:
      "Tesla has filed to enter Texas’s deregulated energy market and become an official electricity retailer. For a change, the company sees an opportunity not to disrupt but to fix and stabilize the market. After winter storms earlier this year, the Texas grid exp…",
    url: "https://electrek.co/2021/08/27/tesla-plans-enter-texas-deregulated-energy-market-massive-battery/",
    urlToImage:
      "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2021/05/Tesla-Guide-Solar-Roof-Hero.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2021-08-27T10:18:00Z",
    content:
      "Tesla has filed to enter Texas’s deregulated energy market and become an official electricity retailer.\r\nFor a change, the company sees an opportunity not to disrupt but to fix and stabilize the mark… [+2323 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Michelle Toh, CNN Business",
    title:
      "Tim Cook gets $750 million bonus on 10th anniversary as Apple CEO - CNN",
    description:
      "Apple CEO Tim Cook just celebrated 10 years on the job. He also marked the occasion this week by collecting — and selling off — three quarters of a billion dollars' worth of stock.",
    url: "https://www.cnn.com/2021/08/27/investing/apple-ceo-tim-cook-shares-intl-hnk/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/210827032523-tim-cook-file-0715-super-tease.jpg",
    publishedAt: "2021-08-27T09:00:00Z",
    content: null,
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Jill Disis and CNN's Beijing bureau, CNN Business",
    title: "China blasts '996' excessive work culture - CNN",
    description:
      "China is putting companies that overwork their employees on notice.",
    url: "https://www.cnn.com/2021/08/27/tech/china-supreme-court-996-intl-hnk/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/210827013924-shanghai-financial-district-file-2020-super-tease.jpg",
    publishedAt: "2021-08-27T08:42:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Saheli Roy Choudhury",
    title:
      "India could begin trials for a digital rupee by December, central bank governor says - CNBC",
    description:
      "Several central banks are exploring digital currencies that would be issued by them, either to commercial lenders or to the public directly.",
    url: "https://www.cnbc.com/2021/08/27/india-central-bank-rbi-digital-rupee-trials-could-begin-by-december.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106006514-1562581893430gettyimages-1035841550.jpeg?v=1630048270",
    publishedAt: "2021-08-27T08:18:31Z",
    content:
      "The Reserve Bank of India may launch its first digital currency trial programs by December, central bank governor Shaktikanta Das told CNBC.\r\nCentral banks including those in China, Europe and the U.… [+1422 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Manish Singh",
    title: "China proposes strict control of algorithms - TechCrunch",
    description:
      "China is not done with curbing the influence local internet services have assumed in the world’s largest populous market. Following a widening series of regulatory crackdowns in recent months, the nation on Friday issued draft guidelines on regulating the alg…",
    url: "http://techcrunch.com/2021/08/27/china-proposes-strict-control-of-algorithms/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2021/05/GettyImages-1148122627.jpg?w=600",
    publishedAt: "2021-08-27T07:58:04Z",
    content:
      "China is not done with curbing the influence local internet services have assumed in the worlds largest populous market. Following a widening series of regulatory crackdowns in recent months, the nat… [+2009 chars]",
  },
];

export default data;
