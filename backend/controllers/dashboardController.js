const OverallStat = require("../models/overallstat");
const User = require("../models/user");
const Transaction = require("../models/transaction");

const getDashboardStats = async (req, res) => {
  try {
    const currentMonth = "December";
    const currentYear = 2021;
    const currentDay = "2021-12-09";

    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    /* Overall Stats */
    const overallStat = await OverallStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};

module.exports = {
  getDashboardStats,
};
