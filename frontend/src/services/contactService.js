import api from './api';

export const submitContactFormApi = async (formData) => {
  return await api.post('/contact', formData);
};

export const getContactsAdminApi = async () => {
  return await api.get('/contact');
};

export const updateContactStatusAdminApi = async (id, statusData) => {
  return await api.patch(`/contact/${id}`, statusData);
};
