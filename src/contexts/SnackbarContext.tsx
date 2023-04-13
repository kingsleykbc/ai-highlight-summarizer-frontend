import { createContext, useState, useContext, ReactNode } from 'react';

type SnackbarProps = {
	message: string;
	duration?: number;
};

export type SnackbarContextType = {
	showSnackbar: (props: SnackbarProps) => void;
};

export const SnackbarContext = createContext<SnackbarContextType>({
	showSnackbar: () => {}
});

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>({ message: '' });

	const showSnackbar = (props: SnackbarProps) => {
		setSnackbarOpen(true);
		setSnackbarProps(props);
		setTimeout(() => {
			setSnackbarOpen(false);
		}, props.duration || 2000);
	};

	const value = {
		showSnackbar
	};

	return (
		<SnackbarContext.Provider value={value}>
			{children}
			{snackbarOpen && (
				<div className='fixed bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-lg px-4 text-white bg-[#52cc9f] font-bold z-[1000]'>
					<p>{snackbarProps.message}</p>
				</div>
			)}
		</SnackbarContext.Provider>
	);
};
