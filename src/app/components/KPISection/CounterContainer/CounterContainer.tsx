"use client";
import React from "react";

interface NumberCounterProps {
  value: string;
  text: string;
}

const NumberCounter: React.FC<NumberCounterProps> = ({ value, text }) => {
  return (
    <div className="relative py-8 rounded-lg bg-slate-900 shadow-lg shadow-slate-900/50">
      <p className="text-4xl font-semibold text-green-500 mb-2 text-center">
        {value}
      </p>
      <p className="text-xl text-center text-gray-300">{text}</p>
    </div>
  );
};

interface CounterContainerProps {
  counters: { value: string; text: string }[];
}

export const CounterContainer: React.FC<CounterContainerProps> = ({ counters }) => {
  return (
    <div className="grid gap-4 md:grid-cols-4 md:gap-10 lg:gap-20 pb-8">
      {counters.map((counter, index) => (
        <NumberCounter key={index} value={counter.value} text={counter.text} />
      ))}
    </div>
  );
};
