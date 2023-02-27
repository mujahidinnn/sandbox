import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TestGeo from "../components/wisata/TestGeo";

const TambahWisata = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [editorText, setEditorText] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className="mt-10">
      <p className="text-3xl font-semibold">Tambah Wisata</p>
      <div className="w-[50vw] mt-10">
        <form className="flex flex-col gap-4">
          <div>
            <p className="font-semibold">Nama</p>
            <input
              type="text"
              spellCheck="false"
              placeholder="Masukkan nama wisata"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3 rounded-lg border-2 border-[#E9ECEF]"
            />
          </div>
          <div>
            <p className="font-semibold">Harga</p>
            <input
              type="number"
              spellCheck="false"
              placeholder="Rp"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-5 py-3 rounded-lg border-2 border-[#E9ECEF]"
            />
          </div>
          <div>
            <p className="font-semibold">Kategori</p>
            <input
              type="text"
              spellCheck="false"
              placeholder="Pilih kategori"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-5 py-3 rounded-lg border-2 border-[#E9ECEF]"
            />
          </div>
          {/* CKEditor Section*/}
          <div className="w-full">
            <CKEditor
              className="p-10"
              editor={ClassicEditor}
              data="<p>Masukkan Deskripsi</p>"
              value={editorText}
              // data={(e) => setEditorText(e.target.value)}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
            />
          </div>
          <div>
            <p className="font-semibold">Alamat</p>
            <textarea
              name="alamat"
              id="alamat"
              cols="30"
              rows="4"
              spellCheck="false"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-5 py-3 rounded-lg border-2 border-[#E9ECEF] resize-none"
            ></textarea>
          </div>
          {/* LeafLet Section */}
          <TestGeo />
          <div className="flex justify-end gap-3 pr-2">
            <Link
              to="/profile-saya/wisata-saya"
              className="bg-white hover:bg-orange-400 border-[1px] border-[#E9ECEF] text-orange-400 hover:text-white transition duration-300 rounded-full px-6 py-3 shadow"
            >
              Batal
            </Link>
            <button className="bg-orange-400 hover:bg-orange-500 border-[1px] border-[#E9ECEF] text-white transition duration-300 rounded-full px-6 py-3 shadow">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahWisata;
