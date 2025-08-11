import React, { useState } from 'react';
import GeneratedForm from '../components/GeneratedForm';

type FormSpec = {
  input: number;
  textarea: number;
  checkbox: number;
};

const FormBuilderPage: React.FC = () => {
  const [spec, setSpec] = useState<FormSpec>({ input: 0, textarea: 0, checkbox: 0 });
  const [builtSpec, setBuiltSpec] = useState<FormSpec | null>(null);

  const handleChange = (key: keyof FormSpec, value: string) => {
    const num = Math.max(0, Math.floor(Number(value) || 0));
    setSpec(prev => ({ ...prev, [key]: num }));
  };

  const handleBuild = (e: React.FormEvent) => {
    e.preventDefault();
    setBuiltSpec(spec);
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Form Builder</h1>

      <form onSubmit={handleBuild} style={{ display: 'grid', gap: 12, maxWidth: 400 }}>
        <label>
          input:
          <input
            type="text"

            value={spec.input}
            onChange={(e) => handleChange('input', e.target.value)}
          />
        </label>

        <label>
          textarea:
          <input
            type="text"

            value={spec.textarea}
            onChange={(e) => handleChange('textarea', e.target.value)}
          />
        </label>

        <label>
          checkbox:
          <input
            type="text"

            value={spec.checkbox}
            onChange={(e) => handleChange('checkbox', e.target.value)}
          />
        </label>

        <button type="submit">Build</button>
      </form>

      <hr style={{ margin: '24px 0' }} />

      {builtSpec ? (
        <>
          <h2>Resulting form</h2>
          <GeneratedForm spec={builtSpec} />
        </>
      ) : (
        <p>Нажмите Build чтобы сгенерировать форму.</p>
      )}
    </div>
  );
};

export default FormBuilderPage;
