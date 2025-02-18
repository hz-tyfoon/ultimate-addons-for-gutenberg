import { createBlock } from '@wordpress/blocks';
import colourNameToHex from '@Controls/changeColorNameToHex';

const transforms = {
    from: [
        {
            type: 'block',
            blocks: ['core/buttons'],
            transform: ( _attributes, innerBlocks ) => {
                let hasWidthFull = false;
                const buttonsArray = [];
                const justifyContent = _attributes?.layout?.justifyContent || 'left';
                innerBlocks.forEach( innerBlock => {		
                    const BlockAttributes = innerBlock.attributes;
                    hasWidthFull = BlockAttributes?.width === 100 ? true : hasWidthFull;
                    const borderRadiusUnit = getUnitDimension( ( typeof BlockAttributes?.style?.border?.radius !== 'object' && BlockAttributes?.style?.border?.radius ) || ( BlockAttributes?.style?.border?.radius?.topRight || BlockAttributes?.style?.border?.radius?.topLeft || BlockAttributes?.style?.border?.radius?.bottomRight || BlockAttributes?.style?.border?.radius?.bottomLeft || '' ) );	
                    const buttonBlock = createBlock( 'uagb/buttons-child', {
                        label: BlockAttributes.text,
                        color: BlockAttributes?.style?.color?.text || colourNameToHex( BlockAttributes.textColor ),
                        background: BlockAttributes?.style?.color?.background || colourNameToHex( BlockAttributes.backgroundColor ) || '',
                        fontWeight: BlockAttributes?.style?.typography?.fontWeight || '',
						size:  getNumber( BlockAttributes?.style?.typography?.fontSize  || '' ),
                        sizeType: getUnit( BlockAttributes?.style?.typography?.letterSpacing || '' ),
                        letterSpacing: getNumber( BlockAttributes?.style?.typography?.letterSpacing || '' ),
						letterSpacingType: getUnit( BlockAttributes?.style?.typography?.letterSpacing || 'px' ),
                        decoration:  BlockAttributes?.style?.typography?.textDecoration || '',
						transform:  BlockAttributes?.style?.typography?.textTransform || '',
						lineHeight: getNumber( BlockAttributes?.style?.typography?.lineHeight || '' ),
                        lineHeightType: 'em' ,
                        borderColor: BlockAttributes?.style?.border?.color || colourNameToHex( BlockAttributes?.borderColor || '' ) || BlockAttributes?.style?.border?.top?.color || colourNameToHex( BlockAttributes?.style?.border?.top?.color || '' ) ,
                        btnBorderTopWidth: getNumber( BlockAttributes?.style?.border?.width || BlockAttributes?.style?.border?.top?.width || '' ),
                        btnBorderBottomWidth: getNumber( BlockAttributes?.style?.border?.width || BlockAttributes?.style?.border?.bottom?.width || '' ),
                        btnBorderLeftWidth: getNumber( BlockAttributes?.style?.border?.width || BlockAttributes?.style?.border?.left?.width || '' ),
                        btnBorderRightWidth: getNumber( BlockAttributes?.style?.border?.width || BlockAttributes?.style?.border?.right?.width || '' ),
                        borderRadius: getNumber( ( typeof BlockAttributes?.style?.border?.radius !== 'object' && BlockAttributes?.style?.border?.radius ) || ( BlockAttributes?.style?.border?.radius?.topRight || '' ) ),
                        leftMargin: getNumber(  BlockAttributes?.style?.spacing?.margin?.left || '' ),
                        bottomMargin: getNumber(  BlockAttributes?.style?.spacing?.margin?.bottom || '' ),
                        rightMargin: getNumber(   BlockAttributes?.style?.spacing?.margin?.right || '' ),
                        topMargin: getNumber(  BlockAttributes?.style?.spacing?.margin?.top || '' ),
                        marginType: getUnit( BlockAttributes?.style?.spacing?.margin?.top || '' ),
                        leftPadding: getNumber( BlockAttributes?.style?.spacing?.padding?.left || '' ),
                        bottomPadding: getNumber( BlockAttributes?.style?.spacing?.padding?.bottom || '' ),
                        rightPadding: getNumber( BlockAttributes?.style?.spacing?.padding?.right || '' ),
                        topPadding: getNumber( BlockAttributes?.style?.spacing?.padding?.top || '' ),
                        paddingUnit: getUnit( BlockAttributes?.style?.spacing?.padding?.top || '' ),
                        borderHColor: '',
                        borderStyle: BlockAttributes?.style?.border?.style || ( ( BlockAttributes?.style?.border?.width || BlockAttributes?.style?.border?.top?.width ) ? ( BlockAttributes?.style?.border?.top?.style || BlockAttributes?.style?.border?.style || 'solid' ) : 'none' ),
                        btnBorderBottomLeftRadius:getNumber( ( typeof BlockAttributes?.style?.border?.radius !== 'object' && BlockAttributes?.style?.border?.radius ) || ( BlockAttributes?.style?.border?.radius?.bottomLeft || '' ) ),
                        btnBorderBottomRightRadius:  getNumber( ( typeof BlockAttributes?.style?.border?.radius !== 'object' && BlockAttributes?.style?.border?.radius ) || ( BlockAttributes?.style?.border?.radius?.bottomRight || '' ) ),
                        btnBorderTopLeftRadius:getNumber( ( typeof BlockAttributes?.style?.border?.radius !== 'object' && BlockAttributes?.style?.border?.radius ) || ( BlockAttributes?.style?.border?.radius?.topLeft || '' ) ),
                        btnBorderTopRightRadius:getNumber( ( typeof BlockAttributes?.style?.border?.radius !== 'object' && BlockAttributes?.style?.border?.radius ) || ( BlockAttributes?.style?.border?.radius?.topRight || '' ) ),
                        btnBorderRadiusUnit: borderRadiusUnit ,
                        link: BlockAttributes?.url || '' ,
                        opensInNewTab: ( BlockAttributes?.linkTarget === '_blank' ) ? true : false,
                    } );
                    buttonsArray.push( buttonBlock );
                } );
                return createBlock( 'uagb/buttons', {
                        fontWeight: _attributes?.style?.typography?.fontWeight || '',
                        fontSize: getNumber( _attributes?.style?.typography?.fontSize || '' ),
						fontLetterSpacing: getNumber( _attributes?.style?.typography?.letterSpacing || '' ),
						fontDecoration: _attributes?.style?.typography?.textDecoration || '',
						fontTransform: _attributes?.style?.typography?.textTransform || '',
						lineHeight: getNumber( _attributes?.style?.typography?.lineHeight || '' ),
                        lineHeightType : 'em',
                        align: hasWidthFull ? 'full' : ( justifyContent === 'space-between' && 'center' ) || justifyContent,
                        gap: convertToPixel( _attributes?.style?.spacing?.blockGap  || '10px' ), 

                }, buttonsArray );
            },
        },
    ],
  };

