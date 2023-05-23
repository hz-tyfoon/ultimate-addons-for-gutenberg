import classnames from 'classnames';
import TableOfContents from './toc';
import { useEffect, useLayoutEffect, memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import { RichText } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const { headers } = props;
	props = props.parentProps;
	const blockName = props.name.replace( 'uagb/', '' );
	const { attributes, setAttributes, className, deviceType } = props;

	const {
		classMigrate,
		align,
		makeCollapsible,
		initialCollapse,
		icon,
		tColumnsDesktop,
		mappingHeaders,
		headingTitle,
		separatorStyle,
	} = attributes;

	useEffect( () => {
		if ( UAGBTableOfContents ) {
			const baseSelector = classMigrate ? '.uagb-block-' : '#uagb-toc-';
			const selector = baseSelector + props.clientId.substr( 0, 8 );
			UAGBTableOfContents.init( selector );
		}
	}, [ makeCollapsible ] );

	let iconHtml = '';

	if ( makeCollapsible && icon ) {
		iconHtml = renderSVG( icon, setAttributes );
	}

	return (
		<div
			className={ classnames(
				className,
				`uagb-toc__align-${ align }`,
				`uagb-toc__columns-${ getFallbackNumber( tColumnsDesktop, 'tColumnsDesktop', blockName ) }`,
				makeCollapsible && initialCollapse ? 'uagb-toc__collapse' : '',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			<div className="uagb-toc__wrap">
				<div className="uagb-toc__title">
					<RichText
						placeholder={ __( 'Table Of Contents', 'ultimate-addons-for-gutenberg' ) }
						value={ headingTitle }
						onChange={ ( value ) => setAttributes( { headingTitle: value } ) }
						multiline={ false }
						onRemove={ () => props.onReplace( [] ) }
					/>
					{ iconHtml }
				</div>
				{ separatorStyle !== 'none' && <div className="uagb-toc__separator"></div> }
				<TableOfContents mappingHeaders={ mappingHeaders } headers={ headers } />
			</div>
		</div>
	);
};

export default memo( Render );
