import build from '../../lib/utils/build-static'

jest.mock('fs')
import fs from 'fs'

jest.mock('webpack')
import webpack from 'webpack'

//TODO add mock for 'path'

const config = {
    "entry": ["../src/index.js",],
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

webpack.mockImplementation((config, fn) => {
    const err = false
    const stats = {
        info: '...',
        hasErrors: () => {
            return false
        }
    }
    fn(err, stats)
})


test('build', async () => {

    fs.accessSync.mockReturnValue()
    fs.writeFileSync.mockReturnValue('undefine')
    fs.mkdirSync.mockReturnValue('undefine')
    webpack.mockImplementation((config, fn) => {
        const err = false
        const stats = {
            info: '...',
            hasErrors: () => {
                return false
            }
        }
        fn(err, stats)
    })

    expect.assertions(1)
    expect(await build('./config.json', config)).toBe('build success')
})

test('error',async () => {

    fs.accessSync.mockImplementation(() => { throw 'error'})
    fs.writeFileSync.mockReturnValue('undefine')
    fs.mkdirSync.mockReturnValue('undefine')
    webpack.mockImplementation((config, fn) => {
        const err = false
        const stats = {
            info: '...',
            hasErrors: () => {
                return false
            }
        }
        fn(err, stats)
    })

    // try {
    //     await build('./config.json', config)
    // } catch (e) {
    //     expect(e).toMatch('error')
    // }

    await expect(build('./config.json', config)).rejects.toMatch('error')
})

test('error-2',async () => {

    fs.accessSync.mockImplementation(() => { throw 'error'})
        .mockImplementationOnce(()=> undefined)
        .mockImplementationOnce(() => { throw 'error'})

    fs.writeFileSync.mockReturnValue('undefine')
    fs.mkdirSync.mockReturnValue('undefine')
    webpack.mockImplementation((config, fn) => {
        const err = false
        const stats = {
            info: '...',
            hasErrors: () => {
                return false
            }
        }
        fn(err, stats)
    })

    expect(await build('./config.json', config)).toBe('build success')
})

test('error-3',async () => {

    fs.accessSync.mockImplementation(() => { throw 'error'})
        .mockImplementationOnce(()=> undefined)
        .mockImplementationOnce(() => undefined)


    fs.writeFileSync.mockReturnValue('undefine')
    fs.mkdirSync.mockReturnValue('undefine')
    webpack.mockImplementation((config, fn) => {
        const err = false
        const stats = {
            info: '...',
            hasErrors: () => {
                return false
            }
        }
        fn(err, stats)
    })

    expect(await build('./config.json', config)).toBe('build success')
})

test('reject', async () => {

    fs.accessSync.mockReturnValue()
    fs.writeFileSync.mockReturnValue('undefine')
    fs.mkdirSync.mockReturnValue('undefine')
    webpack.mockImplementation((config, fn) => {
        const err = true
        const stats = {
            info: '...',
            hasErrors: () => {
                return false
            }
        }
        fn(err, stats)
    })

    // try {
    //     await build('./config.json', config)
    // } catch (e) {
    //     expect(e).toMatch('can not webpacking')
    // }

    await expect(build('./config.json', config)).rejects.toMatch('can not webpacking')
})


