const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = async (phase, {defaultConfig}) => {
	/** @type {import('next').NextConfig} */

	const defaultConfigs = {
		reactStrictMode: true,

		// Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
		skipTrailingSlashRedirect: true,

		// Optional: Change the output directory `out` -> `dist`
		// distDir: 'dist',

		swcMinify: true,
	};

	// PRODUCAO OU HOMOLOGACAO
	if (phase !== PHASE_DEVELOPMENT_SERVER) {
		return {
			...defaultConfigs,
			// Exportação estatica:
			output: 'export',
			// Exportação estática não permite a utilização do otimizador
			images: {
				unoptimized: true,
			},
		};
	}

	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			...defaultConfigs,
		};
	}

	return {
		...defaultConfigs,
	};
};
