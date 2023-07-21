import { useBlockProps } from '@wordpress/block-editor';
import { memo } from '@wordpress/element';

const Render = ( props ) => {

	props = props.parentProps;
	const { attributes: { block_id } } = props;

	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id } uagb-slider-prototype-editor-wrap uagb-editor-preview-mode-desktop`,
	} );

	return (
		<div className="spectra-glide glide">
			<div className="glide__track" data-glide-el="track">
				<div className="glide__slides">
					<div className="glide__slide spectra-glide__slide--1"></div>
					<div className="glide__slide spectra-glide__slide--2"></div>
					<div className="glide__slide spectra-glide__slide--3"></div>
					<div className="glide__slide spectra-glide__slide--4"></div>
					<div className="glide__slide spectra-glide__slide--5"></div>
					<div className="glide__slide spectra-glide__slide--6"></div>
					<div className="glide__slide spectra-glide__slide--7"></div>
				</div>
			</div>
		</div>
	);
};
export default memo( Render );
