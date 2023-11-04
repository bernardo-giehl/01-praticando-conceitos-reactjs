import { Header } from "./components/Header";
import { ToDo } from "./components/ToDo";
import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <>
      <Header />
      <div className={styles.content}>
          <ToDo />
      </div>
    </>
  )
}

export default App
