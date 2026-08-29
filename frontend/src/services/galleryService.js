import api from './api';

export const getGalleryItemsApi = async () => {
  return await api.get('/gallery');
};

export const createGalleryItemAdminApi = async (data) => {
  return await api.post('/gallery', data);
};

export const deleteGalleryItemAdminApi = async (id) => {
  return await api.delete(`/gallery/${id}`);
};
