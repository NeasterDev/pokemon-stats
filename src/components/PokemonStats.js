import React from "react";

// chose to make this a functional component because it is using a lot of props and 
// i didnt want to type this.state a bunch
export const PokemonStats = ({name, id }) => {
    return (
        <div className="flex flex-col mx-auto w-60">
            <div className="border-2 border-black">
                name: {name}
            </div>
            <div>
                # {id}
            </div>
        </div>
    )
}