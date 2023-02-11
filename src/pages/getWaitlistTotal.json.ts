import { Redis } from '@upstash/redis'

const redis = new Redis({
    url: import.meta.env.REDIS_URL,
    token: import.meta.env.REDIS_TOKEN
})

export async function get({ params, request }) {
    // const data = await redis.set('foo', 'bar');
    const data = await redis.get("waitlistTotal")
    return {
        body: JSON.stringify({
            totalCount: data
        }),
    };
}