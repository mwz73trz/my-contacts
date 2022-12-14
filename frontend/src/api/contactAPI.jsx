import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

const contactAPI = {};

contactAPI.getAllContacts = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}contacts/`));
};

contactAPI.getSingleContact = async (contactId) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}contacts/${contactId}/`)
  );
};

contactAPI.addContact = async (contactData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}contacts/`, contactData)
  );
};

contactAPI.editContact = async (contactId, contactData) => {
  return await tryCatchFetch(() =>
    axios.put(`${BASE_URL}contacts/${contactId}/`, contactData)
  );
};

contactAPI.deleteContact = async (contactId) => {
  return await tryCatchFetch(() =>
    axios.delete(`${BASE_URL}contacts/${contactId}/`)
  );
};

export default contactAPI;
