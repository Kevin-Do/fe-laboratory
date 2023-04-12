// api.ts
class FetchAPI {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request(
    method: string,
    endpoint: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<unknown> {
    const url = `${this.baseUrl}${endpoint}`;
    const init: RequestInit = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    if (data) {
      init.body = JSON.stringify(data);
    }

    const response = await fetch(url, init);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await response.json();
  }

  async get(endpoint: string, headers?: Record<string, string>): Promise<unknown> {
    return await this.request('GET', endpoint, undefined, headers);
  }

  async post(
    endpoint: string,
    data: unknown,
    headers?: Record<string, string>
  ): Promise<unknown> {
    return await this.request('POST', endpoint, data, headers);
  }

  async put(
    endpoint: string,
    data: unknown,
    headers?: Record<string, string>
  ): Promise<unknown> {
    return await this.request('PUT', endpoint, data, headers);
  }

  async delete(
    endpoint: string,
    headers?: Record<string, string>
  ): Promise<unknown> {
    return await this.request('DELETE', endpoint, undefined, headers);
  }
}

export default FetchAPI;
