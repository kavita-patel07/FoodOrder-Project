import React from "react";

export default function Restaurant() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/6/10506/ad13cee41f089a32fa0d854e658a2b9a.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt="Dominos"
        />
        {/* {heading and address} */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Dominos Pizza</h5>
          <p className="rest-address">123 Street, Place, City-000000, State</p>
          {/* {reviews and rating} */}
          <div className="rating-outer">
            <div className="rating-inner"></div>
            <span id="no_of_reviews">(140 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
