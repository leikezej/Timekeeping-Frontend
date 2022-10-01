import useGoogleSpreadsheet from 'use-google-spreadsheet';

const SomeComponent = ({}) => {
	const API_KEY = 'XXXXXXXXXXXX';
	// const shareUrl = 'https://docs.google.com/spreadsheets/d/1W5D9WvlrXvndEc0b42OsdzJTT1M-MxKVYdPEtleqRQY/edit?usp=sharing';
	const shareUrl = 'https://docs.google.com/spreadsheets/d/1NdB-05Mj1ic7kISvCGxpnaAhe6FDKq-bb8AipPbkeMk/edit?fbclid=IwAR3laVW-ixiJqR3V3Rwzc8U9NJsuoTcDrGfDLIfR-FsaK9Vy_wmpY_8AipM#gid=0';
	const { rows, isFetching } = useGoogleSpreadsheet(shareUrl, API_KEY);
	return isFetching ? (
		<Spinner />
	) : rows ? (
		<ul>
			{rows.map((row, i) => {
				return (
					<li key={i}>
						{Object.keys(row).map((key, i) => (
							<span key={i}>
								{key}: {row[key]}
								<br />
							</span>
						))}
					</li>
				);
			})}
		</ul>
	) : (
		<span>No Data</span>
	);
};