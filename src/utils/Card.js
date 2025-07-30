function Card({ title, children, extra }) {
  return (
    <div className="p-4 rounded border border-black/20 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-semibold">{title}</h2>
        {extra && <div>{extra}</div>}
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4">
        {children}
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <p className="w-full flex justify-between pb-1">
      <span className="text-gray-600">{label}:</span>
      <strong>{value || "_"}</strong>
    </p>
  );
}

function Input({ label, defaultValue, type = "text", name }) {
  return (
    <label className="w-full flex flex-col gap-1 lg:w-[33%] lg:px-1 lg:mt-2">
      <span className="text-gray-600">{label}</span>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="border p-2 rounded w-full"
      />
    </label>
  );
}

function Select({ label, defaultValue, name }) {
  return (
    <label className="w-full flex flex-col gap-1 lg:w-[33%] lg:px-1 lg:mt-2">
      <span className="text-gray-600">{label}</span>
      <select
        defaultValue={defaultValue}
        name={name}
        className="border p-2 rounded w-full"
      >
        <option value="">انتخاب کنید</option>
        <option value="male">مرد</option>
        <option value="female">زن</option>
      </select>
    </label>
  );
}

export { Card, Row, Input, Select };
