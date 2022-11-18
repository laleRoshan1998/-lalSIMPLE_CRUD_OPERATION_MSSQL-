const sql = require('mssql')
const dbconfiguration = require('./Dbconnection')

async function GetAllProducts(req, res) {
  try{
    let pool = await sql.connect(dbconfiguration)    
    let data = await pool.request().query("SELECT EmployeeEsmsys.ID,EmployeeEsmsys.Ename,EmployeeEsmsys.EmoNumber,EmployeeEsmsys.EEmailID,EmployeeCity.CityName,EmployeeState.EstateName,EmployeeCountry.EcountryName FROM EmployeeEsmsys INNER JOIN EmployeeCity ON EmployeeEsmsys.EcityID = EmployeeCity.CityID INNER JOIN EmployeeState ON EmployeeCity.StateID  = EmployeeState.EStateID INNER JOIN EmployeeCountry ON EmployeeState.EcountryID = EmployeeCountry.CountryID ")

    res.send({
      "status": "Successfull",
      "data": data
    })
    console.log('Show Data Successfully..........')
  }
  catch (err){
    console.log(err);
    res.send(err)
  }
  sql.close()
}

async  function addProduct(req, res) {
  // let params = req.body.id
  // console.log(params);
  try {
      let pool = await sql.connect(dbconfiguration)    
      const add_new_data = await pool.request()
      // .input("id",req.body.ID)
      .input("EEmailID",req.body.EEmailID)
      .input("EcityID",req.body.EcityID)
      .input("Ename",req.body.Ename)
      .input("EmoNumber",req.body.EmoNumber)
      .execute("addProduct000");
      
      res.send({
        "status": "Successfull",
        "data": req.body
      })
      console.log('Add New Data Successfully............');
    }
    catch (error) {
     console.log(error);
     res.send(error)
    }
    sql.close()
} 

async function updateProduct(req,res) {
    const id = req.body
    // console.log(id);
    // res.send(id)
    try {
      let pool = await sql.connect(dbconfiguration)    
      const data = await pool.request()
      .input("id",req.body.ID)
      .input("EEmailID",req.body.EEmailID)
      .input("EcityID",req.body.EcityID) 
      .input("Ename",req.body.Ename)
      .input("EmoNumber",req.body.EmoNumber)
      .execute("updateProduct0000") 
      console.log(data);
      res.send({
        "status": 'SucceessFull',
        "data": req.body
      });
      console.log('Data Update Successfully...........');
    }
    catch (error) {
    console.log(error);
    res.send(error)
    }
    sql.close()

}

async function deleteProduct(req, res) {
    const id = req.params
    // console.log(id);
    try{
      let pool = await sql.connect(dbconfiguration)    
      let data = await pool.request()
      .input("id",req.params.id)
      .execute("deleteProduct");

      res.send({
        "status": "Successfull",
        "message": "Data Deleted successfully..."
      })
      console.log('Data Dalete Successfully...........');
    }
    catch (err){
      console.log(err);
      res.send(err)
    }
    sql.close()
}

module.exports = {GetAllProducts,addProduct,updateProduct,deleteProduct}
