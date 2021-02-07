// original inspiration from https://gist.github.com/nicholashc/0b1be0c6308232ad559efdcda36f71cb
type AirDrop = {
  url: string;
  tokenNamed: string;
  imgSrc: string;
  claimUrl: string;
};
type AirDrops = {
  [tokenName: string]: AirDrop;
};
export const csvClaimables: AirDrops = {
  uniswap: {
    url:
      "https://raw.githubusercontent.com/banteg/uniswap-distribution/master/uniswap-distribution.csv",
    // tokens called "uni" in csv
    tokenNamed: "uni",

    imgSrc: "/images/csv-claimables/uni.svg",
    claimUrl: "https://app.uniswap.org/",
  },
  "1inch": {
    url:
      "https://gist.githubusercontent.com/banteg/12708815fb63239d9f28dec5df8641f9/raw/28a9dffe9d5681ef5f75b0ab6c39fe5ea0064712/1inch.csv",
    tokenNamed: "tokens",

    imgSrc: "/images/csv-claimables/1inch.svg",
    claimUrl: "https://1inch.exchange/",
  },
  // no csv header at all
  tornado: {
    url:
      "https://raw.githubusercontent.com/tornadocash/airdrop/master/airdrop.csv",
    tokenNamed: "no-header",

    imgSrc: "/images/csv-claimables/torn.jpeg",
    claimUrl: "https://app.tornado.cash/airdrop/",
  },
  badger: {
    url:
      "https://gist.githubusercontent.com/banteg/9ad5fdd2e169a03cc5d93478ece10a38/raw/9b14f2fd933d8a817ff6773e4d4854832b02c4b8/badger.csv",
    tokenNamed: "badger",

    imgSrc: "/images/csv-claimables/badger.jpeg",
    claimUrl: "https://app.badger.finance/airdrops",
  },
  furucombo: {
    url:
      "https://gist.githubusercontent.com/nicholashc/c96d6b41e33d1245ecdaaea33fa6fab0/raw/05d3042e034c2ea99d7084789962aa95a3330f04/combo.csv",
    tokenNamed: "tokens",

    imgSrc: "/images/csv-claimables/furucombo.png",
    claimUrl: "https://furucombo.app/",
  },
  stakeDAO: {
    url:
      "https://gist.githubusercontent.com/nicholashc/d380275aa8118e018906feeda3a92be5/raw/07f4a09dd657a27080cc75eda5e864acc030af5f/stakedao.csv",
    tokenNamed: "tokens",

    imgSrc: "/images/csv-claimables/stake-DAO.jpg",
    claimUrl: "https://stakedao.org/",
  },
  curve: {
    url:
      "https://gist.githubusercontent.com/nicholashc/f4a34c138087195237556077ea6490d7/raw/bfdf0a9886747dfe3465a2e8ea1bfb02ae0386ac/curve.csv",
    tokenNamed: " token",

    imgSrc: "/images/csv-claimables/curve.jpeg",
    claimUrl: "https://www.curve.fi/",
  },
  digg: {
    url:
      "https://gist.githubusercontent.com/nicholashc/c21788b0f0391d0d2d2cdcc44940a0e3/raw/0dbdc85e0ebc4d2aaa7cda49d5aaeb903fef69c7/digg.csv",
    tokenNamed: " token",

    imgSrc: "/images/csv-claimables/digg.png",
    claimUrl:
      "https://badgerdao.medium.com/digg-at-a-glance-complete-guide-d0dc2c29d303",
  },
};