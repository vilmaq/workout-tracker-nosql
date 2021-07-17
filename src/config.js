const DB_NAME = process.env.DB_NAME || "workouts";
const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

const MONGOOSE_OPTIONS = {
  useUnifiedTopology: true,
  useCreatedIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};
module.exports = {
  DB_URL,
  MONGOOSE_OPTIONS,
};
