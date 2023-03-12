import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const Renderer = (props) => {
	const {
		setAttributes,
		attributes: { headingTag, headingTitle, loopData },
		context,
	} = props;

	// Check if heading block is children block of loop builder.
	if (loopData && loopData?.isInLoop && loopData?.enable ) {
		const renderedMarkup = applyFilters( `uag_render_loop_data`, '', context, props.attributes );
		if( renderedMarkup !== '' ) {
			return renderedMarkup;
		}
	}

	return (
		<RichText
			tagName={headingTag}
			placeholder={__('Write a Heading', 'ultimate-addons-for-gutenberg')}
			value={headingTitle}
			className="uagb-heading-text"
			multiline={false}
			onChange={(value) => {
				setAttributes({ headingTitle: value });
			}}
		/>
	);
};
export default Renderer;
