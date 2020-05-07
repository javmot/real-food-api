import "reflect-metadata";
import faker from "faker";
import { uniqueId, sample, times } from "lodash";
import { MongoClient, ObjectID } from "mongodb";
import { UserInterface } from "../entities/User";
import { RecipeCategoryInterface } from "../entities/RecipeCategory";
import { RecipeInterface } from "../entities/Recipe";
import { IngredientInterface } from "../entities/Ingredient";
import { RecipeStepInterface } from "../entities/RecipeStep";
import { UnitEnum } from "../entities/UnitEnum";

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "test";

function getFakeUser(): UserInterface {
	const username = uniqueId(faker.name.firstName());
	return {
		email: faker.internet.email(),
		username,
		hash: "poiqwerqn4rqy23408helsdkahnfoa;ewigh",
	};
}

function getFakeCategory(): RecipeCategoryInterface {
	return {
		title: faker.commerce.department(),
	};
}

function getFakeIngredients(): IngredientInterface[] {
	return times(Math.round(faker.random.number(10))).map(() => ({
		_id: new ObjectID(),
		name: faker.commerce.productName(),
		quantity: faker.random.number(100),
		unit: UnitEnum.GRAMS,
	}));
}

function getFakeRecipeSteps(): RecipeStepInterface[] {
	return times(Math.round(faker.random.number(10))).map(() => ({
		_id: new ObjectID(),
		title: faker.commerce.productAdjective(),
		description: faker.lorem.paragraph(10),
	}));
}

function getFakeRecipe(
	categories: Array<any>,
	users: Array<any>
): RecipeInterface {
	const defaultObj: any = {};
	const category = sample(categories) || defaultObj;
	const user = sample(users) || defaultObj;

	return {
		title: faker.commerce.product(),
		time: `${Math.round(faker.random.number(40))} minutos`,
		categoryId: category._id,
		userId: user._id,
		ingredients: getFakeIngredients(),
		steps: getFakeRecipeSteps(),
	};
}

MongoClient.connect(
	url,
	{
		useUnifiedTopology: true,
	},
	async function cb(_err, client) {
		const db = client.db(dbName);
		db.dropDatabase();

		const usersCollection = db.collection("users");
		const categoriesCollection = db.collection("recipecategories");
		const recipesCollection = db.collection("recipes");

		const users: Array<UserInterface> = [];
		for (let i = 0; i < 20; i += 1) {
			users.push(getFakeUser());
		}
		await usersCollection.insertMany(users);

		const categories: Array<RecipeCategoryInterface> = [];
		for (let i = 0; i < 6; i += 1) {
			categories.push(getFakeCategory());
		}
		await categoriesCollection.insertMany(categories);

		const usersDocs = await usersCollection.find().toArray();
		const categoriesDocs = await categoriesCollection.find().toArray();

		const recipes: Array<RecipeInterface> = [];
		for (let i = 0; i < 50; i += 1) {
			recipes.push(getFakeRecipe(usersDocs, categoriesDocs));
		}
		await recipesCollection.insertMany(recipes);

		console.log("Database seeded! :)");
		client.close();
	}
);
