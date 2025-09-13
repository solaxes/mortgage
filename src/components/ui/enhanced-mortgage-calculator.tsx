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
import {
  Calculator,
  DollarSign,
  Percent,
  Calendar,
  TrendingUp,
  PieChart,
} from "lucide-react";

interface MortgageCalculation {
  monthlyPayment: number;
  totalInterest: number;
  totalAmount: number;
  yearlyBreakdown: Array<{
    year: number;
    principalPaid: number;
    interestPaid: number;
    remainingBalance: number;
  }>;
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
  const [activeTab, setActiveTab] = useState<"summary" | "breakdown">(
    "summary"
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

      // Calculate yearly breakdown
      const yearlyBreakdown = [];
      let remainingBalance = P;

      for (let year = 1; year <= loanTerm; year++) {
        let yearlyPrincipal = 0;
        let yearlyInterest = 0;

        for (let month = 1; month <= 12; month++) {
          const interestPayment = remainingBalance * r;
          const principalPayment = monthlyPayment - interestPayment;

          yearlyInterest += interestPayment;
          yearlyPrincipal += principalPayment;
          remainingBalance -= principalPayment;
        }

        yearlyBreakdown.push({
          year,
          principalPaid: yearlyPrincipal,
          interestPaid: yearlyInterest,
          remainingBalance: Math.max(0, remainingBalance),
        });
      }

      setCalculation({
        monthlyPayment,
        totalInterest,
        totalAmount,
        yearlyBreakdown,
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
              min={100000}
              max={5000000}
              value={principal}
              onChange={setPrincipal}
              step={10000}
              label="Loan Amount"
              format={formatCurrency}
            />

            <Slider
              min={1}
              max={15}
              value={interestRate}
              onChange={setInterestRate}
              step={0.1}
              label="Interest Rate (%)"
              format={formatPercentage}
            />

            <Slider
              min={5}
              max={40}
              value={loanTerm}
              onChange={setLoanTerm}
              step={1}
              label="Loan Term (Years)"
            />
          </div>

          {/* Results Tabs */}
          <div className="space-y-3">
            <div className="flex space-x-1 bg-muted p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("summary")}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "summary"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <DollarSign className="h-4 w-4 inline mr-2" />
                Summary
              </button>
              <button
                onClick={() => setActiveTab("breakdown")}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "breakdown"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <TrendingUp className="h-4 w-4 inline mr-2" />
                Yearly Breakdown
              </button>
            </div>

            {calculation && (
              <div className="space-y-4">
                {activeTab === "summary" && (
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
                            (calculation.totalInterest /
                              calculation.totalAmount) *
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

                {activeTab === "breakdown" && (
                  <div className="space-y-3">
                    <div className="text-center mb-3">
                      <h3 className="text-lg font-semibold mb-1">
                        Yearly Payment Breakdown
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        See how your payments are distributed between principal
                        and interest over time
                      </p>
                    </div>

                    <div className="max-h-80 overflow-y-auto">
                      <div className="space-y-2">
                        {calculation.yearlyBreakdown.map((year) => (
                          <div
                            key={year.year}
                            className="p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-sm">
                                Year {year.year}
                              </h4>
                              <div className="text-xs text-muted-foreground">
                                Balance: {formatCurrency(year.remainingBalance)}
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div>
                                <div className="text-xs text-muted-foreground">
                                  Principal Paid
                                </div>
                                <div className="font-semibold text-green-600 text-sm">
                                  {formatCurrency(year.principalPaid)}
                                </div>
                              </div>
                              <div>
                                <div className="text-xs text-muted-foreground">
                                  Interest Paid
                                </div>
                                <div className="font-semibold text-red-600 text-sm">
                                  {formatCurrency(year.interestPaid)}
                                </div>
                              </div>
                            </div>
                            <div className="mt-2">
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-gradient-to-r from-green-500 to-red-500 h-1.5 rounded-full"
                                  style={{
                                    width: `${
                                      (year.principalPaid /
                                        (year.principalPaid +
                                          year.interestPaid)) *
                                      100
                                    }%`,
                                  }}
                                />
                              </div>
                              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                <span>Principal</span>
                                <span>Interest</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
