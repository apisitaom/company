import  { Fetch, FetchForm } from './fetch'

// Addressform
export const addressformAdd = async(data) => {
    const res = await FetchForm("POST", '', '/addressform/add', data)
    return res
}
export const addressformEdit = async(data) => {
    const res = await Fetch("POST", '', '/addressform/edit', data)
    return res
}
export const addressformAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/addressform/lists`, data);
    return res;
};
export const addressformDeleted = async (data, token = "") => {    
    const res = await Fetch("DELETE", token, `/addressform/deleted/${data}`, data);
    return res;
};
// Addresspresent

// Borrow

// Category

// Employee

// Position

// Store

