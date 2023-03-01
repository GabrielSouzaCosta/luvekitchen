import axios from "axios";

export default function ({ name }) {
    if (!name) return
    return axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+name);
}