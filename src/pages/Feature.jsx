import React from 'react'
import '../styles/feature.css'
import { GiNotebook, GiBookCover } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";

const Feature = () => {
    return (
        <>
            <section className='feature'>
                <div className="feature-title">
                    <p className='Greeting'>Welcome to Auther</p>
                    <p className='greet-des'> your auther for all things books! Whether you're a seasoned bookworm or just diving into the world of literature, we're thrilled to have you here. </p>
                </div>
                <div className="container">
                    {/* <div className="containerimg"></div> */}
                    <div className="feature-list">
                        <div className="feature-card">
                            <GiNotebook size={"4rem"} color='#ad023b' />
                            <p className="card-title">
                                Publish Your Book
                            </p>
                            <p className='feature-para'>
                            Delve into the lives and works of your favorite authors with our exclusive author spotlights. Explore author biographies, interviews, and curated collections of their most popular titles.
                            </p>
                        </div>
                        <div className="feature-card">
                            <GiBookCover size={"4rem"} color='#ad023b' />
                            <p className="card-title">
                            Bookworm Community
                            </p>
                            <p className='feature-para'>
                            Connect with fellow book lovers through our community hub. Share book recommendations, participate in themed challenges and contests,
                            </p>
                        </div>
                        <div className="feature-card">
                            <FaLaptop size={"4rem"} color='#ad023b' />
                            <p className="card-title">
                            Virtual Bookshelf
                            </p>
                            <p className='feature-para'>
                            Create your virtual bookshelf to keep track of books you've read, want to read, and are currently reading. Organize your collection, write reviews, and share your literary adventures with friends and fellow bookworms.
                            </p>
                        </div>
                        <div className="feature-card">
                            <FiPenTool size={"4rem"} color='#ad023b' />
                            <p className="card-title">
                            Customizable Reading
                            </p>
                            <p className='feature-para'>
                            Tailor your reading experience to suit your preferences with customizable settings. Adjust font size, background color, and reading mode to create the perfect ambiance for your literary escape.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Feature