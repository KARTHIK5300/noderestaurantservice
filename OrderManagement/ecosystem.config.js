module.exports = {
    apps:[{
        name: 'app',
        script: './src/server.js',
        watch: true,
        exec_mode : "cluster",
        env: {
            PORT: 1000
        },
    },
    {
        name: 'app1',
        script: './src/server.js',
        watch: true,
        exec_mode : "cluster",
        env: {
            PORT: 1200
        }
    },
    // {
    //     name: 'app7',
    //     script: './src/server.js',
    //     watch: true,
    //     exec_mode : "cluster",
    //     env: {
    //         PORT: 1201
    //     }
    // }
       ]

}