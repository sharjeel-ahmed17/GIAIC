import React from "react";

const Grid = () => {
  return (
    <div>
      {/* flex box basis */}
      <div className="bg-green-100 py-10">
        <div className="container mx-auto md:px-10 px-2">
          <h1>Products details page</h1>
          <div className="flex md:flex-row flex-col">
            <div className="basis-[55%] md:order-1 order-2">sharjeel</div>
            <div className="basis-[45%] md:order-2 order-1">ahemd</div>
          </div>
        </div>
      </div>
      {/* flex box  2 grow*/}
      <div className="flex gap-3 md:flex-row flex-col">
        <div className="bg-red-200 grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum
          dolores consequuntur, nam, accusamus suscipit distinctio facilis
          laborum recusandae veritatis ullam aspernatur impedit accusantium
          inventore sunt sint unde eveniet repudiandae?
        </div>
        <div className="bg-red-200 grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum
          dolores consequuntur, nam, accusamus suscipit distinctio facilis
          laborum recusandae veritatis ullam aspernatur impedit accusantium
          inventore sunt sint unde eveniet repudiandae?
        </div>
        <div className="bg-red-200 grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum
          dolores consequuntur, nam, accusamus suscipit distinctio facilis
          laborum recusandae veritatis ullam aspernatur impedit accusantium
          inventore sunt sint unde eveniet repudiandae?
        </div>
      </div>

      {/* flex box 3 basis flex-wrap*/}
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center md:flex-row flex-col">
          <div className="bg-green-500 p-4 m-3 basis-[30%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
          <div className="bg-green-500 p-4 m-3 basis-[30%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
          <div className="bg-green-500 p-4 m-3 basis-[30%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
          <div className="bg-green-500 p-4 m-3 basis-[30%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
          <div className="bg-green-500 p-4 m-3 basis-[30%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
          <div className="bg-green-500 p-4 m-3 basis-[30%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
          <div className="bg-green-500 p-4 m-3 basis-[30%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
          <div className="bg-green-500 p-4 m-3 basis-[30%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
        </div>
      </div>

      {/* gird box */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-blue-500 p-4 m-3 col-span-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab provident
          hic amet accusamus cumque reprehenderit, inventore sunt, consequuntur
          harum fuga ex, non deserunt commodi facere est sed expedita
          accusantium nemo.
        </div>
        <div className="bg-blue-500 p-4 m-3 col-start-2 col-end-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab provident
          hic amet accusamus cumque reprehenderit, inventore sunt, consequuntur
          harum fuga ex, non deserunt commodi facere est sed expedita
          accusantium nemo.
        </div>
        <div className="bg-blue-500 p-4 m-3 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab provident
          hic amet accusamus cumque reprehenderit, inventore sunt, consequuntur
          harum fuga ex, non deserunt commodi facere est sed expedita
          accusantium nemo.
        </div>
        <div className="bg-blue-500 p-4 m-3 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab provident
          hic amet accusamus cumque reprehenderit, inventore sunt, consequuntur
          harum fuga ex, non deserunt commodi facere est sed expedita
          accusantium nemo.
        </div>
        <div className="bg-blue-500 p-4 m-3 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab provident
          hic amet accusamus cumque reprehenderit, inventore sunt, consequuntur
          harum fuga ex, non deserunt commodi facere est sed expedita
          accusantium nemo.
        </div>
        <div className="bg-blue-500 p-4 m-3 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab provident
          hic amet accusamus cumque reprehenderit, inventore sunt, consequuntur
          harum fuga ex, non deserunt commodi facere est sed expedita
          accusantium nemo.
        </div>
        <div className="bg-blue-500 p-4 m-3 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab provident
          hic amet accusamus cumque reprehenderit, inventore sunt, consequuntur
          harum fuga ex, non deserunt commodi facere est sed expedita
          accusantium nemo.
        </div>
        <div className="bg-blue-500 p-4 m-3 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab provident
          hic amet accusamus cumque reprehenderit, inventore sunt, consequuntur
          harum fuga ex, non deserunt commodi facere est sed expedita
          accusantium nemo.
        </div>
        <div className="bg-blue-500 p-4 m-3 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab provident
          hic amet accusamus cumque reprehenderit, inventore sunt, consequuntur
          harum fuga ex, non deserunt commodi facere est sed expedita
          accusantium nemo.
        </div>
      </div>

      {/* gird 2 */}

      <div className="grid grid-cols-1 md:grid-cols-[40%_auto]">
      <div className="bg-green-500 p-4 m-3 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
      <div className="bg-yellow-500 p-4 m-3 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
      </div>

      {/* grid row */}

      <div className="grid md:grid-flow-col grid-flow-row grid-rows-2">
      <div className="bg-green-500 p-4 m-3">
            1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
      <div className="bg-green-500 p-4 m-3">
           2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
      <div className="bg-green-500 p-4 m-3">
         3   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
      <div className="bg-green-500 p-4 m-3">
        4    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
      <div className="bg-green-500 p-4 m-3">
          5  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>
      <div className="bg-green-500 p-4 m-3">
          6  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            provident hic amet accusamus cumque reprehenderit, inventore sunt,
            consequuntur harum fuga ex, non deserunt commodi facere est sed
            expedita accusantium nemo.
          </div>

      </div>

      <div className="p-[15px_5px] md:mb-10 mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam omnis recusandae fugit, eos eligendi id ipsa maxime. Atque dolor explicabo, excepturi nulla quasi natus earum praesentium repudiandae commodi repellendus amet. <br />
        <button className="bg-blue-500 p-[15px_10px] rounded-lg">click me</button>
      </div>
    </div>
  );
};

export default Grid;
