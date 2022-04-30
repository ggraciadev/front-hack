import React, { useContext } from "react";
import axios from "axios";
import { API_HOST } from "@env";
import { AuthContext } from "../context/authContext";
import useAuth from "../hooks/useAuth";

const useLocation = () => {
  ///api/kpis/purchases?filter=year&kpiType=purchases
  const getSites = async () => {
    const response = await axios.get(
      `${API_HOST}/api/sites/`
    );
    const data = response.data;
    return data;
  };

  const getFiltered = (kpiType, filter) => {
    return async () => {
      const response = await axios.get(
        `${API_HOST}/api/kpis/${kpiType}?filter=${filter}`
      );
      const data = response.data;
      return data;
    };
  };


  const getSingleSite = async (id_site) => {
    const response = await axios.get(
      `${API_HOST}/api/sites/${id_site}`
    );
    const data = response.data;
    return data;
  };

  return {
    getSites,
    getSingleSite,
    getFiltered,
  };
};

export default useLocation;
