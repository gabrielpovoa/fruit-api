export const getFruits = async (fruit: string) => {
    const url = "https://www.fruityvice.com/api/fruit/";
    const response = await fetch(`${url}${fruit}`);
    const data = await response.json();

    return data;
}