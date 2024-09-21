import React, { useCallback, useEffect, useState, useRef } from "react";
import "./MultiRangeSlider.css";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  step?: number;
  values?: number[];
  onChange: (values: { min: number; max: number }) => void;
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({
  min,
  max,
  step = 1,
  values,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(values ? values[0] : min);
  const [maxVal, setMaxVal] = useState(values ? values[1] : max);
  const minValRef = useRef(minVal);
  const maxValRef = useRef(maxVal);
  const range = useRef<HTMLDivElement>(null);
  const minTooltip = useRef<HTMLDivElement>(null);
  const maxTooltip = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }

    if (minTooltip.current) {
      minTooltip.current.style.left = `calc(${minPercent}% - 3px)`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }

    if (maxTooltip.current) {
      maxTooltip.current.style.left = `calc(${maxPercent}% - 20px)`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    if (minVal !== minValRef.current || maxVal !== maxValRef.current) {
      onChange({ min: minVal, max: maxVal });
      minValRef.current = minVal;
      maxValRef.current = maxVal;
    }
  }, [minVal, maxVal, onChange]);

  return (
    <div className="border border-slate-300 shadow-lg p-5 rounded py-5">
      <p className="text-lg font-bold">Price</p>
      <div className="flex justify-between my-5">
        <p>Min: {minVal}</p>
        <p>Max: {maxVal}</p>
      </div>
      <div className="pb-5 basicRangeSlider relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          onMouseDown={() => {
            if (minTooltip.current) minTooltip.current.style.display = "flex";
          }}
          onMouseUp={() => {
            if (minTooltip.current) minTooltip.current.style.display = "none";
          }}
          onMouseLeave={() => {
            if (minTooltip.current) minTooltip.current.style.display = "none";
          }}
          className="thumb thumb--left absolute top-0 left-0"
          style={{ zIndex: minVal > max - 100 ? 5 : 3 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          onMouseDown={() => {
            if (maxTooltip.current) maxTooltip.current.style.display = "flex";
          }}
          onMouseUp={() => {
            if (maxTooltip.current) maxTooltip.current.style.display = "none";
          }}
          onMouseLeave={() => {
            if (maxTooltip.current) maxTooltip.current.style.display = "none";
          }}
          className="thumb thumb--right absolute top-0 right-0"
        />
        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
