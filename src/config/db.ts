import { connect } from "mongoose";

export const dbConnect = async () => {
	const mongoose = await connect("mongodb://localhost:27017/test", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	await mongoose.connection;
};
