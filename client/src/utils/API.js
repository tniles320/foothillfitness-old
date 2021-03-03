/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Strength calls
  getStrength: function (id) {
    return axios.get(`/api/strength/${id}`);
  },
  addStrength: function (strengthData) {
    return axios.post(`/api/strength`, strengthData);
  },
  updateStrength: function (strengthData, id) {
    return axios.put(`/api/strength/${id}`, strengthData);
  },
  deleteStrength: function (id) {
    return axios.delete(`/api/strength/${id}`);
  },
  // Cardio calls
  getCardio: function (id) {
    return axios.get(`/api/cardio/${id}`);
  },
  addCardio: function (cardioData) {
    return axios.post(`/api/cardio`, cardioData);
  },
  updateCardio: function (cardioData, id) {
    return axios.put(`/api/cardio/${id}`, cardioData);
  },
  deleteCardio: function (id) {
    return axios.delete(`/api/cardio/${id}`);
  },
  // Dealer calls
  getDealer: function (id) {
    return axios.get(`/api/dealer/${id}`);
  },
  addDealer: function (dealerData) {
    return axios.post(`/api/dealer`, dealerData);
  },
  updateDealer: function (dealerData, id) {
    return axios.put(`/api/dealer/${id}`, dealerData);
  },
  deleteDealer: function (id) {
    return axios.delete(`/api/dealer/${id}`);
  },
  // Image calls
  getImage: function (id) {
    return axios.get(`/api/image/${id}`);
  },
  addImage: function (imageData) {
    return axios.post(`/api/image`, imageData);
  },
  updateImage: function (imageData, id) {
    return axios.put(`/api/image/${id}`, imageData);
  },
  deleteImage: function (id) {
    return axios.delete(`/api/image/${id}`);
  },
};
