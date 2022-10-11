import React from "react";
import { Link } from "react-router-dom";
import {CgSmileSad }from "react-icons/cg";
function PageNotFound() {
  return (
    <div className="page-not-found">
        <span className="iconNotFound"><CgSmileSad /></span>
        <div className="descriptionNotFound">
            <p className="errorCode">404</p>
            <p className="errorDescription">Page not found</p>
            <p>Halaman yang Anda cari tidak ada atau terjadi kesalahan lain .</p>
            <p>Kembali, atau kunjungi <Link to="/" className="btn-item" title="kembali ke home">halaman home</Link> untuk memilih arah baru.</p>
        </div>
    </div>
  )
}

export default PageNotFound;