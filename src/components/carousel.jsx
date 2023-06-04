import {useState} from 'react'

const Carousel = () => {

//     const [slide, setSlide] = useState(0);
// setTimeout(() => {
//     setInterval(changeSlide, 2000);

// }, 4000);
function changeSlide() {
    switch (slide) {
        case 0:
            document.getElementById("toslide1").click();
            setSlide(1)
            break;
        case 1:
            document.getElementById("toslide2").click();
            setSlide(2)
            break;
        case 2:
            document.getElementById("toslide3").click();
            setSlide(3)
            break;
        case 3:
            document.getElementById("toslide0").click();
            setSlide(4)
            break;
        default:
            clearInterval();
            break;

            
}
}

    return (
        <>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-screen " >

            <div className='flex md:flex-row flex-col-reverse justify-between md:ml-48 items-center w-full overflow-hidden'>
                <div className=' md:w-1/2 p-5' >
                    <h1 className='text-3xl md:text-5xl font-bold text-primary pb-8'>We Are Viay Engineerings!</h1>
                    <p className=' mx-auto text-lg md:text-2xl font-bold  '>We will provide optimal experience toward any work that we are given by our clients</p>
                </div>
            <div style={{backgroundImage: `url("./bg8.jpg")`,
                backgroundSize: "cover",
                backgroundPosition:"center",
            }} className='   trans duration-700 shadow-2xl hover:scale-105  mx-32 w-full h-full mt-60'>
                 <video className='videoTag w-full h-screen object-cover' autoPlay loop muted >
                    <source src="./gearOrange.mp4" type='video/mp4' />
                </video>
            </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a  href="#slide4" className="btn btn-circle">❮</a> 
                <a  id="toslide1"href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-screen" style={{
                backgroundImage: `url("./bg17.jpg")`,
                backgroundPosition:"center",
                backgroundSize:"cover"
            }}>
                <div className="h-full w-full  bg-secondary/30 text-primary-content flex items-center ">
                       <div className='mx-auto p-10 mt-40   '>
                            <h2 className="mb-10 text-center text-base-100 text-3xl">Card title!</h2>
                            <p className='text-2xl text-base-100' >If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                       </div>
                </div>
            {/* <div className='absolute mx-auto transform -translate-y-1/2 left-5 right-5 top-1/2' >
                <h1 className='text-6xl font-bold text-center text-primary pb-8'>We Are Viay Engineerings!</h1>
                <p className='lg:w-1/2 mx-auto text-4xl font-bold text-center text-white'>We will provide optimal experience toward any work that we are given by our clients</p>
            </div> */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a  href="#slide1" className="btn btn-circle">❮</a> 
                <a  id="toslide2"href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" style={{
                backgroundImage: `url("./bg5.jpg")`,
                backgroundSize: "cover",
                backgroundPosition:"center",
            }} className="carousel-item relative w-full h-screen hover:bg-black" >
                <video className='videoTag w-full h-screen object-cover' autoPlay loop muted >
                    <source src="https://cdn.dribbble.com/userupload/3248160/file/original-d635f7dc5c2d8ceb8a37b7e6287fefcf.mp4" type='video/mp4' />
                </video>
            <div className='absolute mx-auto transform -translate-y-1/2 left-5 right-5 top-1/2' >
                <h1 className='text-6xl font-bold text-center text-primary pb-8'>We Are Viay Engineerings!</h1>
                <p className='lg:w-1/2 mx-auto text-4xl font-bold text-center text-white'>We will provide optimal experience toward any work that we are given by our clients</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a  href="#slide2" className="btn btn-circle">❮</a> 
                <a  id="toslide3"href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full h-screen bg-base-100">
            <div className='flex flex-col md:flex-row justify-between w-full  '>
                {/* <div className="h-full">
                <div className=' md:w-1/2 m-14 mt-20 backdrop-blur-lg bg-white/30 h-1/2 my-auto'>
                    <h1 className='text-4xl md:text-6xl text-center font-bold text-white mb-10  '>We are <span className='text-primary md:text-6xl text-4xl'>Vijay Engineerings</span></h1>
                    <p className='text-xl text-white text-center'>Loren25 sdjfsdjfa a sdjfjdflk df kjf sldfj fjflaskdjflasd f j </p>
                    <div className='mx-auto  my-6 w-32'>
                        <button className='btn btn-primary btn-block text-white font-boldmx-auto'>Reach Us</button>
                    </div>
                </div>
                </div> */}
                <div className="card lg:card-side bg-base-100/30 backdrop-blur-lg text-white  shadow-xl mx-10  mt-32 h-1/2">
                    <figure><img src="./avaOk.jpg" className=' w-32 rounded-full animate-bounce my-9 mx-3' alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">WE are<span className='text-primary md:text-2xl text-xl'>Vijay Engineerings</span></h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                <div style={{
                        backgroundImage: `url("./bg9.jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition:"center",
                    }} className="md:w-96 relative md:my-40 z-50 ">
                    <img src="./bg7.jpg" className='hidden md:block md:absolute md:-left-56 border-8 z-50 mt-20 duration-500 hover:scale-110' alt="" />
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a  href="#slide3" className="btn btn-circle">❮</a> 
                <a  id="toslide2"href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>   
        </div>
        </>
    )
}

export default Carousel