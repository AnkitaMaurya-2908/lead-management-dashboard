const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { faker } = require("@faker-js/faker");
const Lead = require("./models/LeadModel");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected for Seeding");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const seedLeads = async () => {
  try {
    await Lead.deleteMany(); // optional: clear old data

    const leads = [];

    const statuses = ["New", "Contacted", "Converted"];
    const stages = ["Cold", "Warm", "Hot"];
    const sources = ["Website", "Ads", "Referral", "Instagram"];

    for (let i = 0; i < 500; i++) {
      leads.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number("##########"),
        status: statuses[Math.floor(Math.random() * statuses.length)],
        stage: stages[Math.floor(Math.random() * stages.length)],
        source: sources[Math.floor(Math.random() * sources.length)],
        createdAt: faker.date.past(),
      });
    }

    await Lead.insertMany(leads);
    console.log("✅ 500 Leads Inserted Successfully");

    process.exit();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

connectDB().then(seedLeads);
