import MainLayout from '@layouts/MainLayout'
import DiagnosticTool from '@views/DiagnosticTool'
import './App.css'
function App() {
  return (
    <div className="App">
      <MainLayout>
        <DiagnosticTool />
      </MainLayout>
    </div>
  );
}

export default App;
