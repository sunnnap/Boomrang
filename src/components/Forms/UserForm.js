import { useState } from "react";
import Modal from "react-modal";
import { FormikProvider, useFormik } from "formik";
import {useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import './Useform.css'
const UserForm = () => {
  const [login, setLogin] = useState(true)
  const [cookies,setCookies,removeCookies]=useCookies()
  const [item ,setItem]=useState()
  const navigation = useNavigate()
  function validUser(FormCollection) {
    var errors = {};
    if (FormCollection.name == "") {
        errors.name = "name required";
      } else if (FormCollection.name.length < 5) {
      errors.name = "name too short";
    } else if (FormCollection.name.length > 10) {
      errors.name = "name too long";
    }
    if (FormCollection.age == '') {
      errors.age = "type age between 17 to 40";
    } else if (FormCollection.age < 17) {
      errors.age = "type age between 17 to 40";
    } else if (FormCollection.age > 40) {
      errors.age = "type age between 17 to 40";
    }
    if (FormCollection.password == '') {
      errors.password = "password required";
    } else if (FormCollection.password > 10) {
      errors.password = "please write hard password";
    }

    return errors;
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
      password: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values),
        navigation("/"),  localStorage.setItem("formik",JSON.stringify(values)))
       

    },
    validate: validUser
  })

  function onclose() {
    if (login === true) {
      setLogin(false);
      navigation("/")
    }
  }
  return (
    <div className="container fixed-top">
      <div className="row">


        <Modal isOpen={login} className=" ">

          <form onSubmit={formik.handleSubmit}  className="col-12 col-md-4 col-sm-6 modal-xl">
            <h2 className="text-info">REGISTER HERE</h2>
            <dl className="m-4 p-2">
              
              <dd clas><input name="name" type="text" placeholder="Enter name" onChange={formik.handleChange} value={formik.values.name} /></dd>
              <dd className="text-danger">{formik.errors.name}</dd>
               
              <dd><input name="age" type="age" placeholder="Enter  age" onChange={formik.handleChange} value={formik.values.age} /></dd>
              <dd className="text-danger">{formik.errors.age}</dd>
              
              <dd><input name="password" type="password" placeholder="Enter password" onChange={formik.handleChange} value={formik.values.password} /></dd>
              <dd className="text-danger">{formik.errors.password}</dd>
           
            </dl>
           <div className="ms-4">
             <button className="btn btn-info  me-2 ">REGISTER</button>
             <button className="btn btn-danger" onClick={onclose}>close</button>
           </div>
          </form>
        </Modal>
      </div>
    </div>
  )
}
export default UserForm;


 
//  import Modal from 'react-modal'
// import React, { useState } from "react";

// const UserForm = () => {
//   const [login ,setLogin]=useState(true)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = event => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     localStorage.setItem("formData", JSON.stringify(formData));
//   };

//   React.useEffect(() => {
//     const storedFormData = localStorage.getItem("formData");
//     if (storedFormData) {
//       setFormData(JSON.parse(storedFormData));
//     }
//   }, []);

//   return (
//   <div className='container-fluid'>
// <div className='row'>
 
//        <form onSubmit={handleSubmit} className="modal-xl">
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//          />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <textarea
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//    </div>
//   </div>
//   );
// };

// export default  UserForm;