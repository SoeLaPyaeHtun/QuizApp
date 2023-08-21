import axios  from "axios";

export const BASE_URL = "http://localhost:5095/";

export const END_POINT = {
    participant : 'participant',
    question : 'question',
    getanswer : 'question/GetAnswer'
}

export const createAPIendpoint = endpoint => {
    let url = BASE_URL + 'api/' + endpoint + '/';

    return{
        fetch : () => axios.get(url),
        fetchbyid : id => axios.get(url + id),
        post : newrecord => axios.post(url, newrecord),
        put : (updatedrecord) => axios.put(url , updatedrecord),
        delete : id => axios.delete(url + id)
    }

}