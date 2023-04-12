((cacheHelper)=>{
    const NodeCache = require('node-cache');
    const myCache = new NodeCache();
    
    cacheHelper.saveCache =async (key,value,ttl)=>{
        try {
            const success = await myCache.set(key,value,ttl);
            return success;
        } catch (error) {
            console.log(error);
        }
    }
    cacheHelper.getCache = async(key)=>{
        try {
            const value = await myCache.get(key);
            return value;
        } catch (error) {
            console.log("Error while getting cache");
        }
    }
})(module.exports);