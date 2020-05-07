import { connect } from "mongoose";

export const DB_DEV = "mongodb://localhost:27017/real-food-test";

export const DB_HOST = process.env.MONGO_REALFOOD_DB || DB_DEV;

export const dbConnect = () => {
	connect(DB_HOST, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});
};
