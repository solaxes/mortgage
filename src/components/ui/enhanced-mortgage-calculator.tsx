"use client";
import React, { useState, useEffect, useCallback } from "react";
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
  monthlyInterest: number;
  interestOverTerm: number;
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
  const [principal, setPrincipal] = useState<number>(500_000);
  const [interestRate, setInterestRate] = useState<number>(10);
  const [termMonths, setTermMonths] = useState<number>(12);
  const [calculation, setCalculation] = useState<MortgageCalculation | null>(
    null
  );

  const calculateMortgage = useCallback(() => {
    const P = principal;
    const annual = interestRate;
    const months = termMonths;

    if (P > 0 && annual > 0 && months > 0) {
      const monthlyInterest = (P * (annual / 100)) / 12;
      const interestOverTerm = monthlyInterest * months;

      setCalculation({
        monthlyInterest,
        interestOverTerm,
      });
    }
  }, [principal, interestRate, termMonths]);

  useEffect(() => {
    calculateMortgage();
  }, [calculateMortgage]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  const formatMonths = (n: number) =>
    `${n} ${n === 1 ? "month" : "months"}`;

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
            Mortgage Calculator
          </DialogTitle>
          <DialogDescription>
            Interest-only estimate: monthly payment is interest accrued on the
            loan amount at the annual rate shown. Term sets the period for total
            interest over that timeframe.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="space-y-4 p-4 bg-muted/50 rounded-xl">
            <Slider
              min={100_000}
              max={2_000_000}
              value={principal}
              onChange={setPrincipal}
              step={5000}
              label="Loan amount"
              format={formatCurrency}
            />

            <Slider
              min={5}
              max={24}
              value={interestRate}
              onChange={setInterestRate}
              step={0.1}
              label="Interest rate (annual %)"
              format={formatPercentage}
            />

            <Slider
              min={3}
              max={24}
              value={termMonths}
              onChange={setTermMonths}
              step={1}
              label="Term (months)"
              format={formatMonths}
            />
          </div>

          {calculation && (
            <div className="space-y-3">
              <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border">
                <div className="text-2xl font-bold text-primary mb-1">
                  {formatCurrency(calculation.monthlyInterest)}
                </div>
                <div className="text-sm text-muted-foreground">
                  Monthly interest payment
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 border rounded-lg text-center">
                  <div className="text-lg font-bold text-primary mb-1">
                    {formatCurrency(calculation.interestOverTerm)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Total interest over term
                  </div>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <div className="text-lg font-bold text-primary mb-1">
                    {formatCurrency(principal)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Loan amount
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
