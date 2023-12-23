import PriceOption from "../priceOption/priceOption";

const PriceOptions = () => {
  const priceJson = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Basic fitness classes",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "Full access to gym facilities",
        "Cardio and strength equipment usage",
        "All fitness classes included",
        "Personal trainer sessions (2/month)",
      ],
    },
    {
      id: 3,
      name: "VIP Membership",
      price: 79.99,
      features: [
        "VIP access to gym facilities",
        "Unlimited cardio and strength equipment usage",
        "All fitness classes included",
        "Unlimited personal trainer sessions",
        "Access to exclusive VIP events",
      ],
    },
  ];

  return (
    <div className="m-20">
      <h1 className="text-7xl mb-7 ">
        Best Price <span className="text-yellow-300 font-bold text-8xl">:</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {priceJson.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
