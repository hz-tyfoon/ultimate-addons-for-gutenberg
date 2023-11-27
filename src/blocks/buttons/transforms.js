import { createBlock } from '@wordpress/blocks';
import colourNameToHex from '@Controls/changeColorNameToHex';

const transforms = {
    from: [
        {
            type: 'block',
            blocks: ['core/buttons'],
            transform: ( _attributes, innerBlocks ) => {
                const buttonsArray = [];
                innerBlocks.forEach( innerBlock => {		
                    const BlockAttributes = innerBlock.attributes;	
                    const buttonBlock = createBlock( 'uagb/buttons-child', {
                        label: BlockAttributes.text,
                        color:colourNameToHex( BlockAttributes.textColor ),
                        background:colourNameToHex( BlockAttributes.backgroundColor ),
                        fontWeight: BlockAttributes?.style?.typography?.fontWeight || '',
						size: parseInt( BlockAttributes?.style?.typography?.fontSize || '' ),
                        borderRadius:parseInt( BlockAttributes?.style?.border?.radius || '' ),
                    } );
                    buttonsArray.push( buttonBlock );
                } );
                return createBlock( 'uagb/buttons', {}, buttonsArray );
            },
        },
    ],
  };
  
  export default transforms;

  