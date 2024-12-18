import React from "react";
import ImageCarousel from "./ImageCarousel";

const PlanCard = ({
  plan,
  onCustomize,
  onBuy,
  onDownpayment,
  onSave,
  onShare,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-bold">{plan.title}</h2>
      <p className="text-sm text-gray-500">Code: {plan.code}</p>
      <ImageCarousel images={plan.images} />
      <div className="mt-4">
        <p>Floors: {plan.floors}</p>
        <p>Bedrooms: {plan.bedrooms}</p>
        <p>Bathrooms: {plan.bathrooms}</p>
        <p>Area: {plan.area} sq.ft</p>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={onSave} className="btn btn-secondary">
          Save Plan
        </button>
        <button onClick={onShare} className="btn btn-secondary">
          Share Plan
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <button onClick={onBuy} className="btn btn-primary">
          Buy Plan
        </button>
        <button onClick={onDownpayment} className="btn btn-primary">
          Downpayment
        </button>
        <button onClick={onCustomize} className="btn btn-primary">
          Customize Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
