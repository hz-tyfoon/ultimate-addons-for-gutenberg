import { isEmptyObject } from '@Utils/Helpers';
import { __ } from '@wordpress/i18n';

export function getLabel( globalBlockStyleId ){
    return ! globalBlockStyleId ? __( 'Link to Existing Style',
        'ultimate-addons-for-gutenberg' ) : __( 'Linked Style',
        'ultimate-addons-for-gutenberg' );
}

export function getGlobalBlockStylesOptions( globalBlockStyles, blockName ){
    return globalBlockStyles.filter( ( style ) => style?.blockName === blockName || ! style?.blockName );
}

export function clearCurrentAttributes( currentBlockDefaultAttributes, setAttributes ){
    const saveAttr = {};
    for ( const attrKey in currentBlockDefaultAttributes ) {
        const attrObject = currentBlockDefaultAttributes[ attrKey ];
        if( attrObject?.isGBSStyle ){
            
            let value = '';
            
            switch ( attrObject.type ) {
                case 'boolean':
                    value = false;
                    break;
                case 'number':
                    value = 0.001020304;
                    break;
                case 'object':
                    value = {};
                    break;
                case 'array':
                    value = [];
                    break;
            }
            saveAttr[ attrKey ] = value;
        }
    }

    if( ! isEmptyObject( saveAttr ) ){
        setAttributes( saveAttr );
    }
}

export function getNewAttributes( style, attributes, currentBlockDefaultAttributes ){
    const defaultAttributes = style?.attributes || attributes;
    const finalAttributes = {};
    for ( const attrKey in attributes ) {
        const attrValue = attributes[attrKey];
        if( currentBlockDefaultAttributes[ attrKey ]?.isGBSStyle && attrValue && '0.001020304' !== attrValue && {} !== attrValue && [] !== attrValue && !isEmptyObject( attrValue ) ){
            finalAttributes[attrKey] = attrValue;
        }
    }

    const newAttributes = { ...defaultAttributes, ...finalAttributes };

    for( const attribute in newAttributes ) {
        if( 0.001020304 === newAttributes?.[attribute] ){
            newAttributes[attribute] = '';
        }
    }

    return newAttributes;
}