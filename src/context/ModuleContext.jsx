import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ModuleReducer";

const ModuleContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  modules: [],
}

const ModuleProvider = ({ children }) => {

  const[state, dispatch] = useReducer(reducer, initialState);

  const getModules = async (url) =>{
    dispatch({type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const modules = await res.data;
      dispatch({type: "SET_API_DATA", payload: modules})
    } catch (error) {
    dispatch({type: "API_ERROR"});
    }
  };

  useEffect(() =>{
    getModules(API);
  }, []);

  return(
    <ModuleContext.Provider value = {{...state}}>{children}</ModuleContext.Provider>
  )
};

const UseModuleContext = () => {
  return useContext(ModuleContext);
};
export { ModuleProvider, ModuleContext, UseModuleContext};