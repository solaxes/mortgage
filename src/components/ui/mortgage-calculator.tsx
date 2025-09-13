"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react";

interface MortgageCalculation {
  monthlyPayment: number;
  totalInterest: number;
  totalAmount: number;
}

export default function MortgageCalculator() {
  const [principal, setPrincipal] = useState<string>("500000");
  const [interestRate, setInterestRate] = useState<string>("5.5");
  const [loanTerm, setLoanTerm] = useState<string>("25");
  const [calculation, setCalculation] = useState<MortgageCalculation | null>(
    null
  );

  const calculateMortgage = useCallback(() => {
    const P = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const n = parseFloat(loanTerm) * 12; // Total number of payments

    if (P > 0 && r > 0 && n > 0) {
      const monthlyPayment =
        (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalAmount = monthlyPayment * n;
      const totalInterest = totalAmount - P;

      setCalculation({
        monthlyPayment,
        totalInterest,
        totalAmount,
      });
    }
  }, [principal, interestRate, loanTerm]);

  useEffect(() => {
    calculateMortgage();
  }, [calculateMortgage]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(amount);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Calculator className="h-4 w-4" />
          Mortgage Calculator
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Mortgage Calculator
          </DialogTitle>
          <DialogDescription>
            Calculate your monthly mortgage payment and total interest
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="principal" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Loan Amount
            </Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="500000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest" className="flex items-center gap-2">
              <Percent className="h-4 w-4" />
              Interest Rate (%)
            </Label>
            <Input
              id="interest"
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="5.5"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="term" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Loan Term (Years)
            </Label>
            <Input
              id="term"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="25"
            />
          </div>

          {calculation && (
            <div className="space-y-3 p-4 bg-muted rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {formatCurrency(calculation.monthlyPayment)}
                </div>
                <div className="text-sm text-muted-foreground">
                  Monthly Payment
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium">Total Interest</div>
                  <div className="text-muted-foreground">
                    {formatCurrency(calculation.totalInterest)}
                  </div>
                </div>
                <div>
                  <div className="font-medium">Total Amount</div>
                  <div className="text-muted-foreground">
                    {formatCurrency(calculation.totalAmount)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
