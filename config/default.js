/**
 * Created by 123 on 2017/2/28.
 */
module.exports = {
    port: 80,
    session: {
        secret: 'myblog',
        key: 'myblog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://myBlog:112112asd@ds145380.mlab.com:45380/blog'
};