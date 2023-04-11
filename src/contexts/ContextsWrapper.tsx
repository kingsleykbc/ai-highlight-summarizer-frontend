import { ReactNode } from 'react';
import { AuthContext, AuthContextType, AuthProvider } from './AuthContext';
import { HighlightsContext, HighlightsContextType, HighlightsProvider } from './HighlightsContext';

export interface ContextsWrapperProps {
	children: (state: { authState: AuthContextType; highlightsState: HighlightsContextType }) => ReactNode;
}

const ContextsWrapper = ({ children }: ContextsWrapperProps) => {
	return (
		<AuthProvider>
			<AuthContext.Consumer>
				{authState => (
					<HighlightsProvider authState={authState}>
						<HighlightsContext.Consumer>{highlightsState => children({ authState, highlightsState })}</HighlightsContext.Consumer>
					</HighlightsProvider>
				)}
			</AuthContext.Consumer>
		</AuthProvider>
	);
};

export default ContextsWrapper;
