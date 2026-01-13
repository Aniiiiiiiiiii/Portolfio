import { useState } from "react";

export default function Project(){

    const [showMore, setShowMore] = useState(false);

    return (
        <>
        <section className="container-fluid px-0 bg-dark my-5" id="project">
            <div className="container py-5">
                <h2 className="text-white text-center mb-5 nunito-bold sec-head">My Projects</h2>
                <div className="row mb-5">
                    <div className="col-12 col-sm-6">
                        <img src="../images/dalmia.png" alt="" className="img-fluid proj-img" />
                    </div>
                    <div className="col-12 col-sm-6 mt-3 mt-md-0">
                        <div className="proj-sec px-3 px-md-5 px-lg-5">
                            <h2 className="text-white fw-bold rubik">01</h2>
                            <h3 className="text-white nunito-black my-4">Dalmia Wealth</h3>
                            <h6 className="text-white text-justify nunito-exlight mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic numquam ipsam totam, saepe odio sapiente recusandae aut, atque explicabo accusantium quaerat? Animi quo dignissimos dolorem soluta tenetur quos qui rem perferendis id, consequatur, saepe mollitia deleniti? Obcaecati ullam perferendis accusantium soluta illo voluptatibus ipsa perspiciatis, animi cumque placeat nisi?
                            </h6>
                            <a href="https://www.dalmiawealth.in/" target="_blank" className="mt-5"><i className="fa-solid fa-arrow-up-right-from-square" style={{ color: "#ffffff" }}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mb-5 mt-3">
                    <div className="col-12 col-sm-6">
                        <div className="proj-sec px-3 px-md-5 px-lg-5">
                            <h2 className="text-white fw-bold rubik">02</h2>
                            <h3 className="text-white nunito-black my-4">Afrika Economic Summit</h3>
                            <h6 className="text-white text-justify nunito-exlight mb-4">
                            Afrika Economic Summit is a dynamic event management platform built for a convocation ceremony. Users can sign up, book single or multiple seats, receive OTP verification via email, and complete payments through QR code. After payment, confirmation emails are sent automatically. The site features a secure login system, user profiles with editable personal info, and a dashboard to view booking details. Admins can manage bookings, approve payments, and control all event data through a powerful backend panel.
                            </h6>
                            <a href="https://afrikaeconomicsummit.com/" target="_blank" className="mt-5"><i className="fa-solid fa-arrow-up-right-from-square" style={{ color: "#ffffff" }}></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 mt-3 mt-md-0">
                        <img src="../images/afrika.png" alt="" className="img-fluid proj-img" />
                    </div>
                </div>
                <div className="row mb-5 mt-3">
                    <div className="col-12 col-sm-6">
                        <img src="../images/travel.png" alt="" className="img-fluid proj-img" />
                    </div>
                    <div className="col-12 col-sm-6 mt-3 mt-md-0">
                        <div className="proj-sec px-3 px-md-5 px-lg-5">
                            <h2 className="text-white fw-bold rubik">03</h2>
                            <h3 className="text-white nunito-black my-4">Travel Dabble</h3>
                            <h6 className="text-white text-justify nunito-exlight mb-4">
                            Travel Dabble is a dynamic tour booking website featuring a user-friendly front end and a powerful admin panel. Users can explore and filter travel packages by category, budget, and duration, while admins can add, edit, and manage packages. The site also includes user login, contact functionality, and real-time data sorting for a seamless travel planning experience.
                            </h6>
                            <a href="https://traveldabble.in/" target="_blank" className="mt-5"><i className="fa-solid fa-arrow-up-right-from-square" style={{ color: "#ffffff" }}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mb-5 mt-3">
                    <div className="col-12 col-sm-6">
                        <div className="proj-sec px-3 px-md-5 px-lg-5">
                            <h2 className="text-white fw-bold rubik">04</h2>
                            <h3 className="text-white nunito-black my-4">Turfello</h3>
                            <h6 className="text-white text-justify nunito-exlight mb-4">
                            Turfello is a professional service-based website offering artificial turf solutions for sports and landscaping needs, including football grounds, cricket pitches, volleyball courts, and garden flooring. I developed both the front end and back end, created dedicated service pages with detailed descriptions, and showcased work images for client reference. The site also includes a contact form to enable direct user interaction and inquiries.
                            </h6>
                            <a href="https://www.turfello.com/" target="_blank" className="mt-5"><i className="fa-solid fa-arrow-up-right-from-square" style={{ color: "#ffffff" }}></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 mt-3 mt-md-0">
                        <img src="../images/turfello.png" alt="" className="img-fluid proj-img" />
                    </div>
                </div>
                <div className="row mb-5 mt-3">
                    <div className="col-12 col-sm-6">
                        <img src="../images/internship.png" alt="" className="img-fluid proj-img" />
                    </div>
                    <div className="col-12 col-sm-6 mt-3 mt-md-0">
                        <div className="proj-sec px-3 px-md-5 px-lg-5">
                            <h2 className="text-white fw-bold rubik">05</h2>
                            <h3 className="text-white nunito-black my-4">Internship 4 you</h3>
                            <h6 className="text-white text-justify nunito-exlight mb-4">
                            Internship 4 You is a core PHP-based platform that connects students with internship opportunities across various fields. It features separate logins for students and colleges, allowing them to explore and apply for internships. I developed both the front end and back end, implemented dynamic data rendering for internship listings, and included contact forms for direct communication. The site also supports college collaborations to streamline student placements.
                            </h6>
                            <a href="https://internship4you.com/" target="_blank" className="mt-5"><i className="fa-solid fa-arrow-up-right-from-square" style={{ color: "#ffffff" }}></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div class="d-flex align-items-center justify-content-center">
                    <h5 class="text-white nunito-black">And Counting....</h5>
                </div>


                <div className="more">
                    <div className="row mb-5 mt-3">
                        <div className="col-12 col-sm-6">
                            <div className="proj-sec px-3 px-md-5 px-lg-5">
                                <h2 className="text-white fw-bold rubik">04</h2>
                                <h3 className="text-white nunito-black my-4">Turfello</h3>
                                <h6 className="text-white text-justify nunito-exlight mb-4">
                                Turfello is a professional service-based website offering artificial turf solutions for sports and landscaping needs, including football grounds, cricket pitches, volleyball courts, and garden flooring. I developed both the front end and back end, created dedicated service pages with detailed descriptions, and showcased work images for client reference. The site also includes a contact form to enable direct user interaction and inquiries.
                                </h6>
                                <a href="https://www.turfello.com/" target="_blank" className="mt-5"><i className="fa-solid fa-arrow-up-right-from-square" style={{ color: "#ffffff" }}></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 mt-3 mt-md-0">
                            <img src="../images/turfello.png" alt="" className="img-fluid proj-img" />
                        </div>
                    </div>
                </div> */}


                 {/* And Counting */}
                {!showMore && (
                    <div
                    className="d-flex align-items-center justify-content-center cursor-pointer"
                    onClick={() => setShowMore(true)}
                    >
                    <h5 className="text-white nunito-black cursor-pointer text-h">
                        See more...
                    </h5>
                    </div>
                )}

                {/* MORE SECTION */}
                {showMore && (
                    <div className="more">
                    <div className="row mb-5 mt-3">
                        <div className="col-12 col-sm-6">
                        <div className="proj-sec px-3 px-md-5 px-lg-5">
                            <h2 className="text-white fw-bold rubik">05</h2>
                            <h3 className="text-white nunito-black my-4">Equitrus</h3>
                            <h6 className="text-white text-justify nunito-exlight mb-4">
                            Equitrus is a financial advisory website designed to assist investors with informed financial planning. It offers multiple financial calculators such as requirement corpus, SIP–SWP, goal planning, and portfolio projection. The platform provides services including mutual funds, income tax planning, and health insurance. Users can register and log in to manage investments or directly contact advisors through a simple inquiry form.

                            </h6>
                            <a
                            href="https://equitrus.com/"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <i
                                className="fa-solid fa-arrow-up-right-from-square"
                                style={{ color: "#ffffff" }}
                            ></i>
                            </a>
                        </div>
                        </div>

                        <div className="col-12 col-sm-6 mt-3 mt-md-0">
                        <img
                            src="../images/equitrus.png"
                            alt=""
                            className="img-fluid proj-img"
                        />
                        </div>
                    </div>


                    <div className="row mb-5 mt-3">
                        
                        <div className="col-12 col-sm-6 mt-3 mt-md-0">
                            <img
                                src="../images/rizvi.png"
                                alt=""
                                className="img-fluid proj-img"
                            />
                        </div>

                        <div className="col-12 col-sm-6">
                        <div className="proj-sec px-3 px-md-5 px-lg-5">
                            <h2 className="text-white fw-bold rubik">06</h2>
                            <h3 className="text-white nunito-black my-4">Dr.Rizvi Cosmetic Dermatology</h3>
                            <h6 className="text-white text-justify nunito-exlight mb-4">
                            This is a B2C e-commerce website for selling skincare products. Users must log in to purchase products or add items to their wishlist. After login, users can manage their profile, update personal details, view wishlisted items, and track orders. The platform also includes an admin-only backend module to manage users, orders, and products, as the brand sells its own products exclusively.

                            </h6>
                            <a
                            href="https://drrizvicosmeticdermatology.com/"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <i
                                className="fa-solid fa-arrow-up-right-from-square"
                                style={{ color: "#ffffff" }}
                            ></i>
                            </a>
                        </div>
                        </div>

                    </div>


                    <div className="row mb-5 mt-3">
                        <div className="col-12 col-sm-6">
                        <div className="proj-sec px-3 px-md-5 px-lg-5">
                            <h2 className="text-white fw-bold rubik">07</h2>
                            <h3 className="text-white nunito-black my-4">MixedBag Interiors</h3>
                            <h6 className="text-white text-justify nunito-exlight mb-4">
                            This is a professional website for an interior design company that showcases its previous projects and distinctive design styles. The platform highlights the company’s work portfolio, features informative blogs, and includes a section introducing the founders. Users can explore services and design approaches, and easily contact the company through a simple inquiry form for consultations or project discussions.

                            </h6>
                            <a
                            href="https://mixedbaginteriors.com/"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <i
                                className="fa-solid fa-arrow-up-right-from-square"
                                style={{ color: "#ffffff" }}
                            ></i>
                            </a>
                        </div>
                        </div>

                        <div className="col-12 col-sm-6 mt-3 mt-md-0">
                        <img
                            src="../images/mbag.png"
                            alt=""
                            className="img-fluid proj-img"
                        />
                        </div>
                    </div>



                    <div className="row mb-5 mt-3">
                        
                        <div className="col-12 col-sm-6 mt-3 mt-md-0">
                            <img
                                src="../images/uqesh.png"
                                alt=""
                                className="img-fluid proj-img"
                            />
                        </div>

                        <div className="col-12 col-sm-6">
                        <div className="proj-sec px-3 px-md-5 px-lg-5">
                            <h2 className="text-white fw-bold rubik">08</h2>
                            <h3 className="text-white nunito-black my-4">Uqesh</h3>
                            <h6 className="text-white text-justify nunito-exlight mb-4">
                            This project is a corporate website for an Australian flooring solutions company specializing in industrial floor coating services. The platform highlights the company’s expertise in providing durable, eco-friendly flooring solutions for sectors such as hospitals, food factories, hotels, and industries. It showcases product offerings, industry-specific solutions, company background, and allows businesses to learn about services and contact the team for project inquiries.

                            </h6>
                            <a
                            href="https://uqesh.com.au/"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <i
                                className="fa-solid fa-arrow-up-right-from-square"
                                style={{ color: "#ffffff" }}
                            ></i>
                            </a>
                        </div>
                        </div>

                    </div>


                    <div className="row mb-5 mt-3">
                        <div className="col-12 col-sm-6">
                        <div className="proj-sec px-3 px-md-5 px-lg-5">
                            <h2 className="text-white fw-bold rubik">09</h2>
                            <h3 className="text-white nunito-black my-4">RealEstate Project</h3>
                            <h6 className="text-white text-justify nunito-exlight mb-4">
                            This is a role-based real estate web platform designed for customers and associates such as builders, brokers, and promoters. Customers can log in to browse and purchase suitable houses, flats, and properties, while associates can register and showcase their projects for sale. Features and access are dynamically enabled based on user type. Customers can also directly contact builders or brokers through an inquiry form.

                            </h6>
                            <a
                            href="https://krolditclients.com/projects/realestate/"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <i
                                className="fa-solid fa-arrow-up-right-from-square"
                                style={{ color: "#ffffff" }}
                            ></i>
                            </a>
                        </div>
                        </div>

                        <div className="col-12 col-sm-6 mt-3 mt-md-0">
                        <img
                            src="../images/realestate.png"
                            alt=""
                            className="img-fluid proj-img"
                        />
                        </div>
                    </div>



                    <div className="row mb-5 mt-3">
                        
                        <div className="col-12 col-sm-6 mt-3 mt-md-0">
                            <img
                                src="../images/school.png"
                                alt=""
                                className="img-fluid proj-img"
                            />
                        </div>

                        <div className="col-12 col-sm-6">
                        <div className="proj-sec px-3 px-md-5 px-lg-5">
                            <h2 className="text-white fw-bold rubik">10</h2>
                            <h3 className="text-white nunito-black my-4">Play School India</h3>
                            <h6 className="text-white text-justify nunito-exlight mb-4">
                            This is an Indian playschool listing and discovery platform where schools can register and showcase their profiles, locations, curriculum, facilities, and other details. Users can search playschools by city or pincode and apply filters such as age group, facilities, fees, and ratings. The website also features blogs on preschool education and provides guidance for starting a playschool, along with an inquiry contact form.

                            </h6>
                            <a
                            href="https://krolditclients.com/projects/school/"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <i
                                className="fa-solid fa-arrow-up-right-from-square"
                                style={{ color: "#ffffff" }}
                            ></i>
                            </a>
                        </div>
                        </div>

                    </div>





                    {/* WRAP UP */}
                    <div
                        className="text-center mt-4 cursor-pointer"
                        onClick={() => setShowMore(false)}
                    >
                        <h5 className="text-white nunito-black cursor-pointer text-h">
                        See less
                        </h5>
                    </div>
                    </div>
                )}


            </div>
        </section>
        </>
    )

}
