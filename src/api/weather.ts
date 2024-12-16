import { ApiResponse } from '@/interfaces/api-response';
import { ForecastData } from '@/interfaces/forecast-data';
import axios, { AxiosError } from 'axios';

const getForecast = async (
  city: string,
  country: string
): Promise<ForecastData> => {
  const response: ApiResponse = await request(
    `forecast?city=${city}&country=${country}`
  );
  return response?.data as ForecastData;
};

const request = async (endpoint: string): Promise<ApiResponse> => {
  try {
    const { data: response } = await axios.get<ApiResponse>(
      `${process.env.apiUrl}/${endpoint}`
    );
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message);
    }

    throw new Error(
      'Erro inesperado na requisição, contate o suporte técnico.'
    );
  }
};

export { getForecast };
