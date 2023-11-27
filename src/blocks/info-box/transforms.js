import colourNameToHex from '@Controls/changeColorNameToHex';
import { createBlock } from '@wordpress/blocks';


const transforms = {
    from: [
      {
        type: 'block',
        blocks: ['core/media-text'],
        transform: ( _attributes, innerBlocks ) => {
          const firstInnerBlockAttributes = innerBlocks[0]?.attributes || {};
          const hasTitle = Boolean( firstInnerBlockAttributes.content );
          return createBlock( 'uagb/info-box', {
            source_type: 'image',
            infoBoxTitle: hasTitle ? firstInnerBlockAttributes.content : '',
            headingColor: colourNameToHex( _attributes.textColor ),
            iconImage: { url: _attributes.mediaUrl },
          } );
        },
      },
    ],
  };
  
  export default transforms;
  