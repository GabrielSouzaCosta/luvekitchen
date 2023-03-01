import axios from "axios";

export default function ({ category }) {
    return axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+category);
}