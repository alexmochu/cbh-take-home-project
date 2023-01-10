const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event = {}) => {
  const { partitionKey } = event;
  const data = JSON.stringify(event);
  const hash = crypto.createHash("sha3-512").update(data).digest("hex");

  let candidate = partitionKey || hash;

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return TRIVIAL_PARTITION_KEY || candidate;
};
