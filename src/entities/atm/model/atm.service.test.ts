import { ATMService } from "./atm.service";

describe("ATMService", () => {
  test("test getNominals method", async () => {
    const atm = new ATMService();
    const result = atm.getNominals(150);

    expect(result).toEqual({
      isHaveFullAmount: true,
      leftAmount: 0,
      nominals: [
        { value: 100, count: 1 },
        { value: 50, count: 1 },
      ],
    });
  });
});
