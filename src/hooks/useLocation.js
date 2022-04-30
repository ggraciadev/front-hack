import React, { useContext } from "react";
import axios from "axios";
import { API_HOST } from "@env";
import { AuthContext } from "../context/authContext";
import useAuth from "../hooks/useAuth";

const useLocation = () => {
  const getSites = async () => {
    const response = await axios.get(
      `${API_HOST}/api/sites/`
    );
    const data = response.data;
    return data;
  };

  const getSingleSite = async (id_site) => {
    const response = await axios.get(
      `${API_HOST}/api/chargePoints/${id_site}`
    );
    const data = response.data;
    return data;
  };

  return {
    getSites,
    getSingleSite,
  };
};

export default useLocation;
