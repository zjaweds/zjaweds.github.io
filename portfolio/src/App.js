import logo from './logo.svg';
import './App.css';
import Python from "./images/python3.png";

const App=()=> {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div className="container">
        <section className="NavigationBar">
          <div className="row" >
            <div className="col-md-12">
              <nav class="navbar navbar-expand-lg" style={{justifyContent:'center',alignItems:'center',textAlign:'center',float:'right'}}>
                {/* <a className="navbar-brand" href="#">Home</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#">Home</a>
                    <a className="nav-item nav-link active" href="#">About Me <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Projects</a>
                    <a className="nav-item nav-link" href="#">Articles</a>
                    <a className="nav-item nav-link" href="#">Contact Me</a>
                    {/* <a className="nav-item nav-link" href="#" tabindex="" aria-disabled="">Disabled</a> */}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>
        <section className="ProfileAnimation">
          <div className="row">
            <div className="col-md-3" style={{border:'red 2px solid',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
              Hello,
            </div>
            <div className="col-md-9" style={{border:'red 2px solid',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
              Users!
              <div align="right" id="ANIMATIONTABLE" width="540px" height="540px">  
                                                <div >
                                                    <img  src={{logo}} className="App-logo" alt="logo"  />
                                                </div>  
                                              <div >
                                                    <img class="JAVA" src={{logo}} />
                                                </div> 
                                                <div >
                                                    <img class="JAVASCRIPT" src={{logo}} />
                                                </div> 
                                                <div>
                                                    <img class="REACT" src={{logo}}/>
                                                </div>  
                                                <div  >
                                                    
                                                </div> 
                                                <div >
                                                    <img class="HTML"  src={{logo}}/>
                                                </div> 
                                                <div >
                                                    <img class="CSS"  src={{logo}} />
                                                </div>  
                                                <div >
                                                    <img class="ANGULAR"  src={{logo}}/>
                                                </div> 
                                                <div  >
                                                    <img class="SCHEME" src={{logo}} />
                                                </div>
                                    </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
