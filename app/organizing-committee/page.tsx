import { PageLayout } from "@/components/PageLayout";

export default function Page() {
  const members = [
    // Existing patrons / chief patron
    { role: "Chief Patron", name: "Dr. G. Viswanathan", designation: "Chancellor, VIT University" },
    { role: "Patron", name: "Mr. Sankar Viswanathan", designation: "Vice President, VIT University" },
    { role: "Patron", name: "Dr. Sekar Viswanathan", designation: "Vice President, VIT University" },
    { role: "Patron", name: "Dr. G. V. Selvam", designation: "Vice President, VIT University" },
    { role: "Patron", name: "Dr. P. Arulmozhivarman", designation: "Vice Chancellor, VIT-AP University" },
    { role: "Patron", name: "Dr. Jagadish Chandra Mudiganti", designation: "Registrar, VIT-AP University" },

     // Publication Chairs
    { role: "Publication Chair", name: "Dr. Nabendu Chaki", designation: "University of Calcutta, India" },
    { role: "Publication Chair", name: "Dr. Agostino Cortesi", designation: "Ca Foscari University, Venice, Italy" },
    { role: "Publication Chair", name: "Dr. Valli Kumari Vatsavayi", designation: "Andhra University, India" },

    // ── New committees from Excel ──────────────────────────────────────────
    { role: "Organizing Chair", name: "Dr. Sudhakar Ilango", designation: "VIT-AP University" },
    { role: "Organizing Chair", name: "Dr. Saroj Panigrahi", designation: "VIT-AP University" },

    { role: "Conference Chair", name: "Dr. Nagaraju Devarakonda", designation: "VIT-AP University" },

    { role: "Conference Co-Chair", name: "Dr. S. Gopi Krishan", designation: "VIT-AP University" },

    { role: "Cultural and Networking Committee", name: "Dr. Ajith Jubison", designation: "VIT-AP University" },
    { role: "Cultural and Networking Committee", name: "Dr. Dasari Venkata Lakshmi", designation: "VIT-AP University" },
    { role: "Cultural and Networking Committee", name: "Dr. Nanda Kumar", designation: "VIT-AP University" },
    { role: "Cultural and Networking Committee", name: "Dr. S. Dharani Sabari", designation: "VIT-AP University" },

    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Reeja S. R.", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Karthika Natarajan", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Sheela Jayachandran", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Debasis Dwibedy", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Arindam Dey", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Anurag De", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Y. Sowjanya Kumari", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Shaik Subhani", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Deepthi Godavarthi", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Visalakshi Annepu", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. K. G. Suma", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Sandeep Dasari", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Mohammad Sirajuddin", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. N Md Jubair Basha", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. M. Vamsi Kiran", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Zeba Shamsi", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. V. Srilakshmi", designation: "VIT-AP University" },
    { role: "Feedback, Quality Assurance and Registration Committee", name: "Dr. Kalyani Sunkara", designation: "VIT-AP University" },

    { role: "Finance Committee", name: "Dr. Nagendra Panini Challa", designation: "VIT-AP University" },
    { role: "Finance Committee", name: "Dr. Beebi Naseeba", designation: "VIT-AP University" },
    { role: "Finance Committee", name: "Dr. Bharathi V C", designation: "VIT-AP University" },

    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. B. N. Jagadesh", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Syed Khasim", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Hussain Syed", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Asish Kumar Dalai", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. BV Gokulnath", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Inampudi Govardhanarao", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Karnam Balaji", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Madala Guru Brahmam", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Mattakoyya Aharonu", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Ravi Kumar Poluru", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Renita R", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Tauseef Khan", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Tirumanadham N S Koti Mani Kumar", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Kommerla Siva Kumar", designation: "VIT-AP University" },
    { role: "Hospitality, Accommodation, Food and Refreshment Committee", name: "Dr. Venkata Bhikshapathi Chenam", designation: "VIT-AP University" },

    { role: "International Interaction Committee", name: "Dr. S. Gopikrishnan", designation: "VIT-AP University" },
    { role: "International Interaction Committee", name: "Dr. Suresh Dara", designation: "VIT-AP University" },
    { role: "International Interaction Committee", name: "Dr. Eswaraiah Rayachoti", designation: "VIT-AP University" },
    { role: "International Interaction Committee", name: "Dr. Afzal Hussain Shahid", designation: "VIT-AP University" },
    { role: "International Interaction Committee", name: "Dr. Gosala Bethany", designation: "VIT-AP University" },
    { role: "International Interaction Committee", name: "Dr. Rajesh Duvvuru", designation: "VIT-AP University" },
    { role: "International Interaction Committee", name: "Dr. Ch. Rupa", designation: "VIT-AP University" },

    { role: "Media and Social Media Committee", name: "Dr. B. Bhanu Chander", designation: "VIT-AP University" },
    { role: "Media and Social Media Committee", name: "Dr. Guruprakash J", designation: "VIT-AP University" },
    { role: "Media and Social Media Committee", name: "Dr. Bommareddy Lokesh", designation: "VIT-AP University" },
    { role: "Media and Social Media Committee", name: "Dr. Kailash Chandra Mishra", designation: "VIT-AP University" },
    { role: "Media and Social Media Committee", name: "Dr. N Lakshmipathi Anantha", designation: "VIT-AP University" },
    { role: "Media and Social Media Committee", name: "Dr. Pamulapati Ashok Reddy", designation: "VIT-AP University" },
    { role: "Media and Social Media Committee", name: "Dr. Srinivasa Rao Pokuri", designation: "VIT-AP University" },
    { role: "Media and Social Media Committee", name: "Dr. Annapureddy V N Reddy", designation: "VIT-AP University" },

    { role: "Proceedings and Documentation Committee", name: "Dr. Balaram Murthy", designation: "VIT-AP University" },
    { role: "Proceedings and Documentation Committee", name: "Dr. G V Sivanarayana", designation: "VIT-AP University" },
    { role: "Proceedings and Documentation Committee", name: "Dr. Shaik Moinuddin Ahmed", designation: "VIT-AP University" },
    { role: "Proceedings and Documentation Committee", name: "Dr. T. N. Shankar", designation: "VIT-AP University" },
    { role: "Proceedings and Documentation Committee", name: "Dr. T. Ramathulasi", designation: "VIT-AP University" },
    { role: "Proceedings and Documentation Committee", name: "Dr. Mohan Allam", designation: "VIT-AP University" },
    { role: "Proceedings and Documentation Committee", name: "Dr. Radha Mohan Pattanayak", designation: "VIT-AP University" },

    { role: "Session Management Committee", name: "Dr. Aravapalli Rama Satish", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Edara Sreenivasa Reddy", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Anil Vitthalrao Turukmane", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Kuppusamy P", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Sachi Nandan Mohanty", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. J Harikiran", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Deepasikha Mishra", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. P. Lalitha Kumari", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Udit Narayana Kar", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. M Jawahar", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Mallela Siva Naga Raju", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Mithileh Kumar Dubey", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Patan Mushiya Katoon", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Samuka Mohanty", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Shaik Kareemulla", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Tejasree Ganji", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Viswanathan Ramasamy", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Adla Padma", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Arun Kumar Marandi", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Posham Uppamma", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Prakash Kumar Sarangi", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. R. Prashanth", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Rajasekhar Boddu", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Thangam S", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Javvaji Venkata Kanaka Rathnam", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Amgothu Shanthi", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. B. Lakshmi Praveena", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. D. Santhadevi", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. K. A. Varunkumar", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. P. Jeevana Jyothi", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Saroja Kumar Rout", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Divya Lanka", designation: "VIT-AP University" },
    { role: "Session Management Committee", name: "Dr. Surla Govindu", designation: "VIT-AP University" },

    { role: "Technical Review Committee", name: "Dr. Hari Kishan Kondaveeti", designation: "VIT-AP University" },
    { role: "Technical Review Committee", name: "Dr. Prabha Selvaraj", designation: "VIT-AP University" },
    { role: "Technical Review Committee", name: "Dr. Allapati Rajya Lakshmi", designation: "VIT-AP University" },
    { role: "Technical Review Committee", name: "Dr. S. Vasavi", designation: "VIT-AP University" },

    { role: "Transport and Logistics Committee", name: "Dr. Srinivasa Reddy Konda", designation: "VIT-AP University" },
    { role: "Transport and Logistics Committee", name: "Dr. Venkatesh B", designation: "VIT-AP University" },
    { role: "Transport and Logistics Committee", name: "Dr. D. Kothandaraman", designation: "VIT-AP University" },
    { role: "Transport and Logistics Committee", name: "Dr. K. Aravind", designation: "VIT-AP University" },
    { role: "Transport and Logistics Committee", name: "Dr. VVL Divakar Allavarapu", designation: "VIT-AP University" },

    { role: "Certificate and ID Card Committee", name: "Dr. Somya Ranjan Sahoo", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. B. Sai Chandana", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. B V Satish Babu", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. S Kalyani", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. Sanal Kumar T S", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. S. Bharath Bhushan", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. D Paul Joseph", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. Gargi Madala", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. I Murali Krishna", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. Putta Durga", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. Kumar Debasis", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. Mahendra Sahare", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. Manimuthu A", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. Mohinder Singh B", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. Monalisa Sahu", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. Srikanth Busa", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. M. Sreedevi", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. Paritala Jhansirani", designation: "VIT-AP University" },
    { role: "Certificate and ID Card Committee", name: "Dr. Popuri Srinivasa Rao", designation: "VIT-AP University" },

    { role: "Venue Management Committee: Inaugural Session & Valedictory Session", name: "Dr. Regonda Nagaraju", designation: "VIT-AP University" },
    { role: "Venue Management Committee: Inaugural Session & Valedictory Session", name: "Dr. Balaraju Ramesh", designation: "VIT-AP University" },
    { role: "Venue Management Committee: Inaugural Session & Valedictory Session", name: "Dr. T. Gayathri", designation: "VIT-AP University" },
    { role: "Venue Management Committee: Inaugural Session & Valedictory Session", name: "Dr. Venkata Rami Reddy Chirra", designation: "VIT-AP University" },
    { role: "Venue Management Committee: Inaugural Session & Valedictory Session", name: "Dr. Vikash Kumar Singh", designation: "VIT-AP University" },
    { role: "Venue Management Committee: Inaugural Session & Valedictory Session", name: "Dr. Y. UshaRani", designation: "VIT-AP University" },
    { role: "Venue Management Committee: Inaugural Session & Valedictory Session", name: "Dr. Harapriya Kar", designation: "VIT-AP University" },
    { role: "Venue Management Committee: Inaugural Session & Valedictory Session", name: "Dr. Kannaiah Chattu", designation: "VIT-AP University" },
    { role: "Venue Management Committee: Inaugural Session & Valedictory Session", name: "Dr. Koduru Hajarathaiah", designation: "VIT-AP University" },
    { role: "Venue Management Committee: Inaugural Session & Valedictory Session", name: "Dr. Palacharla Ravikumar", designation: "VIT-AP University" },
    { role: "Venue Management Committee: Inaugural Session & Valedictory Session", name: "Dr. Ramkumar D", designation: "VIT-AP University" },
    { role: "Venue Management Committee: Inaugural Session & Valedictory Session", name: "Dr. Sandipan Maiti", designation: "VIT-AP University" },

    { role: "Website Committee", name: "Dr. Naresh Sammeta", designation: "VIT-AP University" },
    { role: "Website Committee", name: "Dr. Surendra Reddy Vinta", designation: "VIT-AP University" },
    { role: "Website Committee", name: "Dr. Hari Seetha", designation: "VIT-AP University" },
    { role: "Website Committee", name: "Dr. G. Muneeswari", designation: "VIT-AP University" },
     
  ];
  return (
    <PageLayout heroTitle="Organizing Committee" headingTitle="Organizing Committee">
      <div className="overflow-x-auto">
        <table className="w-full text-[13px] sm:text-[14px] lg:text-[16px]">
          <thead>
            <tr className="bg-[#650010] text-white">
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Designation</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#E6CFCF]/40"}>
                <td className="p-3 font-semibold text-[#650010]">{m.role}</td>
                <td className="p-3 font-medium">{m.name}</td>
                <td className="p-3 text-gray-700">{m.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
