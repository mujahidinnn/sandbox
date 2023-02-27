import React, { useState } from "react";
import DetailIcon from "../../assets/info-circle.svg";
import EditIcon from "../../assets/pencil.svg";
import DeleteIcon from "../../assets/trash.svg";
import ArrowIcon from "../../assets/arrow.svg";
import { Link } from "react-router-dom";
import PopupHapusWisata from "./PopupHapusWisata";

const TabelWisataSaya = () => {
  const [showDelete, setShowDelete] = useState(false);
  const data = [
    {
      no: 1,
      nama: "thoriq",
      harga: 21980,
      kategori: "pertanian",
    },
    {
      no: 2,
      nama: "thoriq",
      harga: 21980,
      kategori: "pertanian",
    },
    {
      no: 3,
      nama: "thoriq",
      harga: 21980,
      kategori: "pertanian",
    },
    {
      no: 4,
      nama: "thoriq",
      harga: 21980,
      kategori: "pertanian",
    },
    {
      no: 5,
      nama: "thoriq",
      harga: 21980,
      kategori: "pertanian",
    },
    {
      no: 6,
      nama: "thoriq",
      harga: 21980,
      kategori: "pertanian",
    },
    {
      no: 7,
      nama: "thoriq",
      harga: 21980,
      kategori: "pertanian",
    },
    {
      no: 8,
      nama: "thoriq",
      harga: 21980,
      kategori: "pertanian",
    },
    {
      no: 9,
      nama: "thoriq",
      harga: 21980,
      kategori: "pertanian",
    },
  ];

  // Page
  const [page, setPage] = useState(1);
  // per Page
  const [limit, setLimit] = useState(10);

  const handlePrevPage = () => {
    setPage((page) => {
      if (page === 1) return page;
      else return page - 1;
    });
  };
  const handleNextPage = () => {
    setPage((page) => page + 1);
  };
  const handlePageLimit = (e) => {
    const value = e.target.value;
    setLimit(parseInt(value));
  };

  return (
    <div>
      <div className="overflow-x-auto">
        {showDelete ? <PopupHapusWisata setShowDelete={setShowDelete} /> : null}
        <div className="w-full shadow-all p-1 rounded">
          <div className="bg-white shadow-md rounded my-10">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-sm leading-normal h-[60px] rounded">
                  <th className="py-3 px-6">No</th>
                  <th className="py-3 px-6">Nama</th>
                  <th className="py-3 px-6">Harga</th>
                  <th className="py-3 px-6">Kategori</th>
                  <th className="py-3 px-6">Aksi</th>
                </tr>
              </thead>

              <tbody className="text-gray-600 text-sm font-light">
                {data.map((item) => {
                  return (
                    <tr
                      className="border-b border-gray-200 hover:bg-gray-100 h-[60px]"
                      key={item.no}
                    >
                      <td>
                        <span className="flex item-center justify-center">
                          {item.no}
                        </span>
                      </td>
                      <td>
                        <span className="flex item-center justify-center">
                          {item.nama}
                        </span>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          <span>Rp. {item.harga}</span>
                        </div>
                      </td>
                      <td>
                        <span className="flex item-center justify-center">
                          {item.kategori}
                        </span>
                      </td>
                      <td>
                        <div className="flex item-center justify-center gap-3">
                          <div className="px-2 py-[6px] transform cursor-pointer border-2 border-[#E8EBF0] rounded hover:bg-white">
                            <Link to="/detail-wisata">
                              <img src={DetailIcon} alt="detail" />
                            </Link>
                          </div>
                          <div className="px-2 py-[6px] transform cursor-pointer border-2 border-[#E8EBF0] rounded hover:bg-white">
                            <Link to="/profile-saya/wisata-saya/ubah-wisata">
                              <img src={EditIcon} alt="ubah" />
                            </Link>
                          </div>
                          <div
                            className="px-2 py-[6px] transform cursor-pointer border-2 border-[#E8EBF0] rounded hover:bg-white"
                            onClick={() => setShowDelete(true)}
                          >
                            <div>
                              <img src={DeleteIcon} alt="hapus" />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex h-[60px] px-8 justify-between">
              <div className="flex gap-8 items-center">
                <div className="bg-orange-400 text-white px-2 py-1 rounded-lg">
                  <select className="bg-transparent outline-none cursor-pointer">
                    <option
                      onChange={handlePageLimit}
                      className="bg-orange-400"
                      value="10"
                    >
                      10
                    </option>
                    <option className="bg-orange-400" value="20">
                      20
                    </option>
                    <option className="bg-orange-400" value="50">
                      50
                    </option>
                    <option className="bg-orange-400" value="100">
                      100
                    </option>
                  </select>
                </div>
                <p className="text-gray-500 text-sm">
                  Tampilkan 5 data per halaman
                </p>
              </div>
              <div className="flex gap-1">
                <div className="pagination flex gap-3 items-center">
                  <img
                    src={ArrowIcon}
                    alt=""
                    className={`${
                      page === 1 ? "hidden" : ""
                    } rotate-180 cursor-pointer`}
                    onClick={handlePrevPage}
                  />
                  <p className="bg-orange-400 text-white px-2 py-1 rounded-lg">
                    {page}
                  </p>
                  <img
                    src={ArrowIcon}
                    alt=""
                    className="cursor-pointer"
                    onClick={handleNextPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabelWisataSaya;
