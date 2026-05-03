export interface ArkApiRequest {
  model: string;
  prompt: string;
  image: string[];
  sequential_image_generation: string;
  response_format: string;
  size: string;
  stream: boolean;
  watermark: boolean;
}

export interface ArkApiResponse {
  model: string;
  created: number;
  data: Array<{
    url: string;
    size: string;
  }>;
  usage: {
    generated_images: number;
    output_tokens: number;
    total_tokens: number;
  };
}

export interface ArkApiError {
  error: {
    code: string;
    message: string;
    param: string;
    type: string;
  };
}

export class ArkApiService {
  private apiKey: string;
  private apiUrl: string;

  constructor() {
    this.apiKey = process.env.ARK_API_KEY || '';
    this.apiUrl = process.env.ARK_API_URL || 'https://ark.cn-beijing.volces.com/api/v3/images/generations';
    
    console.log('[ArkApiService] Initializing with API URL:', this.apiUrl);
    console.log('[ArkApiService] API Key configured:', this.apiKey ? 'Yes' : 'No');
  }

  async generateTryOn(
    personImageBase64: string,
    clothingImageBase64: string
  ): Promise<string> {
    console.log('[ArkApiService] Starting virtual try-on generation...');
    console.log('[ArkApiService] Person image data length:', personImageBase64.length);
    console.log('[ArkApiService] Clothing image data length:', clothingImageBase64.length);

    const requestBody: ArkApiRequest = {
      model: 'doubao-seedream-4-0-250828',
      prompt: '将图1的服装换为图2的服装',
      image: [personImageBase64, clothingImageBase64],
      sequential_image_generation: 'disabled',
      response_format: 'url',
      size: '2K',
      stream: false,
      watermark: true,
    };

    console.log('[ArkApiService] Request payload prepared');

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000);

      console.log('[ArkApiService] Sending request to API...');
      
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log('[ArkApiService] Response received, status:', response.status);

      const responseData = await response.json();

      if (!response.ok) {
        const errorData = responseData as ArkApiError;
        console.error('[ArkApiService] API Error:', errorData);
        
        if (response.status === 401) {
          throw new Error('API authentication failed. Please check your API key.');
        } else if (response.status === 429) {
          throw new Error('Too many requests. Please try again later.');
        } else {
          throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
        }
      }

      console.log('[ArkApiService] Success! Response data:', responseData);

      const arkResponse = responseData as ArkApiResponse;
      if (!arkResponse.data || arkResponse.data.length === 0) {
        throw new Error('No image data in response');
      }

      const resultUrl = arkResponse.data[0].url;
      console.log('[ArkApiService] Generated image URL:', resultUrl);

      return resultUrl;
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          console.error('[ArkApiService] Request timeout');
          throw new Error('Request timeout. Please try again.');
        }
        console.error('[ArkApiService] Error:', error.message);
        throw error;
      }
      console.error('[ArkApiService] Unknown error:', error);
      throw new Error('An unexpected error occurred');
    }
  }
}
