const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Should still return '0' even if partitionKey exists", () => {
    const event = { partitionKey: "abc" };
    expect(deterministicPartitionKey(event)).toEqual("0");
  });
  it("Should still return '0' even if the sha3-512 hash exists and partitionKey doesn't", () => {
    const event = { data: { name: "John" } };
    expect(deterministicPartitionKey(event)).toEqual("0");
  });
});
