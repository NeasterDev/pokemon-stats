import React from "react";

// chose to make this a functional component because it is using a lot of props and
// i didnt want to type this.state a bunch
export const PokemonStats = ({ name, id, height, weight, sprite }) => {
  return (
    <div className="flex flex-col mx-auto w-80">
      <div className="border-2 border-black rounded-t">Name: {name}</div>
      <div className="bg-red-500 border-2 border-black border-t-0 rounded-b">
        {/* Image */}
        <div className="flex justify-center bg-slate-100 w-fit mx-auto border-black border-4 mt-2 ">
            <img src={sprite} alt={name + " sprite"} />
        </div>
        {/* Height - Decimeters to ft divide the length value by 3.048 */}
        <div>Height: {(height / 3.048).toFixed(2)}ft.</div>
        {/* Weight - Hectograms to Lbs divide the mass value by 4.536 */}
        <div>Weight: {(weight / 4.536).toFixed(2)}lbs.</div>
        {/* Number */}
        <div># {id}</div>
      </div>
    </div>
  );
};
