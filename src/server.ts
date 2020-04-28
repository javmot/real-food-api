import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { dbConnect } from "./config/db";
import { dataSources } from "./config/context";

// resolvers
import UserResolver from "./resolvers/User";
import FoodGroupResolver from "./resolvers/FoodGroup";
import FoodItemResolver from "./resolvers/FoodItem";

const main = async () => {
	const schema = await buildSchema({
		resolvers: [UserResolver, FoodGroupResolver, FoodItemResolver],
		emitSchemaFile: true,
		validate: false,
	});
	await dbConnect();

	const server = new ApolloServer({ schema, dataSources });
	const app = Express();
	server.applyMiddleware({ app });
	app.listen({ port: 3333 }, () =>
		console.log(
			`🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`
		)
	);
};
main().catch((error) => {
	console.log(error, "error");
});
