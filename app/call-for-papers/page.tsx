import { PageLayout } from "@/components/PageLayout";

export default function CallForPapersPage() {
  const computationIntelligenceItems = [
    "Collective Intelligence",
    "Information Retrieval and Integration",
    "Evolutionary computing",
    "Machine Learning",
    "Ant Colony Optimization",
    "Bayesian Network",
    "Computational Paradigms and Computational Complexity",
    "Rough Sets",
    "Semantic Web",
    "Cybernetics for Informatics",
    "Intelligent Transportation Systems",
    "Knowledge Representation",
    "Distributed Intelligence",
    "Fuzzy Systems",
    "Geographic Information Science (GIS)",
    "Automated Reasoning",
    "Cognitive Modeling of Agent Systems",
    "Agent Theory and Application",
    "Computational Biology",
    "Intelligent Control",
    "Intelligent e-learning/tutoring",
    "Computer Vision",
    "Logic in Intelligence",
    "Soft computing",
    "Mobile Intelligence",
    "Computational Intelligence",
    "Computational Security",
    "Cooperative Systems and Control",
    "Grey Theory",
    "Information Hiding",
    "Swarm Intelligence",
    "Hybrid Systems",
    "Intelligent Architectures",
    "Intelligent Applications",
    "Intelligent Building",
    "Smart Living Technology",
    "Natural Language Processing",
    "Optimization Techniques",
    "Pattern Recognition",
    "Image Processing",
    "Probabilistic and Uncertain Reasoning",
    "Knowledge-Based Systems",
    "Intelligent Networks",
    "Deep Learning",
    "Ubiquitous computing and its applications",
    "Smart Sensor Networks",
    "Speech Processing",
    "Web Intelligence and Interaction",
    "Social Networks",
  ];

  const dataEngineeringItems = [
    "Data Models Semantics Query languages",
    "Meta Data Data Integration and Data Interoperability",
    "Ubiquitous Data Management and Mobile Databases",
    "Data Provenance Workflows Scientific Data Management",
    "Indexing Query processing and query optimization",
    "Data Visualization and Interactive Data Exploration",
    "Distributed Databases Peer to peer Databases and Parallel Databases Scalable Analytics",
    "Graph Data RDF and Web Data",
    "Data Streams and Sensor Data",
    "Data Warehousing and OLAP",
    "Big Data Analytics",
    "Cloud Computing and Data Management",
    "Data Quality and Data Cleaning",
    "Machine Learning for Databases",
    "Spatial and Temporal Databases",
    "Data Mining",
    "Information Retrieval",
    "Knowledge Discovery",
    "Cyber Security",
    "Blockchain",
    "Internet of Things",
    "Edge Computing",
    "Healthcare Data Analytics",
    "Social Media Analytics",
  ];

  return (
    <PageLayout heroTitle="Call For Papers" headingTitle="Call For Papers">
      <div className="font-serif space-y-4">
        <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-[#650010] font-semibold pb-[8px]">
          All accepted and registered papers will be published in Lecture Notes
          on Networks and Systems (LNNS) series of Springer.
        </p>
        <span className="font-bold text-[14px]">
          <a
            className="underline"
            href="https://www.springer.com/series/15179"
            target="_blank"
            rel="noreferrer"
          >
            (https://www.springer.com/series/15179)
          </a>{" "}
          <span
            style={{
              backgroundColor: "#fff3b0",
              padding: "2px 6px",
              borderRadius: "3px",
            }}
          >
            (Confirmed by Springer)
          </span>
        </span>
        <p className="text-[16px] sm:text-[20px] lg:text-[24px] mt-[10px] font-serif text-black font-medium pb-[8px]">
          The topics of the conference include, but are not limited to:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[10px]">
          <div>
            <h3 className="text-[16px] sm:text-[20px] text-[#650010] font-medium pb-[8px]">
              Computation Intelligence
            </h3>
            <ul className="list-disc pl-[25px] text-[13px] sm:text-[15px] lg:text-[16px] space-y-1">
              {computationIntelligenceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[16px] sm:text-[20px] text-[#650010] font-medium pb-[8px]">
              Data Engineering
            </h3>
            <ul className="list-disc pl-[25px] text-[13px] sm:text-[15px] lg:text-[16px] space-y-1">
              {dataEngineeringItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
