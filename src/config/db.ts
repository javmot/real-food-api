import { connect } from "mongoose";

export const DB_HOST = "mongodb://localhost:27017/test";

export const dbConnect = () => {
	connect(DB_HOST, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});
};