function convertToPixel( lengthString ) {
    const regex = /\bspacing\s*\|\s*(\d+)\b/;
    const noUnitSlider = lengthString.match( regex );
    if( noUnitSlider ){
        return parseInt( noUnitSlider[1] );
    }
    const match = lengthString.match( /^(\d+(\.\d+)?)\s*(px|rem|em)$/i );
    return match ? parseFloat( match[1] ) * ( match[3].toLowerCase() === 'rem' || match[3].toLowerCase() === 'em' ? 16 : 1 ) : 10;
}

function getNumber( input ) {
    const regex = /\d+(\.\d+)?/;
    const match = input.match( regex );

    if ( match ) {
        const numberString = match[0];
        const isFloat = numberString.includes( '.' );
        return isFloat ? parseFloat( numberString ) : parseInt( numberString, 10 );
    }

    return '' ;
}

function getUnitDimension( input ) {
    const regex = /(px|em|%)$/;
    const match = input.match( regex );
    if ( match ) {
        return match[1];
    }
    return 'px';
}

function getUnit( input ) {
    const regex = /(px|em|rem)/;
    const match = input.match( regex );
    if ( match ) {
        const unit = match[1];
        if ( ['px', 'em'].includes( unit ) ) {
            return unit;
        } else if ( unit === 'rem' ) {
            return 'em';
        }
    }
    return 'px';
}
  
  export default transforms;

  