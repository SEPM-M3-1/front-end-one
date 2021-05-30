import axios from "axios";

const baseUrl = "http://localhost:8080";

export const login = ({ email, password, type }) =>
  axios({
    method: "post",
    url: `${baseUrl}/login`,
    data: {
      email,
      password,
      type,
    },
  });

export const sigunm = ({ email, fullName, password, phone }) =>
  axios({
    method: "post",
    url: `${baseUrl}/signup`,
    data: {
      email,
      fullName,
      password,
      phone,
    },
  });

export const signups = ({
  email,
  fullName,
  password,
  phone,
  address,
  hourLimits,
}) =>
  axios({
    method: "post",
    url: `${baseUrl}/registration`,
    data: {
      email,
      fullName,
      password,
      phone,
      address,
      hourLimits,
    },
  });

  export const changeManagerProfile = ({ id, fullName, phone, email }) =>
  axios({
    method: "put",
    url: `${baseUrl}/managerprofile`,
    data: {
      id,
      email,
      fullName,
      phone,
    },
  });

export const fetchManagerProfileByEmail = ({ email }) =>
  axios({
    method: "get",
    url: `${baseUrl}/managerprofile`,
    params: {
      email,
    },
  });

export const fetchStaffProfileByEmail = ({ email }) =>
  axios({
    method: "get",
    url: `${baseUrl}/staffprofile`,
    params: {
      email,
    },
  });

export const changeStaffProfile = ({
  id,
  fullName,
  phone,
  email,
  hourLimits,
  address,
  preferredName,
}) =>
  axios({
    method: "put",
    url: `${baseUrl}/staffprofile/change`,
    data: {
      id,
      fullName,
      phone,
      email,
      hourLimits,
      address,
      preferredName,
    },
  });


  

