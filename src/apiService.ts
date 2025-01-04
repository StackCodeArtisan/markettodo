const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"

export type  Category = {
    readonly idCategory: string;
    readonly strCategory: string;
    readonly strCategoryThumb: string;
    readonly strCategoryDescription: string;
}

export async function fetchCategories(): Promise<Category[]> | never {
    const response = await fetch(API_URL)
    return (await response.json()).categories as Promise<Category[]>
}