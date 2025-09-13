"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calculator } from "lucide-react";

interface MortgageCalculation {
  monthlyPayment: number;
  totalInterest: number;
  totalAmount: number;
}

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  label: string;
  format?: (value: number) => string;
}

function Slider({
  min,
  max,
  value,
  onChange,
  step = 1,
  label,
  format,
}: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label className="text-sm font-medium">{label}</Label>
        <span className="text-sm font-semibold text-primary">
          {format ? format(value) : value}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #16a34a 0%, #16a34a ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>{format ? format(min) : min}</span>
          <span>{format ? format(max) : max}</span>
        </div>
      </div>
    </div>
  );
}

export default function EnhancedMortgageCalculator() {
  const [principal, setPrincipal] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(5.5);
  const [loanTerm, setLoanTerm] = useState<number>(25);
  const [calculation, setCalculation] = useState<MortgageCalculation | null>(
    null
  );

  const calculateMortgage = () => {
    const P = principal;
    const r = interestRate / 100 / 12; // Monthly interest rate
    const n = loanTerm * 12; // Total number of payments

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
  };

  useEffect(() => {
    calculateMortgage();
  }, [principal, interestRate, loanTerm]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Calculator className="h-4 w-4" />
          Mortgage Calculator
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Advanced Mortgage Calculator
          </DialogTitle>
          <DialogDescription>
            Calculate your monthly payments and view detailed breakdowns
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Input Sliders */}
          <div className="space-y-4 p-4 bg-muted/50 rounded-xl">
            <Slider
              min={1000}
              max={5000000}
              value={principal}
              onChange={setPrincipal}
              step={1000}
              label="Loan Amount"
              format={formatCurrency}
            />

            <Slider
              min={1}
              max={25}
              value={interestRate}
              onChange={setInterestRate}
              step={0.1}
              label="Interest Rate (%)"
              format={formatPercentage}
            />

            <Slider
              min={1}
              max={40}
              value={loanTerm}
              onChange={setLoanTerm}
              step={1}
              label="Loan Term (Years)"
            />
          </div>

          {/* Results */}
          {calculation && (
            <div className="space-y-3">
              {/* Main Payment Display */}
              <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border">
                <div className="text-2xl font-bold text-primary mb-1">
                  {formatCurrency(calculation.monthlyPayment)}
                </div>
                <div className="text-sm text-muted-foreground">
                  Monthly Payment
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 border rounded-lg text-center">
                  <div className="text-lg font-bold text-primary mb-1">
                    {formatCurrency(calculation.totalAmount)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Total Amount
                  </div>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <div className="text-lg font-bold text-primary mb-1">
                    {formatCurrency(calculation.totalInterest)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Total Interest
                  </div>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <div className="text-lg font-bold text-primary mb-1">
                    {(
                      (calculation.totalInterest / calculation.totalAmount) *
                      100
                    ).toFixed(1)}
                    %
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Interest Ratio
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
