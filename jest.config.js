module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    coverageDirectory: "coverage",

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        "<rootDir>/node_modules/(?!@foo)"
    ],

    globals: {
        "ts-jest": {
            "tsConfig": "tsconfig.json",
            "diagnostics": true
        }
    },
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    moduleNameMapper: {
        "modules/(.*)": "<rootDir>/src/modules/$1",
    },
    transform: {
        "^.+\\.(ts)$": "ts-jest"
    },
    transformIgnorePatterns: [
        "<rootDir>/node_modules/(?!@foo)"
    ],
    verbose: true
};