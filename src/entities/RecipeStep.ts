import { ObjectType, Field } from "type-graphql";

@ObjectType({ description: "Steps Of the Recipe" })
export class RecipeStep {
	@Field()
	title: String;

	@Field()
	img?: String;

	@Field()
	description?: String;
}
