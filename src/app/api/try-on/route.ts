import { NextResponse } from 'next/server';
import { ArkApiService } from '@/services/arkApi';

export interface TryOnRequest {
  personImage: string;
  clothingImage: string;
}

export interface TryOnResponse {
  success: boolean;
  resultUrl?: string;
  error?: string;
}

export async function POST(request: Request) {
  console.log('[API] /api/try-on POST request received');

  try {
    const body: TryOnRequest = await request.json();
    console.log('[API] Request body parsed');

    if (!body.personImage || !body.clothingImage) {
      console.error('[API] Missing required images');
      return NextResponse.json<TryOnResponse>(
        { success: false, error: 'Missing person or clothing image' },
        { status: 400 }
      );
    }

    console.log('[API] Initializing ArkApiService...');
    const arkService = new ArkApiService();

    console.log('[API] Calling generateTryOn...');
    const resultUrl = await arkService.generateTryOn(
      body.personImage,
      body.clothingImage
    );

    console.log('[API] Generation successful, returning result');
    return NextResponse.json<TryOnResponse>({
      success: true,
      resultUrl,
    });

  } catch (error) {
    console.error('[API] Error in try-on generation:', error);

    let errorMessage = 'An unexpected error occurred';
    let statusCode = 500;

    if (error instanceof Error) {
      errorMessage = error.message;
      
      if (errorMessage.includes('authentication failed') || errorMessage.includes('API key')) {
        statusCode = 401;
      } else if (errorMessage.includes('Too many requests')) {
        statusCode = 429;
      } else if (errorMessage.includes('timeout')) {
        statusCode = 408;
      }
    }

    return NextResponse.json<TryOnResponse>(
      { success: false, error: errorMessage },
      { status: statusCode }
    );
  }
}
