import styles from './App.module.css';
import Popup from './components/layout/Popup/Popup';

function App() {
	return (
		<div className={styles.app}>
			<Popup>Item</Popup>
		</div>
	);
}

export default App;
