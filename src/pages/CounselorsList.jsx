import React from "react";
import { useNavigate } from "react-router-dom"; // Use the new react-router-dom hook

const Counselors = () => {
  const dummyCounselors = [
    { name: "Dr. Jane Doe", expertise: "Stress Management", contact: "9876543210", email: "jane.doe@example.com" },
    { name: "Mr. John Smith", expertise: "Anxiety Counseling", contact: "8765432109", email: "john.smith@example.com" },
    { name: "Dr. Emily Davis", expertise: "Relationship Therapy", contact: "7654321098", email: "emily.davis@example.com" },
    { name: "Ms. Laura Wilson", expertise: "Career Counseling", contact: "6543210987", email: "laura.wilson@example.com" },
    { name: "Dr. Michael Brown", expertise: "Trauma Recovery", contact: "5432109876", email: "michael.brown@example.com" },
    { name: "Dr. Sarah Johnson", expertise: "PTSD Therapy", contact: "4321098765", email: "sarah.johnson@example.com" },
    { name: "Dr. Ethan White", expertise: "Anger Management", contact: "3210987654", email: "ethan.white@example.com" },
    { name: "Ms. Sophia Martinez", expertise: "Grief Counseling", contact: "2109876543", email: "sophia.martinez@example.com" },
    { name: "Dr. Olivia Lopez", expertise: "Self-Esteem Improvement", contact: "1098765432", email: "olivia.lopez@example.com" },
    { name: "Dr. Benjamin Clark", expertise: "Child Therapy", contact: "9876501234", email: "benjamin.clark@example.com" },
    { name: "Ms. Mia Anderson", expertise: "Depression Counseling", contact: "8765409876", email: "mia.anderson@example.com" },
    { name: "Dr. Lucas Scott", expertise: "Addiction Recovery", contact: "7654308765", email: "lucas.scott@example.com" },
    { name: "Ms. Lily Campbell", expertise: "Mindfulness Coaching", contact: "6543207654", email: "lily.campbell@example.com" },
    { name: "Dr. Ava Walker", expertise: "Behavioral Therapy", contact: "5432106543", email: "ava.walker@example.com" },
    { name: "Dr. Noah Green", expertise: "Family Therapy", contact: "4321095432", email: "noah.green@example.com" },
    { name: "Ms. Charlotte King", expertise: "Social Anxiety Therapy", contact: "3210984321", email: "charlotte.king@example.com" },
    { name: "Dr. Amelia Wright", expertise: "Couples Counseling", contact: "2109873210", email: "amelia.wright@example.com" },
    { name: "Dr. Daniel Hill", expertise: "Obsessive-Compulsive Disorder (OCD)", contact: "1098762109", email: "daniel.hill@example.com" },
    { name: "Ms. Emma Turner", expertise: "Burnout Recovery", contact: "9876512340", email: "emma.turner@example.com" },
    { name: "Dr. Jack Phillips", expertise: "Eating Disorder Support", contact: "8765411234", email: "jack.phillips@example.com" },
    { name: "Dr. Sophie Brooks", expertise: "Sleep Therapy", contact: "7654310123", email: "sophie.brooks@example.com" },
    { name: "Ms. Harper Adams", expertise: "Life Coaching", contact: "6543219012", email: "harper.adams@example.com" },
    { name: "Dr. Elijah Mitchell", expertise: "Phobia Management", contact: "5432108901", email: "elijah.mitchell@example.com" },
    { name: "Dr. Evelyn Rivera", expertise: "Emotional Intelligence Coaching", contact: "4321097809", email: "evelyn.rivera@example.com" },
    { name: "Mr. Henry Edwards", expertise: "Stress-Related Physical Issues", contact: "3210986709", email: "henry.edwards@example.com" },
    { name: "Ms. Grace Thompson", expertise: "Loneliness and Isolation", contact: "2109875608", email: "grace.thompson@example.com" },
    { name: "Dr. Victoria Young", expertise: "Mood Disorders", contact: "1098764507", email: "victoria.young@example.com" },
    { name: "Dr. Sebastian Carter", expertise: "LGBTQ+ Counseling", contact: "9876509876", email: "sebastian.carter@example.com" },
    { name: "Ms. Aria Morgan", expertise: "Teen Counseling", contact: "8765408765", email: "aria.morgan@example.com" },
    { name: "Dr. Matthew Parker", expertise: "Bipolar Disorder Support", contact: "7654307654", email: "matthew.parker@example.com" },
  ];

  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const navigateToHomePage = () => {
    navigate("/"); // Navigate to the root (homepage)
  };

  return (
    <div className="counselors-list w-screen min-h-screen bg-[#F1F8FC] p-8">
      {/* Floating Title Bar */}
      <div className="fixed top-0 left-0 right-0 bg-[#2A9D8F] text-white text-center py-3 z-10 shadow-lg">
        <h2 className="text-xl font-bold">Counselors List</h2>
      </div>

      {/* Main Content */}
      <div className="mt-20"> {/* Add extra margin-top here for spacing */}
        <h1 className="text-4xl font-semibold text-center mb-8 text-[#4A5A6F]">
          Our Counselors
        </h1>

        {/* Counselor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
          {dummyCounselors.map((counselor, index) => (
            <div
              key={index}
              className="counselor-card bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h2 className="text-2xl font-semibold text-[#2A9D8F] mb-2">
                {counselor.name}
              </h2>
              <p className="text-[#607D8B]">{counselor.expertise}</p>
              <p className="text-[#607D8B] mt-2">📞 {counselor.contact}</p>
              <p className="text-[#607D8B]">✉️ {counselor.email}</p>
            </div>
          ))}
        </div>

        {/* Go Back Button */}
        <button
          onClick={navigateToHomePage}
          className="mt-8 bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow hover:bg-[#26A69A] transition-all"
        >
          Go Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default Counselors;
