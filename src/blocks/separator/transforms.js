import { createBlock } from '@wordpress/blocks';
import colourNameToHex from '@Controls/changeColorNameToHex';

export { colourNameToHex, createBlock };

const transforms = {
    from: [
        {
            type: 'block',
            blocks: ['core/spacer'],
            transform: ( _attributes ) => {
                return createBlock( 'uagb/separator', {
                    separatorHeight: parseInt( _attributes.height ) / 2,
                } );
            },
        },
        {
            type: 'block',
            blocks: ['core/separator'],
            transform: ( _attributes ) => {
                const sepStyle = ( _attributes.className === 'is-style-dots' ) ? 'dotted':'solid';
                
                return createBlock( 'uagb/separator', {
                    separatorColor: colourNameToHex( _attributes.backgroundColor ),
                    separatorStyle:sepStyle,
                } );
            },
        },
        {
            type: 'block',
            blocks: ['core/nextpage'],
            transform: ( {} ) => {
                return createBlock( 'uagb/separator', {} );
            },
        },
    ],
};

export default transforms;
