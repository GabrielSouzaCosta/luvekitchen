import axios from "axios";

export default function () {
    return axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
}