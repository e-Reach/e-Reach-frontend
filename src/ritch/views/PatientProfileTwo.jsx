import React, { useEffect, useState } from "react";
import '../styles/PatientProfile.css'
import maleImage from '../patient-icons/patient-male.svg'
import PatientNavBar from "./PatientNavBar";
import UploadWidget from "../../cloudinary/uploadWidget";
import '../styles/PatientProfileTwo.css'
import axios from "axios";



const PatientProfileTwo= ({pin}) =>{
    const [patientData, setPatientData] = useState({
        firstName: "",
        lastName: "",
        nin: "",
        email: "",
        phoneNumber: "",
        houseNumber: "",
        streetName: "",
        state: "",
        country: "",
        gender: "",
        patientIdentificationNumber : "",
      });

      useEffect(()=>{
          try{
              axios.get("https://e-reach-prod.up.railway.app/api/v1/patient/get"+"/"+pin)
                    .then((response) => {
                        console.log("response is:: ", response)
                        console.log(response.data)
                        setPatientData(response.data)
                    }).catch((error) => {
                        console.error(error)
                    })
          }catch(error){

          }
      }, [])


     const openUploadWidget = () => {
       
     }
    
      return (
        <div className="patient-profile-two-main-con">
          <div className="patient-profile-two-inner-con">
           
           
    
            <div className="patient-two-biodata">
            <div className="patient-two-title">
              <h3>Bio Data</h3>
            </div>
            <div className="patient-two-profile-mid-con">
              
            <div className="patient-two-profile-image">
                {patientData.gender == "male" ? (
                  <img src={openUploadWidget} alt="Patient" />
                ) : (
                  <img src={maleImage} alt="Patient" />
                )}

                <div >
                  <form>
                    <button className="patient-profile-two-upload-btn">Upload</button>
                  </form>
                  
                </div>
                <openUploadWidget/>
              </div>
    
              <div className="patient-two-biodata-input">

              <div className="patient-two-biodata-field">
                  <label >P.I.N :</label>
                  <span>{patientData.patientIdentificationNumber}</span>
                </div>

                <div className="patient-two-biodata-field">
                  <label >First Name :</label>
                  <span>{patientData.firstName}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>Last Name :</label>
                  <span>{patientData.lastName}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>N.I.N :</label>
                  <span>{patientData.nin}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>Email :</label>
                  <span>{patientData.email}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>Phone Number :</label>
                  <span>{patientData.phoneNumber}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>House Number :</label>
                  <span>{patientData.houseNumber}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>Street Name :</label>
                  <span>{patientData.streetName}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>State :</label>
                  <span>{patientData.state}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>Country :</label>
                  <span>{patientData.country}</span>
                </div>
              </div>

            </div>
            </div>
          </div>
        </div>
      );
    };
    

export default PatientProfileTwo;