import { connect } from "mongoose";

export const dbConnect = () => {
	connect("mongodb://localhost:27017/test", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});
};
