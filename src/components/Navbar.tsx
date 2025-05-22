import ThreeLine from "../icons/ThreeLine";

function Navbar() {
    return (
        <div>
            <div className="flex justify-between items-center w-screen  h-16   mb-2 text-ls border-gray-900 border-b  text-white">
                <div className="flex items-center gap-6 ">
                    <div className="text-3xl">
                        <ThreeLine />
                    </div>
                    <div className="">
                        <h1>Home</h1>
                    </div>
                    <div className="">
                        <h1>Protfolio</h1>
                    </div>
                    <div className="">
                        <h1>Token</h1>
                    </div>

                </div>
                <div className="flex justify-self-start  ">
                    <div className="border border-gray-800 hover:bg-gray-900 bg-gray-950 rounded-3xl w-94 h-9 p-2 flex items-center">
                        <div className="mx-1 text-gray-500 ">
                            <ThreeLine />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for anything"
                            className="bg-transparent border-none outline-none w-full h-full pl-2 text-white"
                        />
                        <div className="flex items-center justify-center w-6 h-6 mr-1 rounded bg-gray-700 text-white">
                            /
                        </div>
                    </div>
                </div>
                <div className="flex mr-2 items-center gap-6">
                    <div className="">
                        <h1>Home</h1>
                    </div>
                    <div className="">
                        <h1>Portfolio</h1>
                    </div>
                    <div className="">
                        <h1>Token</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Navbar;