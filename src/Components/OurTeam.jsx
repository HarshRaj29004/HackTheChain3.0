import React from "react";

const teamData = [
  { id: 1, name: "Ashmit Singh", imageUrl: "/pictures/ashmit.jpg" },
  { id: 2, name: "Ayush Kumar", imageUrl: "/pictures/ayushphto.jpg" },
  { id: 3, name: "Dhruv Tiwari", imageUrl: "/pictures/dhruv.jpg" },
  { id: 4, name: "Yash Aggarwal", imageUrl: "/pictures/yash.jpg" },
  { id: 5, name: "Vinay Kumar", imageUrl: "/pictures/vinay.jpg" },
  { id: 6, name: "Avinesh Rathore", imageUrl: "/pictures/avineshboss.jpg" },
  { id: 7, name: "Anany Srivastava", imageUrl: "/pictures/ananyboss.jpg" },
  { id: 8, name: "Devansh Gupta", imageUrl: "/pictures/devanshboss.jpg" },
  { id: 9, name: "Prateek Singh", imageUrl: "/pictures/prateekboss.jpg" },
  { id: 10, name: "Vansh Nigam", imageUrl: "/pictures/vanshboss.jpg" },
  { id: 11, name: "Gopal Patidar", imageUrl: "/pictures/gopalboss.jpg" },
  { id: 12, name: "Jash Parmar", imageUrl: "/pictures/jashboss.jpg" },
  { id: 13, name: "Hari Om Meena", imageUrl: "/pictures/hariboss.jpg" },
  { id: 14, name: "Om", imageUrl: "/pictures/omboss.jpg" }
];


const OurTeam = () => {
  const firstRow = teamData.slice(0, Math.ceil(teamData.length / 2));
  const secondRow = teamData.slice(Math.ceil(teamData.length / 2));

  return (
    <div className="flex flex-col items-center bg-transparent">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">OUR TEAM</h1>
      <div className="space-y-6 w-full overflow-hidden">
        {/* First row moving left */}
        <div className="flex animate-move-left space-x-6">
          {firstRow.map((member) => (
            <div
              key={member.id}
              className="shadow-lg rounded-lg p-4 flex flex-col items-center w-40"
              style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}

            >
              <div className="w-24 h-24 border-4 border-blue-500 rounded-full overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-700">{member.name}</p>
            </div>
          ))}
        </div>

        {/* Second row moving right */}
        <div className="flex animate-move-right space-x-6">
          {secondRow.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-40"
            >
              <div className="w-24 h-24 border-4 border-blue-500 rounded-full overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-700">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
