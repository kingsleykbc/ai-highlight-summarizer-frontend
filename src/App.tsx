import styles from './App.module.css';
import HighlightsList from './features/Highlights/HighlightsList/HighlightsList';
import Popup from './layout/Popup/Popup';

function App() {
	return (
		<div className={styles.app}>
			<Popup>
				<HighlightsList />
			</Popup>
		</div>
	);
}

export default App;
