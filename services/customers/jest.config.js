module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  verbose: true,
  preset: "@shelf/jest-dynamodb",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
};
