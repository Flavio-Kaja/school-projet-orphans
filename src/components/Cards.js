import React from 'react'

const Cards = () => {
  return (
    <div  style={{ maxWidth: 1000, margin:'auto'}}>
      <div class="row margintop">
        <div class="col-md-6 col-sm-6 item">
          <div class="card item-card card-block">
          <h4 class="item-card-title text-right"><i class="material-icons">What we do</i></h4>
        <img height={200} src="https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg" alt="Photo of sunset"/>
            <h5 class="card-title  mt-3 mb-3">HELP!</h5>
            <p class="card-text">We help orphans have a smooth transition to life after orphanage.</p> 
      </div>
        </div>
        <div class="col-md-6 col-sm-6 item">
          <div class="card item-card card-block">
          <h4 class="item-card-title text-right"><i class="material-icons">What is our goal</i></h4>
        <img height={200} src="https://static.pexels.com/photos/326424/pexels-photo-326424.jpeg" alt="Photo of sunset"/>
            <h5 class="card-title  mt-3 mb-3">GOAL!</h5>
            <p class="card-text">Make life better for every orphan</p> 
      </div>
        </div>    
      </div>
      
    </div>
    
  )
}

export default Cards