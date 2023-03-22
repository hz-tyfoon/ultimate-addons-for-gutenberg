const getGBSEditorStyles = ( globalBlockStyles, globalBlockStyleId, globalBlockStyleName ) => {
    if ( ! globalBlockStyles || ! globalBlockStyleId || globalBlockStyles[Symbol.iterator] !== 'function' ) {
        return '';
    }
    let editorStyles = '';
    for ( const style of globalBlockStyles ) {
        if ( style?.value === globalBlockStyleId && style?.label === globalBlockStyleName ) {
            editorStyles = style?.editorStyles
            break;
        }
    }
    return editorStyles;
};

export default getGBSEditorStyles;