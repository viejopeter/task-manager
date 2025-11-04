import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import TaskProvider from './context/TaskContext'



function App() {
  
  return (
    <div className="app-container">
      <Header />
        <main>
          <TaskProvider>
            <AppRoutes />
          </TaskProvider>
        </main>
      <Footer />
    </div>
  )
}

export default App
