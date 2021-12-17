import J1 from "../Images/J1.jpg";
import J2 from "../Images/J2.jpg";
import J3 from "../Images/J3.jpg";
import J4 from "../Images/J4.jpg";
import J5 from "../Images/J5.jpg";
import J6 from "../Images/J6.jpg";
import J7 from "../Images/J7.jpg";
import J8 from "../Images/J8.jpg";
import J9 from "../Images/J9.jpg";
import whatsapp from "../Images/whatsapp.png";

export const Items = () => {
  return (
    <section className="main-hading my-5 pt-5">
      <div className="text-center">
        <h1 className="dispiay-4">OUR PRODUCTS</h1>
        {/* <hr className="mx-auto w-25" /> */}
      </div>

      <div className="container">
        <div className="row gy-3 my-5">
          <div className="col-md-3 col-lg-4 col-10 col-xxl-4 ">
            <div className="card">
              <img src={J2} className="card-img-top" alt="..." />
              <div className="card-body" style={{backgroundColor:"#f7f7f7"}}>
                <h6 className="card-title">Product # 931</h6>
                <p className="card-text">
                  <h6>For Buy </h6>
                  <img src={whatsapp} height="20px" alt="" />
                  +92 307 6013040
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-4 col-10 col-xxl-4 ">
            <div className="card">
              <img src={J3} className="card-img-top" alt="..." />
              <div className="card-body" style={{backgroundColor:"#f7f7f7"}}>
                <h6 className="card-title">Product # 932</h6>
                <p className="card-text">
                  <h6>For Buy </h6>
                  <img src={whatsapp} height="20px" alt="" />
                  +92 307 6013040
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-4 col-10 col-xxl-4 ">
            <div className="card">
              <img src={J4} className="card-img-top" alt="..." />
              <div className="card-body" style={{backgroundColor:"#f7f7f7"}}>
                <h6 className="card-title">Product # 933</h6>
                <p className="card-text">
                  <h6>For Buy </h6>
                  <img src={whatsapp} height="20px" alt="" />
                  +92 307 6013040
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-4 col-10 col-xxl-4 ">
            <div className="card">
              <img src={J7} className="card-img-top" alt="..." />
              <div className="card-body" style={{backgroundColor:"#f7f7f7"}}>
                <h6 className="card-title">Product # 934</h6>
                <p className="card-text">
                  <h6>For Buy </h6>
                  <img src={whatsapp} height="20px" alt="" />
                  +92 307 6013040
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-4 col-10 col-xxl-4 ">
            <div className="card">
              <img src={J8} className="card-img-top" alt="..." />
              <div className="card-body" style={{backgroundColor:"#f7f7f7"}}>
                <h6 className="card-title">Product # 935</h6>
                <p className="card-text">
                  <h6>For Buy </h6>
                  <img src={whatsapp} height="20px" alt="" />
                  +92 307 6013040
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-4 col-10 col-xxl-4 ">
            <div className="card">
              <img src={J9} className="card-img-top" alt="..." />
              <div className="card-body" style={{backgroundColor:"#f7f7f7"}}>
                <h6 className="card-title">Product # 936</h6>
                <p className="card-text">
                  <h6>For Buy </h6>
                  <img src={whatsapp} height="20px" alt="" />
                  +92 307 6013040
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
