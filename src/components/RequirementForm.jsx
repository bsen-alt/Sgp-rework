import React from "react";

const RequirementForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const requirements = Object.fromEntries(data.entries());
    onSubmit(requirements);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium">Plan Type</label>
        <select name="type" className="input">
          <option value="house">House</option>
          <option value="cabana">Cabana</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Number of Floors</label>
        <input type="number" name="floors" className="input" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Number of Bedrooms</label>
        <input type="number" name="bedrooms" className="input" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Additional Notes</label>
        <textarea name="notes" className="input"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Upload Reference Design
        </label>
        <input type="file" name="file" className="input" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RequirementForm;
