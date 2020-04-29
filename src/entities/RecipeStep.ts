import { ObjectType, Field } from "type-graphql";

@ObjectType({ description: "Steps Of the Recipe" })
export class RecipeStep {
	@Field()
	title: string;

	@Field()
	img?: string;

	@Field()
	description?: string;
}
