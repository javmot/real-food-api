import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { dbConnect } from "./config/db";
import { dataSources, context } from "./config/context";

// resolvers
import UserResolver from "./resolvers/UserResolver";
import FoodGroupResolver from "./resolvers/FoodGroupResolver";
import FoodItemResolver from "./resolvers/FoodItemResolver";
import RecipeCategoryResolver from "./resolvers/RecipeCategoryResolver";
import RecipeResolver from "./resolvers/RecipeResolver";
import RecipeStepResolver from "./resolvers/RecipeStepResolver";
import FoodInfoResolver from "./resolvers/FoodInfoResolver";

const main = async () => {
	const schema = await buildSchema({
		resolvers: [
			UserResolver,
			FoodGroupResolver,
			FoodItemResolver,
			RecipeResolver,
			RecipeCategoryResolver,
			FoodInfoResolver,
			RecipeStepResolver,
		],
		emitSchemaFile: true,
		validate: false,
	});
	dbConnect();

	const server = new ApolloServer({ schema, dataSources, context });
	const app = Express();
	server.applyMiddleware({ app });
	app.listen({ port: 9002 }, () =>
		console.log(
			`🚀 Server ready and listening at ==> http://localhost:9002${server.graphqlPath}`
		)
	);
};

main().catch((error) => {
	console.log(error, "error");
});
