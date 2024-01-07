const OverallStat = require("../models/overallstat");

const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();
    //console.log(overallStats[0]);
    console.log("New request!");
    res.status(200).json(overallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getSales,
};
