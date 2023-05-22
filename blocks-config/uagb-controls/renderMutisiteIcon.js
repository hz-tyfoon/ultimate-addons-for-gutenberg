/**
 * Set inline CSS class.
 *
 * @param {Object} props - The block object.
 * @return {Array} The inline CSS class.
 */

function renderMultisiteSVG( icon ) {
    let multisite = uagb_blocks_info.is_multisite
    if ( multisite ) {
        return ( 
            <span class = "uagb-mutisite__svg" data-svg={ icon }></span>
        );
    } else {
        return;
    }
}

export default renderMultisiteSVG;
