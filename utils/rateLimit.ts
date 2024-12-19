interface RateLimitInfo {
  count: number;
  firstRequest: number;
}

const rateLimits = new Map<string, RateLimitInfo>();

export class RateLimiter {
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests: number = 5, windowMs: number = 3600000) { // 1 hour in milliseconds
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  async isRateLimited(identifier: string): Promise<{ limited: boolean; remainingAttempts: number }> {
    const now = Date.now();
    const userLimit = rateLimits.get(identifier);

    if (!userLimit) {
      rateLimits.set(identifier, { count: 1, firstRequest: now });
      return { limited: false, remainingAttempts: this.maxRequests - 1 };
    }

    if (now - userLimit.firstRequest > this.windowMs) {
      // Reset if window has passed
      rateLimits.set(identifier, { count: 1, firstRequest: now });
      return { limited: false, remainingAttempts: this.maxRequests - 1 };
    }

    if (userLimit.count >= this.maxRequests) {
      const resetTime = userLimit.firstRequest + this.windowMs;
      const remainingTime = Math.ceil((resetTime - now) / 1000 / 60); // minutes
      throw new Error(`Rate limit exceeded. Please try again in ${remainingTime} minutes.`);
    }

    // Increment count
    rateLimits.set(identifier, {
      count: userLimit.count + 1,
      firstRequest: userLimit.firstRequest
    });

    return { 
      limited: false, 
      remainingAttempts: this.maxRequests - (userLimit.count + 1)
    };
  }

  // Clean up old entries periodically
  cleanup() {
    const now = Date.now();
    for (const [key, value] of Array.from(rateLimits.entries())) {
      if (now - value.firstRequest > this.windowMs) {
        rateLimits.delete(key);
      }
    }
  }
} 