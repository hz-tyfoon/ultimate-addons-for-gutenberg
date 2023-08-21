import OpenAIKey from './sections/OpenAIKey';
import BrandVoice from './sections/BrandVoice';

const SpectraAISettings = () => {

	const openAIOptions = uag_react.open_ai_options || {};

	return (
		<>
			<OpenAIKey { ...{ openAIOptions } } />
			<BrandVoice { ...{ openAIOptions } } />
		</>
	);
};

export default SpectraAISettings;