import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';

const Renderer = (props) => {
	console.log('Renderer props', props);
	const {
		setAttributes,
		attributes: { headingTag, headingTitle, loopData },
		context,
	} = props;

	// Check if heading block is children block of loop builder.
	if (loopData && loopData?.isInLoop) {
		const { postId, postType } = context;
		const getEntityData = useEntityProp(
			'postType',
			postType,
			loopData.type,
			postId
		);
		console.log('getEntityData', getEntityData);
		const [rawTitle = '', fullTitle] = getEntityData;

		return (
			<RichText.Content
				tagName={headingTag}
				placeholder={__(
					'Write a Heading',
					'ultimate-addons-for-gutenberg'
				)}
				value={rawTitle}
				className="uagb-heading-text"
				multiline={false}
			/>
		);
		// return (
		// 	<RichText.Content
		// 		tagName={headingTag}
		// 		placeholder={__(
		// 			'Write a Heading',
		// 			'ultimate-addons-for-gutenberg'
		// 		)}
		// 		value={rawTitle}
		// 		className="uagb-heading-text"
		// 		multiline={false}
		// 	/>
		// );
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
