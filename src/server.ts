import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { dbConnect } from "./config/db";
import { dataSources, context } from "./config/context";

// resolvers
import UserResolver from "./resolvers/User";
import FoodGroupResolver from "./resolvers/FoodGroup";
import FoodItemResolver from "./resolvers/FoodItem";
import RecipeCategoryResolver from "./resolvers/RecipeCategory";
import RecipeResolver from "./resolvers/Recipe";

const main = async () => {
	const schema = await buildSchema({
		resolvers: [
			UserResolver,
			FoodGroupResolver,
			FoodItemResolver,
			RecipeResolver,
			RecipeCategoryResolver,
		],
		emitSchemaFile: true,
		validate: false,
	});
	await dbConnect();

	const server = new ApolloServer({ schema, dataSources, context });
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
