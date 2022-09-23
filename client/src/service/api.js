import axios from 'axios';

const URL = "http://localhost:5003";

export const addRegisterData = async (formData, config) => {
   try {
      return await axios.post(`${URL}/register`, formData, config);
   } catch (error) {
      return error.response;
   }
};


export const get_user_data=async()=>{
      try {
         return await axios.get(`${URL}/getData`);
      } catch (error) {
           return error.response;
      }
};

export const delete_user=async(id)=>{
    try {
      return await axios.delete(`${URL}/deleteData/${id}`);
    } catch (error) {
        return error.response;
    }
}
