import { Redis } from '@upstash/redis'

const redis = new Redis({
    url: import.meta.env.REDIS_URL,
    token: import.meta.env.REDIS_TOKEN
})

export async function post({ request }) {
    const currentCount = await redis.get("waitlistTotal")
    const newCount = Number(currentCount) + 1

    const result = await redis.set("waitlistTotal", String(newCount))
    return {
        body: JSON.stringify(result),
    };
}