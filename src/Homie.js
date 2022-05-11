import React from "react";
import { Link } from "react-router-dom";

const Homie = () => {
  return (
    <div>
      <nav>
        <ul className="list">

          <div>LOGO</div>
          <div>
          <li>Home</li>

          <li>About us</li>
          <li>Contact</li>
          <li>
            <Link to="/sign-in">Login</Link>
          </li></div>
        </ul>
      </nav>


      <div>


        <img style={{width:1000}} src={require("./orphan.jpeg")}/>
      </div>

      <div className="container" style={{paddingTop:100}}>
  <div className="row">
    <div className="col-sm">
    <div class="jumbotron">
  <h1 class="display-4">News</h1>
  <p class="lead">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <hr class="my-4"/>
  <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
    </div>
    <div className="col-sm">
    <div class="jumbotron">
  <h1 class="display-4">News</h1>
  <p class="lead">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <hr class="my-4"/>
  <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
    </div>
 
  </div>
  
</div>
<div className="container" style={{paddingTop:100}}>
  <div className="row">
    <div className="col-sm">
    <div class="jumbotron">
  <h1 class="display-4">News</h1>
  <p class="lead">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
  <hr class="my-4"/>
  <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
    </div>
    <div className="col-sm">
    <div class="jumbotron">
  <h1 class="display-4">News</h1>
  <p class="lead">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <hr class="my-4"/>
  <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
    </div>
 
  </div>
  
</div>
    </div>
  );
};

export default Homie;
