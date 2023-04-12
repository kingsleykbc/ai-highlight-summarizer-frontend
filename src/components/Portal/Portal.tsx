import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
	children: ReactNode;
	portalID?: string;
}

const Portal = ({ children, portalID = 'portal' }: PortalProps) => {
	const portalRoot = document.getElementById(portalID) as HTMLElement;
	const container = document.createElement('div');

	useEffect(() => {
		portalRoot.appendChild(container);

		return () => {
			portalRoot.removeChild(container);
		};
	}, [container, portalRoot]);

	return ReactDOM.createPortal(children, container);
};

export default Portal;
