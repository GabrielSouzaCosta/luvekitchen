import axios from "axios";

export default function ({ id }: { id: string | undefined }) {
    if (id) return axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
}