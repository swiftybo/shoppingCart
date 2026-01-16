export async function fetchFood() {
    const res = await fetch(
        "https://api.nal.usda.gov/fdc/v1/foods/list?api_key=aKlhwHx8K8i2xffBqhMcopU3GDs3ksFb22hAQLnc&query=alcohol"
    );
    const food = await res.json();
    console.log(food);
    return food;
}
