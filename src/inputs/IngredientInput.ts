import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { Ingredient } from "../entities/Ingredient";
import { UnitEnum } from "../entities/UnitEnum";

@InputType()
export class IngredientInput implements Partial<Ingredient> {
	@Field()
	@Length(1, 255)
	id!: string;

	@Field()
	@Length(1, 255)
	name!: string;

	@Field()
	quantity!: number;

	@Field((_type) => UnitEnum)
	unit!: UnitEnum;
}
