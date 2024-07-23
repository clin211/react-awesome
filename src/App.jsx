import FileUploadForm from './components/FileUploadForm'
import MixedForm from './components/MixedForm'
import RegistrationForm from './components/RegistrationForm'
import RegistrationFormUncontrolled from './components/RegistrationFormUncontrolled'

function App () {

  return (
    <div>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-semibold mb-6">Registration Form</h1>
        <RegistrationForm />
      </div>
      <h1 className="text-3xl font-semibold mb-6">Registration Form Uncontrolled</h1>
      <RegistrationFormUncontrolled />
      <MixedForm />
      <FileUploadForm />
    </div>
  )
}

export default App
