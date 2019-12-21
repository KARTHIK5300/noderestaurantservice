module.exports = {
    apps:[{
        name: 'app',
        script: './src/server.js',
        watch: true,
        instances : 4,
        exec_mode : "cluster"
    }]

}