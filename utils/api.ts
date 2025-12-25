import { API_BASE_URL } from '@/constants/api';

/**
 * Basic API request function with token Authorization.
 */
export async function apiRequest(
  url: string,
) {
  try {
    const apiUrl = API_BASE_URL + url;

    if (!process.env.EXPO_PUBLIC_API_ACCESS_TOKEN) {
      throw new Error('Missing EXPO_PUBLIC_API_ACCESS_TOKEN at .env file');
    }

    const response = await fetch(apiUrl, {
      // TODO: Verify that the var is defined before using it and throw warning if
      // not.
      headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_ACCESS_TOKEN}`,
      },
    });

    const contentType = response.headers.get('content-type');
    let data;
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      throw new Error(data?.message || 'API request failed');
    }
    return data;
  } catch (error) {
    console.warn('apiRequest:', url, error);
    throw error;
  }
}