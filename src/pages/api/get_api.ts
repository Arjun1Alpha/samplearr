export default async function handler(req: any, res: any) {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/5");
    const data = await response.json();
    res.status(200).json(data);
}

