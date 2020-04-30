import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { RecipeStep } from "../entities/RecipeStep";

@InputType()
export class RecipeStepInput implements Partial<RecipeStep> {
	@Field()
	@Length(1, 255)
	title: string;

	@Field({ nullable: true })
	description?: string;

	@Field({ nullable: true })
	img?: string;
}
