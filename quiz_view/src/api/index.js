import axios  from "axios";

export const BASE_URL = "http://localhost:5095/";

export const END_POINT = {
    participant : 'participant',
    question : 'question'
}

export const createAPIendpoint = endpoint => {
    let url = BASE_URL + 'api/' + endpoint + '/';

    return{
        fetch : () => axios.get(url),
        fetchbyid : id => axios.get(url + id),
        post : newrecord => axios.post(url, newrecord),
        put : (id , updatedrecord) => axios.put(url + id , updatedrecord),
        delete : id => axios.delete(url + id)
    }

}