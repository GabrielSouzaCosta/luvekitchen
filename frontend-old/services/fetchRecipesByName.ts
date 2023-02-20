import axios from "axios";

export default function ({ name }: { name: string }) {
    if (!name) return
    return axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+name);
}