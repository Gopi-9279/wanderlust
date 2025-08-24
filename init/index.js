const mongoose = require("mongoose");
const initdata = require("./data.js");
const listing = require("../models/listings.js");

const initDB = async () => {
  await listing.deleteMany({});
  initdata.data =  initdata.data.map((obj)=>({...obj,owner : '689cc943f7c2582227ec60f0'}));
  await listing.insertMany(initdata.data);
  console.log("data was initialize");
};
initDB();