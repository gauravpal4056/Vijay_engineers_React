const Services = () => {

    const leftScroll = () => document.querySelector("#facil").scrollBy(400, 0);

    const rightScroll = () => document.querySelector("#facil").scrollBy(-400, 0);

    
    return(
        <>
            <hr  className="mx-32 my-10 border-4 border-primary" />
            <div  className="flex justify-center ">
                <h1   className="text-4xl cursor-pointer transition-all hover:underline duration-500">OUR <span className="text-primary" >SERVICES</span></h1>
            </div>
            <div class="relative">
                <div onClick={rightScroll} class="translate-y-48 cursor-pointer w-20 h-100% absolute left-0 z-10"><img src="./arLoran.png" alt="" /></div>
                <div onClick={leftScroll} class="translate-y-48 cursor-pointer w-20 h-100% absolute right-0 z-10"><img src="./arRoran.png" alt="" /></div>
            </div>
            <div id="facil" data-aos="slide-up" className=" carousel carousel-center mx-auto space-x-4 bg-base-100 h-[500px] rounded-box">
            <div className="carousel-item">
                <div id="fac" className="rounded-2xl overflow-hidden relative m-4 transition-all hover:scale-105  min-w-fit   ">
                <img className=" mx-auto w-96 transition-all duration-300 hover:scale-110" src="./lathe2.jpg" alt=""/>
                <div className="absolute bottom-0 w-80 m-7">
                    <h1 className=" text-white text-3xl mb-4"> Latthhe Mchiine</h1>
                    <p id="facT" className="text-xl text-white mb-5 "> Our company is equipped with most efficient and important machines out ther to provide the customer the satisfacton they need</p>
                </div>
                </div>
            </div> 
            <div className="carousel-item">
                <div id="fac" class="rounded-2xl overflow-hidden relative m-4 transition-all hover:scale-105  min-w-fit   ">
                <img class="mx-auto w-96 transition-all duration-300 hover:scale-110" src="./hero1.jpg" alt=""/>
                <div class="absolute bottom-0 w-80 m-7">
                    <h1 class=" text-white text-3xl mb-4"> Latthhe Mchiine</h1>
                    <p id="facT" class="text-xl text-white mb-5 "> Our company is equipped with most efficient and important machines out ther to provide the customer the satisfacton they need</p>
                </div>
                </div>
            </div> 
            <div className="carousel-item ">
                <div id="fac" class="rounded-2xl overflow-hidden relative m-4 transition-all hover:scale-105  min-w-fit   ">
                <img class="mx-auto w-96 transition-all duration-300 hover:scale-110" src="./lathe.jpg" alt=""/>
                <div class="absolute bottom-0 w-80 m-7">
                    <h1 class=" text-white text-3xl mb-4"> Latthhe Mchiine</h1>
                    <p id="facT" class="text-xl text-white mb-5 "> Our company is equipped with most efficient and important machines out ther to provide the customer the satisfacton they need</p>
                </div>
                </div>
            </div> 
            <div className="carousel-item">
                <div class="rounded-2xl overflow-hidden relative m-4 transition-all hover:scale-105  min-w-fit   ">
                <img class="mx-auto w-96 transition-all duration-300 hover:scale-110" src="./vmc.jpg" alt=""/>
                <div class="absolute bottom-0 w-80 m-7">
                    <h1 class=" text-white text-3xl mb-4"> Latthhe Mchiine</h1>
                    <p class="text-xl text-white mb-5 "> Our company is equipped with most efficient and important machines out ther to provide the customer the satisfacton they need</p>
                </div>
                </div>
            </div> 
            
            </div>


            {/* <div id="facil" data-aos="zoom-out-up" class="  overflow-x-hidden flex overflow-y-hidden w-screen">

            <div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src="https://placeimg.com/256/400/arch" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
            </div>
            <div id="fac" class="overflow-hidden relative m-4 transition-all hover:scale-105  min-w-fit   ">
            <img class="mx-auto w-96 transition-all duration-300 hover:scale-110" src="./lathe2.jpg" alt=""/>
            <div class="absolute bottom-0 w-80 m-7">
                <h1 class=" text-white text-3xl mb-4"> Latthhe Mchiine</h1>
                <p id="facT" class="text-xl text-white mb-5 "> Our company is equipped with most efficient and important machines out ther to provide the customer the satisfacton they need</p>
            </div>
            </div>
            <div id="fac" class=" overflow-hidden relative m-4 transition-all hover:scale-105  min-w-fit    ">
            <img class="mx-auto w-96 transition-all duration-300 hover:scale-110" src="./lathe.jpg" alt=""/>
            <div class="absolute bottom-0 w-80 m-7">
                <h1 class=" text-white text-3xl mb-4"> Latthhe Mchiine</h1>
                <p id="facT" class="text-xl text-white mb-5 "> Our company is equipped with most efficient and important machines out ther to provide the customer the satisfacton they need</p>
            </div>
            </div>
            <div id="fac" class="overflow-hidden relative m-4 transition-all hover:scale-105 overflow min-w-fit   ">
            <img class="mx-auto w-96 transition-all duration-300 hover:scale-110" src="./lathe2.jpg" alt=""/>
            <div class="absolute bottom-0 w-80 m-7">
                <h1 class=" text-white text-3xl mb-4"> Latthhe Mchiine</h1>
                <p id="facT" class="text-xl text-white mb-5 "> Our company is equipped with most efficient and important machines out ther to provide the customer the satisfacton they need</p>
            </div>
            </div>
            <div id="fac" class="overflow-hidden relative m-4 transition-all hover:scale-105 overflow min-w-fit    ">
            <img class="mx-auto w-96 transition-all duration-300 hover:scale-110" src="./lathe.jpg" alt=""/>
            <div class="absolute bottom-0 w-80 m-7">
                <h1 class=" text-white text-3xl mb-4"> Latthhe Mchiine</h1>
                <p id="facT" class="text-xl text-white mb-5 "> Our company is equipped with most efficient and important machines out ther to provide the customer the satisfacton they need</p>
            </div>
            </div>
            <div id="fac" class=" overflow-hidden relative m-4 transition-all hover:scale-105 overflow min-w-fit  bg-gray-300 ">
            <img class="mx-auto w-96 transition-all duration-300 hover:scale-110" src="./grind.jpg" alt=""/>
            <div class="absolute bottom-0 w-80 m-7">
                <h1 class=" text-white text-3xl mb-4"> Latthhe Mchiine</h1>
                <p id="facT" class="text-xl text-white mb-5 "> Our company is equipped with most efficient and important machines out ther to provide the customer the satisfacton they need</p>
            </div>
            </div>

            </div> */}

        </>
    )
}

export default Services