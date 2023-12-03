import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("token");

class ReportService {
  getDailyReport(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/dashboard/daily-report`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getYesterdayReport(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/dashboard/yesterday-report`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getWeeklyReport(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/dashboard/weekly-report`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getMonthlyReport(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/dashboard/monthly-report`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new ReportService();