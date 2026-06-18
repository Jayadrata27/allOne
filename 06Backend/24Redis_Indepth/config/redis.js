const redis=require("redis");

const redisClient = redis.createClient({
    username: 'default',
    password: 'AtAnNUN2gE5cZlzQ9cABvE4SMt0adwHr',
    socket: {
        host: 'paramount-celadon-mercurial-45616.db.redis.io',
        port: 10073
    }
});



module.exports=redisClient;