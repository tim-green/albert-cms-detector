import { CMS_SIGNATURES } from './cms-signatures';

export interface CMSResult {
  cms: string | null;
  confidence: number;
  indicators: string[];
  allDetections: Array<{
    name: string;
    confidence: number;
    indicators: string[];
  }>;
}

export async function detectCMS(url: string): Promise<CMSResult> {
  try {
    // Try HTTPS first, then fallback to HTTP if HTTPS fails
    const fullUrl = `https://${url}`;
    
    // Use a CORS proxy to fetch the website content
    // const corsProxy = 'https://api.allorigins.win/raw?url=';
    const corsProxy = 'https://api.codetabs.com/v1/proxy?quest=';
    const response = await fetch(corsProxy + encodeURIComponent(fullUrl));
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const html = await response.text();

    const detections = Object.entries(CMS_SIGNATURES).map(([key, cmsData]) => {
      let confidence = 0;
      const foundIndicators: string[] = [];

      for (const pattern of cmsData.patterns) {
        if (pattern.regex.test(html)) {
          confidence += pattern.weight;
          foundIndicators.push(pattern.description);
        }
      }

      const normalizedConfidence = Math.min(Math.round((confidence / 100) * 100), 100);

      return {
        key,
        name: cmsData.name,
        confidence: normalizedConfidence,
        indicators: foundIndicators
      };
    });

    // Sort by confidence
    detections.sort((a, b) => b.confidence - a.confidence);

    const primaryDetection = detections[0];

    return {
      cms: primaryDetection.confidence > 0 ? primaryDetection.name : null,
      confidence: primaryDetection.confidence,
      indicators: primaryDetection.indicators,
      allDetections: detections.map(({ name, confidence, indicators }) => ({
        name,
        confidence,
        indicators
      }))
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to analyse website: ${error.message}`);
    }
    throw new Error('Failed to analyse website. Please check the URL and try again.');
  }
}