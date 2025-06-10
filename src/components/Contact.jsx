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
                        <h3 className="mb-4 nunito-bold">banikannwesha@gmail.com | 9123325740</h3>
                        <a href="https://www.linkedin.com/in/annwesha-banik-00403226b/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="me-3 mt-5"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/_the__happy__soul____" target="_blank" rel="noopener noreferrer" className="me-3 mt-5"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/annwesha.banik.7" target="_blank" rel="noopener noreferrer" className="me-3 mt-5"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://github.com/Aniiiiiiiiiii" target="_blank" rel="noopener noreferrer" className="me-3 mt-5"><i class="fa-brands fa-square-github"></i></a>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )

}
