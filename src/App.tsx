import styles from './App.module.css';
import ContextsWrapper from './contexts/ContextsWrapper';
import LoginSignup from './features/Auth/LoginSignup/LoginSignup';
import HighlightsList from './features/Highlights/HighlightsList/HighlightsList';
import SummaryTooltip from './features/Highlights/SummaryTooltip/SummaryTooltip';
import Popup from './layout/Popup/Popup';

function App() {
	return (
		<ContextsWrapper>
			{({ authState }) => (
				<div className={styles.app}>
					<Popup>{authState.user ? <HighlightsList /> : <LoginSignup />}</Popup>
					<div id='portal' />
					<SummaryTooltip />
				</div>
			)}
		</ContextsWrapper>
	);
}

export default App;
