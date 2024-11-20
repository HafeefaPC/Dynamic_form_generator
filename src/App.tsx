import React, { useState, useEffect } from 'react';
import { JsonEditor } from './components/JsonEditor';
import DynamicForm from './components/DynamicForm';
import { FormSchema } from './types/schema';

const defaultSchema: FormSchema = {
  formTitle: "Project Requirements Survey",
  formDescription: "Please fill out this survey about your project needs",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name"
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      required: true,
      placeholder: "you@example.com",
      validation: {
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        message: "Please enter a valid email address"
      }
    },
    // ... (rest of your schema fields)
  ]
};

const App: React.FC = () => {
  const [schema, setSchema] = useState<FormSchema | null>(defaultSchema);
  const [jsonIsValid, setJsonIsValid] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleJsonChange = (value: string, isValid: boolean) => {
    setJsonIsValid(isValid);
    if (isValid) {
      try {
        const parsed = JSON.parse(value);
        setSchema(parsed);
      } catch (e) {
        console.error(e);
        setSchema(null);
      }
    } else {
      setSchema(null);
    }
  };

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
            Form submitted successfully!
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">JSON Editor</h2>
            <JsonEditor
              initialValue={JSON.stringify(defaultSchema, null, 2)}
              onChange={handleJsonChange}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Form Preview</h2>
            <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
              {jsonIsValid && schema ? (
                <DynamicForm schema={schema} onSubmit={handleSubmit} />
              ) : (
                <div className="text-red-500 p-4 bg-red-50 rounded">
                  Please provide valid JSON schema
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;