import { InputType, Field } from "type-graphql";
import { Length, IsEmail } from "class-validator";
import { User } from "../entities/User";

@InputType()
export class UserInput implements Partial<User> {
	@Field()
	@IsEmail()
	email!: string;

	@Field()
	username!: string;

	@Field()
	@Length(8, 20)
	password!: string;
}
