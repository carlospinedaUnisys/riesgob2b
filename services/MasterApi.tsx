const getAll = async()=> {
    const url = `https://randomuser.me/api/`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const MasterApi = {
    getAll
}

export default MasterApi;