import axios from "axios";
const SERVER_URL='http://localhost:8000'

export const getAllContacts=()=>{
    const url=`${SERVER_URL}/contacts`
    return axios.get(url)
}

export const getOneContact=(contactId)=>{
    const url=`${SERVER_URL}/contacts/${contactId}`
    return axios.get(url)
}

export const getAllGroups=()=>{
    const url=`${SERVER_URL}/groups`
    return axios.get(url)
    console.log(axios.get(url));
}

export const getOneGroup=(groupId)=>{
    const url=`${SERVER_URL}/groups/${groupId}`
    return axios.get(url)
}

export const createContact=(contact)=>{
    const url=`${SERVER_URL}/contacts`
    return axios.post(url , contact)
}

export const uptoDateOneContact=(contactId,contact)=>{
    const url=`${SERVER_URL}/contacts/${contactId}`
    return axios.put(url , contact)
}

export const deleteOneContact=(contactId)=>{
    const url=`${SERVER_URL}/contacts/${contactId}`
    return axios.delete(url)
}
