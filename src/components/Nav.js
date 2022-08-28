import React from "react";

export default class Nav extends React.Component {

    render() {
        return (
            <nav className=" flex justify-between border-black border-b-8 bg-red-500">
                <div>
                    {/* Title of nav */}
                    <span className="text-3xl font-bold">Pokemon Stats</span>
                </div>
                <div>
                    {/* nav links */}
                    <ul className="flex">
                        <li>
                            <button className=" text-2xl bg-red-500 hover:bg-blue-300 p-1">Home</button>
                        </li>
                        <li>
                            <button className=" text-2xl bg-red-500 hover:bg-blue-300 p-1 ml-3">Pokemon</button>
                        </li>
                        <li>
                            <button className=" text-2xl bg-red-500 hover:bg-blue-300 p-1 ml-3">Types</button>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}