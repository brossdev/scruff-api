// import handler from "../../libs/handler-lib";
import dynamoDb from "../../../libs/dynamodb-lib";

test("Dynamo is an object", () => {
  expect(typeof dynamoDb).toBe("object");
});

test("dynamo has get get", () => {
  expect(typeof dynamoDb.get).toBe("function");
});

test("should insert item into table", async () => {
  // expect.assertions(1);
  try {
    expect(typeof dynamoDb.put).toBe("function");

    await dynamoDb.put({
      TableName: "customers",
      Item: { id: "1", hello: "world" },
    });

    const { Item } = await dynamoDb.get({
      TableName: "customers",
      Key: { id: "1" },
    });

    expect(Item).toStrictEqual({
      id: "1",
      hello: "world",
    });
  } catch (error) {
    console.log(error);
  }
});
