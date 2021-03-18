/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets user info
  getUser: function (id) {
    return axios.get(`/admin/user/${id}`);
  },
  getUserSession: function (id) {
    return axios.get(`/admin/user-session/${id}`);
  },
  // Logs the user out
  logout: function (id) {
    return axios.post(`/admin/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // Log the user in
  login: function (email, password) {
    return axios.post(`/admin/user/`, { email, password });
  },
  // New user registration
  register: function (userData) {
    return axios.post(`/admin/register/`, userData);
  },
  update: function (userData, id) {
    return axios.put(`/admin/user/${id}`, userData);
  },
  remove: function (id) {
    return axios.delete(`/admin/user/${id}`);
  },
};
