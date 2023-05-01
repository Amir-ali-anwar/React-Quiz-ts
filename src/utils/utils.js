import axios from "axios";

const customFetch= axios.create({
    baseURL:"https://opentdb.com/api.php?"
})
export default customFetch