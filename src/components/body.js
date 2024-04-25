import React from "react";

const Body = () => {
  return (
    <div>
      <img
        className="img"
        src="https://images.pexels.com/photos/7149181/pexels-photo-7149181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="family"
      />
      <div className="contact">
        <h1>Think Health, Think Massage.</h1>
        <p>
          we are open 9am to 6pm , monday to saturday, if you would like to
          schedule an apppoinment
          <br /> with us , please contact us 987-654-321{" "}
        </p>
        <button>Let us more about</button>&nbsp;&nbsp;
        <button>Contact us Today</button>
      </div>
      <div className="info">
        <ul>
          <p className="color">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            expedita id explicabo repellendus totam eius quas dolore error.
            Temporibus quisquam sit labore nihil sapiente magnam autem
            voluptatem quaerat alias et.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eos
            libero commodi facere, et, quam expedita maxime cupiditate
            temporibus molestias sint. Dolores rerum placeat possimus fugit vel
            iste saepe qui.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            amet fugit dolor sit placeat sequi exercitationem nihil aliquid,
            vero, labore, autem natus vel dolores eligendi cupiditate fuga?
            Necessitatibus, impedit autem?
          </p>
        </ul>
      </div>
      <hr />
      <div className="details">
        <h1>Family Wellness Massage Therapy</h1>
        <p>
          9874 main street, suite 123,mainland ,<br />
          phone: 9874663300
        </p>
      </div>
    </div>
  );
};

export default Body;
