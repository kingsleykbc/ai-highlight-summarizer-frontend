const path = require('path');
const { override, addWebpackModuleRule, addWebpackResolve } = require('customize-cra');

module.exports = override(
	addWebpackModuleRule({
		test: /\.tsx?$/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					compilerOptions: { noEmit: false }
				}
			}
		],
		exclude: /node_modules/
	}),
	addWebpackModuleRule({
		test: /\.css$/,
		use: ['style-loader', 'css-loader', 'postcss-loader']
	}),
	addWebpackResolve({
		extensions: ['.tsx', '.ts', '.js']
	}),
	config => {
		config.entry = './src/index.tsx';
		config.output = {
			...config.output,
			filename: 'content.js',
			path: path.join(__dirname, 'extension')
		};
		return config;
	}
);
