const HeroSection = () => {
    return (
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className="topmarr">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
                <div className="hero-button topmarr">
                    <button className="btSN">Shop Now</button>
                    <button className="btC">Category</button>
                </div>
                <div className="available-on topmarr">
                    <p className="tag-available">Also Available On</p>
                    <div className="brand-icons">
                        <img src="./images/amazon.png" alt="amazon-logo" />
                        <img src="./images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="./images/shoe_image.png" alt="shoe_image" />
            </div>
            
        </main>
    );
};
export default HeroSection;
