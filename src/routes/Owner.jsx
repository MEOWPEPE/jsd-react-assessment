import React from "react";

const Owner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-2xl font-bold p-4">21_Narathorn (Boss) - JSD11</h1>
      <div>
        <img
          className="h-100 w-100 object-cover border-2"
          src="https://img5.pic.in.th/file/secure-sv1/167973cb610cc58c5f480f.jpg"
        ></img>
      </div>
      <div>
        <h3 className="text-red-400 p-2">
          PS.The Picture is Not Myself, It My Cat Name"Tung Tao" Which Mean
          "Sock" :D
        </h3>
      </div>
      <h2 className="text-xl font-bold">Short Biography:</h2>
      <p className="font-semibold p-5">"Hi my name is Boss. I found <strong>Generation Thailand</strong> by accident on LinkedIn. That day I was looking for a future customer and found a person who had graduated in JSD <em>(I can't remember which cohort)</em>. If I remember correctly, she works in a game company now, and that's how I started dreaming of working in the game industry.I had applied once before but was unable to pass the initial assessment. At that time, I hadn't tried hard enough. It wasn't until Cohort 11 that I completed everything, because I am now genuinely determined to switch my career path. This persistence reflects how serious I am about joining the game industry, and I hope it will lead to the chance to meet you and start this new journey." </p>
    </div>
  );
};

export default Owner;
