import React, { useState, useEffect } from 'react';

interface JsonEditorProps {
  initialValue: string;
  onChange: (value: string, isValid: boolean) => void;
}

export const JsonEditor: React.FC<JsonEditorProps> = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Set initial value when component mounts
    handleChange(initialValue);
  }, [initialValue]);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    try {
      JSON.parse(newValue);
      setError('');
      onChange(newValue, true);
    } catch (e) {
      setError((e as Error).message);
      onChange(newValue, false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <textarea
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full h-[500px] p-4 font-mono text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        spellCheck="false"
      />
      {error && (
        <div className="text-red-500 text-sm mt-2 p-2 bg-red-50 rounded">
          {error}
        </div>
      )}
    </div>
  );
};