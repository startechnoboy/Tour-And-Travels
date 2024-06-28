const setLocalData = (data)=> {
    localStorage.setItem("tt_auth", JSON.stringify(data));
}

const getLocalData = () => {
    const data = localStorage.getItem("tt_auth");
    return JSON.parse(data);
}

const removeLocalData = (item) => {
    localStorage.removeItem(item);
}

export default{
    setLocalData,
    getLocalData,
    removeLocalData
}