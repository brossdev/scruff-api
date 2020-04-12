// import handler from "../../libs/handler-lib";
import dynamoDb from "../../../libs/dynamodb-lib";

test("Dynamo is an object", () => {
  expect(typeof dynamoDb).toBe("object");
});
