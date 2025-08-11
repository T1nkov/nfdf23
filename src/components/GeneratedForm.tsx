import React, { useState } from 'react';

type FormSpec = {
  input: number;
  textarea: number;
  checkbox: number;
};

type Props = {
  spec: FormSpec;
};

const GeneratedForm: React.FC<Props> = ({ spec }) => {
  // Состояние для контролируемых элементов (необязательно, но удобно)
  const [inputs, setInputs] = useState<string[]>(
    Array.from({ length: spec.input }, () => '')
  );
  const [textareas, setTextareas] = useState<string[]>(
    Array.from({ length: spec.textarea }, () => '')
  );
  const [checkboxes, setCheckboxes] = useState<boolean[]>(
    Array.from({ length: spec.checkbox }, () => false)
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      inputs,
      textareas,
      checkboxes,
    };
    // Для демонстрации — лог в консоль. Можно отправить на сервер.
    console.log('Form submit payload:', payload);
    alert('Form submitted. Посмотрите консоль для данных.');
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, maxWidth: 600 }}>
      {Array.from({ length: spec.input }).map((_, i) => (
        <label key={`in-${i}`}>
          Input #{i + 1}:
          <input
            value={inputs[i] ?? ''}
            onChange={(e) => {
              const copy = [...inputs];
              copy[i] = e.target.value;
              setInputs(copy);
            }}
          />
        </label>
      ))}

      {Array.from({ length: spec.textarea }).map((_, i) => (
        <label key={`ta-${i}`}>
          Textarea #{i + 1}:
          <textarea
            value={textareas[i] ?? ''}
            onChange={(e) => {
              const copy = [...textareas];
              copy[i] = e.target.value;
              setTextareas(copy);
            }}
          />
        </label>
      ))}

      {Array.from({ length: spec.checkbox }).map((_, i) => (
        <label key={`cb-${i}`}>
          <input
            type="checkbox"
            checked={checkboxes[i] ?? false}
            onChange={(e) => {
              const copy = [...checkboxes];
              copy[i] = e.target.checked;
              setCheckboxes(copy);
            }}
          />
          Checkbox #{i + 1}
        </label>
      ))}

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default GeneratedForm;
