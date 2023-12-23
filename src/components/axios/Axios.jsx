import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Vortex } from "react-loader-spinner";

import { format } from "date-fns";

import { DayPicker } from "react-day-picker";

const Axios = () => {
  const [phones, setPhones] = useState([]);
  const [load, setLoad] = useState(true);
  const [selected, setSelected] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const items = data.data.data;
        const fakeData = items.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: Number(phone.slug.split("-")[1]),
          };
          return obj;
        });

        setPhones(fakeData);
        setLoad(false);
      });
  }, []);

  return (
    <div>
      {load && (
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      )}
      <h1 className="text-5xl">Phones: {phones.length} </h1>

      <BarChart width={1000} height={400} data={phones}>
        <XAxis dataKey={`name`}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <CartesianGrid></CartesianGrid>
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>

      <div className=" text-gray-100 flex justify-center items-center text-center  ">
        <DayPicker
          className="bg-slate-900 p-10 my-8 shadow-2xl shadow-red-600 "
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
        />
      </div>
    </div>
  );
};

export default Axios;
