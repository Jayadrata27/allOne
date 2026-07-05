const redisClient = require("../config/redis");

// Total Time: 60 min
const windowSize = 3600;
const MaxRequest = 60;

const rateLimiter = async (req, res, next) => {
     try {
        const key = `IP${req.ip}`;
        const current_time = Date.now() / 1000;
        const window_Time = current_time - windowSize;
        // 1.20 min - 1 hour = 12.20 = 3122312  

        await redisClient.zRemRangeByScore(key, 0, window_Time);

        const numberOfRequest = await redisClient.zCard(key);
        // Total number of value kitni hai   

        if (numberOfRequest >= MaxRequest) {
            // Stop execution here and send a proper 429 status code
            return res.status(429).json({ 
                error: "Too many requests. Please try again later." 
            });
        }

        await redisClient.zAdd(key, [{score: current_time, value: `${current_time}:${Math.random()}`}]);
        // Request is added

        // Key TTL hai usko increase karna
        await redisClient.expire(key, windowSize);
        
        // CRITICAL FIX: Pass control to the next middleware or route handler!
        next(); 
        
     } catch (err) {
        console.error("Rate Limiter Error:", err);
        // Fallback for actual server errors
        res.status(500).send("Internal Server Error");
     }
}

module.exports = rateLimiter;