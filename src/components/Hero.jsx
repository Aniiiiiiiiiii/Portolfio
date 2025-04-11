export default function Hero(){
    return (
        <>
        <div className="container hero">
            <div className="row">
                <div className="col-12 col-md-7 d-flex align-items-center">
                    <div className="card">
                        <h2>Hello! I,m <span className="nunito-black">Annwesha Banik</span></h2>
                        <h2><span className="nunito-black">Frontend</span> <span className="rubik"> Developer </span></h2>
                        <h2>Based in <span className="nunito-black">India</span></h2>

                        <div className="social d-flex mt-4">
                            <div className="box d-flex align-items-center justify-content-center">
                            <i class="fa-brands fa-facebook"></i>
                            </div>
                            <div className="box d-flex align-items-center justify-content-center">
                            <i class="fa-brands fa-linkedin"></i>
                            </div>
                            <div className="box d-flex align-items-center justify-content-center">
                            <i class="fa-brands fa-facebook"></i>
                            </div>
                            <div className="box d-flex align-items-center justify-content-center">
                            <i class="fa-brands fa-facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <img src="../images/hero.png" alt="" className="img-fluid" />
                </div>
            </div>
        </div>
        </>
    )
}