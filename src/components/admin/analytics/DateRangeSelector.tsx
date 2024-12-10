interface DateRangeSelectorProps {
  selected: 'week' | 'month' | 'year';
  onChange: (range: 'week' | 'month' | 'year') => void;
}

export default function DateRangeSelector({ selected, onChange }: DateRangeSelectorProps) {
  const ranges = [
    { value: 'week', label: 'Last 7 Days' },
    { value: 'month', label: 'Last 30 Days' },
    { value: 'year', label: 'Last 12 Months' },
  ] as const;

  return (
    <div className="flex space-x-2">
      {ranges.map((range) => (
        <button
          key={range.value}
          onClick={() => onChange(range.value)}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            selected === range.value
              ? 'bg-premier-purple text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
}