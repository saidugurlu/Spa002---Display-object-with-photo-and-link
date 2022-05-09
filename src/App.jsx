import "./App.css";
const company = [
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
          <div className="company">
              <div className="logo">
                  <a href={company.homepage}>
                      <img
                          src="/images/googleLogo.png"
                          alt="the logo of Google"
                      />
                  </a>
              </div>
              <div className="info">
                  <div className="name">Name: {company.name}</div>
                  <div className="numberOfEmployees">
                      Employees: {company.numberOfEmployees}
                  </div>
                  <div className="headquarters">
                      Headquarters: {company.headquarters}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
