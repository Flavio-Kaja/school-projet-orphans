import React from 'react'

const DashboardBusiness = () => {

  const businesses=JSON.parse(localStorage.getItem('businesses'))

  return (
    <div>

      <h1 style={{textAlign:'center', marginTop:40}} ><span >Businesses</span></h1>
    
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Nipt</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Birra Stela</td>
      <td>M12324023H</td>
      <td>contact@birrastela.co</td>
      <td>Rruga Pavaresia</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Lufra</td>
      <td>F244393434F</td>
      <td>contact@lufra.co</td>
      <td>Rruga e Deshmoreve</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Tepelena</td>
      <td>G12394823H</td>
      <td>contact@tepelena.co</td>
      <td>Rruga Dituria</td>
    </tr>

{businesses?.map((bu)=>{
return <tr>
<th scope="row">4</th>
<td>{bu.name}</td>
<td>{bu.nipt}</td>
<td>{bu.email}</td>
<td>{bu.address}</td>
</tr>

})}




  </tbody>
</table>
    </div>
  )
}

export default DashboardBusiness