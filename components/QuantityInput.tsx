'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface QuantityInputProps {
  value: number;
  onChange: (newQuantity: number) => void;
  min?: number;
  placeholder?: string;
}

export default function QuantityInput({
  value,
  onChange,
  min = 0,
  placeholder = '0',
}: QuantityInputProps) {
  const [inputValue, setInputValue] = useState(value.toString());

  const handleIncrement = () => {
    const newQuantity = value + 1;
    setInputValue(newQuantity.toString());
    onChange(newQuantity);
    console.log('QuantityInput: Incremented to', newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(min, value - 1);
    setInputValue(newQuantity.toString());
    onChange(newQuantity);
    console.log('QuantityInput: Decremented to', newQuantity);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= min) {
      setInputValue(newQuantity.toString());
      onChange(newQuantity);
      console.log('QuantityInput: Changed to', newQuantity);
    } else {
      setInputValue('');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={handleDecrement}
        disabled={value <= min}
      >
        -
      </Button>
      <Input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-16 text-center"
        min={min}
      />
      <Button variant="outline" size="sm" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
}