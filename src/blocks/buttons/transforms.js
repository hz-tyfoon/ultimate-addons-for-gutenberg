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
                    const buttonText = innerBlock.attributes.text;
                    const buttonBlock = createBlock( 'uagb/buttons-child', {
                        label: buttonText,
                        color:colourNameToHex( innerBlock.attributes.textColor ),
                        background:colourNameToHex( innerBlock.attributes.backgroundColor ),
                    } );
                    buttonsArray.push( buttonBlock );
                } );
                return createBlock( 'uagb/buttons', {}, buttonsArray );
            },
        },
    ],
  };
  
  export default transforms;

  