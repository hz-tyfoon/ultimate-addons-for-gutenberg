// Import block dependencies and components
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useLayoutEffect, memo } from '@wordpress/element';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	// Setup the attributes
	const {
		attributes: { block_id, icon, noteTitle, noticeContent, noticeDismiss, noticeAlignment, headingTag },
		setAttributes,
		className,
		deviceType
	} = props;

	let imageIconHtml = '';

	if ( noticeDismiss ) {
		imageIconHtml = renderSVG( icon, setAttributes );
	}

	return (
		<div
			className={ classnames(
				className,
				`${ noticeDismiss }`,
				`uagb-inline_notice__align-${ noticeAlignment }`,
				`uagb-block-${ block_id }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`
			) }
		>
			<div role="tablist">
				<span role="tab">{ imageIconHtml }</span>
			</div>
			<RichText
				tagName={ headingTag }
				placeholder={ __( 'Notice Title', 'ultimate-addons-for-gutenberg' ) }
				keepPlaceholderOnFocus
				value={ noteTitle }
				className="uagb-notice-title"
				onChange={ ( value ) => setAttributes( { noteTitle: value } ) }
			/>
			<RichText
				tagName="div"
				placeholder={ __( 'Add Content…', 'ultimate-addons-for-gutenberg' ) }
				value={ noticeContent }
				className="uagb-notice-text"
				onChange={ ( value ) => setAttributes( { noticeContent: value } ) }
			/>
		</div>
	);
};
export default memo( Render );
