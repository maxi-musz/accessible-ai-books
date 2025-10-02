export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4500',
  ENDPOINTS: {
    DASHBOARD: '/api/v1/dashboard',
    CLASSES: '/api/v1/classes',
    SUBJECTS: '/api/v1/subjects',
    CHAPTERS: '/api/v1/chapters',
    TOPICS: '/api/v1/topics',
  },
  TIMEOUT: 30000, // 30 seconds
};

export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};
