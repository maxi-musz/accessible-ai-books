import { apiService } from './api.service';
import { API_CONFIG } from '@/config/api.config';
import { SubjectEntity } from '@/types/backend.types';
import { ApiResponse } from '@/types/api.types';

export const subjectService = {
  async getAll() {
    return apiService.get<SubjectEntity[]>(API_CONFIG.ENDPOINTS.SUBJECTS);
  },

  async getById(id: string) {
    return apiService.get<SubjectEntity>(`${API_CONFIG.ENDPOINTS.SUBJECTS}/${id}`);
  },

  async getByClassId(classId: string) {
    return apiService.get<SubjectEntity[]>(`${API_CONFIG.ENDPOINTS.SUBJECTS}/class/${classId}`);
  },

  async getFullStructureByPath(className: string, subjectName: string): Promise<ApiResponse<SubjectEntity>> {
    return apiService.get<SubjectEntity>(
      `${API_CONFIG.ENDPOINTS.SUBJECTS}/path/${encodeURIComponent(className)}/${encodeURIComponent(subjectName)}/full-structure`
    );
  },
};
