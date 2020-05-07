import { InterfaceType, Field, ID } from "type-graphql";

@InterfaceType()
export abstract class IFoodItem {
	@Field((_type) => ID)
	id!: string;

	@Field()
	name!: string;
}
