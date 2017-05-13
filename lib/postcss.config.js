const config = {
    plugins: [
        require('postcss-import')({}),
        //postcss-cssnext includes autoprefixer
        require('postcss-cssnext')({
            'browserslist': [
                '> 5%',
                'last 2 versions',
            ],
        }),
    ],
};

module.exports = config;
