module.exports = {
    apps:[{
        name: 'app3',
        script: './src/server.js',
        watch: true,
        exec_mode : "cluster",
        env: {
            PORT: 2000
        }
    }
    // },
    // {
    //     name: 'app4',
    //     script: './src/server.js',
    //     watch: true,
    //     exec_mode : "cluster",
    //     env: {
    //         PORT: 4000
    //     }
    // }
       ]

}