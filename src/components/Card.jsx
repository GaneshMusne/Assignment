import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card rounded-4" style={{width: "18rem"}}>
        <img className="card-img-top rounded-4" src="https://img.freepik.com/free-vector/global-volunteer-solidarity-hands-up-banner-with-earth-map-vector_1017-48268.jpg?t=st=1714925948~exp=1714929548~hmac=315b3ef31f22ffe25ace715166a7fd57ca8e5afcd2c201f78ea71f6d4781ef5b&w=1380"  />
        <div className="card-body">
          <h5 className="card-title text-danger">Event Name</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam fuga voluptatem officiis dolore dignissimos quo harum. Incidunt architecto minima molestiae quae dicta iste dolor vero exercitationem, maiores optio atque quos?
          </p>
          <a href="#" className="btn btn-primary">
            Donate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
