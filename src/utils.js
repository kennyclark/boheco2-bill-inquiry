function extractBillDetails(rawData) {
  if (rawData.includes("You don't have a bill")) {
    const firstLine = rawData.split("\n")[0];
    return {
      error: new Error(firstLine),
      data: null,
    };
  }

  const data = JSON.parse(rawData);

  // Extracted values
  const amount = data[4] ?? null;
  const dueDate = data[5] ?? null;
  const kWhUsed = data[7] ?? null;
  const billStatus = data[6] ?? null;
  const billingPeriod = data[3] ?? null;
  const accountNumber = data[0] ?? null;
  const consumerName = data[1] ?? null;

  return {
    error: null,
    data: {
      amount,
      dueDate,
      kWhUsed,
      billStatus,
      billingPeriod,
      accountNumber,
      consumerName,
    },
  };
}

export { extractBillDetails };
