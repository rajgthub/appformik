# appformik
- Appformik is for me to learn basics of integrating Formik with React and Yup for validation. 
- Create-react-app has been used to create the boilerplate of the project.

# Framework and Modules 
1. react && react-dom
2. formik
3. yup  
4. reactstrap and bootstrap
#### $yarn add formik yup

# To get started
- clone the repo using: $git clone <url>
- Navigate to the project folder <appformik> and in the terminal use:
  - a $yarn install OR $npm install // to install all the dependencies for the project
  -  $yarn start OR $npm start // run the development server

# Validation 
- https://github.com/jquense/yup
- Crete validation schema for each each individual field using yup
- Render errors and use touched to check a field visited or not
  - touched.email && errors.email && <p>errors.email</p>
- able to custormise the error messages
    - string().email('email not valid').required('email is required')
    - string().min(6, 'must be more than 6 characters').required('should provide')
- handling submission: formikBag-> setErrors, resetForm and setSubmitting
    - handleSubmit(values, {setErrors, resetForm and setSubmitting}) {setErrors({email:"message"})}
    - is passed to the component App = ({isSubmitting})=>{ <button disabled={isSubmitting}> submit </button>}; we need to tell formik to set back to false
    - handleSubmit(){ setSubmitting(false)}


# License
 MIT - you can do everything and use anywhere as you wish.
# Created by
 ### Raj