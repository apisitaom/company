import  { Fetch, FetchForm } from './fetch'

export const albumAdd = async(data) => {
    const res = await FetchForm("POST", '', '/album/add', data)
    return res
}
export const albumEdit = async(data) => {
    const res = await Fetch("POST", '', '/album/edit', data)
    return res
}
export const albumAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/album/lists`, data);
    return res;
};
export const albumDeleted = async (data, token = "") => {    
    const res = await Fetch("DELETE", token, `/album/deleted/${data}`, data);
    return res;
};
