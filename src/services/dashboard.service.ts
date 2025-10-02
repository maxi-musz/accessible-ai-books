import { apiService } from './api.service';
import { API_CONFIG } from '@/config/api.config';
import { DashboardData } from '@/types/api.types';

export const dashboardService = {
  async getDashboard() {
    return apiService.get<DashboardData>(API_CONFIG.ENDPOINTS.DASHBOARD);
  },

  async getClassOverview(classId: string) {
    return apiService.get(`${API_CONFIG.ENDPOINTS.DASHBOARD}/class/${classId}`);
  },
};
