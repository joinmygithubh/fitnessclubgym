import api from './api';

export const createMembershipApi = async (data) => {
  return await api.post('/memberships', data);
};

export const getMyMembershipsApi = async () => {
  return await api.get('/memberships/my');
};

export const getAllMembershipsAdminApi = async () => {
  return await api.get('/admin/memberships');
};

export const updateMembershipStatusAdminApi = async (id, statusData) => {
  return await api.patch(`/admin/memberships/${id}`, statusData);
};
