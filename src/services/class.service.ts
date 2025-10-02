import { apiService } from './api.service';
import { API_CONFIG } from '@/config/api.config';
import { ClassEntity } from '@/types/backend.types';
import { ApiResponse } from '@/types/api.types';

export const classService = {
  async getAll(includeSubjects = false) {
    const endpoint = includeSubjects
      ? `${API_CONFIG.ENDPOINTS.CLASSES}?includeSubjects=true`
      : API_CONFIG.ENDPOINTS.CLASSES;
    return apiService.get<ClassEntity[]>(endpoint);
  },

  async getById(id: string, includeSubjects = false) {
    const endpoint = includeSubjects
      ? `${API_CONFIG.ENDPOINTS.CLASSES}/${id}?includeSubjects=true`
      : `${API_CONFIG.ENDPOINTS.CLASSES}/${id}`;
    return apiService.get<ClassEntity>(endpoint);
  },

  async getByName(name: string, includeSubjects = false) {
    const endpoint = includeSubjects
      ? `${API_CONFIG.ENDPOINTS.CLASSES}/name/${encodeURIComponent(name)}?includeSubjects=true`
      : `${API_CONFIG.ENDPOINTS.CLASSES}/name/${encodeURIComponent(name)}`;
    return apiService.get<ClassEntity>(endpoint);
  },

  async getFullStructureByName(name: string): Promise<ApiResponse<ClassEntity>> {
    return apiService.get<ClassEntity>(
      `${API_CONFIG.ENDPOINTS.CLASSES}/name/${encodeURIComponent(name)}/full-structure`
    );
  },

  async getSidebarData(name: string) {
    return apiService.get<ClassEntity>(
      `${API_CONFIG.ENDPOINTS.CLASSES}/name/${encodeURIComponent(name)}/sidebar`
    );
  },

  async getAllSidebarData() {
    // Get all classes with full structure for sidebar
    const response = await apiService.get<ClassEntity[]>(API_CONFIG.ENDPOINTS.CLASSES);
    return response;
  },
};
