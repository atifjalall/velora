// lib/redis.ts
import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

// Initialize Redis client
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

// Rate limiter for API routes (10 requests per 10 seconds)
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '10 s'),
  analytics: true,
  prefix: 'velora:ratelimit',
})

// Cache utilities
export const cache = {
  // Set cache with TTL (in seconds)
  async set(key: string, value: unknown, ttl: number = 3600) {
    return redis.set(key, JSON.stringify(value), { ex: ttl })
  },

  // Get cached value
  async get<T>(key: string): Promise<T | null> {
    const data = await redis.get(key)
    return data ? (JSON.parse(data as string) as T) : null
  },

  // Delete cache
  async delete(key: string) {
    return redis.del(key)
  },

  // Check if key exists
  async exists(key: string) {
    return redis.exists(key)
  },

  // Clear all cache with prefix
  async clearPattern(pattern: string) {
    const keys = await redis.keys(pattern)
    if (keys.length > 0) {
      return redis.del(...keys)
    }
  },
}

// Usage example:
// await cache.set('user:123', userData, 3600) // Cache for 1 hour
// const user = await cache.get<User>('user:123')
// await cache.delete('user:123')