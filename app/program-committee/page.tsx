import { PageLayout } from "@/components/PageLayout";

export default function Page() {
  const members = [
    { name: "Dr. Jerzy Pejas", affiliation: "ZUT, Poland" },
    { name: "Dr. Mauro Conti", affiliation: "University of Padua, Italy" },
    { name: "Dr. Gongzhu Hu", affiliation: "Central Michigan University, USA" },
    { name: "Dr. Bidyut Gupta", affiliation: "Southern Illinois University, USA" },
    { name: "Dr. Takaaki Goto", affiliation: "Ryutsu Keizai University, Japan" },
    { name: "Dr. Raul Santos-Rodriguez", affiliation: "University of Bristol, UK" },
    { name: "Dr. Shushma Patel", affiliation: "London South Bank University, London, UK" },
    { name: "Dr. Dilip Patel", affiliation: "London South Bank University, London, UK" },
    { name: "Dr. Richard Bush", affiliation: "Baker College, USA" },
    { name: "Dr. Mohammad Yahya", affiliation: "King Khalid University, Saudi Arabia" },
    { name: "Dr. Priyadarsi Nanda", affiliation: "University of Technology, Sydney, Australia" },
    { name: "Dr. K.V. Kadambari", affiliation: "National Institute of Technology, Warangal, India" },
    { name: "Dr. G. Rammurthy", affiliation: "IIIT, Hyderabad, India" },
    { name: "Dr. E.V. Prasad", affiliation: "Gayathri Vidya Parishad, Visakhapatnam, India" },
    { name: "Dr. A. Govardhan", affiliation: "JNT University, Hyderabad, India" },
    { name: "Dr. Kavita Agarwal", affiliation: "Integral University, Lucknow" },
    { name: "Dr. Shish Ahmad", affiliation: "Integral University, Lucknow" },
    { name: "Dr. Yahia Sabri Mustafa Al-Halabi", affiliation: "PSUT" },
    { name: "Dr. Mohammad Al-Shamri", affiliation: "King Khalid University" },
    { name: "Dr. Andrea Albarelli", affiliation: "Department of CS, University Ca' Foscari in Venice" },
    { name: "Dr. Rashid Ali", affiliation: "Aligarh Muslim University" },
    { name: "Dr. Annappa B.", affiliation: "National Institute of Technology Karnataka, Surathkal" },
    { name: "Dr. Debdutta Barman Roy", affiliation: "Calcutta Institute of Engineering and Management" },
    { name: "Dr. Debotosh Bhattacharjee", affiliation: "Jadavpur University" },
    { name: "Dr. Bhogeswar Borah", affiliation: "Tezpur University" },
    { name: "Dr. Monowar Bhuyan", affiliation: "Umea University, Sweden" },
    { name: "Dr. Rituparna Chaki", affiliation: "West Bengal University of Technology" },
    { name: "Dr. Samiran Chattopadhyay", affiliation: "Jadavpur University" },
    { name: "Dr. Sankhayan Choudhury", affiliation: "University of Calcutta" },
    { name: "Dr. Ranjan Dasgupta", affiliation: "Tata Consultancy Services Limited" },
    { name: "Dr. Sushil Kumar Dohare", affiliation: "Jawaharlal Nehru University, Delhi" },
    { name: "Dr. Asif Ekbal", affiliation: "Indian Institute of Technology Patna" },
    { name: "Dr. Faten F. Kharbat", affiliation: "Al Ain University of Science and Technology, Abu Dhabi" },
    { name: "Dr. Rudolf Fleischer", affiliation: "Fudan University" },
    { name: "Dr. B. Eswara Reddy", affiliation: "JNTUA College of Engineering Kalikiri" },
    { name: "Dr. Kumaravelan G.", affiliation: "Pondicherry University, Karaikal" },
    { name: "Dr. Mallikarjna Rao G.", affiliation: "RCI, DRDO, Hyderabad" },
    { name: "Dr. Venu Govindaraju", affiliation: "State University of Buffalo, New York" },
    { name: "Dr. Sagar Gurram", affiliation: "Alghurair University, Dubai" },
    { name: "Dr. D.S. Guru", affiliation: "University of Mysore" },
    { name: "Dr. Pamidi Srinivasulu", affiliation: "Swarnandhra College of Engineering and Technology, India" },
    { name: "Dr. Raju Halder", affiliation: "Indian Institute of Technology Patna" },
    { name: "Dr. Meena Jha", affiliation: "CQ University" },
    { name: "Dr. Sanjay Jha", affiliation: "Central Queensland University, Sydney, Australia" },
    { name: "Dr. Sudan Jha", affiliation: "Kalinga Institute of Industrial Technology University, Bhubhaneswar" },
    { name: "Dr. Sukhendu Kanrar", affiliation: "University of Calcutta" },
    { name: "Dr. Raees Ahmad Khan", affiliation: "Babasaheb Bhimrao Ambedkar University, Lucknow" },
    { name: "Dr. Chawngsangpuii Khiangte", affiliation: "Mizoram University" },
    { name: "Dr. Andrea Marin", affiliation: "University of Venice, Italy" },
    { name: "Dr. Pinaki Mitra", affiliation: "Indian Institute of Technology Guwahati" },
    { name: "Dr. M. Hamdan Mohammad", affiliation: "Yarmouk University, Irbid, Jordan" },
    { name: "Dr. Khanum Mohammadi", affiliation: "Integral University, Lucknow" },
    { name: "Dr. Ghose Mrinal K.", affiliation: "Sikkim Manipal Institute of Technology" },
    { name: "Dr. H.S. Nagendra Swamy", affiliation: "University of Mysore" },
    { name: "Dr. Ram Mohan Rao Kovvur", affiliation: "Vasavi College of Engineering, Hyderabad" },
    { name: "Mr. Venkateswarlu Chennareddy", affiliation: "Apple, USA" },
    { name: "Dr. Prem Nath", affiliation: "Mizoram University" },
    { name: "Dr. Ngoc Tu Nguyen", affiliation: "Missouri University of Science and Technology" },
    { name: "Dr. Sandhya P.", affiliation: "Visvesvaraya Technological University, Mysore" },
    { name: "Dr. Shanthi Bala P.", affiliation: "Pondicherry University, Karaikal" },
    { name: "Dr. V. Valli Kumari", affiliation: "Andhra University, Visakhapatnam" },
    { name: "Dr. Carla Piazza", affiliation: "University di Udine" },
    { name: "Dr. Piotr Porwik", affiliation: "University of Silesia" },
    { name: "Dr. Partha Pratim Ray", affiliation: "Sikkim University" },
    { name: "Dr. SRN Reddy", affiliation: "Indira Gandhi Delhi Technical University for Women, Delhi" },
    { name: "Dr. Khalid Saeed", affiliation: "Bialystok University, Bialystok, Poland" },
    { name: "Dr. Bidyutbiman Sarkar", affiliation: "Techno India College of Technology, Kolkata" },
    { name: "Dr. Vipin Saxena", affiliation: "Babasaheb Bhimrao Ambedkar University Lucknow" },
    { name: "Dr. Soumya Sen", affiliation: "University of Calcutta" },
    { name: "Dr. Sabnam Sengupta", affiliation: "Department of Computer Science, Jadavpur University, Kolkata" },
    { name: "Dr. Utpal Sharma", affiliation: "Tezpur University, Assam" },
    { name: "Dr. Birmohan Singh", affiliation: "Sant Longowal Institute of Engineering and Technology (DU), Longowal, Punjab" },
    { name: "Dr. Jyoti Prakash Singh", affiliation: "National Institute of Technology Patna" },
    { name: "Dr. Karan Singh", affiliation: "Jawaharlal Nehru University, Delhi" },
    { name: "Dr. Pradeep Kumar Singh", affiliation: "Jaypee University of Information Technology" },
    { name: "Dr. Noor Mahammad S.K.", affiliation: "Indian IIIT-DM Kancheepuram, Tamil Nadu" },
    { name: "Dr. T. Sobha Rani", affiliation: "University of Hyderabad" },
    { name: "Dr. D.V.L.N. Somayajulu", affiliation: "National Institute of Technology, Warangal" },
    { name: "Dr. Ramesh Babu Battula", affiliation: "Malaviya National Institute of Technology, Jaipur" },
    { name: "Dr. Umapathy Venugopal", affiliation: "Central Queensland University, Sydney, Australia" },
    { name: "Dr. Veeraganesh Yalla", affiliation: "Faraday Future, Los Angeles" },
    { name: "Dr. Ping Yu", affiliation: "University of Wollongong, Australia" },
    { name: "Dr. Giuseppe Difatta", affiliation: "University of Reading, London" },
    { name: "Mr. Sriram Rajamani", affiliation: "Microsoft Research Lab, India" },
    { name: "Dr. Sk. Pande", affiliation: "MAHE, Dubai" },
    { name: "Dr. Preethi Ananthachari", affiliation: "Woosong University, South Korea" },
    { name: "Prof. Serestina Viriri", affiliation: "University of KwaZulu-Natal, South Africa" },
    { name: "Dr. Biswajit Biswal", affiliation: "South Carolina State University, USA" },
    { name: "Dr. Alakananda Mitra", affiliation: "University of Nebraska-Lincoln, USA" },
    { name: "Dr. Selvakumar Manickam", affiliation: "Universiti Sains Malaysia, Malaysia" },
    { name: "Dr. Serhan Yeşilköy", affiliation: "USDA-ARS (Adaptive Cropping Systems Laboratory), USA" },
    { name: "Dr. Pavan Kumar", affiliation: "IIIT-Dharwad, India" },
    { name: "Dr. Priyanka Kokil", affiliation: "IIITDM, India" },
  ];

  return (
    <PageLayout heroTitle="Program Committee" headingTitle="Program Committee">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#650010] mb-4">
          Technical Program Committee
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[13px] sm:text-[14px] lg:text-[16px]">
          <thead>
            <tr className="bg-[#650010] text-white">
              <th className="p-3 text-left w-12 sm:w-16">#</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Affiliation</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#E6CFCF]/40"}>
                <td className="p-3 font-semibold text-gray-500">{i + 1}</td>
                <td className="p-3 font-medium text-gray-900">{m.name}</td>
                <td className="p-3 text-gray-700">{m.affiliation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
