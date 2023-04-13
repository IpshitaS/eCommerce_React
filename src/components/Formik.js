import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Formik() {
 return (
   <div className="App">
     <center>
       <h1>Register a new account</h1>
       <Formik>
         {({ isSubmitting }) => (
           <Form>
             <Field
               type="text"
               name="fullname"
               placeholder="Enter your fullname"
             />
             <ErrorMessage name="fullname" component="div" />

             <Field
               type="email"
               name="email"
               placeholder="Enter email address"
             />
             <ErrorMessage name="email" component="div" />

             <Field type="password" name="password" />
             <ErrorMessage name="password" component="div" />

             <button type="submit" disabled={isSubmitting}>
               Submit
             </button>
           </Form>
         )}
       </Formik>
     </center>
   </div>
 );
}
export default Formik;