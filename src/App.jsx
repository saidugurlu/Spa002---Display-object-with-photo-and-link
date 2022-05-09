import "./App.css";

const companys = [
  {
    name: "Microsoft Corporation",
    numberOfEmployees: 182.268,
    headquarters: "Redmond, Washington, USA",
    logo: "microsoft-logo.png",
    homepage: "https://www.microsoft.com",
  },
  {
    name: "IBM",
    numberOfEmployees: 282.1,
    headquarters: " Armonk, New York, USA",
    logo: "ibm-logo.png",
    homepage: "https://www.ibm.com",
  },
  {
    name: "Accenture",
    numberOfEmployees: 699.0,
    headquarters: "Dublin, Ireland",
    logo: "accenture-logo.png",
    homepage: "https://www.accenture.com",
  },
  {
    name: "Oracle Corporation",
    numberOfEmployees: 132.365,
    headquarters: "Austin, Texas, USA",
    logo: "oracle-logo.png",
    homepage: "https://www.oracle.com",
  },
  {
    name: "SAP",
    numberOfEmployees: 107.415,
    headquarters: "Walldorf, Baden-Württemberg, Germany",
    logo: "microsoft-logo.png",
    homepage: "https://www.sap.com",
  },
];

function App() {
  return (
    <div className="App">
      <div className="companys">
        <h2>Top 10 IT Companies in the World</h2>
        <ul>
          {companys.map((company, index) => {
            return (
              <li key={index}>
                <a href={company.homepage}>
                  <img
                    className="companyLogo"
                    src={`/images/${company.logo}`}
                    alt="the logo of company"
                  />
                </a>
               <div className="name">{company.name}</div>
                <div className="numberOfEmployees">
                  Employees: {company.numberOfEmployees}
                </div>
                <div className="headquarters">
                  Headquarters: {company.headquarters}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
