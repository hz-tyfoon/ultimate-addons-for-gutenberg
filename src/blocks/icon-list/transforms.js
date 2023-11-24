import colourNameToHex from '@Controls/changeColorNameToHex';
import { createBlock } from '@wordpress/blocks';

const transforms = {
    from: [
        {
            type: 'block',
            blocks: ['core/list'],
            transform: ( _attributes, childBlocks ) => {
                const iconListChildBlocks = childBlocks.map( ( listItem ) => {
                    return createBlock( 'uagb/icon-list-child', {
                        label: listItem.attributes.content,
                        label_color: colourNameToHex( _attributes.textColor ),
                    } );
                } );

                return createBlock( 'uagb/icon-list', {}, iconListChildBlocks );
            },
        },
    ],
};

export default transforms;
