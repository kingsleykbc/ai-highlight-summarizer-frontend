import styles from './App.module.css';
import ContextsWrapper from './contexts/ContextsWrapper';
import HighlightsList from './features/Highlights/HighlightsList/HighlightsList';
import SummaryTooltip from './features/Highlights/SummaryTooltip/SummaryTooltip';
import Popup from './layout/Popup/Popup';

function App() {
	return (
		<ContextsWrapper>
			{() => (
				<div className={styles.app}>
					<Popup>
						<HighlightsList />
					</Popup>
					<div id='portal' />
					<SummaryTooltip />
				</div>
			)}
		</ContextsWrapper>
	);
}

export default App;
