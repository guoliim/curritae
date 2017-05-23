import compileWebpack from '../lib/webpack.complieConfig'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

jest.mock('../lib/babel-config')
import babelConfig from '../lib/babel-config'

jest.mock('path')
import path from 'path'

const babelrc_build = {
    "presets": [
        "flow",
        ["es2015", {
            "es2015": {
                "loose": true,
                "modules": false
            }
        }], "react"
    ]
}

const babelrc_develop = {
    "presets": [
        "react-hmre",
        "flow",
        ["es2015", {
            "es2015": {
                "loose": true,
                "modules": false
            }
        }], "react"
    ]
}

const build = {
    "entry": ["../views/index.js",],
    "output": {
        path: '/Users/guoli/Codes/material-resume-react/public',
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    "module": {
        rules: [
            {
                test: /\.js$/, use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "flow",
                        ["es2015", {
                            "es2015": {
                                "loose": true,
                                "modules": false
                            }
                        }], "react"
                    ]
                }
            }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract([ 'css-loader', 'postcss-loader' ]),
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ]
    },
    "devtool": false,
    "plugins": [{
        "filename": "styles.css",
          "id": 1,
          "options": {},
    }],
    "target": "web",
}

const develop = {
    "entry": [
        require.resolve('webpack-hot-middleware/client'),
        "../views/index.js",
    ],
    "output": {
        path: "/Users/guoli/Codes/material-resume-react/lib/dist",
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    "module": {
        rules: [
            {
                test: /\.js$/, use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "react-hmre",
                        "flow",
                        ["es2015", {
                            "es2015": {
                                "loose": true,
                                "modules": false
                            }
                        }], "react"
                    ]
                }
            }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ]
    },
    "devtool": "cheap-module-source-map",
    "plugins": [
        {
            "preferEntry": undefined,
        },
        {
          "fullBuildTimeout": 200, "multiStep": undefined,
        },
        {},],
    "target": "web",
}

const other = {
    "entry": ["../views/index.js",],
    "output": {
        path: "/Users/guoli/Codes/material-resume-react/lib/dist",
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    "module": {
        rules: [
            {
                test: /\.js$/, use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "flow",
                        ["es2015", {
                            "es2015": {
                                "loose": true,
                                "modules": false
                            }
                        }], "react"
                    ]
                }
            }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ]
    },
    "devtool": false,
    "plugins": [],
}

babelConfig.mockImplementation(() => babelrc_build)
    .mockImplementationOnce(() => babelrc_build)
    .mockImplementationOnce(() => babelrc_develop)
    .mockImplementationOnce(() => babelrc_build)

test("return Object of webpack config with npm script build", () => {
    path.resolve.mockReturnValue('/Users/guoli/Codes/material-resume-react/public')

    return expect(compileWebpack("build")).toMatchObject(build)
})

test("return Object of webpack config with npm script develop", () => {
    path.resolve.mockReturnValue('/Users/guoli/Codes/material-resume-react/lib/dist')

    return expect(compileWebpack("develop")).toMatchObject(develop)
})

test("return Object of webpack config with other npm script", () => {
    path.resolve.mockReturnValue('/Users/guoli/Codes/material-resume-react/lib/dist')

    return expect(compileWebpack("other")).toMatchObject(other)
})
