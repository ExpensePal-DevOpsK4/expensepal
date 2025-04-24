import axios from 'axios';

const API_BASE_URL = `http://16.170.202.218:4000/api`;

export const getExpenses = () => axios.get (`${API_BASE_URL}/expenses`);

export const addExpense = (expense) => axios.post (`${API_BASE_URL}/expenses`, expense);

export const updateExpense = (id, updatedData) => axios.patch (`${API_BASE_URL}/expenses ${id}`, updatedData);

export const deleteExpense = (id) => axios.delete (`${API_BASE_URL}/expenses/${id}`);