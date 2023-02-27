import React, { useEffect, useState } from "react";
import axios from "axios";

const Cards = ({ search }) => {
  const [data, setData] = useState([{}]);
  const getData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api-entrytest.sandboxindonesia.id/api/tourist-object/tourist-object/",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="flex w-full flex-wrap gap-5 justify-center">
        {data
          .filter((item) => {
            return search === ""
              ? {}
              : item.name.toLowerCase().includes(search);
          })
          .map((item, id) => {
            return (
              <div
                key={id}
                className="bg-white rounded-lg p-3 flex flex-col gap-2 w-[500px]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded w-full h-[300px]"
                />
                <div className="flex justify-between">
                  <p className="bg-orange-100 text-orange-500 text-xs rounded-full px-3 py-1 w-max font-semibold uppercase">
                    {item.category}
                  </p>
                  <p>Rp. {item.price}</p>
                </div>
                <p className="text-base font-semibold">{item.name}</p>
                <p>{item.description}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Cards;
