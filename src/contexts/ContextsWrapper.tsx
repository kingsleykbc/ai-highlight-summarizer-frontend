import { ReactNode } from 'react';
import { AuthContext, AuthContextType, AuthProvider } from './AuthContext';
import { HighlightsContext, HighlightsContextType, HighlightsProvider } from './HighlightsContext';
import { SnackbarContext, SnackbarContextType, SnackbarProvider } from './SnackbarContext';

export interface ContextsWrapperProps {
	children: (state: {
		authState: AuthContextType;
		highlightsState: HighlightsContextType;
		snackbarState: SnackbarContextType;
	}) => ReactNode;
}

const ContextsWrapper = ({ children }: ContextsWrapperProps) => {
	return (
		<SnackbarProvider>
			<SnackbarContext.Consumer>
				{snackbarState => (
					<AuthProvider>
						<AuthContext.Consumer>
							{authState => (
								<HighlightsProvider authState={authState}>
									<HighlightsContext.Consumer>
										{highlightsState => children({ authState, highlightsState, snackbarState })}
									</HighlightsContext.Consumer>
								</HighlightsProvider>
							)}
						</AuthContext.Consumer>
					</AuthProvider>
				)}
			</SnackbarContext.Consumer>
		</SnackbarProvider>
	);
};

export default ContextsWrapper;
