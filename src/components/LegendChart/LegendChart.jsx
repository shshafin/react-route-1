import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    id: 1,
    name: "Alice",
    chemistry: 87,
    biology: 92,
  },
  {
    id: 2,
    name: "Bob",
    chemistry: 78,
    biology: 85,
  },
  {
    id: 3,
    name: "Charlie",
    chemistry: 92,
    biology: 88,
  },
  {
    id: 4,
    name: "David",
    chemistry: 75,
    biology: 82,
  },
  {
    id: 5,
    name: "Eva",
    chemistry: 88,
    biology: 95,
  },
  {
    id: 6,
    name: "Evana",
    chemistry: 58,
    biology: 45,
  },
  {
    id: 7,
    name: "finila",
    chemistry: 28,
    biology: 29,
  },
  {
    id: 8,
    name: "hasg",
    chemistry: 98,
    biology: 99,
  },
  {
    id: 9,
    name: "Evatu",
    chemistry: 69,
    biology: 59,
  },
  {
    id: 10,
    name: "aba",
    chemistry: 78,
    biology: 65,
  },
];

const LegendChart = () => {
  return (
    <div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="chemistry" barSize={20} fill="purple" />
            <Line type="monotone" dataKey="biology" stroke="blue" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LegendChart;
