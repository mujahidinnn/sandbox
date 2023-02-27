import React from "react";

const PopupHapusWisata = ({ setShowDelete }) => {
  return (
    <div className="fixed inset-0 bg-[#00000060] z-50 flex justify-center items-center">
      <div className="flex flex-col shadow-xl">
        <div className="bg-[#FF3366] text-white h-[10vh] flex items-center p-5 rounded-tl-lg rounded-tr-lg">
          <p>Apakah anda yakin ingin menghapus Wisata Air Terjun ?</p>
        </div>
        <div className="bg-white flex justify-end gap-5 p-5 rounded-bl-lg rounded-br-lg">
          <button
            className="bg-white border-2 border-[#E7EAF0] rounded-lg px-3 py-2"
            onClick={() => setShowDelete(false)}
          >
            Batal
          </button>
          <button className="bg-[#FF3366] text-white border-2 border-[#E7EAF0] rounded-lg px-3 py-2">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupHapusWisata;
