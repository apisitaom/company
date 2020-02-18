import  { Fetch, FetchForm } from './fetch'

// Addressform
export const addressformAdd = async(data) => {
    const res = await Fetch("POST", '', '/addressform/add', data)
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
export const addresspresentAdd = async(data) => {
    const res = await Fetch("POST", '', '/addresspresent/add', data)
    return res
}
export const addresspresentEdit = async(data) => {
    const res = await Fetch("POST", '', '/addresspresent/edit', data)
    return res
}
export const addresspresentAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/addresspresent/lists`, data);
    return res;
};
export const addresspresentDeleted = async (data, token = "") => {    
    const res = await Fetch("DELETE", token, `/addresspresent/deleted/${data}`, data);
    return res;
};
// Borrow
export const borrowAdd = async(data, token) => {
    const res = await Fetch("POST", token, '/borrow/add', data)
    return res
}
export const borrowEdit = async(data) => {
    const res = await Fetch("POST", '', '/borrow/edit', data)
    return res
}
export const borrowAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/borrow/lists`, data);
    return res;
};
export const borrowDeleted = async (data, token = "") => {    
    const res = await Fetch("DELETE", token, `/borrow/deleted/${data}`, data);
    return res;
};
// Category
export const categoryAdd = async(data) => {
    const res = await Fetch("POST", '', '/category/add', data)
    return res
}
export const categoryEdit = async(data) => {
    const res = await Fetch("POST", '', '/category/edit', data)
    return res
}
export const categoryAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/category/lists`, data);
    return res;
};
export const categoryDeleted = async (data, token = "") => {    
    const res = await Fetch("DELETE", token, `/category/deleted/${data}`, data);
    return res;
};
// Employee
export const employeeAdd = async(data) => {
    const res = await Fetch("POST", '', '/employee/add', data)
    return res
}
export const employeeEdit = async(data) => {
    const res = await Fetch("POST", '', '/employee/edit', data)
    return res
}
export const employeeAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/employee/lists`, data);
    return res;
};
export const employeeDeleted = async (data, token = "") => {    
    const res = await Fetch("DELETE", token, `/employee/deleted/${data}`, data);
    return res;
};
// Position
export const positionAdd = async(data) => {
    const res = await Fetch("POST", '', '/position/add', data)
    return res
}
export const positionEdit = async(data) => {
    const res = await Fetch("POST", '', '/position/edit', data)
    return res
}
export const positionAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/position/lists`, data);
    return res;
};
export const positionDeleted = async (data, token = "") => {    
    const res = await Fetch("DELETE", token, `/position/deleted/${data}`, data);
    return res;
};
// Store
export const storeAdd = async(data) => {
    const res = await FetchForm("POST", '', '/store/add', data)
    return res
}
export const storeEdit = async(data) => {
    const res = await Fetch("POST", '', '/store/edit', data)
    return res
}
export const storeAll = async (data, token = "") => {
    const res = await Fetch("GET", token, `/store/lists`, data);
    return res;
};
export const storeDeleted = async (data, token = "") => {    
    const res = await Fetch("DELETE", token, `/store/deleted/${data}`, data);
    return res;
};
// Admin
export const adminLogin = async(data) => {
    const res = await Fetch("POST", '', '/admin/login', data)
    return res
}
// Dashboard
export const employeeCount = async (data, token = "") => {
    const res = await Fetch("GET", token, `/dashboard/employeecount`, data);
    return res;
};
export const storeCount = async (data, token = "") => {
    const res = await Fetch("GET", token, `/dashboard/storecount`, data);
    return res;
};