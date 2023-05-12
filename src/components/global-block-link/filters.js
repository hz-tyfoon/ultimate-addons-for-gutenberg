import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { uagbClassNames } from '@Utils/Helpers';


const addStyleClass = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {

        const {
            className,
            attributes : {
                globalBlockStyleName
            },
        } = props;

        if ( ! globalBlockStyleName || ( globalBlockStyleName && '' === globalBlockStyleName ) ) {
            return <BlockListBlock {...props} />;
        }

        const styleNameClass = globalBlockStyleName?.replace( /\s+/g, '-' )?.toLowerCase();

		return (
			<BlockListBlock
				{ ...props }
				className={ uagbClassNames( [
                    className,
                    `spectra-gbs-${styleNameClass}`,
                ] ) }
			/>
		);
	};
}, 'addStyleClass' );

addFilter( 'editor.BlockListBlock', 'spectra/gbs-class-editor', addStyleClass );