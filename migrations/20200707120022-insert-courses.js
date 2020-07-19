"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "courses",
      [
        {
          name: "INTRO TO TRADING - TECHNICAL ANALYSIS",
          description:
            "This 3.5 hour Introduction to Trading focusing on Technical Analysis was originally recorded as a Webinar with live viewers. It covers the following topics in detail: - Intro to trading (Understanding the Risks, Why be a Trader) - Candlesticks (Shooting Star, Hammer, Doji, etc) - Candlestick Patterns (Ascending/Descending Triangles, Cups & Handles, etc) - Support/Resistance (Moving Averages, Trend-lines & Fibonacci, etc) - Momentum Indicators/Oscillators & Divergence (MACD, RSI, CMF, etc) - Practical Applications (Look at Live Charts & Mock Trading) This course is not designed to focus on any Asset or even Asset Class. This is the basic education one must have to Technically trade any asset whether its Crypto Currencies, Stocks, Commodities like Gold & Oil or FX pairs like USD/EUR.",
          videoURL:
            "https://tonevays.com/ondemand/1046/intro-to-trading-technical-analysis",
          price: 0.05,
          imageURL: "https://tonevays.com/Content/images/seminars/ondemand.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ENTRIES, EXITS, & STOP LOSSES",
          description:
            'To become a "strong" directional trader, you should understand three critical concepts. The first is management of your finances, the second is understanding how to effectively read charts. The third is strategic trade execution with defined entries, stop losses, and exits to best maximize your return. This pre-recorded webinar focuses on proper Entries, Exits & Stop Losses. It features different scenarios such as timing orderly dips, catching falling knives, playing breakouts of triangles, and more. This video is considered advanced so beginners should watch both the Intro to Technical Analysis and TD Sequential On-Demand videos first. It is 3 hours of workshop integrated with 1 hour of Q+A by attendees.',
          videoURL:
            "https://tonevays.com/ondemand/1051/entries-exits-stop-losses",
          price: 0.05,
          imageURL: "https://tonevays.com/Content/images/seminars/entryexitstops-960x640C.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "RISK, POSITION SIZE & LEVERAGE MANAGEMENT",
          description:
            'This pre-recorded webinar will provide the fundamental understanding of managing your trades and capital so you never have to attribute your performance as a trader to "dumb luck." Traders that excel in money management will never be in positions where big losses would result in something drastic like 50% of accounts depleted. Without mastery of risk and account management, one can never truly achieve mastery of trading. If you ever lost over 10% of your account on a single trade or 20% of your account in a single week, this is something you need to watch. With proper Risk & Position Sizing, the term REKT will never apply to you! This video is introductory, but is it highly recommended that you watched "Intro to Technical Analysis". It does NOT include access to the TI Indicator, and is 3 hours of workshop integrated with 1 hour of Q+A by attendees.',
          videoURL:
            "https://tonevays.com/ondemand/1055/risk-position-size-leverage-management",
          price: 0.05,
          imageURL: "https://tonevays.com/Content/images/seminars/PositionSize-960x640C.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TD SEQUENTIAL (ADVANCED TA)",
          description:
            'This is a pre-recorded TD Sequential Indicator webinar. It\'s an advanced trading video, so it is recommended for beginners to have already watched "Intro to Technical Analysis" or be proficient in the materials covered in that video. In this 4 hour session, we cover the math behind this very popular Wall Street indicator & several techniques used to maximize returns and lower risk by utilizing it as a tool in your trading. It also covers the changes that have been made by Tone Vays to this classic indicator that have earned it the name TI Sequential (where TI stands for Time Indicator).',
          videoURL:
            "https://tonevays.com/ondemand/1048/td-sequential-advanced-ta",
          price: 0.05,
          imageURL: "https://tonevays.com/Content/images/seminars/TD-Sequential-960x640C.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("courses", null, {});
  },
};
