import { ObjectType, Field, ID } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "The User model" })
export class User {
	@Field(() => ID)
	id: string;

	@Field()
	@prop({ required: true, unique: true })
	email: string;

	@prop({ required: true })
	hash: string;
}

export const UserModel = getModelForClass(User);
