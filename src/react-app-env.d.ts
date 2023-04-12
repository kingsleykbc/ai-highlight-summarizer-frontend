/// <reference types="react-scripts" />
/// <reference types="chrome" />

declare module '*.module.css' {
	const classes: { [key: string]: string };
	export default classes;
}
