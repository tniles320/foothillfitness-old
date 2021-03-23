/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets user info
  getUser: function () {
    return axios.get(`/admin/user`, { withCredentials: true });
  },
  // Logs the user out
  logout: function (id) {
    return axios.post(`/admin/user/logout`, {
      withCredentials: true,
    });
  },
  // Log the user in
  login: function (username, password) {
    return axios.post(
      `/admin/user/login`,
      { username, password },
      { withCredentials: true }
    );
  },
  // New user registration
  register: function (userData) {
    return axios.post(`/admin/user/register`, userData);
  },
  update: function (userData, id) {
    return axios.put(`/admin/user/${id}`, userData);
  },
  remove: function (id) {
    return axios.delete(`/admin/user/${id}`);
  },
};
