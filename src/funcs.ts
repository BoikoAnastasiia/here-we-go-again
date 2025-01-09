function calculateTax(
  income: number,
  taxYear: number,
  anotherAffections?: number
): number {
  if (taxYear < 2025) {
    return income * 1.2 + (anotherAffections || 0);
  }
  return income * 1.3;
}

calculateTax(10_000, 2024);
