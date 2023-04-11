import styles from './App.module.css';
import ContextsWrapper from './contexts/ContextsWrapper';
import HighlightsList from './features/Highlights/HighlightsList/HighlightsList';
import Popup from './layout/Popup/Popup';

function App() {
	return (
		<ContextsWrapper>
			{() => (
				<div className={styles.app}>
					<Popup>
						<HighlightsList />
					</Popup>
				</div>
			)}
		</ContextsWrapper>
	);
}

export default App;
