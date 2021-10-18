import Products from "../component/Products";

const Home= ()=>{
    return(
        <>
            <div className="hero py-16 my-9">
                <div className="container mx-auto flex justify-between">
                    <div className="w-1/2">
                        <img className="w-4/5" src="/images/home-logo.png" alt="" />
                    </div>

                    <div className="w-1/2">
                        <h6 className="text-lg"><em>Stuck with unhealthy food?</em></h6>
                        <h1 className="text-3xl font-bold md:text-6xl">Eat natural foods!</h1>
                        <button className="bg-purple-600 bg-opacity-100 px-6 py-2 rounded-full text-white font-bold mt-4 hover:bg-green-600">Order Now</button>
                    </div>
                    
                </div>
            </div>
            <div className="pb-24">
                <Products />
            </div>
        </>
    )
}

export default Home;