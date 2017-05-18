// @flow
import babelConfig from '../lib/babel-config'

//TODO add mock for 'path'

test("work babelConfig with npm run develop", () => {
    return expect(babelConfig('./.babelrc', 'develop').presets[0]).toContain("react-hmre")
})

test("work babelConfig with npm run build", () => {
    return expect(babelConfig('./.babelrc').presets[0]).toContain("flow")
})

test("work babelConfig with npm run other scripts", () => {
    return expect(babelConfig('./.babelrc').presets[0]).toContain("flow")
})
