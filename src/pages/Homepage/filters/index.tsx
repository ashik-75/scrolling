import format from "date-fns/format";
import { Minus, Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ToWhere from "./ToWhere";
import When from "./When";
// location%5B%5D=lower-garden-district&checkin=2023-05-18&checkout=2023-05-28&guests=1&bedrooms=0&bathrooms=0&price_min=40&price_max=4740&title__like=&hfsync_orderby=featured&featured=false&favorites=false&map_hidden=false
function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryData, setQueryData] = useState({
    location: "",
    date: [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ],
    guest: 1,
    price: 0,
    title: "",
  });

  const handleChange = (e: any) => {
    console.log({ VALUE: e.target.value, NAME: e.target.name });
    setQueryData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateRange = (item: any) => {
    setQueryData((prev) => ({ ...prev, date: [item?.selection] }));
  };

  const handleGuest = (type = "plus") => {
    setQueryData((prev) => ({
      ...prev,
      guest:
        type === "plus"
          ? prev.guest + 1
          : prev.guest > 1
          ? prev.guest - 1
          : prev.guest,
    }));
  };

  const { title, price, guest, date, location } = queryData;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let query = "";
    for (let key in queryData) {
      if (key === "date") {
        query += `checkin=${format(
          queryData?.[key]?.[0]?.startDate,
          "yyyy-MM-dd"
        )}&checkout=${format(queryData?.[key]?.[0]?.endDate, "yyyy-MM-dd")}&`;
      } else {
        // @ts-expect-error
        query += `${key}=${queryData?.[key]}&`;
      }
    }

    setSearchParams(`?${query}`);
  };

  const handleReset = () => {
    setQueryData({
      location: "",
      date: [
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ],
      guest: 1,
      price: 0,
      title: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-start">
        <ToWhere handleChange={handleChange} location={location} />
        <When range={date} handleChange={handleDateRange} />
        <div className="ml-2 flex gap-2">
          <button
            className="rounded-sm bg-slate-100 px-2 py-1"
            type="button"
            onClick={() => handleGuest()}
          >
            <Plus className="h-5 w-5" />
          </button>
          <span>{guest}</span>
          <button
            className="rounded-sm bg-slate-100 px-2 py-1"
            type="button"
            onClick={() => handleGuest("minus")}
          >
            <Minus className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="my-5 flex items-center gap-5">
        <div>
          <label htmlFor="Value">${price}</label>
          <input
            onChange={handleChange}
            name="price"
            type="range"
            min={40}
            max={4740}
            value={price}
          />
        </div>

        <div>
          <input
            value={title}
            onChange={handleChange}
            name="title"
            type="text"
            className="border px-3 py-1 outline-none"
          />
        </div>

        <button className="rounded bg-gray-100 px-4 py-1" onClick={handleReset}>
          Start Over
        </button>

        <button
          type="submit"
          className="rounded bg-teal-600 px-4 py-2 text-white"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Filter;
