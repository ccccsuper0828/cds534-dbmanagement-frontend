import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  // 测试数据库连接
  testDatabase: async () => {
    try {
      const response = await api.get('/api/database/test');
      return response.data;
    } catch (error) {
      console.error('数据库测试失败:', error);
      throw error;
    }
  },

  // 获取用户列表
  getUsers: async (limit?: number, offset?: number) => {
    try {
      const params = new URLSearchParams();
      if (limit) params.append('limit', limit.toString());
      if (offset) params.append('offset', offset.toString());
      
      const response = await api.get(`/api/users?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('获取用户列表失败:', error);
      throw error;
    }
  },

  // 创建用户
  createUser: async (userData: { name: string; email: string }) => {
    try {
      const response = await api.post('/api/users', userData);
      return response.data;
    } catch (error) {
      console.error('创建用户失败:', error);
      throw error;
    }
  },

  // 获取单个用户
  getUser: async (userId: number) => {
    try {
      const response = await api.get(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('获取用户失败:', error);
      throw error;
    }
  },

  // 更新用户
  updateUser: async (userId: number, userData: { name?: string; email?: string }) => {
    try {
      const response = await api.put(`/api/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error('更新用户失败:', error);
      throw error;
    }
  },

  // 删除用户
  deleteUser: async (userId: number) => {
    try {
      const response = await api.delete(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('删除用户失败:', error);
      throw error;
    }
  },

  // 数据库查询操作
  databaseQuery: async (data: {
    databaseName?: string;
    tableName?: string;
    query?: string;
  }) => {
    try {
      const response = await api.post('/api/database/test', data);
      return response.data;
    } catch (error) {
      console.error('数据库查询失败:', error);
      throw error;
    }
  },
};

export default api;