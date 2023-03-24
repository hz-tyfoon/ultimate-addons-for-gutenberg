import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { applyFilters } from '@wordpress/hooks';

const loadBlockEditorStyles = ( props, styling ) => {
    
    const {
        clientId,
        name,
        attributes,
        attributes: {
            loadOnlyDefaultStyles
        }
    } = props;

    let defaultAttributes = applyFilters( 'uagb.blocksAttributes', blocksAttributes );
    const blockName = name.split( '/' ).pop();
    defaultAttributes = defaultAttributes[blockName]
    const defaultProps = {...props};
    const dynamicProps = {...props};

    const defaults = {};
    const dynamics = {};

    for ( const attribute in attributes ) {
        if ( defaultAttributes?.[attribute] && defaultAttributes?.[attribute] ) {
            if ( defaultAttributes?.[attribute]?.hasOwnProperty( 'default' ) && defaultAttributes?.[attribute]?.default === attributes?.[attribute] ) {
                defaults[attribute] = defaultAttributes?.[attribute]?.default;
            } else {
                dynamics[attribute] = attributes?.[attribute];
            }
        } 
    }
    defaultProps.attributes = {
        ...defaults
    };
    dynamicProps.attributes = {
        ...defaults,
        ...dynamics
    };
    
    const defaultStyling = styling( defaultProps, '.wp-block-uagb-container' );
    const dynamicStyling = styling( dynamicProps );
    
    if ( loadOnlyDefaultStyles ) {
        addBlockEditorDynamicStyles( 'uagb-container-default', defaultStyling );
    } else {
        addBlockEditorDynamicStyles( 'uagb-container-style-' + clientId.substr( 0, 8 ), dynamicStyling );
    }
};

export default loadBlockEditorStyles;