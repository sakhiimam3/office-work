import '../src/scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Config/Routing';
import DataProvider from './Components/UseContext';
function App() {
  return (
    <>   
    <DataProvider>
      <Routing />
    </DataProvider>
 
    </>
  );
}

export default App;
