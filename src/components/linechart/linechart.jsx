import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const marks = [
    {
      id: 1,
      name: "Alice",
      math: 85,
      physics: 90,
    },
    {
      id: 2,
      name: "Bob",
      math: 78,
      physics: 85,
    },
    {
      id: 3,
      name: "Charlie",
      math: 92,
      physics: 88,
    },
    {
      id: 4,
      name: "David",
      math: 75,
      physics: 82,
    },
    {
      id: 5,
      name: "Eva",
      math: 88,
      physics: 95,
    },
  ];

  return (
    <div>
      <LChart width={500} height={500} data={marks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line type="monotone" dataKey={`math`} stroke="red"></Line>
        <Line type="monotone" dataKey={`physics`} stroke="blue"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
