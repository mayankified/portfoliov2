import React from 'react'

const Loader = () => {
    return (
        <div className='w-full h-full fixed bg-[#fff] z-50 flex justify-center items-center flex-col'>

            <div className="pyramid-loader">
                <div className="wrapper">
                    <span className="side side1"></span>
                    <span className="side side2"></span>
                    <span className="side side3"></span>
                    <span className="side side4"></span>
                    <span className="shadow"></span>
                </div>
            </div>
            <div className="card flex flex-col items-center"> 
                <div className="loader">
                    
                    <p className='w-[50%] text-right sm:text-[25px] text-[20px]'>loading</p>
                    <div className="words sm:text-[25px] text-[20px]">
                        <span className="word">program</span>
                        <span className="word">portfolio</span>
                        <span className="word">animations</span>
                        <span className="word">cards</span>
                    </div>
                </div>
                    <p className='font-light sm:text-[18px] text-[14px]'>[Best view on desktop devices]</p>
            </div>

        </div>
    )
}

export default Loader