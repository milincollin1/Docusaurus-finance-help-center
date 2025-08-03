---
slug: t-bill-ladder
title: Building a T-Bill Ladder
description: How to ladder U.S. Treasury bills for reliable, risk-free returns.
---
import TBillLadderCalculator from '@site/src/components/calculators/TBillLadderCalculator';

# Building a T-Bill Ladder

A T-Bill ladder staggers maturities, smoothing reinvestment and liquidity.

<TBillLadderCalculator />

## 1. How It Works

1. Purchase bills at 4 maturities (3, 6, 9, 12 months)  
2. As each matures, reinvest in a new 12-month T-bill  

## 2. Yield Calculations

- **Discount Rate**:  
  \[
    \text{Price} = \text{Face} \times \Bigl(1 - \tfrac{\text{Yield} \times \text{Days}}{360}\Bigr)
  \]

## 3. Tax Treatment

- Exempt from state/local tax  
- Report as interest on federal returns

## References

1. U.S. Treasury Direct Documentation  
2. CFA Institute Primer on Fixed Income
