import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createContact, getAllContacts , getAllGroups } from "../src/services/contactServices"
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [getContacts, setContacts] = useState([]);
  const [getGroups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getContact , setContact]=useState({
    fullName:"",
    photo:"",
    mobile:"",
    email:"",
    job:"",
    group:""
  });
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        setLoading(true)
        const {data:contactsData} = await getAllContacts()
        const {data:groupsData} = await getAllGroups()
        setContacts(contactsData)
        setGroups(groupsData)
        setLoading(false)
      }catch(err){
        console.log(err);
        setLoading(true)
      }
    }
    fetchData()
  },[])
  const navigate=useNavigate()

  const setContactInfo=(e)=>{
    setContact({
      ...getContact,
      [e.target.name] : e.target.value
    })
  }

  const createContactForm=async(event)=>{
    event.preventDefault()
    try{
      const {status} = await createContact(getContact)
      if(status===201){
        setContact({})
        navigate("/contacts")
      }
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={getContacts} loading={loading} />}
        />
        <Route path="/add" element={<AddContact groups={getGroups} setContactInfo={setContactInfo} contact={getContact} createContactForm={createContactForm}/>} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
        <Route path="/contacts/:contactId" element={<Contact contact={getContact} />} />
      </Routes>
    </div>
  );
};

export default App;
