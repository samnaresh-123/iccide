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
    "Web Intelligence and Interaction",
    "Social Networks",
    "Speech Processing",
  ];

  const dataEngineeringItems = [
    "Data Models, Semantics, Query languages",
    "Meta Data, Data Integration, and Data Interoperability",
    "Ubiquitous Data Management and Mobile Databases",
    "Data Provenance, Workflows, Scientific Data Management",
    "Indexing, Query processing and query optimization",
    "Data Visualization and Interactive Data Exploration",
    "Distributed Databases, Peer to peer Databases and Parallel Databases, Scalable Analytics",
    "Graph Data, RDF and Web Data",
    "Data Privacy and Security",
    "Data Mining, Data Warehousing",
    "Transaction Processing",
    "Semi-structured data and XML databases",
    "Distributed, parallel, Peer to Peer databases",
    "Web Data Management and Deep Web",
    "Scientific and Biological Databases and Bioinformatics",
    "Workflow, Web Services",
    "Stream processing and sensor databases",
    "Data Grids",
    "Cloud Computing and Database-as-a-Service",
    "Uncertain, Probabilistic and Approximate Databases",
    "Temporal, Spatial and Multimedia Data",
    "Big Data Analytics",
    "Hadoop Eco Systems",
  ];

  return (
    <PageLayout heroTitle="Call For Papers" headingTitle="Call For Papers">
      <div className="font-serif space-y-4">
        <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-[#650010] font-semibold pb-2">
          All accepted and registered papers will be published in Lecture Notes
          on Networks and Systems (LNNS) series of Springer.
        </p>
        <div className="font-bold text-[14px]">
          <a
            className="underline"
            href="https://www.springer.com/series/15179"
            target="_blank"
            rel="noreferrer"
          >
            https://www.springer.com/series/15179
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
        </div>
        <p className="text-[16px] sm:text-[20px] lg:text-[24px] mt-2.5 font-serif text-black font-medium pb-2">
          The topics of the conference include, but are not limited to:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
          <div>
            <h3 className="text-[20px] sm:text-[22px] text-[#650010] font-bold pb-2 border-b border-[#650010]/20 mb-3">
              Computation Intelligence
            </h3>
            <ul className="list-disc pl-6 text-[15px] sm:text-[17px] lg:text-[18px] space-y-1.5 text-gray-800">
              {computationIntelligenceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] sm:text-[22px] text-[#650010] font-bold pb-2 border-b border-[#650010]/20 mb-3">
              Data Engineering
            </h3>
            <ul className="list-disc pl-6 text-[15px] sm:text-[17px] lg:text-[18px] space-y-1.5 text-gray-800">
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
