export default function Contact(){

    return (
        <>
        <section className="container my-5" id="contact">
            <div className="row">
                <div className="col-12 col-sm-6">
                    <form action="" method="post">
                        <div className="row">
                            <div className="col-12 mt-3">
                                <input type="text" name="name" className="w-100 px-4 py-2" id="" placeholder="Your Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-3">
                                <input type="email" name="email" className="w-100 px-4 py-2" id="" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-3">
                                <input type="text" name="website" className="w-100 px-4 py-2" id="" placeholder="Your Website(If exists)" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-3">
                                <textarea name="msg" id="msg" className="w-100 px-4 py-2" placeholder="Your Msg" cols={4}></textarea>
                            </div>
                        </div>
                        <input type="submit" value="Get In Touch" className="con-btn px-4 mt-3" />
                    </form>
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-center">
                    <div className="con-text">
                        <h2 className="nunito-bold mb-4">Let's <span className="rubik">talk</span> for something <span className="rubik">special</span></h2>
                        <h6 className="nunito-ex-light mb-4">I seek to push the limits of creativity to create high engaging, user
                        friendly, and memorable interactive experiences.</h6>
                        <h3 className="mb-4 nunito-bold">banikannwesha@gmail.com</h3>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="me-3 mt-5"><i className="fa-brands fa-linkedin-in" ></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in" ></i></a>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )

}