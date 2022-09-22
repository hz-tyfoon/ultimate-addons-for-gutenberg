import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	const deviceType = useDeviceType();
	const { attributes, isSelected, className } = props;

	const {
		isPreview,
		align,
		contentWidth,
		tag,
		backgroundType,
		backgroundVideo,
	} = attributes;

	const CustomTag = `${ tag }`;

	const active = isSelected ? 'active' : 'not-active';

	let blockControlsClass = '';
	if ( 'full_width' === contentWidth ) {
		if ( align === 'wide' || align === 'full' ) {
			blockControlsClass = 'align' + align;
		}
	}
	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/advanced-row.png`;
	return (
		<>
		{ isPreview ? <img width='100%' src={previewImageData} alt=''/> :
			<CustomTag
				className={ classnames(
					className,
					'uagb-section__wrap',
					`uagb-section__background-${ backgroundType }`,
					`uagb-section__edit-${ active }`,
					blockControlsClass,
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ props.clientId.substr( 0, 8 ) }`
				) }
			>
				<div className="uagb-section__overlay"></div>
				{ 'video' === backgroundType && (
					<div className="uagb-section__video-wrap">
						{ backgroundVideo && (
							<video autoPlay loop muted playsinline>
								<source
									src={ backgroundVideo.url }
									type="video/mp4"
								/>
							</video>
						) }
					</div>
				) }
				<div className="uagb-section__inner-wrap">
					<InnerBlocks templateLock={ false } />
				</div>
			</CustomTag>
}
		</>
	);
};

export default React.memo( Render );
